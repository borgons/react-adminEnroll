import React, {Fragment, useState} from 'react'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addStudent } from '../../actions/studentActions'

import { Button } from 'react-materialize'

const FrmAddStudent = ({ addStudent}) => {

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
      e.preventDefault();
      console.log(frmStdData)
      addStudent(frmStdData);

      setFrmStdData({
         stdID:"",
         stdFirstName:"",
         stdLastName:"",
         stdGender:""
      })

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
                                       type="number"
                                       name="stdID"
                                       value={stdID}
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
                                 <label className="black-text ">Gender</label>
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
                                    style={{marginRight:'1.0rem'}}
                                    tooltip="Add Student"
                                    tooltipOptions={{
                                       position: 'bottom'
                                    }}
                                    className="btn green darken-3">
                                    <i className="material-icons ">add_box</i>
                                 </Button>
                                 <Link 
                                    to ='/stdInfo'>
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

FrmAddStudent.propTypes = {
   addStudent: PropTypes.func.isRequired,
}






export default connect(null, {addStudent}) (FrmAddStudent)