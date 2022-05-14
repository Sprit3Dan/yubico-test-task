import React from "react";
import { ProductListItem } from "../";

import "./ProductList.css";

interface ProductListProps {
    products: ReadonlyArray<Product>;
}

/**
 * {@link ProductList} component renders provided products into individual
 * {@link ProductListItem} components. Keeps track of them according to
 * product_id PK.
 *
 * Accepts {@link ProductListProps} interface with an array of products to
 * render.
 */
const ProductList: React.FC<ProductListProps> = (p: ProductListProps) => {
    return (
        <div className="product-list-wrapper">
            {(p.products || []).map(product => (
                <ProductListItem product={product} key={product.product_id} />
            ))}
        </div>
    );
};

export default ProductList;
