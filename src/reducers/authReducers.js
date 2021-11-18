import { USER_LOADING, USER_LOADED,
LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS,
REGISTER_SUCCESS, REGISTER_FAIL} from '../actions/type'

const initialState = {
   token: localStorage.getItem('token'),
   isAuthenticated: null,
   isLoading: false, 
   userID: null,
}

export default function authRed(state = initialState, action){
   const { type, payload } = action;

   switch (type) {
      
      case USER_LOADING:
         return {
            ...state,
            isLoading: true
         }

      case USER_LOADED:
         return{
            ...state,
            ...action.payload,
            isAuthenticated: true,
            isLoading: false
         }

      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
         localStorage.setItem('token', payload.token);
         return{
            ...state, 
            ...action.payload,
            isAuthenticated: true,
            isLoading: false
         }

      case LOGIN_FAIL:
      case LOGOUT_SUCCESS:
      case REGISTER_FAIL:
         localStorage.removeItem('token')
         return{
            ...state,
            token: null,
            user:null,
            isAuthenticated:false,
            isLoading: false
         }
      default:
         return state;
   }




}