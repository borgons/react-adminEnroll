import React, { Fragment } from 'react'
import { Redirect } from 'react-router'
import { useSelector } from 'react-redux'
import FrmTeacherAssign from '../../forms/FrmTeacherAssign'


function TeacherAssign() {

   const auth = useSelector((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />

   return (
      <Fragment>
         <FrmTeacherAssign />
      </Fragment>
   )
}

export default TeacherAssign
