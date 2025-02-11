const mongoose = require("mongoose");
const scrapSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  
  scrap: [
    {
      name: {
        type: String,
        required: true,
      },
      
      quantity: {
        type: String,
        required: true,
        maxLength: 50,
      },
      price: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      locality: {
        type: String,
        required: true,
      },
      type:{
        type: String,
        required: true,
      }
    }
  ]
});

const Scrap = new mongoose.model("Scrap", scrapSchema);
module.exports = Scrap;
