import React from "react";
import Cart from "../Cart/Cart";
import useCart from "../Hooks/useCart";
import useProducts from "../Hooks/useProducts";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
	const [products, setProducts] = useProducts();
	const [cart] = useCart(products);
	return (
		<div className="shop-container">
			<div className="product-container">
				{cart.map((product) => (
					<ReviewItem key={product.key} product={product}></ReviewItem>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default OrderReview;
