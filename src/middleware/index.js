import thunk from 'redux-thunk'
// import logger from './logger'
import { applyMiddleware } from 'redux'
import logger from 'redux-logger'

export default applyMiddleware(
  thunk,
  logger,
) 