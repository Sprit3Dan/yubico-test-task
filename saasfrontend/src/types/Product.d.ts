/**
 * {@link Product} is an API-retrieved entity.
 * All fields are considered optional except for product_id of {@type string},
 * which is assumed to be a PK.
 */
declare interface Product {
    product_id: number;
    product_name?: string;
    is_available?: boolean;
}
