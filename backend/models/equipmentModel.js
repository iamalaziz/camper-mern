import mongoose from "mongoose";

export const equipmentSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const Equipment = mongoose.model('Equipment', equipmentSchema);
export default Equipment