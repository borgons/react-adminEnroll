import React, {Fragment} from 'react'

import { Link } from 'react-router-dom' 
import { Button } from 'react-materialize';

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTeacher } from '../../actions/teacherActions'

import MdlAddStudents from '../modals/MdlAddStudents';

const FrmTeacherAssignTable = ({teacher:{tchID},deleteTeacher,teacher}) => {

   const {
      tchFirstName, 
      tchLastName, 
      tchStudents
   } = teacher;

   const students = Object.values(tchStudents).map(tchStudent => tchStudent.stdID)
      
   return(
      <Fragment>
         <tbody>
            <tr>
               <td>{tchID}</td>
               <td>{tchFirstName}</td>
               <td>{tchLastName}</td>
               <td>{String(students).substring(0,6)}
                  { teacher.tchStudents >= 0 ? 
                     <span 
                     style={{
                        color:'#990000',
                        fontWeight:'500'
                     }}>
                     Please add to assign...
                     </span> :
                     <span 
                     style={{
                        color:'#990000',
                        fontWeight:'500'
                     }}>
                     &nbsp;({Object.values(teacher.tchStudents).length}...)
                     </span> 
                  }
                  <Link to={`/tchInfo/${tchID}`}>
                     <MdlAddStudents 
                        teacher={teacher}
                        />
                  </Link>
               </td>
               <td>
                  <Link 
                     to={`/showTeacher/${teacher._id}`}
                  >
                     <Button
                        tooltip="Edit Student"
                        tooltipOptions={{
                           position: 'left'
                        }}
                        className="btn blue darken-4"
                     >
                     <i className="material-icons center">create</i>
                     </Button>
                  </Link>
               </td>
               <td>
                  <Link 
                     to ={`/tchInfo/${teacher.tchID}`}>
                     <Button 
                        onClick={() => deleteTeacher(tchID)}
                        tooltip="More Info"
                        tooltipOptions={{
                           position: 'right'
                        }}
                        className="btn red darken-4">
                        <i className="material-icons center">delete_forever</i>
                     </Button>
                  </Link>
               </td>
            </tr>
         </tbody>
      </Fragment>
   )
}

FrmTeacherAssignTable.propTypes = {
   deleteTeacher: PropTypes.func.isRequired,
   teacher: PropTypes.object.isRequired
}




export default connect(null, {deleteTeacher})(FrmTeacherAssignTable)