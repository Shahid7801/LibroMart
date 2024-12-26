import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice';

const CartPage = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const totalPrice = cartItems.reduce((acc, item) => acc + item.newPrice, 0).toFixed(2);

    const handleRemoveFromCart = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="flex flex-col  bg-gradient-to-br from-gray-50 to-gray-200 md:w-4/5 mx-auto rounded-md shadow-2xl w-3/4 border-2 mt-28">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#561847] text-white rounded-t-md">
                <h2 className="text-lg md:text-2xl font-bold">Cart Items</h2>
                <button
                    type="button"
                    onClick={handleClearCart}
                    className="py-1 px-4 bg-gray-900 hover:bg-red-100 hover:text-black rounded-md font-semibold hidden md:block"
                >
                    Clear Cart
                </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
                {cartItems.length > 0 ? (
                    <ul role="list" className="space-y-6">
                        {cartItems.map((product) => (
                            <li key={product?._id} className="flex flex-col md:flex-row items-center gap-6 bg-white p-4 rounded-md shadow-lg">
                                {/* Product Image */}
                                <div className="h-24 w-24 rounded-md overflow-hidden border">
                                    <img
                                        alt={product?.title}
                                        src={`${getImgUrl(product?.coverImage)}`}
                                        className="h-full w-full object-cover"
                                    />
                                </div>

                                {/* Product Details */}
                                <div className="flex flex-col md:flex-1">
                                    <h3 className="text-lg font-bold text-gray-800">
                                        <Link to="/" className="hover:text-[#583eff] transition">
                                            {product?.title}
                                        </Link>
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1 capitalize">
                                        <strong>Category:</strong> {product?.category}
                                    </p>
                                    <div className="flex justify-between items-center mt-4">
                                        <p className="text-gray-600">
                                            <strong>Price:</strong> ₹{product?.newPrice}
                                        </p>
                                        <button
                                            onClick={() => handleRemoveFromCart(product)}
                                            className="text-red-600 hover:underline text-sm"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-lg font-semibold text-gray-500">No products in the cart!</p>
                )}
            </div>

            {/* Subtotal Section */}
            <div className="border-t bg-white px-6 py-6">
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                    <p>Subtotal</p>
                    <p>₹{totalPrice ? totalPrice : '0.00'}</p>
                </div>
                <p className="text-sm text-gray-500 mt-2">Shipping and taxes calculated at checkout.</p>
                <div className="mt-4">
                    <Link
                        to="/checkout"
                        className="flex items-center justify-center w-full px-6 py-3 bg-[#3e0c36] text-white font-bold rounded-lg hover:bg-[#233969] transition duration-200"
                    >
                        Checkout
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/" className="text-sm text-gray-500">
                        or{' '}
                        <span className="font-bold text-[#3e51ff] hover:text-indigo-600 transition">
                            Continue Shopping →
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
