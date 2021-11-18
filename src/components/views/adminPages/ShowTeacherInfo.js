import React, {Fragment} from 'react'

import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FrmShowTeacherInfo from '../../forms/FrmShowTeacherInfo'


const ShowTeacherInfo = () => {


   const auth = useSelector((state) => state.auth.token);
   
   if(!auth) return <Redirect to ="/" />

   return (
      <Fragment>
         <FrmShowTeacherInfo />
      </Fragment>
   )
}

export default ShowTeacherInfo
