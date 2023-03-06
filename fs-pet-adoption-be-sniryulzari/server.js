const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

app.use("/images", express.static("Images"));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

const usersRoute = require("./Routes/UsersRoute");
const petsRoute = require("./Routes/PetsRoute");
const adminRoute = require("./Routes/AdminRoute");
const appOperationsRoute = require("./Routes/AppOperationsRoute");

app.use("/users", usersRoute);
app.use("/pets", petsRoute);
app.use("/admin", adminRoute);
app.use("/appOperations", appOperationsRoute);

// mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to db");
    app.listen(PORT, () => {
      console.log(`App is listening on port: ${PORT}`);
      console.log("mongo uri:", process.env.MONGO_URI);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
