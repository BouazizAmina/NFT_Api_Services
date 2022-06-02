const NFTService = require("../services/NFTExchange.service");
const ArticleService = require("../services/NFTExchange.service");

module.exports = class Article{

   static async apiGetAllNFT(req, res, next){
       try {
         const NFT = await NFTService.getAllNFTs();
         if(!NFT){
            res.status(404).json("There are no NFT published yet!")
         }
         res.json(NFT);
       } catch (error) {
          res.status(500).json({error: error})
       }

   }

   static async apiGetNFTById(req, res, next){
      try {
         let id = req.params.id || {};
         const NFT = await ArticleService.getNFTbyId(id);
         res.json(NFT);
      } catch (error) {
         res.status(500).json({error: error})
      }
   }

   static async apiCreateNFT(req, res, next){
      try {
         const createdNFT =  await NFTService.createNFT(req.body);
         res.json(createdNFT);
      } catch (error) {
         res.status(500).json({error: error});
      }
   }


   static async apiDeleteNFT(req, res, next){
         try {
            const NFTId = req.params.id;
            const deleteResponse =  await NFTService.deleteNFT(NFTId)
            res.json(deleteResponse);
         } catch (error) {
            res.status(500).json({error: error})
         }
   }

   static async apiCreateUser(req, res, next){
    try {
       const createdUser =  await NFTService.createUser(req.body);
       res.json(createdUser);
    } catch (error) {
       res.status(500).json({error: error});
    }
   }

   static async apiGetAllUser(req, res, next){
      try {
      const NFT = await NFTService.getAllUser();
      if(!NFT){
         res.status(404).json("There are no User published yet!")
      }
      res.json(NFT);
      } catch (error) {
         res.status(500).json({error: error})
      }

   }

   static async apiLogin(req, res, next){
      try {
      const NFT = await NFTService.login(req.body);
      if(!NFT){
         res.status(404).json("There are no User with this password !")
      }
      res.json(NFT);
      } catch (error) {
         res.status(500).json({error: error})
      }

   }

}