import mongoose from "mongoose";

const AttributeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Attribute", AttributeSchema);
// Ensure this is not duplicated in other files within the same scope