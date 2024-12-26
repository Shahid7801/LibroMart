import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-900 mt-6 min-h-auto py-2 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-white mb-2 ">About Us</h1>
        <p className="text-lg text-gray-200 mb-2">
          Welcome to <span className="text-[#ff763e] font-bold px-2">LibroMart</span>, Your One-Stop Bookstore!
        </p>

        {/* Description */}
        <div className="bg-white/90 p-4 rounded-lg shadow-lg mb-1">
          <h2 className="text-2xl font-semibold text-[#000000ea] mb-2">Our Story</h2>
          <p className="text-[#282c3a] mb-2">
            Founded with the goal of making books easily accessible to all, LibroMart is committed to providing a convenient, user-friendly platform for book lovers.
            Our carefully curated collection features the latest bestsellers, classic novels, academic resources, and niche genres.
          </p>
          <p className="text-[#282c3a]">
            Whether you're an avid reader, a student, or someone looking for that perfect gift, we have something for everyone.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/90 text-center mx-auto  p-8  rounded-lg shadow-lg mb-1">
          <h2 className="text-2xl  font-semibold text-black mb-4">Why Choose <span className='font-serif font-bold text-[#b44214]'>LibroMart</span> ?</h2>
          <ul className="list-disc pl-6 text-[#282c3a] space-y-2 text-start">
            <li><strong>Wide Selection of Books:</strong> We offer a vast collection of books across various categories.</li>
            <li><strong>Free Home Delivery:</strong> Free delivery on orders above ₹499, bringing books straight to your doorstep!</li>
            <li><strong>Affordable Prices:</strong> We provide books at competitive prices to ensure the best value.</li>
            <li><strong>Seamless Shopping Experience:</strong> Our website is designed for ease of use and smooth navigation.</li>
            <li><strong>Fast Delivery:</strong> Quick and reliable delivery to satisfy your book cravings.</li>
            <li><strong>Customer Satisfaction:</strong> Our team ensures a hassle-free and satisfying shopping experience.</li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="bg-white/90 p-8 rounded-lg shadow-lg mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">Our Mission</h2>
          <p className="text-[#282c3a]">
            At LibroMart, our mission is simple: <strong>to make reading accessible to everyone.</strong>
            We want to provide a platform where book lovers can easily discover, buy, and enjoy books from all over INDIA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
