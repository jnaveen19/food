import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import recipeRouter from "./routes/recipe.js";
import userRouter from "./routes/user.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// userRouter
app.use("/api", userRouter);
// recipeRouter
app.use("/api", recipeRouter);
////'mongodb+srv://navi:lion@cluster0.hcwak70.mongodb.net/'
//mongodb://localhost:27017/
//s@email.com password :111
const dbURI = process.env.MONGO_URL;
console.log(dbURI)
mongoose.connect(dbURI,{
      useNewUrlParser: true,//set new url
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000, // Increase timeout to 20 seconds
      socketTimeoutMS: 45000, // Increase socket timeout
      dbName: "MERN_Recipe_YouTube",
    }
  )
  .then(() => console.log("MongoDB is Connected..!"))
  .catch((err) => console.log(err.message));

const port = 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));
