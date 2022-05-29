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
        type: String,
        required: true,
    },

    owner: {
        type: Schema.ObjectId,
        ref: 'Owner'
    },

    dateCreation:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = NFT = mongoose.model("NFT",NFTModelSchema);

