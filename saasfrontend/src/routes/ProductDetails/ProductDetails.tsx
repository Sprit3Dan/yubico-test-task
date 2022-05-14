import React, { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";

import { ProductsContext } from "../../components";

/**
 * ProductDetails route renders information regarding currently selected
 * product. Redirects to "/" if selected productId is not matched to any
 * product.
 */
const ProductDetails: React.FC<{}> = () => {
    const { productId } = useParams();
    const products = useContext(ProductsContext);
    const activeProduct = products.find(
        p => p.product_id.toString() === productId,
    );

    if (!activeProduct) {
        return Navigate({ to: "/", replace: true });
    }

    return (
        <>
            <h2>{activeProduct.product_name || activeProduct.product_id}</h2>
        </>
    );
};

export default ProductDetails;
