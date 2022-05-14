import { render, RenderResult, screen } from "@testing-library/react";
import ProductDetails from "./ProductDetails";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router, Route, Routes } from "react-router-dom";
import { ProductsContext } from "../../components";

const renderProductDetailsTestWrapper = (
    products: Product[],
    selectedProductId: string = "",
): {
    renderResult: RenderResult;
    history: MemoryHistory;
} => {
    const history = createMemoryHistory({
        initialEntries: [`/product/${selectedProductId}`],
    });

    const renderResult = render(
        <ProductsContext.Provider value={products}>
            <Router location={history.location} navigator={history}>
                <Routes>
                    <Route
                        path="/product/:productId"
                        element={<ProductDetails />}
                    />
                </Routes>
            </Router>
        </ProductsContext.Provider>,
    );
    return { renderResult, history };
};

const MOCK_PRODUCTS: Product[] = [
    {
        product_id: 1,
        product_name: "abc",
    },
];

describe("ProductDetails component", () => {
    test("should redirect to / if product not resolved", () => {
        const { history } = renderProductDetailsTestWrapper([], "123");

        expect(history.location.pathname).toBe("/");
    });

    test("should render title if product resolved", () => {
        renderProductDetailsTestWrapper(MOCK_PRODUCTS, "1");

        expect(screen.getByText("abc")).toBeTruthy();
    });
});
