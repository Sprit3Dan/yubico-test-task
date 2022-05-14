import { render, RenderResult, screen } from "@testing-library/react";
import { createMemoryHistory, MemoryHistory } from "history";
import { act } from "react-dom/test-utils";
import { Router, Route, Routes } from "react-router-dom";

import WithProducts, { ProductsContext } from "./WithProducts";

const MOCK_PRODUCTS: Product[] = [
    { product_id: 1 },
    { product_id: 2 },
    { product_id: 3 },
    { product_id: 1 },
];

describe("WithProducts HOC", () => {
    it("should retrieve products", () => {
        const fetchSpy = jest.fn().mockReturnValue(Promise.reject());

        render(<WithProducts boundFetch={fetchSpy}>{}</WithProducts>);

        expect(fetchSpy).toHaveBeenCalledWith("http://localhost/products.json");
    });

    it("should deduplicate products", async () => {
        const fetchSpy = jest.fn().mockReturnValue(
            Promise.resolve({
                json: () =>
                    Promise.resolve({
                        products: MOCK_PRODUCTS,
                    }),
            }),
        );

        await act(async () => {
            render(
                <WithProducts boundFetch={fetchSpy}>
                    <ProductsContext.Consumer>
                        {products => (
                            <div data-testid="anchor">
                                {products.reduce(
                                    (acc, next) => (acc += next.product_id),
                                    "",
                                )}
                            </div>
                        )}
                    </ProductsContext.Consumer>
                </WithProducts>,
            );
        });

        expect(screen.getByText(123)).toBeTruthy();
    });
});
