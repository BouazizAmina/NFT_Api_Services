const express = require("express");
const app = express();
const bodyParser =  require("body-parser");

const {mongoose} = require("mongoose");
var uri = "mongodb://localhost:27017/NFTExchange";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
var db = mongoose.connection;
db.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to NFT Platform" });
  });

// require('./routes/NFTExchange.routes')(app);

const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


