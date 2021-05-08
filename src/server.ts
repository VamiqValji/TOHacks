import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import users from "./routes/usersRoute";

const app: express.Application = express();
require("dotenv").config();

app.use(express.json());
app.use(cors({}));

app.use("/users", users);

app.get("/", (req, res) => {
  res.status(200).json({test: ""});
});

mongoose
  .connect(process.env.DB_CONNECT!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((result) =>
    app.listen(process.env.PORT || 3001, () =>
      console.log(`Listening on port ${process.env.PORT || 3001}`)
    )
  )
  .catch((err) => {
    console.log(err);
  });