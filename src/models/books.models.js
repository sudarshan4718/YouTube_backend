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
    subject: { 
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
    authorName: {
        type: String,
    },
    publisherName: {
        type: String,
    },
    borrowedBy: [
        { type: Schema.Types.ObjectId, 
        ref: "User" }
    ],
    quantityHistory: { type: Array, 
        required: true, 
        default: [] 
    },
  })

  export const Book = mongoose.model("Book", bookSchema);