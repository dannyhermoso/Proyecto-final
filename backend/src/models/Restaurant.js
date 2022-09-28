const { Schema, model } = require("mongoose")

const restaurantSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            require: true
        },
        name: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String, 
            require: true,
            unique: true
        },
        hashPassword: {
            type: String,
            require: true
        },
        country: {
            type: String,
            require: true
        },
        selling_foods: [
            {
                type: Schema.Types.ObjectId,
                ref: "Food"
            }
        ],
        localStorageToken: {
            type: String
        },
        deleted: {
            type: Boolean,
            default: false
        }
    }
)