import axios from 'axios'

import { ADD_ENROLL, DELETE_ENROLL, EDIT_ENROLL } from './type'

import { URL } from '../utils/utils'

export const addEnroll = (frmEnrlData) => async dispatch => {

   const config = {
      headers:{
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.post(`${URL}enrolls/addEnrolls`,
      frmEnrlData, config)
         dispatch({
            type: ADD_ENROLL,
            payload: res.data
         })

   } catch (err) {
      console.log(err)
   }
}

export const deleteEnroll = enNum => async dispatch => {

   try {
      await axios.delete(`${URL}enrolls/${enNum}`);
      dispatch({
         type: DELETE_ENROLL,
         payload: enNum
      })
   } catch (err) {
      console.log(err)
   }

}

export const editEnroll = (frmEnrlData, id) => async dispatch => {

   const config = {
      headers: {
         'Content-Type': 'application/json'
      }
   }

   try {
      const res = await axios.put(`${URL}enrolls/${id}`, frmEnrlData, config);
      dispatch({
         type: EDIT_ENROLL,
         payload: res.data
      })
   } catch (err) {
      console.log(err)
   }

}
