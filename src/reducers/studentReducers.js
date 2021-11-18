import { ADD_STUDENTS, EDIT_STUDENTS, DELETE_STUDENTS } from '../actions/type' 

const initialState = {
   students:[],
   loading:false
};

export default function studentRed(state = initialState, action){

   const { type, payload} = action;

   switch(type) {
      case ADD_STUDENTS:
         return{
            ...state,
            students: payload,
            loading: false
         }
      case EDIT_STUDENTS:
         return{
            ...state,
            students: state.students.map((student) => {
                  if(student.id === payload.id){
                     return{
                        ...student, 
                        ...payload
                     };
                  } else {
                     return student;
                  }
               })
         }
      case DELETE_STUDENTS:
         return {
            ...state,
            students: state.students.filter(student => student.stdID !== payload),
            loading: false
         }
      default:
         return state;
   }

}