import { Schema, model } from "mongoose";

const querySchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: (email) => /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email),
      message: 'Invalid email format',
    },
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  replied: {
    type: Boolean,
    default: false,
  },
  answer: {
    type: String,
    default: '',
  },
});

export default model("Query", querySchema);
