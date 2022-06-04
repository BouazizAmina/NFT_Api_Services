const express = require("express");
const app = express();
const bodyParser =  require("body-parser");
const cors = require("cors");


const {mongoose} = require("mongoose");
var uri = "mongodb://localhost:27017/NFTExchange";
mongoose.connect(uri).then(()=>{
  console.log("success");
}).catch((e)=>{
  console.log("not connected");
})
// var db = mongoose.connection;
// db.once("open", function() {
//     console.log("MongoDB database connection established successfully");
// });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to NFT Platform" });
  });


const PORT = process.env.PORT || 8086;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// const  express =  require("express");
const router = express.Router();
const NFTctr = require("./controllers/NFTExchange.controller");

app.post("/apiCreateUser", NFTctr.apiCreateUser);
app.get("/apiGetAllUser", NFTctr.apiGetAllUser);
app.get("/apiGetAllNFT", NFTctr.apiGetAllNFT);
app.post("/apiCreateNFT", NFTctr.apiCreateNFT);
app.get("/apiGetNFTById/:id", NFTctr.apiGetNFTById);
app.delete("/apiDeleteNFT/:id", NFTctr.apiDeleteNFT);

// module.exports =  router;


