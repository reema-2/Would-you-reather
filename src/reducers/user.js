import { RECEIVE_USERS , SAVE_ANSWER , ADD_USER_QUESTION} from '../actions/user'

export default function user (state = {}, action) {
    switch(action.type) {
      case RECEIVE_USERS :
        return {
          ...state,
          ...action.user
        }
      case ADD_USER_QUESTION : 
        return {
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
            questions: state[action.authedUser].questions.concat([action.qid])
          }
        }
      case SAVE_ANSWER :
          return {
            ...state,
            [action.authedUser]: {
              ...state[action.authedUser],
              answers: {
                ...state[action.authedUser].answers,
                [action.qid]: action.answer
              }            
            }
          }
      default :
        return state
    }
  } 