import React from "react";
import useProducts from "../Hooks/useProducts";
import useCart from "../Hooks/useCart";

const OrderReview = () => {
	const [products, setProducts] = useProducts();
	const [cart] = useCart(products);
	return (
		<div>
			<h1>Products length: {products.length}</h1>
			<h1>Cart length: {cart.length}</h1>
			<h2>This is Order Review</h2>
		</div>
	);
};

export default OrderReview;
