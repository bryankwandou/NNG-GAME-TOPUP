import { logger } from '../../config/logger';
import { prisma } from '../../config/database';

export interface ProductDTO {
  id: string;
  code: string;
  gameName: string;
  displayName: string;
  costPrice: bigint;
  baseMarkup: bigint;
  active: boolean;
}

/**
 * Get all active products
 */
export async function getAllProducts(): Promise<ProductDTO[]> {
  try {
    const products = await prisma.product.findMany({
      where: { active: true },
      orderBy: { gameName: 'asc' }
    });
    return products;
  } catch (error) {
    logger.error('Error fetching products', { error });
    throw new Error('Failed to fetch products');
  }
}

/**
 * Get product by code
 */
export async function getProductByCode(code: string): Promise<ProductDTO | null> {
  try {
    const product = await prisma.product.findUnique({
      where: { code }
    });
    return product;
  } catch (error) {
    logger.error('Error fetching product by code', { code, error });
    throw new Error('Failed to fetch product');
  }
}

/**
 * Get products by game name
 */
export async function getProductsByGame(gameName: string): Promise<ProductDTO[]> {
  try {
    const products = await prisma.product.findMany({
      where: {
        gameName: { contains: gameName, mode: 'insensitive' },
        active: true
      }
    });
    return products;
  } catch (error) {
    logger.error('Error fetching products by game', { gameName, error });
    throw new Error('Failed to fetch products');
  }
}

/**
 * Create new product (admin only)
 */
export async function createProduct(data: {
  code: string;
  gameName: string;
  displayName: string;
  costPrice: number;
  baseMarkup: number;
}): Promise<ProductDTO> {
  try {
    const product = await prisma.product.create({
      data: {
        ...data,
        active: true
      }
    });
    logger.info('Product created', { productId: product.id, code: data.code });
    return product;
  } catch (error) {
    logger.error('Error creating product', { data, error });
    throw new Error('Failed to create product');
  }
}

/**
 * Update product (admin only)
 */
export async function updateProduct(
  id: string,
  data: Partial<Omit<ProductDTO, 'id'>>
): Promise<ProductDTO> {
  try {
    const product = await prisma.product.update({
      where: { id },
      data
    });
    logger.info('Product updated', { productId: id });
    return product;
  } catch (error) {
    logger.error('Error updating product', { id, error });
    throw new Error('Failed to update product');
  }
}

/**
 * Deactivate product (admin only)
 */
export async function deactivateProduct(id: string): Promise<void> {
  try {
    await prisma.product.update({
      where: { id },
      data: { active: false }
    });
    logger.info('Product deactivated', { productId: id });
  } catch (error) {
    logger.error('Error deactivating product', { id, error });
    throw new Error('Failed to deactivate product');
  }
}
