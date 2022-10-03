import Users from './../../model/user';

const bcrypt = require('bcrypt');
async function hashIt(password) {
  const salt = await bcrypt.genSalt(6);
  const hashed = await bcrypt.hash(password, salt);
  return hashed;
}

export async function createUser(formData) {
  const hashedPassword = await hashIt(formData.password);
  formData.password = hashedPassword;
}

export async function validateUser(formData) {
  var user = null;
  var errorMessage = null;
  const email = formData.email;
  user = await Users.findOne({ email });
  if (user != null) {
    errorMessage = 'Email already exists';
    return errorMessage;
  }
  const userName = formData.userName;
  user = await Users.findOne({ userName });
  if (user != null) {
    errorMessage = 'Username already exists';
    return errorMessage;
  }

  return errorMessage;
}
