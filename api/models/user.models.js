import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F38576264%2Fhow-can-i-programmatically-check-if-a-google-users-profile-picture-isnt-defaul&psig=AOvVaw20sxMFF567bHZG5R6vR7b8&ust=1705229449989000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCNCYqPGY2oMDFQAAAAAdAAAAABAE",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
