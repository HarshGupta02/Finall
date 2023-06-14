const express = require("express")
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./error.js");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path : "./config.env"});

app.use(express.json({limit : '50mb'}));
app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({extended : true, limit : '50mb'}));
app.use(fileUpload());

const product = require("./productRoute.js");
const user = require("./userRoute.js");
const order = require("./orderRoutes.js");
const payment = require("./paymentRoute.js");

app.get("/", (req, res) => {
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.send("API IS RUNNING");
})

app.use(`/api/v1`, product);
app.use(`/api/v1`, user);
app.use(`/api/v1`, order);
app.use(`/api/v1`, payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
})

app.use(errorMiddleware);

module.exports = app;