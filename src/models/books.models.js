import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true
         },
    isbn: { 
        type: String, 
        required: true, 
        unique: true 
    },
    category: { 
        type: String, 
        required: true
     },
     department: {
        type: String,
        required: true,
     },
    quantity: {
         type: Number,
          required: true 
        },
    borrowedBy: [
        { type: Schema.Types.ObjectId, 
        ref: "User" }
    ],
    priceHistory: { type: Array,
         required: true, 
         default: [] 
        },
    quantityHistory: { type: Array, 
        required: true, 
        default: [] 
    },
  })

  export const Book = mongoose.model("Book", bookSchema);