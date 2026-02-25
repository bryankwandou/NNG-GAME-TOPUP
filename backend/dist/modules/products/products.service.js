"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = getAllProducts;
exports.getProductByCode = getProductByCode;
exports.getProductsByGame = getProductsByGame;
exports.createProduct = createProduct;
exports.updateProduct = updateProduct;
exports.deactivateProduct = deactivateProduct;
const logger_1 = require("../../config/logger");
const database_1 = require("../../config/database");
/**
 * Get all active products
 */
async function getAllProducts() {
    try {
        const products = await database_1.prisma.product.findMany({
            where: { active: true },
            orderBy: { gameName: 'asc' }
        });
        return products;
    }
    catch (error) {
        logger_1.logger.error('Error fetching products', { error });
        throw new Error('Failed to fetch products');
    }
}
/**
 * Get product by code
 */
async function getProductByCode(code) {
    try {
        const product = await database_1.prisma.product.findUnique({
            where: { code }
        });
        return product;
    }
    catch (error) {
        logger_1.logger.error('Error fetching product by code', { code, error });
        throw new Error('Failed to fetch product');
    }
}
/**
 * Get products by game name
 */
async function getProductsByGame(gameName) {
    try {
        const products = await database_1.prisma.product.findMany({
            where: {
                gameName: { contains: gameName, mode: 'insensitive' },
                active: true
            }
        });
        return products;
    }
    catch (error) {
        logger_1.logger.error('Error fetching products by game', { gameName, error });
        throw new Error('Failed to fetch products');
    }
}
/**
 * Create new product (admin only)
 */
async function createProduct(data) {
    try {
        const product = await database_1.prisma.product.create({
            data: {
                ...data,
                active: true
            }
        });
        logger_1.logger.info('Product created', { productId: product.id, code: data.code });
        return product;
    }
    catch (error) {
        logger_1.logger.error('Error creating product', { data, error });
        throw new Error('Failed to create product');
    }
}
/**
 * Update product (admin only)
 */
async function updateProduct(id, data) {
    try {
        const product = await database_1.prisma.product.update({
            where: { id },
            data
        });
        logger_1.logger.info('Product updated', { productId: id });
        return product;
    }
    catch (error) {
        logger_1.logger.error('Error updating product', { id, error });
        throw new Error('Failed to update product');
    }
}
/**
 * Deactivate product (admin only)
 */
async function deactivateProduct(id) {
    try {
        await database_1.prisma.product.update({
            where: { id },
            data: { active: false }
        });
        logger_1.logger.info('Product deactivated', { productId: id });
    }
    catch (error) {
        logger_1.logger.error('Error deactivating product', { id, error });
        throw new Error('Failed to deactivate product');
    }
}
//# sourceMappingURL=products.service.js.map