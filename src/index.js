import dotenv from "dotenv";
import { connectDB } from "./db/index.js";

dotenv.config({
  path: ".env",
});

connectDB();

// import express from "express";
// const app = express();
// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("EXPRESS :: APP CREATION ERROR ::", error);
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on http://localhost:${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("MONGO DB :: DB CONNECTION ERROR :: ", error);
//   }
// })();
