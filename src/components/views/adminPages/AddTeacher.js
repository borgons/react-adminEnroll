import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FrmAddTeacher from '../../forms/FrmAddTeacher'

function AddTeacher() {
   const auth = useSelector ((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />

   return (
      <Fragment>
         <FrmAddTeacher />
      </Fragment>
   )
}

export default AddTeacher