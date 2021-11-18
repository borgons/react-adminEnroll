import axios from 'axios';

import { ADD_STUDENTS, DELETE_STUDENTS, EDIT_STUDENTS } from './type';

import { URL } from '../utils/utils'

export const addStudent = (frmStdData) => async dispatch => {

   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.post(`${URL}students/addStudents`, frmStdData, config)
         dispatch({
            type: ADD_STUDENTS,
            payload: res.data
         })

   } catch (err) {
      console.log(err)
   }

}


export const deleteStudent = stdID => async dispatch =>{

   try {
      await axios.delete(`${URL}students/${stdID}`);
      dispatch({
         type: DELETE_STUDENTS,
         payload: stdID
      })
   } catch (err) {
      console.log(err)
   }

}

export const editStudent = (frmStdData, id) => async dispatch =>{

   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.put(`${URL}students/${id}`, frmStdData, config);
      dispatch({
         type: EDIT_STUDENTS,
         payload: res.data
      })
   } catch (err) {
      console.log(err)
   }

}

