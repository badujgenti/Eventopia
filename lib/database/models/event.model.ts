import { url } from "inspector";
import { Schema, model, models, Document } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price: number;
  isFree: boolean;
  url: string;
  category: { _id: string; name: string };
  organizer: { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String },
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  price: { type: Number, required: true },
  isFree: { type: Boolean, required: true },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Event = models.Event || model("Event", EventSchema);

export default Event;
