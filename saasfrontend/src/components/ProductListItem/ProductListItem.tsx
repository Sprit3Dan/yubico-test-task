import React from "react";
import { Link } from "react-router-dom";

import "./ProductListItem.css";

interface ProductProps {
    product: Product;
}

const getProductListItemUrl = (productId: number) => {
    return `products/${productId.toString()}`;
};

/**
 * {@link ProductListItem} view component renders a single Product list item
 * according to provided {@link Product} object.
 */
const ProductListItem: React.FunctionComponent<ProductProps> = (
    p: ProductProps,
) => {
    const { product_id, product_name } = p.product;

    return (
        <div className="product-item-wrapper">
            <Link
                to={getProductListItemUrl(product_id)}
                className={`product-item-wrapper`}
            >
                {product_name || product_id}
            </Link>
        </div>
    );
};

export default ProductListItem;
