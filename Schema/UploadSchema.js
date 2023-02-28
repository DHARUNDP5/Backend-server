import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    Message: {
      type: String,
      required: true,
    },
    userID:{
        type:String,
    },
  },
  { timestamps: true }
);
export const uploadModel = new mongoose.model("upload", uploadSchema);
