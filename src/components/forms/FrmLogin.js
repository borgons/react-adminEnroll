import React, {Fragment, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { login } from '../../actions/authActions'

import { Link } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'

const FrmLogin = ({ login }) => {

   const [frmLogInData, setFrmLogInData] = useState({
      adminID:"",
      adminPassword:""
   },[] )

   const { adminID, adminPassword } = frmLogInData;

   const onChange = e => {
      setFrmLogInData({ ...frmLogInData, [e.target.name]: e.target.value})
   }

   const onSubmit = e => {
      e.preventDefault();
      login(frmLogInData)

      setFrmLogInData({
         adminID:"",
         adminPassword:""
      })
   }

   return (
      <Fragment>
      <ToastContainer />
         <div className="container"
            style={{marginTop:'5rem'}}>
            <div className="row">
                  <div className="col s8 offset-s2 ">
                     <div className="card">
                        <div className="card-content lime lighten-3">

                           <form onSubmit={onSubmit}>
                              <div className="row">
                                 <div className="col s6 offset-s3">
                                    <div className="input-field">
                                       <label 
                                          className="active black-text" 
                                          htmlFor="first_name"
                                          style={{fontSize:'1.3rem'}}>
                                          AdminID
                                       </label>
                                       <input 
                                          name="adminID"
                                          value={adminID}
                                          type="text" 
                                          onChange={(e) => onChange(e)}
                                          className="validate"
                                          />
                                    </div>
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col s6 offset-s3">
                                    <div className="input-field">
                                       <label 
                                          className="active black-text" 
                                          htmlFor="last_name"
                                          style={{fontSize:'1.3rem'}}>Password
                                       </label>
                                       <input 
                                          name="adminPassword"
                                          value={adminPassword}
                                          type="password" 
                                          onChange={(e) => onChange(e)}
                                          className="validate"
                                          />
                                    </div>

                                    <div className="row">
                                       <div className="col s6 offset-s3">
                                          <button 
                                             className="btn green">
                                             <i className="material-icons left">check</i>login
                                          </button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </form>

                           <div className="content" style={{marginBottom:'2rem'}}>
                              <div className="col s8 offset-s3">
                                 <div className="has-text">
                                    <Link to="/register" style={link}>If you dont have an account, Please Register</Link>
                                 </div>
                              </div>
                           </div> 

                        </div>
                     </div>
                  </div>
            </div>
         </div>
      </Fragment>
   )
}

const link = {
   color:'#064673',   
}

FrmLogin.propTypes = {
   login: PropTypes.func.isRequired
}

export default connect(null, {login})(FrmLogin)
