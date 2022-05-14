import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Root, ProductDetails } from "./routes";
import "./App.css";

/**
 * {@link App} component performs as a root component for application,
 * setting up browser router and specifying available routes.
 */
const App: React.FC<{}> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Root />}>
                    <Route
                        path="/products/:productId"
                        element={<ProductDetails />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
