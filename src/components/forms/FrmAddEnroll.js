import React, {Fragment, useState} from 'react'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEnroll }  from '../../actions/enrollActions'

import { Button } from 'react-materialize'

const FrmAddEnroll = ({ addEnroll }) => {

   const [frmEnrlData, setFrmEnrlData ] = useState(
      {
         enNum:"",
         enSclYear:"",
         enGrade:"",
         enSection:"",
         enStudent:""
      }, []);

   const {
      enNum, 
      enSclYear,
      enGrade,
      enSection,
      enStudent
   } = frmEnrlData;

   const onChange = e => {
      setFrmEnrlData({ ...frmEnrlData, [e.target.name]: e.target.value})
   }


   const onSubmit = e => {
      e.preventDefault();
      console.log(frmEnrlData)
      addEnroll(frmEnrlData)

      setFrmEnrlData({
         enNum:"",
         enSclYear:"",
         enGrade:"",
         enSection:""
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
                                       School Year
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
                                       Grade
                                    </label>
                                    <input 
                                       type="text"
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
                                       Section
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
                                       Enroll Studuent ID
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
                                    style={{marginRight:'1.0rem'}}
                                    tooltip="Add Student"
                                    tooltipOptions={{
                                       position: 'bottom'
                                    }}
                                    className="btn green darken-3">
                                    <i className="material-icons ">add_box</i>
                                 </Button>
                                 <Link 
                                    to ='/enrollment'>
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

FrmAddEnroll.propTypes = {
   addEnroll: PropTypes.func.isRequired
}


export default connect(null, {addEnroll})(FrmAddEnroll)
