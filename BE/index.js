const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const bookRoute = require("./routes/book")
const userRoute = require("./routes/user")


var port = process.env.PORT || 4000;
dotenv.config();

//connect database
mongoose.connect((process.env.PASSWORD_MONGODB), () => {
    console.log("Connected to MongoDB")
})

app.use(bodyParser.json({limit:"50mb"}));
app.use(cors());
app.use(morgan("common"));

//routes
app.use("/api", bookRoute);
app.use("/user", userRoute);



app.listen(port, () => {
    console.log("Server is running on http://localhost:" + port)
});

