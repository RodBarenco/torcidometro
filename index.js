// Import packages
import express from "express";
import router from "./src/routes.js";

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", router);

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
