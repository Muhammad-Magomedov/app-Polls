import Answers from '../models/answers.js';


class forAnswer {
  async getAnswer(req, res) {
    try {
      const answers = await Answers.find({pollId: req.params.id}).lean()
      res.json(answers)
    } catch (e) {
      res.json(e.message)
    }
  }
  async createAnswer(req, res) {
    try {
      const answers = await Answers.create({
        answer: req.body.answer,
        pollId: req.params.id
      })
      await answers.save()
      res.json(answers)
    } catch (e) {
      res.json(e.message)
    }
  }
  async deleteAnswer(req, res) {
    try {
      const answers = await Answers.findByIdAndDelete({_id: req.params.id}).lean()
      res.json(answers)
    } catch (e) {
      res.json(e.message)
    }
  }
}

export default new forAnswer()