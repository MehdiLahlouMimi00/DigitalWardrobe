const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
    {
        name : {
            type : String,
            required : [true, "Pas d'article sans nom"]
        },

        image : {
            type : Object,
            default : {}
        },
    },

    {
        timestamps : true
    }
);

const Item = mongoose.model("Item", itemSchema);
module.exports = Item;