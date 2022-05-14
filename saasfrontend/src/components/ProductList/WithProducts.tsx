import React, { useCallback, useEffect, useState } from "react";

interface WithProductsProps {
    boundFetch: typeof fetch;
    children: React.ReactNode;
}

/**
 * {@link ProductsContext} provides retrieved products for later consumption
 * by components.
 */
const ProductsContext = React.createContext<ReadonlyArray<Product>>([]);

/**
 * {@link PRODUCTS_API_PATH} specifies API location, where to retrieve products
 * from.
 */
const PRODUCTS_API_PATH = `${document.location.origin}/products.json`;

/**
 * {@link WithProducs} HOC makes API call to retrieve products, performs
 * deduplication logic and stores them in {@link ProductsContext}, making
 * available for underlying components.
 *
 * Receives {@link WithProductsProps} props interface, accepting window-bound
 * fetch API (for testing purposes) and nested components to make context data
 * available to.
 */
const WithProducts: React.FC<WithProductsProps> = (p: WithProductsProps) => {
    const [products, setProducts] = useState<Array<Product>>([]);

    const retrieveProducts = useCallback(async () => {
        const resp = await p.boundFetch(PRODUCTS_API_PATH);
        const { products } = await resp.json();
        const distinctProducts = new Map(
            products.map((product: Product) => [product.product_id, product]),
        ).values() as IterableIterator<Product>;

        setProducts(Array.from(distinctProducts));
    }, [p]);

    useEffect(() => {
        retrieveProducts().catch(console.error);
    }, [retrieveProducts]);

    return (
        <ProductsContext.Provider value={products}>
            {p.children}
        </ProductsContext.Provider>
    );
};

export default WithProducts;
export { ProductsContext };
