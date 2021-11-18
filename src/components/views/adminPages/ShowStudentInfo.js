import React, {Fragment} from 'react'

import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FrmShowStudentInfo from '../../forms/FrmShowStudentInfo'

function ShowStudentInfo() {

   const auth = useSelector((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />
   
   return (
      <Fragment>
         <FrmShowStudentInfo />
      </Fragment>
   )
}

export default ShowStudentInfo
