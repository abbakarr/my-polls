const { _saveQuestionAnswer } = require("../utils/_DATA");
describe("_saveQuestionAnswer", () => {
    it("should resolve the promise if correctdata has been passed in", async () => {
      const authedUser = "mtsamis";
      const qid = "vthrdm985a262al8qx3do";
      const answer = "optionTwo";
      const results = await _saveQuestionAnswer({ authedUser, qid, answer });
      expect(results).resolves;
    });
  
    it("should return an error since icorrect data has been passed in", async () => {
      const qid = "dgvvg6667788";
      const authedUser = "intruder";
      const answer = null;
  
      await expect(() =>
        _saveQuestionAnswer({ authedUser, qid, answer })
      ).rejects.toEqual("Please provide authedUser, qid, and answer");
    });
  });