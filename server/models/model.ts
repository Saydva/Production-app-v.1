import mongoose from "mongoose";

const ModelSchema = new mongoose.Schema({
  partName: {
    type: String,
    required: true,
    unique: true,
  },
  partStTime: {
    type: Number,
    required: true,
  },
  piecec: {
    type: Array,
  },
  subPiecec: {
    type: Array,    
  },
  attribute: {
    type: Array,
  },
 description: {
    type: Array,
  },
  operation: {
    type: Array,
  },
});

export const Model = mongoose.model("Model", ModelSchema);