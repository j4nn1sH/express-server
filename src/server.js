import "dotenv/config";
import express from "express";
import mongoose from "mongoose";

import cors from "cors"; // Allows cross-origin requests
import helmet from "helmet"; // Configures HTTP-Headers for protection

import routes from "./routes";

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true })
    .then(() => {
        const app = express();

        app.use(cors());
        app.use(helmet());

        //Forwards to Routes
        app.use("/api", routes);

        app.listen(process.env.SERVER_URL, () => {
            console.log("\nServer running on http://localhost:" + process.env.SERVER_URL);
        });
    })
    .catch((err) => console.log("\nMongoDB could not be connected"));
