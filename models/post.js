import mongoose, { Schema, models } from "mongoose";

const postSchema = new Schema(
  {
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
      type: String,
      required: true,
    },
    article: {
      type: String,
      required: true,
    },
    image: {
     type: String,
    },
  },
  { timestamps: true }
);

const Post = models.Post || mongoose.model("Post", postSchema);
export default Post;