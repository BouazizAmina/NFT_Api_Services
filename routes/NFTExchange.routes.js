const  express =  require("express");
const router = express.Router();
const NFTctr = require("../controllers/NFTExchange.controller");

router.get("/apiCreateUser", NFTctr.apiCreateUser);
router.get("/apiGetAllNFT", NFTctr.apiGetAllNFT);
router.post("/apiCreateNFT", NFTctr.apiCreateNFT);
router.get("/apiGetNFTById/:id", NFTctr.apiGetNFTById);
router.delete("/apiDeleteNFT/:id", NFTctr.apiDeleteNFT);

module.exports =  router;