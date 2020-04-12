import { _getQuestions } from '../utils/_Data'
import { _getUsers } from '../utils/_Data'
import { receiveQuestion } from './question'
import { receiveUsers } from './user'
import { showLoading, hideLoading } from 'react-redux-loading'

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => ({
        users,
        questions
      })
    );
  }

export function handleInitialData() {
    return dispatch => {
      dispatch(showLoading())
      return getInitialData().then(({ users, questions }) => {
        dispatch(receiveQuestion(questions))
        dispatch(receiveUsers(users))
        dispatch(hideLoading())
      });
    };
}
