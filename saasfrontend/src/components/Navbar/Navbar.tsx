import React, { useContext } from "react";
import "./Navbar.css";
import { ProductsContext, ProductList } from "../";

/** {@link Navbar} component renders a list of products. */
const Navbar: React.FC<{}> = () => {
    const products = useContext(ProductsContext);
    return (
        <div className="navbar-wrapper">
            <ProductList products={products}></ProductList>
        </div>
    );
};

export default Navbar;
