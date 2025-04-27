import mongoose from "mongoose";

const PieceSchema = new mongoose.Schema({
  partName: {
    type: String,
    required: true,
    unique: true,
  },
  partStTime: {
    type: Number,
    required: true,
  },
  attribute: {
    type: Array,
  },
 descrition: {
    type: Array,
  },
  operation: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("Piece", PieceSchema);