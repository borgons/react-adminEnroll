import { combineReducers } from 'redux'
import authReducers from './authReducers'
import studentReducers from './studentReducers'
import enrollReducers from './enrollReducers'
import teacherReducers from './teacherReducers'

export default combineReducers({
   auth:authReducers,
   student:studentReducers,
   enroll: enrollReducers,
   teacher: teacherReducers
})