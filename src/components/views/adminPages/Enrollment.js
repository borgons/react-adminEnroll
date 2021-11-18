import React, { Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FrmEnrollment from '../../forms/FrmEnrollment'


function Enrollment() {

   const auth = useSelector((state) => state.auth.token);

   if(!auth) return <Redirect to = "/" />

   return(
      <Fragment>
         <FrmEnrollment />
      </Fragment>
   ) 




}

export default Enrollment
