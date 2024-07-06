import express from "express";
import cors from "cors";
// import cookieParser from "cookie-parser";
// import "express-async-errors"; // this better than expess-async-handler
// import path from "path";

// import { productRoutes } from "./routes/products";
// import { authRoutes } from "./routes/auth";
// import { errorHandler } from "./common/middleware";

// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const path = require("path");

// const { errorHandler } = require("./common/middleware/errorMiddleware");

// const distPath = path.join(__dirname, "../frontend/dist");

const app = express();

// middleware
// app.use((_, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Methods', 'GET,DELETE');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested With, Content-Type, Accept');
// 	next();
// });
app.use(
  cors({
    // allowedHeaders: "*",
    // methods: "*",
    // origin: "*" /*bee.com*/,
    credentials: true /* allow credentials (cookies or authorization headers) through, in client make fetch need something like credentials: include, to make sure cookie get passed along with all of your different requests otherwise they do not get passed along by default */,
  })
);
// app.use(cookieParser());
app.use(express.json()); // make req.body work if content-type: application/json
app.use(express.urlencoded({ extended: false })); // the urlencoded data is parsed with the querystring library, which only supports simple key-value pairs

// routes
// app.use(productRoutes);
// app.use(authRoutes);
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/rooms", require("./routes/rooms"));
// // app.use("/api/users", require("./routes/auth/userRoutes"));
// app.use("/api/hotels", require("./routes/hotels"));
// // app.use("/api/goals", require("./routes/goals"));
// // app.use("/api/projects", require("./routes/projects"));
// // app.use("/api/clients", require("./routes/clients"));
// // app.use("/api/todos", require("./routes/todos"));

// errorHandler middleware must be after routes because it need get response, this override default
// app.use(errorHandler);

// // Serve frontend
// if (process.env.NODE_ENV === "production") {
// 	app.use(express.static(distPath)); // must have

// 	app.use("*", (req, res) => {
// 		return res.sendFile(
// 			path.resolve(__dirname, "../", "frontend", "dist", "index.html")
// 		);
// 	});
// } else {
// 	app.get("/", (req, res) => "please set to production");
// }

export { app };
