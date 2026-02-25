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
export declare function getAllProducts(): Promise<ProductDTO[]>;
/**
 * Get product by code
 */
export declare function getProductByCode(code: string): Promise<ProductDTO | null>;
/**
 * Get products by game name
 */
export declare function getProductsByGame(gameName: string): Promise<ProductDTO[]>;
/**
 * Create new product (admin only)
 */
export declare function createProduct(data: {
    code: string;
    gameName: string;
    displayName: string;
    costPrice: number;
    baseMarkup: number;
}): Promise<ProductDTO>;
/**
 * Update product (admin only)
 */
export declare function updateProduct(id: string, data: Partial<Omit<ProductDTO, 'id'>>): Promise<ProductDTO>;
/**
 * Deactivate product (admin only)
 */
export declare function deactivateProduct(id: string): Promise<void>;
//# sourceMappingURL=products.service.d.ts.map