// import React from 'react';
// import { useAuth } from '../../../context/AuthContext';
// import { useGetOrderByEmailQuery } from '../../../redux/features/orders/ordersApi';

// const UserDashboard = () => {
//     const { currentUser } = useAuth();
//     const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email);

//     if (isLoading) return <div>Loading...</div>;
//     if (isError) return <div>Error getting orders data</div>;

//     return (
//         <div className=" py-16">
//             <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg border-2 p-6">
//                 <h1 className="text-3xl font-bold mb-4 text-center text-[#6e4839] underline">USER DASHBOARD</h1>
//                 <p className="text-gray-700 mb-6 font-bold">Welcome, {currentUser?.name || 'User'}! Here are your recent orders:</p>

//                 <div className="mt-6">
//                     <h2 className="text-xl font-semibold mb-4">Your Order List</h2>
//                     {orders.length > 0 ? (
//                         <ul className="space-y-4">
//                             {orders.map((order) => (
//                                 <li key={order._id} className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-1">
//                                     <p className="font-medium">Order ID: {order._id}</p>
//                                     <p>Date: {new Date(order?.createdAt).toLocaleDateString()}</p>
//                                     <p >Total: Rs. {order.totalPrice}</p>
//                                     {order.productIds.map((productId) => (
//                                         <p key={productId} className='ml-1'>{productId}</p>
//                                     ))}
//                                 </li>


//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="text-gray-600 font-bold text-2xl text-center">You have no recent orders.</p>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserDashboard;









import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { useGetOrderByEmailQuery } from '../../../redux/features/orders/ordersApi';

const UserDashboard = () => {
    const { currentUser } = useAuth();
    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email);

    if (isLoading) return <div className="text-center py-16 text-lg">Loading...</div>;
    if (isError) return <div className="text-center py-16 text-lg text-red-500">Error getting orders data</div>;

    return (
        <div className="py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200 p-6">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-[#6e4839] underline">
                    USER DASHBOARD
                </h1>
                <p className="text-gray-700 mb-6 font-semibold text-center">
                    Welcome, <span className="text-[#6e4839]">{currentUser?.name || 'User'}</span>! Here are your recent orders:
                </p>

                <div className="mt-6">
                    <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#6e4839]">Your Order List</h2>
                    {orders.length > 0 ? (
                        <ul className="space-y-4">
                            {orders.map((order) => (
                                <li key={order._id} className="bg-gray-50 p-4 rounded-lg shadow-sm border border-gray-200">
                                    <p className="font-medium text-gray-800">
                                        <span className="font-semibold text-[#6e4839]">Order ID:</span> {order._id}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Date:</span> {new Date(order?.createdAt).toLocaleDateString()}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-semibold">Total:</span> Rs. {order.totalPrice}
                                    </p>
                                    <div>
                                        <p className="text-gray-700 font-semibold mt-2">Products:</p>
                                        <ul className="list-disc list-inside">
                                            {order.productIds.map((productId) => (
                                                <li key={productId} className="text-gray-600">{productId}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-600 font-semibold text-lg md:text-xl text-center">
                            You have no recent orders.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
