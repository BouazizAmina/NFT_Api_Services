var UserModelSchema = new Schema({
    id:{
        type: Number,
        required: true,
    },
    
    nom:{
        type: String,
        required: true,
    },

    prenom:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: false,
    },

    password:{
        type: String,
        default: Date.now(),
    }
});

module.exports = User = mongoose.model("User",UserModelSchema);