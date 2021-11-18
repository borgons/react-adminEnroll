// import React, { useState, Fragment } from 'react'
// import { Button } from 'react-materialize';

// import axios from 'axios'
// import { URL } from '../../../utils/utils'


// const AssignRemove =({teacher}) => {

//    const [tchStudents, setTchStudents] = useState("")

//    const {
//       tchID, 
//    } = teacher;

//    const assignedStudent = () => {
//       axios.put(`${URL}teachers/assignAddStudents/${tchID}`, {tchStudents})
//          .then(res => {
//             setTchStudents(res.data.data)
//          })
//    }

//    const removedStudents  = () => {
//       axios.put(`${URL}teachers/assignRemoveStudents/${tchID}`, {tchStudents})
//          .then(res => {
//             setTchStudents(res.data.data)
//             setTchStudents("")
//          })
//    }

//    return (
//       <Fragment>
//          <div className="container">
//             <div className="row">
//                <div className="col s8 offset-s2">

//                <p>Please ADD and REMOVE Student ID No. for {tchID}</p>
//                   <ul
//                      style={{marginBottom:'2rem'}}
//                      className="collection">
//                      {
//                         Object.values(teacher.tchStudents).map(tchStudent => {
//                            return(
//                               <li className="collection-item">

//                                     {tchStudent}
//                                     <a href="#!" 
//                                        onClick={removedStudents}
//                                        className="secondary-content"><i 
//                                        className="material-icons red-text text-darken-2">delete_forever</i></a>
                                 
//                               </li>
//                            ); 
//                         })
//                      }
//                   </ul>
            

//                   <div className="row">
//                      <div className="col s6 offset-s3"></div>
//                         <div className="input-field">
//                            <label 
//                               htmlFor="" 
//                               className="active black-text"
//                               style={{fontSize:'1.3rem'}}>
//                               Please type to confirm:
//                            </label>
//                            <input 
//                               type="text"
//                               name="tchStudents"
//                               value={tchStudents}
//                               className="validate"
//                               onChange={(e) => setTchStudents(e.target.value)}
//                               />
//                         </div>
//                      </div>
//                   </div>
            
//                <div className="row">
//                   <div className="col s2 offset-s3" ></div>
                     
//                      <Button 
//                         onClick={assignedStudent}
//                         tooltip="Add Students"
//                         tooltipOptions={{
//                            position: 'right'
//                         }}
//                         className="btn green darken-3">
//                         <i className="material-icons ">add_circle</i>
//                      </Button>
//                </div>

//                <p>There are {Object.values(teacher.tchStudents).length} student/s assigned</p>
//             </div>
//          </div>
//       </Fragment>
//    )
// }


// export default AssignRemove
