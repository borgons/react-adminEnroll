import axios from 'axios'

import { ADD_TEACHERS, EDIT_TEACHERS, DELETE_TEACHERS } from './type'

import { URL } from '../utils/utils'

export const addTeacher = (frmTchData) => async dispatch => {

   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.post(`${URL}teachers/addTeachers`,frmTchData,  config)
         dispatch({
            type: ADD_TEACHERS,
            payload: res.data
         })
   } catch (err) {
      console.log(err)
   }

}

export const deleteTeacher = tchID => async dispatch => {
   
   try {
      await axios.delete(`${URL}teachers/${tchID}`);
      dispatch({
         type: DELETE_TEACHERS,
         payload: tchID
      })
   } catch (err) {
      console.log(err)
   }
}

export const editTeacher = (frmTchData, id) => async dispatch =>{

   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.put(`${URL}teachers/${id}`, frmTchData, config);
         dispatch({
            type: EDIT_TEACHERS,
            payload: res.data
         })

   } catch (err) {
      console.log(err)
   }

}  