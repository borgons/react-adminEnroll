import { ADD_ENROLL, EDIT_ENROLL, DELETE_ENROLL} from '../actions/type'

const initialState = {
   enrolls:[],
   loading: false,
}

export default function enrollRed(state = initialState, action){

   const { type, payload } = action;

   switch (type) {
      case ADD_ENROLL:
         return {
            ...state, 
            enrolls: payload,
            loading: false
         }
      case EDIT_ENROLL: {
         return {
            ...state, 
            enrolls: state.enrolls.map((enroll) => {
               if(enroll.id === payload.id){
                  return{
                     ...enroll,
                     ...payload
                  }
               }
            })
         }
      }
      case DELETE_ENROLL:
         return {
            ...state, 
            enrolls: state.enrolls.filter(enroll => enroll.enNum !== payload),
            loading:false
         }
      default:
         return state;
   }

}