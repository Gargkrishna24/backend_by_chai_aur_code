import mongoose, { Schema } from "mongoose";
const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      requied: true,
    },
    description: {
      type: String,
      requied: true,
    },
    duration:{
      type:Number,
      required:true,
    },
    views:{
      type:Number,
      defaults:0
    },
    isPublished:{
      type:Boolean,
      default:true
    },
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User"
    }
  },
  { timestamps: true },
);
export const mongoose = mongoose.model("video", videoSchema);
