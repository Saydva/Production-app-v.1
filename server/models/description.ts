import mongoose from "mongoose"; // Ensure this is not duplicated in other files within the same scope

const DescriptionSchema = new mongoose.Schema({
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

export const Description = mongoose.model("Attribute", DescriptionSchema);