import { ADD_TEACHERS, EDIT_TEACHERS, DELETE_TEACHERS } from "../actions/type";

const initialState = {
   teachers:{},
   loading: false, 
}

export default function teacherRed(state = initialState, action){

   const { type, payload } = action;

   switch (type) {
      case ADD_TEACHERS:
         return {
            ...state,
            teachers: payload,
            loading: false
         }
      case EDIT_TEACHERS:
         return {
            ...state,
            teachers: state.teachers.map((teacher) => {
               if(teacher.id === payload.id){
                  return{
                     ...teacher, 
                     ...payload,
                  }
               }
            })
         }
      case DELETE_TEACHERS:
         return {
            ...state, 
            teachers: state.teachers.filter(teacher => teacher.tchID !== payload),
            loading: false
         }
      default:
         return state;
   }



}
