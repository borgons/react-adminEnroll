import axios from 'axios'
import {
   AUTH_ERRORS, USER_LOADED, USER_LOADING, REGISTER_SUCCESS, 
   REGISTER_FAIL,
   LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS
} from './type'

//import { authErrors } from './errorActions'
import { toast } from 'react-toastify'

import { URL } from '../utils/utils'

axios.defaults.withCredentials = true

//Check token and load user
export const loadUser = () => (dispatch, getState) => {

   //USER LOADING
   dispatch({ type: USER_LOADING });

   axios.get(`${URL}auth/admin/adminUser`, tokenConfig(getState))
      .then(res => 
         dispatch({
            type: USER_LOADED,
            payload: res.data
         })
      )
      .catch(err => {
         dispatch({
            type: AUTH_ERRORS
         })
      })
}

//REGISTER USER
export const register = (frmRegData) => async dispatch => {

   const config = {
      headers:{
         'Content-Type': 'application/json' 
      }
   };

   try {
      const res = await axios.post(`${URL}auth/admin/signUp`, frmRegData, config);

      dispatch({
         type: REGISTER_SUCCESS,
         payload: res.data
      });

      toast.success(res.data.msg,{
         theme: 'dark',
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
      });

      setTimeout(() => {
         window.location.href="/"
      }, 3000)
      
   } catch (err) {

      if(err.response.status === 422){
         dispatch({
            type: REGISTER_FAIL, 
            payload: err.response.data.error
         })
         toast.error(err.response.data.error,{
            theme: 'dark',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
         });
         
      } 

      if(err.response.status === 401){
         
         dispatch({
            type: REGISTER_FAIL, 
            payload: err.response.data.error
         })
         toast.error(err.response.data.error,{
            theme: 'dark',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
         });
         
      } 
   }

}

export const login = (frmLogInData) => dispatch => {
   //User Loading
   const config = {
      headers:{
         'Content-Type': 'application/json'
      }
   };

   axios.post(`${URL}auth/admin/login`, frmLogInData, config)
   .then(res => {

      dispatch({
         type:LOGIN_SUCCESS,
         payload: res.data
      });
      
      
      toast.success(res.data.msg,{
         theme: 'dark',
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
      });
      
      setTimeout(() => {
         window.location.href="/stdInfo"
      }, 3000);
   }).catch(err => {

      if(err.response.status === 422){
         dispatch({
            type: LOGIN_FAIL, 
            payload: err.response.data.error
         })
         toast.error(err.response.data.error,{
            theme: 'dark',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
         });
         
      } 

      if(err.response.status === 400){
         dispatch({
            type: LOGIN_FAIL, 
            payload: err.response.data.error
         })
         toast.error(err.response.data.error,{
            theme: 'dark',
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined
         });
         
      }
   }) 


}


export const logout = async dispatch => {

   axios.post(`${URL}auth/admin/logout`)
   .then(res => {
      dispatch({
         type: LOGOUT_SUCCESS,
      })

      toast.success(res.data.msg,{
         theme: 'dark',
         position: "top-right",
         autoClose: 5000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined
      });

   })
   
   setTimeout(() => {
      window.location.href="/"
   }, 3000);

}

   //SETUP CONFIG/HEADERS AND TOKENS
   export const tokenConfig = getState => {

      //GET TOKEN FROM LOCALSTORAGE
      const token= getState().auth.token;

      //HEADERS
      const config = {
         headers:{
            'Content-Type': 'application/json'
         }
      }

      // If token,add to headers
      if(token){
         config.headers['x-auth-token'] = token;
      }

      return config;
   }




