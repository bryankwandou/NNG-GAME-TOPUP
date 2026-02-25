-- Migration: Add Phase F/G tables (ProductPricing, SupplierPanel, SupplierPanelProduct, OrderFlowSession, AuditTrail)
-- Date: 2025-12-08

-- ============================================
-- PRODUCT PRICING VERSIONING (Phase G.1)
-- ============================================

CREATE TYPE "ProductPricingReason" AS ENUM (
  'INITIAL',
  'SUPPLIER_INCREASE',
  'SUPPLIER_DECREASE',
  'BULK_DISCOUNT',
  'PROMOTIONAL',
  'MARGIN_ADJUSTMENT',
  'TAX_ADJUSTMENT',
  'COST_ALLOCATION_CHANGE'
);

CREATE TABLE "ProductPricing" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "productId" TEXT NOT NULL,
  "denomination" INTEGER NOT NULL DEFAULT 1,
  "supplierPrice" BIGINT NOT NULL,
  "effectiveFrom" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "effectiveTo" TIMESTAMP(3),
  "reason" "ProductPricingReason" NOT NULL DEFAULT 'INITIAL',
  "notes" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "ProductPricing_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "ProductPricing_productId_denomination_effectiveFrom_idx" ON "ProductPricing"("productId", "denomination", "effectiveFrom");
CREATE INDEX "ProductPricing_effectiveFrom_effectiveTo_idx" ON "ProductPricing"("effectiveFrom", "effectiveTo");

-- ============================================
-- SUPPLIER PANEL MANAGEMENT (Phase G.2)
-- ============================================

CREATE TYPE "SupplierHealthStatus" AS ENUM (
  'HEALTHY',
  'DEGRADED',
  'DOWN',
  'UNKNOWN'
);

CREATE TABLE "SupplierPanel" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "name" TEXT NOT NULL UNIQUE,
  "apiUrl" TEXT NOT NULL,
  "apiKey" TEXT NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "priority" INTEGER NOT NULL DEFAULT 1,
  "healthStatus" "SupplierHealthStatus" NOT NULL DEFAULT 'UNKNOWN',
  "lastHealthCheck" TIMESTAMP(3),
  "successRate" DOUBLE PRECISION NOT NULL DEFAULT 1.0,
  "avgResponseTimeMs" INTEGER NOT NULL DEFAULT 0,
  "totalRequests" INTEGER NOT NULL DEFAULT 0,
  "totalSuccesses" INTEGER NOT NULL DEFAULT 0,
  "totalFailures" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SupplierPanel_apiKey_unique" UNIQUE("apiKey")
);

CREATE INDEX "SupplierPanel_isActive_priority_idx" ON "SupplierPanel"("isActive", "priority");
CREATE INDEX "SupplierPanel_healthStatus_idx" ON "SupplierPanel"("healthStatus");

-- ============================================
-- SUPPLIER PANEL PRODUCT MAPPING
-- ============================================

CREATE TABLE "SupplierPanelProduct" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "panelId" TEXT NOT NULL,
  "productCode" TEXT NOT NULL,
  "isAvailable" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "SupplierPanelProduct_panelId_fkey" FOREIGN KEY ("panelId") REFERENCES "SupplierPanel" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "SupplierPanelProduct_panelId_productCode_unique" UNIQUE("panelId", "productCode")
);

CREATE INDEX "SupplierPanelProduct_panelId_idx" ON "SupplierPanelProduct"("panelId");
CREATE INDEX "SupplierPanelProduct_productCode_idx" ON "SupplierPanelProduct"("productCode");

-- ============================================
-- ORDER FLOW SESSION STATE (Phase F.1)
-- ============================================

CREATE TYPE "OrderFlowStep" AS ENUM (
  'CHOOSE_GAME',
  'CHOOSE_DENOMINATION',
  'ENTER_UID',
  'REVIEW',
  'COMPLETE'
);

CREATE TABLE "OrderFlowSession" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "platform" TEXT NOT NULL,
  "currentStep" "OrderFlowStep" NOT NULL DEFAULT 'CHOOSE_GAME',
  "selectedGame" TEXT,
  "selectedDenomination" INTEGER,
  "selectedUid" TEXT,
  "selectedPrice" BIGINT,
  "confirmationCode" TEXT,
  "sessionData" JSONB,
  "expiresAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL
);

CREATE INDEX "OrderFlowSession_userId_platform_idx" ON "OrderFlowSession"("userId", "platform");
CREATE INDEX "OrderFlowSession_expiresAt_idx" ON "OrderFlowSession"("expiresAt");

-- ============================================
-- COMPREHENSIVE AUDIT TRAIL (Phase G.5)
-- ============================================

CREATE TYPE "AuditEventType" AS ENUM (
  'PRICE_CHANGE',
  'MARGIN_ADJUSTMENT',
  'ORDER_REFUND',
  'RESELLER_TIER_CHANGE',
  'DEPOSIT_CREATED',
  'BALANCE_ADJUSTMENT',
  'SUPPLIER_HEALTH_CHANGE',
  'ADMIN_OVERRIDE',
  'ORDER_CREATED',
  'ORDER_COMPLETED',
  'ORDER_FAILED'
);

CREATE TABLE "AuditTrail" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "eventType" "AuditEventType" NOT NULL,
  "actorId" TEXT NOT NULL,
  "actorRole" TEXT NOT NULL,
  "resourceType" TEXT NOT NULL,
  "resourceId" TEXT NOT NULL,
  "changes" JSONB,
  "reason" TEXT,
  "ipAddress" TEXT,
  "userAgent" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "AuditTrail_resourceType_resourceId_createdAt_idx" ON "AuditTrail"("resourceType", "resourceId", "createdAt");
CREATE INDEX "AuditTrail_actorId_createdAt_idx" ON "AuditTrail"("actorId", "createdAt");
CREATE INDEX "AuditTrail_eventType_createdAt_idx" ON "AuditTrail"("eventType", "createdAt");

-- ============================================
-- HEALTH CHECK METRICS (Phase G.2)
-- ============================================

CREATE TABLE "SupplierHealthMetric" (
  "id" TEXT NOT NULL PRIMARY KEY,
  "panelId" TEXT NOT NULL,
  "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "responseTimeMs" INTEGER NOT NULL,
  "isHealthy" BOOLEAN NOT NULL,
  "errorMessage" TEXT,
  CONSTRAINT "SupplierHealthMetric_panelId_fkey" FOREIGN KEY ("panelId") REFERENCES "SupplierPanel" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE INDEX "SupplierHealthMetric_panelId_timestamp_idx" ON "SupplierHealthMetric"("panelId", "timestamp");
CREATE INDEX "SupplierHealthMetric_timestamp_idx" ON "SupplierHealthMetric"("timestamp");

-- ============================================
-- ORDER TABLE UPDATES
-- ============================================

-- Add columns to Order table if they don't exist
ALTER TABLE "Order" 
ADD COLUMN IF NOT EXISTS "supplierId" TEXT,
ADD COLUMN IF NOT EXISTS "supplierPricingId" TEXT,
ADD COLUMN IF NOT EXISTS "metadata" JSONB DEFAULT '{}';

-- Add indexes for new columns
CREATE INDEX IF NOT EXISTS "Order_supplierId_idx" ON "Order"("supplierId");
CREATE INDEX IF NOT EXISTS "Order_supplierPricingId_idx" ON "Order"("supplierPricingId");
