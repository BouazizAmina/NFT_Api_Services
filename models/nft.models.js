const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NFTModelSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    
    cID:{
        type: String,
        required: true,
    },

    description:{
        type: Text,
        required: true,
    },

    owner: {
        type: Schema.ObjectId,
        ref: 'User'
    },

    dateCreation:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = NFT = mongoose.model("NFT",NFTModelSchema);

