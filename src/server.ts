import { config } from "dotenv-safe";
import { type Server } from "http";

import { app } from "./app";
// import { connectDb } from "./common/config/db";
// import { EmailSender, NodemailerEmailAPI } from "./routes/auth";

config();
// config({
//   path: process.cwd() + "/.env", allowEmptyValues: true
//   // path: process.env.NODE_ENV && process.env.NODE_ENV.trim() === development ? "/.env.dev" "./env.production", allowEmptyValues: true
// });

// const dotenv = require("dotenv").config({
//  path: process.cwd() + "/backend/.server.env"
// });
// const { connectDb } = require("./common/config/db");

// connectDb(); // if have any issues, go mongodb > security > network access > add ip

const port = process.env.PORT || 3333;
// let server: Server;

// const emailSender = EmailSender.getInstance();
// emailSender.active();
// emailSender.setEmailAPI(new NodemailerEmailAPI());

// Connect to the database and then starting the server
// connectDb()
//   .then(() => {
//     server = app.listen(port, async () => {
//       console.log("server started on port", port);

//       // await connectDb();

//       // const res = await emailSender.sendRegisterVerificationEmail({ toEmail: "neog4.f1@yopmail.com" });
//       // console.log(res);
//     });
//   })
//   .catch((err) => console.log(err));

const server = app.listen(port, () =>
  console.log("server start on port", port)
);

export { server };
