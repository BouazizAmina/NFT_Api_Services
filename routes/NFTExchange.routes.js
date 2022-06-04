const  express =  require("express");
const router = express.Router();
const NFTctr = require("../controllers/NFTExchange.controller");
const Owner = require("../models/user.models");

// router.get("/login", NFTctr.apiCreateUser);
// router.get("/login", NFTctr.apiGetAllUser);
// router.post("/apiLogin", function(req, res, next){
//     try {
//         const user = await Owner.find({password:"123"});
//         console.log(req.body.email)
//         return user;
//     } catch (error) {
//         console.log(`Could not find user ${error}`)
//     }
// });




router.post("/apiCreateUser", NFTctr.apiCreateUser);
router.get("/login", NFTctr.apiGetAllUser);
router.get("/apiGetAllNFT", NFTctr.apiGetAllNFT);
// router.post("/apiCreateNFT", NFTctr.apiCreateNFT);
router.get("/apiGetNFTById/:id", NFTctr.apiGetNFTById);
router.delete("/apiDeleteNFT/:id", NFTctr.apiDeleteNFT);

module.exports =  router;