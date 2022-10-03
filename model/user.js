import { model, models, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    userName: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const Users = models.user || model('user', userSchema);

export default Users;
