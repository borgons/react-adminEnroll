import React, {Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FrmStudentInfo from '../../forms/FrmStudentInfo';

//FORMS
function StudentInfo() {
   
   const auth = useSelector((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />
   return (
      <Fragment>
         <FrmStudentInfo />
      </Fragment>
   )

}

export default StudentInfo
