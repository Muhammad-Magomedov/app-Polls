import mongoose from 'mongoose';

const Polls = mongoose.Schema({
  question: String
})

export default mongoose.model("poll", Polls)