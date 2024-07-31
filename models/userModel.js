import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
  },
  email: {
    type: String,
    required: [true, "must provide a email"],
    unique: [true, "email already in use"],
  },
  password: {
    type: String,
    required: [true, "must provide a password"],
  },
});

const UserData =
  mongoose.models.UserData || mongoose.model("UserData", userSchema);

export default UserData;
