
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Swal from 'sweetalert2';
import { useCreateOrderMutation } from '../../redux/features/orders/ordersApi';

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/payment", { state: { totalAmount: totalPrice } });
  };

  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (data) => {
    const newOrder = {
      name: data.name,
      email: currentUser?.email,
      address: {
        city: data.city,
        country: data.country,
        state: data.state,
        zipcode: data.zipcode,
      },
      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };

    try {
      await createOrder(newOrder).unwrap();
      Swal.fire({
        title: 'Confirmed Order',
        text: 'Your order placed successfully!',
        icon: 'success',
        confirmButtonText: 'Okay',
      });
      navigate('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
      Swal.fire({
        title: 'Order Failed',
        text: 'There was an issue placing your order. Please try again.',
        icon: 'error',
      });
    }
  };

  if (isLoading) return <div className="text-center">Loading...</div>;

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="font-semibold text-xl md:text-2xl text-gray-700">
              Cash On Delivery
            </h2>
            <p className="text-gray-500">
              Total Price: <span className="font-bold">Rs. {totalPrice}</span>
            </p>
            <p className="text-gray-500">
              Items: <span className="font-bold">{cartItems.length || 0}</span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div className="sm:col-span-2 lg:col-span-3">
              <p className="text-center bg-black text-[#ff763e] rounded-md py-4 text-lg md:text-xl font-semibold">
                PERSONAL DETAILS
                <br />
                <span className="text-sm text-[#c09d8f]">
                  Please fill out all fields.
                </span>
              </p>
            </div>
            <div className="col-span-full">
              <label htmlFor="name" className="block text-gray-700">
                Full Name
              </label>
              <input
                {...register('name', { required: true })}
                type="text"
                id="name"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="email" className="block text-gray-700">
                Email Address
              </label>
              <input
                type="text"
                id="email"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
                disabled
                defaultValue={currentUser?.email}
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="phone" className="block text-gray-700">
                Phone Number
              </label>
              <input
                {...register('phone', { required: true })}
                type="number"
                id="phone"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-gray-700">
                Address / Street
              </label>
              <input
                {...register('address', { required: true })}
                type="text"
                id="address"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-gray-700">
                City
              </label>
              <input
                {...register('city', { required: true })}
                type="text"
                id="city"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-gray-700">
                State / Province
              </label>
              <input
                {...register('state', { required: true })}
                type="text"
                id="state"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label htmlFor="country" className="block text-gray-700">
                Country
              </label>
              <input
                {...register('country', { required: true })}
                type="text"
                id="country"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
              />
            </div>
            <div>
              <label htmlFor="zipcode" className="block text-gray-700">
                Zipcode
              </label>
              <input
                {...register('zipcode', { required: true })}
                type="text"
                id="zipcode"
                className="w-full mt-1 border rounded px-4 py-2 bg-gray-50"
              />
            </div>
            <div className="col-span-full flex items-center">
              <input
                type="checkbox"
                id="terms"
                onChange={(e) => setIsChecked(e.target.checked)}
                className="form-checkbox"
              />
              <label htmlFor="terms" className="ml-2 text-gray-600">
                I agree to the{' '}
                <Link
                  to="/terms"
                  className="underline text-[#ff763e] hover:text-black"
                >
                  Terms & Conditions
                </Link>{' '}
                and{' '}
                <Link
                  to="/policy"
                  className="underline text-[#ff763e] hover:text-black"
                >
                  Shopping Policy
                </Link>
                .
              </label>
            </div>
            <div className="col-span-full text-right">
<button onClick={handlePayment}    disabled={!isChecked}
                  className={`${
                    isChecked ? 'bg-[#333] hover:bg-[#ff763e]' : 'bg-gray-300'
                  } text-white font-bold py-2 px-4 rounded`}>Proceed to Payment</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;




