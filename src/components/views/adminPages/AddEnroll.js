import React,  { Fragment }from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FrmAddEnroll from '../../forms/FrmAddEnroll'

// FORMS

function AddEnroll() {

   const auth = useSelector ((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />

   return (
      <Fragment>
         <FrmAddEnroll />
      </Fragment>
   )
}

export default AddEnroll
