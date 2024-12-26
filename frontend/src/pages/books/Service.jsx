import React from 'react';

const ServicesPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-[#b06d52] mb-6">Our Services</h1>
        <p className="text-lg text-gray-200 mb-12">
          We are committed to providing the best services to our customers and delivering a wide variety of books for all ages and preferences. Our services include fast home delivery, a diverse catalog, and a customer-first approach to meet your book shopping needs.
        </p>

        {/* Service Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Service 1: Free Home Delivery */}
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Free Home Delivery</h2>
            <p className="text-gray-600">
              We offer free home delivery on all orders above Rs. 499. You can now shop from the comfort of your home and have your books delivered directly to your doorstep, saving you time and effort. We believe in making your shopping experience as convenient and accessible as possible.
            </p>
          </div>

          {/* Service 2: Wide Range of Books */}
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">A Wide Range of Books</h2>
            <p className="text-gray-600">
              Whether you're looking for the latest bestsellers, educational books, or novels in different genres, we have it all. Our extensive catalog includes books for all ages and interests, including fiction, non-fiction, academic, and self-help genres. We ensure that there’s something for every book lover.
            </p>
          </div>

          {/* Service 3: Secure Payments */}
          <div className="bg-white/90 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Secure Payment Options</h2>
            <p className="text-gray-600">
              We provide secure and easy-to-use payment methods for our customers. You can pay for your orders via various payment options like debit/credit cards, net banking, or even cash on delivery (COD). Our secure payment gateway ensures that your payment information is always safe.
            </p>
          </div>
        </div>

        {/* Detailed Description */}
        <div className="mt-12 bg-white/90 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-4">
            At our online bookstore, we strive to provide an excellent customer experience by offering a wide range of services designed to meet all your book shopping needs. Our goal is to make your book shopping experience seamless and enjoyable, whether you're buying for yourself, a loved one, or a special occasion.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            With our free home delivery service, we bring your books directly to your doorstep, ensuring that you receive them in a timely manner. Our catalog includes books from various genres, including fiction, self-help, biographies, academic books, and more. We are constantly updating our stock to keep up with the latest trends and bestsellers in the market.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Additionally, we offer secure and multiple payment methods, so you can choose the one that's most convenient for you. Whether you prefer to pay via card, net banking, or cash on delivery, our platform ensures a secure transaction every time.
          </p>
          <p className="text-lg text-gray-600">
            Customer satisfaction is our top priority, and we are always ready to assist you with any queries or concerns. Our support team is available to help with product recommendations, order issues, and more. We believe in building long-lasting relationships with our customers, and we strive to make each purchase a positive experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
