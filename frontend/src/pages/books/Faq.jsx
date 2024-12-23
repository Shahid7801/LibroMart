import React from 'react';

const FAQPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-6">Frequently Asked Questions</h1>
        <p className="text-lg text-gray-600 mb-12">
          Find answers to the most common questions we receive about our bookstore services, shipping, orders, and more. If you don't find the answer to your question here, feel free to reach out to our customer support.
        </p>

        {/* FAQ Accordion */}
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How do I place an order?</h2>
            <p className="text-gray-600">
              To place an order, simply browse through our catalog, select the books you want to buy, and add them to your cart. Once you're ready, go to the checkout page, provide your shipping information, and complete the payment process. We offer various payment options including debit/credit cards, net banking, and cash on delivery.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">What are the shipping charges?</h2>
            <p className="text-gray-600">
              We offer free shipping on all orders above Rs. 499. For orders below Rs. 499, a small shipping fee may apply, which will be displayed at checkout. We provide reliable and fast delivery to ensure that you get your books in a timely manner.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">How can I track my order?</h2>
            <p className="text-gray-600">
              Once your order is shipped, you will receive a tracking number via email or SMS. You can use this tracking number on our website or the courier company's website to track your order in real-time. If you have any issues tracking your order, feel free to contact our support team.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Can I cancel my order?</h2>
            <p className="text-gray-600">
              Yes, you can cancel your order within 24 hours of placing it. After this time, the order may have already been processed and shipped, in which case cancellation may not be possible. Please contact our support team as soon as possible if you wish to cancel an order.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">What if I receive a damaged book?</h2>
            <p className="text-gray-600">
              If you receive a damaged or defective book, please contact our customer support within 7 days of receiving the product. We will assist you with a return or exchange. Our team will guide you through the process and ensure that you are completely satisfied with your purchase.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Do you offer discounts or promotions?</h2>
            <p className="text-gray-600">
              Yes, we offer periodic discounts and promotions on various books. You can stay updated on our current offers by subscribing to our newsletter or following us on social media. We also have seasonal sales and limited-time offers, so make sure to check back often for the best deals.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FAQPage;
