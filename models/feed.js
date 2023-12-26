import mongoose, { Schema, models } from "mongoose";

const feedSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Feed = models.Feed || mongoose.model("Feed", feedSchema);
export default Feed;