const mongoose = require("mongoose");
require("dotenv").config(); // Load env variables

const connection = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGODB_URI); // Debugging
        
        if (!process.env.MONGODB_URI) {
            throw new Error("MONGODB_URI is not defined in environment variables");
        }

        await mongoose.connect(process.env.MONGODB_URI)
            .then(() => console.log("Connected to DB"))
            .catch(err => {
                console.error("Connection error:", err.message);
                process.exit(1); // Exit the process if connection fails
            });

    } catch (error) {
        console.error("Error:", error.message);
    }
};

module.exports = connection;
