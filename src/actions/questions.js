import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerUser, addQuestionUser } from "./users";
export const QUESTIONS = "QUESTIONS";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_TO_QUESTION = "ADD_ANSWER_TO_QUESTION";

export function receiveQuestions(questions) {
    return {
      type: QUESTIONS,
      questions,
    };
  }
  
  function addQuestion(question) {
    return {
      type: ADD_QUESTION,
      question,
    };
  }
  
  function addAnswerQuestion(author, qid, answer) {
    return {
      type: ADD_ANSWER_TO_QUESTION,
      author,
      qid,
      answer,
    };
  }
  
  export function handleAddQuestion(firstOption, secondOption) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
  
      return saveQuestion({optionOneText: firstOption, optionTwoText: secondOption, author: authedUser}).then(
        (question) => {
          dispatch(addQuestion(question));
          dispatch(addQuestionUser(question));
        }
      );
    };
  }
  
  export function handleAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
      const { authedUser } = getState();
      return saveQuestionAnswer(authedUser.id, questionId, answer).then(() => {
        dispatch(addAnswerQuestion(authedUser.id, questionId, answer));
        dispatch(addAnswerUser(authedUser.id, questionId, answer));
      });
    };
  }
  