import { useState } from "react";

const CustomerSupport = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/customer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (response.ok) {
                setSuccess("Your message has been sent successfully!");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setSuccess("Failed to send your message. Please try again.");
            }
        } catch (error) {
            setSuccess("An error occurred. Please try again.");
        }
    };

    return (
        <div className="bg-gray-900 h-[100%] py-12 px-4">
            <div className="container mx-auto h-3/5">
                <h1 className="text-3xl text-[#ff763e] font-bold mb-2 text-center">Customer Support</h1>
                {success && <p className="mb-4 text-green-600 text-center">{success}</p>}
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md h-3/5 mx-auto bg-white/90 backdrop-blur-sm p-6 shadow-lg border-2 border-black rounded-lg space-y-6"
                >
                    <div className="">
                        <label htmlFor="name" className="block text-sm font-medium text-black mb-1 ">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full  px-3 py-2 border border-gray-900 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block text-sm font-medium text-black">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-900 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="subject" className="block text-sm font-medium text-black">Subject:</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 border border-gray-900 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="">
                        <label htmlFor="message" className="block text-sm font-medium text-black">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full mt max-h-52 min-h-14 px-3 py-2 border border-gray-900 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-[#ff763e] transition duration-900">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CustomerSupport;
