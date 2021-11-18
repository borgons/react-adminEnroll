import React, {Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import FrmAddStudent from '../../forms/FrmAddStudent'

//FORMS
function AddStudent() {
   
   const auth = useSelector((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />
   
   return (
      <Fragment>
         <FrmAddStudent />
      </Fragment>
   )
}

export default AddStudent
