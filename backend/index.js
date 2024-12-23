const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer"); // Import Nodemailer
const port = process.env.PORT || 5000;
require("dotenv").config();

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://book-app-frontend-tau.vercel.app",
        ],
        credentials: true,
    })
);

// Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");

app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

// Customer Support Email Route
app.post("/api/customer", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required." });
    }

    try {
        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, 
                pass: process.env.EMAIL_PASS, 
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER, 
            subject: `Customer Support: ${subject}`,
            text: `You have a new message from ${name} (${email}):\n\n${message}`,
        };

        // Send Email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to send message." });
    }
});

// MongoDB Connection and Server Start
async function main() {
    await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB connected successfully!");

    app.use("/", (req, res) => {
        res.send("Book Store Server is running!");
    });
}

main()
    .then(() => console.log("Server is ready."))
    .catch((err) => console.log(err));

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
