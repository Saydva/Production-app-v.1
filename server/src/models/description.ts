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

export default mongoose.model("Description", DescriptionSchema); // Export the model for use in other parts of the application
// Ensure this is not duplicated in other files within the same scope