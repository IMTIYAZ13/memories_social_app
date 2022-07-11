import bodyParser from "body-parser";
import core from "cors";
import  express  from "express";
import mongoose from "mongoose";

import postRoutes from "./routes/posts.js";

const app=express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:"30mb",extended : true }));
app.use(bodyParser.urlencoded({limit:"30mb",extended : true }));
app.use (core());

const CONNECTION_URL ="mongodb+srv://admin-imtiyaz:TEST123@cluster0.etkmc.mongodb.net/?retryWrites=true&w=majority";
const PORT =process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));


