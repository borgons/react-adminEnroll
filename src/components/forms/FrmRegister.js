import React, {Fragment , useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { register } from '../../actions/authActions'

import { ToastContainer } from 'react-toastify'

import { Link } from 'react-router-dom'

const FrmRegister = ({ register }) => {

   const [frmRegData, setFrmRegData] = useState(
      {
         adminID:"",
         adminFirst:"",
         adminLast:"",
         adminPassword:"",
         adminConfirmPassword:""
      },
      []
   );

   const { 
      adminID, 
      adminFirst, 
      adminLast, 
      adminPassword,
      adminConfirmPassword
   } = frmRegData  

   const onChange = e => {
      setFrmRegData({ ...frmRegData, [e.target.name]: e.target.value})
   }

   const onSubmit = e => {
      e.preventDefault();
   
      register(frmRegData)

      
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
                                             type="number" 
                                             name="adminID" 
                                             value={adminID}
                                             className="validate"
                                             onChange={(e) => onChange(e)}
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
                                          style={{fontSize:'1.3rem'}}>Admin First
                                       </label>
                                       <input 
                                          type="text" 
                                          name="adminFirst" 
                                          value={adminFirst}
                                          className="validate"
                                          onChange={(e) => onChange(e)}
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
                                          style={{fontSize:'1.3rem'}}>Admin Last
                                       </label>
                                       <input 
                                          type="text" 
                                          name="adminLast" 
                                          value={adminLast}
                                          className="validate"
                                          onChange={(e) => onChange(e)}
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
                                          type="password" 
                                          name="adminPassword" 
                                          value={adminPassword}
                                          className="validate"
                                          onChange={(e) => onChange(e)}
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
                                          style={{fontSize:'1.3rem'}}>Confirm Password
                                       </label>
                                       <input 
                                          value={adminConfirmPassword}
                                          name="adminConfirmPassword" 
                                          type="password" 
                                          className="validate"
                                          onChange={(e) => onChange(e)}
                                          />
                                    </div>
                                 </div>
                              </div>

                              <div className="row">
                                 <div className="col s6 offset-s3" >
                                    <button 
                                       className="btn green">
                                       <i className="material-icons left">check</i>Submit
                                    </button>
                                 </div>
                              </div>
                              
                           </form>

                           <div className="content" style={{marginBottom:'2rem'}}>
                              <div className="col s8 offset-s3">
                                 <div className="has-text">
                                    <Link to="/" style={link}>If you already an account, Please Login</Link>
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

FrmRegister.propTypes = {
   register:PropTypes.func.isRequired
}

export default connect(null, {register})(FrmRegister)
