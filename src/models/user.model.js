import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, index: true },
  hashed_password: String,
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;
