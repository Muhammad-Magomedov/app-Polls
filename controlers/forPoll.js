import Polls from '../models/polls.js';


class forPoll {
  async getPoll(req, res) {
    try {
      const polls = await Polls.find({}).lean()
      res.json(polls)
    } catch (e) {
      res.json(e.message)
    }
  }
  async createPoll(req, res) {
    try {
      const polls = new Polls({
        question: req.body.question
      })
      await polls.save()
      res.json(polls)
    } catch (e) {
      res.json(e.message)
    }
  }
  async getPollId(req, res) {
    try {
      const polls = await Polls.findById({_id: req.params.id}).lean()
      res.json(polls)
    } catch (e) {
      res.json(e.message)
    }
  }
  async deletePoll(req, res) {
    try {
      const polls = await Polls.findByIdAndDelete({_id: req.params.id}).lean()
      res.json(polls)
    } catch (e) {
      res.json(e.message)
    }
  }
}

export default new forPoll()