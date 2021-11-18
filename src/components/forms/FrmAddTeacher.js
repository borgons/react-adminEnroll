import React, {Fragment, useState} from 'react'

import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addTeacher } from '../../actions/teacherActions'

import { Button } from 'react-materialize'

const  FrmAddTeacher = ({ addTeacher }) => {

   const [frmTchData, setFrmTchData] = useState(
      {
         tchID:"",
         tchFirstName:"",
         tchLastName:""
      }, []);
   
      const {
         tchID,
         tchFirstName, 
         tchLastName
      } = frmTchData;

   const onChange = (e) => {
      setFrmTchData({ ...frmTchData, [e.target.name]: e.target.value})
   }

   const onSubmit = (e) => {
      e.preventDefault();
      console.log(frmTchData)
      addTeacher(frmTchData)

      setFrmTchData({
         tchID:"",
         tchFirstName:"",
         tchLastName:""
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
                                    Teacher ID
                                 </label>
                                 <input 
                                    type="number"
                                    name="tchID"
                                    value={tchID}
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
                                    Tch FirstName
                                 </label>
                                 <input 
                                    type="text"
                                    name="tchFirstName"
                                    value={tchFirstName}
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
                                    Tch LastName
                                 </label>
                                 <input 
                                    type="text"
                                    name="tchLastName"
                                    value={tchLastName}
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
                                 to ='/tchInfo'>
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

FrmAddTeacher.propTypes = {
   addTeacher: PropTypes.func.isRequired,
}



export default connect(null, {addTeacher}) (FrmAddTeacher)
