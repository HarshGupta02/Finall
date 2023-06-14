const express = require("express")
const cors = require("cors");
const app = express();
app.use(cors({
    origin: "https://6489a37715001c127d811a4f--mellow-babka-33bc13.netlify.app"
}));
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./error.js");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({path : "./config.env"});

app.use(express.json({limit : '50mb'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : true, limit : '50mb'}));
app.use(fileUpload());

const product = require("./productRoute.js");
const user = require("./userRoute.js");
const order = require("./orderRoutes.js");
const payment = require("./paymentRoute.js");

app.use(`https://ecommerceprojectserver.onrender.com/api/v1`, product);
app.use(`https://ecommerceprojectserver.onrender.com/api/v1`, user);
app.use(`https://ecommerceprojectserver.onrender.com/api/v1`, order);
app.use(`https://ecommerceprojectserver.onrender.com/api/v1`, payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
})

app.use(errorMiddleware);

module.exports = app;