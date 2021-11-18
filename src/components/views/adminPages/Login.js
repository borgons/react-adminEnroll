import React from 'react'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import FrmLogin from '../../forms/FrmLogin'

function Login() {

   const auth = useSelector((state) => state.auth.token);

   if(auth) {return <Redirect to= "/stdInfo" />}

   return (
      <div>
         <FrmLogin/>
      </div>
   )
}

export default Login
