import { InferSchemaType, Schema, model } from "mongoose";

const imageSchema = new Schema({
    label: { type: String, required: true },
    link: { type: String, required: true },
}, { timestamps: true });
type Image = InferSchemaType<typeof imageSchema>;
export default model<Image>("Image", imageSchema);