import mongoose from 'mongoose';

const Answers = mongoose.Schema({
  answer: String,
  pollId: { type: mongoose.Schema.Types.ObjectId, ref: "Poll"}
})

export default mongoose.model('answer', Answers)