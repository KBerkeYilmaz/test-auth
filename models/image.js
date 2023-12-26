import mongoose, { Schema, models } from "mongoose";

const imageSchema = new Schema(
  {
    publisher: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    image: {
     type: String,
    },
  },
  { timestamps: true }
);

const Image = models.Image || mongoose.model("Image", imageSchema);
export default Image;