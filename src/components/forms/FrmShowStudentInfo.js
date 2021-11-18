import React, {Fragment, useState} from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editStudent } from '../../actions/studentActions'

import { Button } from 'react-materialize'

const FrmShowStudentInfo = ({ editStudent }) => {
   // PARAMS
   const { id} = useParams();

   // DEALING WITH FORMS
   const [frmStdData, setFrmStdData] = useState(
      {
         
         stdID:"",
         stdFirstName:"",
         stdLastName:"",
         stdGender:""
      }, []);

   const {
      stdID,
      stdFirstName, 
      stdLastName, 
      stdGender
   } = frmStdData;

   const onChange = e => {
      setFrmStdData({ ...frmStdData, [e.target.name]: e.target.value})
   }

   const onSubmit = e => {
      e.preventDefault()
      
      console.log(frmStdData)
      editStudent(frmStdData, id)
   }

   return (
      <Fragment>
         <div className="container">
            <div className="row">
               <div className="col s8 offset-s2">
                  <div className="card">
                     <div className="card-content lime lighten-3">

                        <form onSubmit={onSubmit}>
                           <div className="row">
                              <div className="col s6 offset-s3">
                                 <div className="input-field">
                                    <label 
                                       htmlFor="" 
                                       className="active black-text"
                                       style={{fontSize:'1.3rem'}}>
                                       Std ID
                                    </label>
                                    <input 
                                       type="text"
                                       name="stdID"
                                       value={ stdID }
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
                                       htmlFor="" 
                                       className="active black-text"
                                       style={{fontSize:'1.3rem'}}>
                                       Std FirstName
                                    </label>
                                    <input 
                                       type="text"
                                       name="stdFirstName"
                                       value={stdFirstName}
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
                                       htmlFor="" 
                                       className="active black-text"
                                       style={{fontSize:'1.3rem'}}>
                                       Std LastName
                                    </label>
                                    <input 
                                       type="text"
                                       name="stdLastName"
                                       value={stdLastName}
                                       className="validate"
                                       onChange={(e) => onChange(e)}
                                    />
                                 </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col s6 offset-s3">
                                 <label className="black-text ">Browser Select</label>
                                 <select 
                                    className="browser-default"   
                                    name="stdGender"
                                    value={stdGender}
                                    onChange={(e) => onChange(e)}
                                 >
                                    <option value="" disabled selected>Choose your option</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                 </select>
                              </div>
                           </div>

                           <div className="row">
                              <div className="col s6 offset-s3" >
                                 <Button 
                                    tooltip="Edit Student"
                                    tooltipOptions={{
                                       position: 'bottom'
                                    }}
                                    className="btn blue darken-4"
                                    style={{marginRight:'1rem'}}>
                                    <i className="material-icons ">create</i>

                                 </Button>
                                 <Link 
                                    to ={'/stdInfo'}>
                                    <Button 
                                       tooltip="Back to Student Data"
                                       tooltipOptions={{
                                          position: 'right'
                                       }}
                                       className="btn grey darken-3">
                                       <i className="material-icons ">backspace</i>
                                    </Button>
                                 </Link>
                              </div>
                           </div>

                        </form>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   )
}

FrmShowStudentInfo.propTypes = {
   editStudent: PropTypes.func.isRequired,
}





// export default FrmShowStudentInfo
export default connect(null, {editStudent})(FrmShowStudentInfo)
