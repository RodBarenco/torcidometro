// Import packages
import express from "express";
import router from "./src/routes.js";

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/", router);
app.use("/list.json", router);
app.use("/main.js", router);
app.use("/stylesheet.css", router);
app.use("/assets/:filename", router);

// connection
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening to port ${port}`));
