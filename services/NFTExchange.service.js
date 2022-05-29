const NFT = require("../models/nft.models");
const Owner = require("../models/user.models");

module.exports = class NFTService{
    static async getAllNFTs(){
        try {
            const allNFTs = await NFT.find();
            return allNFTs;
        } catch (error) {
            console.log(`Could not fetch NFTs ${error}`)
        }
    }

    static async createNFT(data){
        try {

            const newNFT = {
                id:data.id,
                cID: data.cID,
                description: data.description,
                owner: data.owner
            }
           const response = await new NFT(newNFT).save();
           return response;
        } catch (error) {
            console.log(error);
        } 

    }
    static async getNFTbyId(NFTId){
        try {
            const singleNFTResponse =  await NFT.findById({_id: NFTId});
            return singleNFTResponse;
        } catch (error) {
            console.log(`NFT not found. ${error}`)
        }
    }

    static async deleteNFT(NFTId){
        try {
            const deletedResponse = await NFT.findOneAndDelete(NFTId);
            return deletedResponse;
        } catch (error) {
            console.log(`Could  ot delete NFT ${error}`);
        }

    }

    static async createUser(data){
        try {

            const newUser = {
                nom: data.nom,
                prenom: data.prenom,
                email: data.email,
                password: data.password
            }
           const response = await new Owner(newUser).save();
           return response;
        } catch (error) {
            console.log(error);
        } 


    }

    static async getAllUser(){
        try {
            const allUsers = await Owner.find();
            return allUsers;
        } catch (error) {
            console.log(`Could not fetch NFTs ${error}`)
        }
    }
}