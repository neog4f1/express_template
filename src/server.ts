import { type Server } from "http";
// import { config } from "dotenv-safe";

import { app } from "./app";
// import { connectDB } from "./common/config/db";
// import { EmailSender, NodemailerEmailAPI } from "./routes/auth";

// const parseNodeEnv = process.env.NODE_ENV || "development";
// config({
//   path: process.cwd() + "/.env", allowEmptyValues: true
//   // path: parseNodeEnv.trim() === developlemnt ? "/.env.dev" "./env.production", allowEmptyValues: true
// });

// const dotenv = require("dotenv").config({
//  path: process.cwd() + "/backend/.server.env"
// });
// const { connectDB } = require("./common/config/db");

// connectDB(); // if have any issues, go mongodb > security > network access > add ip

const port = process.env.PORT || 3333;
let server: Server;

// const emailSender = EmailSender.getInstance();
// emailSender.active();
// emailSender.setEmailAPI(new NodemailerEmailAPI());

// Connect to the database and then starting the server
// connectDB()
//   .then(() => {
//     server = app.listen(port, async () => {
//       console.log("server started on port", port);

//       // await connectDB();

//       // const res = await emailSender.sendRegisterVerificationEmail({ toEmail: "neog4.f1@yopmail.com" });
//       // console.log(res);
//     });
//   })
//   .catch((err) => console.log(err));

const server = app.listen(port, () =>
 console.log("server start on port", port)
);

export { server };
