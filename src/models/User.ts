import { Model, Types } from "mongoose";
import { IUser } from "../interface/user";
const { mongoose, model, Schema } = require("mongoose");

const UserSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
});

interface UserBaseDocument extends IUser, Document {}

UserSchema.pre(
  "save",
  function (this: UserBaseDocument, models: Model<IUser>, next: any) {
    if (this.isNew) {
      models.find({}).then((result: any) => {
        this._id = result.length;
        next();
      });
    }
    next();
  }
);

const User: Model<IUser> = model("User", UserSchema);

export { User };
