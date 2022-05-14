import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar, Header, WithProducts } from "../../components";
import "./Root.css";

/**
 * Root route renders general layout, provides outlet to nested routes.
 */
const Root: React.FC<{}> = () => {
    return (
        <div className="root-wrapper">
            <WithProducts boundFetch={fetch.bind(window)}>
                <Navbar />
                <div className="main-content-wrapper">
                    <Header />
                    <Outlet />
                </div>
            </WithProducts>
        </div>
    );
};

export default Root;
