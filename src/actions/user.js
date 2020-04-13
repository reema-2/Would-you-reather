

import {_saveQuestionAnswer } from '../utils/_Data'
import {saveAnswerQuestion} from './question'
export const SAVE_ANSWER ='SAVE_ANSWER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function receiveUsers (user) {
  return {
    type: RECEIVE_USERS,
    user,
  }
}  

export function addUserQuestion ( authedUser , id ){
  return {
    type: ADD_USER_QUESTION,
    authedUser,
    id
  }
}


export function saveAnswer (authedUser, qid, answer) {
  return {
    type: SAVE_ANSWER,
    authedUser, 
    qid, 
    answer
  }
} 

export function handleSaveAnswer (qid, option) {

  return (dispatch, getState) => {
    const { authedUser } = getState();
    const info = {
      authedUser: authedUser,
      qid,
      answer: option
    };
    _saveQuestionAnswer(info)
          .then(() => {
          dispatch(saveAnswer(authedUser, qid, option));
          dispatch(saveAnswerQuestion(authedUser, qid, option))
      })
  }
}