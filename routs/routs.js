import forAnswer from '../controlers/forAnswer.js';
import forPoll from '../controlers/forPoll.js';
import Router from "express"

const router = Router()

router.get("/polls", forPoll.getPoll)
router.get("/polls/:id/answers", forAnswer.getAnswer)
router.get("/polls/:id", forPoll.getPollId)

router.post("/polls", forPoll.createPoll)
router.post("/polls/:id/answers", forAnswer.createAnswer)

router.delete("/polls/:id", forPoll.deletePoll)
router.delete("/answers/:id", forAnswer.deleteAnswer)

export default router