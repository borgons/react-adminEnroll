import React, {Fragment , useState} from 'react'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router'
import { Button } from 'react-materialize'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { editTeacher } from '../../actions/teacherActions'

const FrmShowTeacherInfo = ({ editTeacher }) => {
   // PARAMS
   const { id } = useParams();

   // DEALING WITH FORMS
   const [frmTchData, setFrmTchData] = useState(
      {
         tchID:"",
         tchFirstName:"",
         tchLastName:""
      },[]);

   const {
      tchID,
      tchFirstName, 
      tchLastName
   } = frmTchData;
   
   const onChange = e => {
      setFrmTchData({...frmTchData, [e.target.name]: e.target.value})
   }

   const onSubmit = e => {
      e.preventDefault()

      console.log(frmTchData)
      editTeacher(frmTchData, id)
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
                                       Teacher FirstName
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
                                       Teacher LastName
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
                                    tooltip="Edit Student"
                                    tooltipOptions={{
                                       position: 'bottom'
                                    }}
                                    className="btn blue darken-4"
                                    style={{marginRight:'1rem'}}>
                                    <i className="material-icons ">create</i>

                                 </Button>
                                 <Link 
                                    to ={'/tchInfo'}>
                                    <Button 
                                       tooltip="Back to Teachers Data"
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

FrmShowTeacherInfo.propTypes = {
   editTeacher: PropTypes.func.isRequired
}

export default connect(null, {editTeacher}) (FrmShowTeacherInfo)
