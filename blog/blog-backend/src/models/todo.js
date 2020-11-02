import mongoose, { Schema } from 'mongoose';

const TodoSchema = new Schema({
  todo: String,
  username: String,
  rank: Number,
  type: Number,
});

const Todo = mongoose.model('Todo', TodoSchema);
export default Todo;
