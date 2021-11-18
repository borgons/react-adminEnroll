import React, {Fragment, useState} from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editEnroll } from '../../actions/enrollActions'

import { Button } from 'react-materialize'

const FrmShowEnrollInfo = ({ editEnroll }) => {
   // PARAMS
   const { id } = useParams();

   //DEALING WITH FORMS
   const [frmEnrlData, setFrmEnrlData] = useState(
      {
         enNum:"",
         enSclYear:"",
         enGrade:"",
         enSection:"",
         enStudent:""
      },[]);

   const {
      enNum,
      enSclYear,
      enGrade,
      enSection,
      enStudent
   } = frmEnrlData;

   
   const onChange = (e) => {
      setFrmEnrlData({...frmEnrlData, [e.target.name]: e.target.value})
   }
   
   const onSubmit = (e) => {
      e.preventDefault()

      console.log(frmEnrlData)
      editEnroll(frmEnrlData, id)
   }


   return (
      <Fragment>
         <div className="container">
            <div className="row">
               <div className="col s8 offset-s2">
                  <div className="card">
                     <div className="card-content lime lighten-3">

                        <form onSubmit={onSubmit}>
                           <p>{id}</p>
                           <div className="row">
                              <div className="col s6 offset-s3">
                                 <div className="input-field">
                                    <label 
                                       htmlFor="" 
                                       className="active black-text"
                                       style={{fontSize:'1.3rem'}}>
                                       Enroll No.
                                    </label>
                                    <input 
                                       type="number"
                                       name="enNum"
                                       value={enNum}
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
                                       Enroll S.Y
                                    </label>
                                    <input 
                                       type="text"
                                       name="enSclYear"
                                       value={enSclYear}
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
                                       Enroll Grade
                                    </label>
                                    <input 
                                       type="number"
                                       name="enGrade"
                                       value={enGrade}
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
                                       Enroll Section
                                    </label>
                                    <input 
                                       type="text"
                                       name="enSection"
                                       value={enSection}
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
                                       Enroll Student Info
                                    </label>
                                    <input 
                                       type="text"
                                       name="enStudent"
                                       value={enStudent}
                                       className="validate"
                                       onChange={(e) => onChange(e)}
                                    />
                                 </div>
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
                                    to ={'/enrollment'}>
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

FrmShowEnrollInfo.propTypes = {
   editEnroll: PropTypes.func.isRequired
}

export default connect(null, {editEnroll}) (FrmShowEnrollInfo)
