import { _saveQuestion } from '../utils/_Data'
import { addUserQuestion } from './user'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER_QUESTION ='SAVE_ANSWER_QUESTION'


export function receiveQuestion (question) {
  return {
    type: RECEIVE_QUESTION,
    question,
  }
} 

export function AddQuestion (question){
  return{
    type: ADD_QUESTION,
    question
  }
} 

export function handleAddQuestion (optionOneText,optionTwoText, authedUser){
  return (dispatch) => {
    return _saveQuestion({
      optionOneText,
      optionTwoText, 
      author : authedUser 
    })
      .then((question) => {
        dispatch(AddQuestion(question))
        dispatch(addUserQuestion(authedUser, question.id))
      })
  }
}

export function saveAnswerQuestion (authedUser, qid, answer){
  return{
    type:SAVE_ANSWER_QUESTION,
    authedUser, 
    qid, 
    answer
  }
}





