import React, {Fragment} from 'react'

import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FrmShowEnrollInfo from '../../forms/FrmShowEnrollInfo'

function ShowEnrollInfo(){

   const auth = useSelector((state) => state.auth.token);

   if(!auth) return <Redirect to ="/" />

   return (
      <Fragment>
         <FrmShowEnrollInfo />
      </Fragment>
   )

}



export default ShowEnrollInfo
