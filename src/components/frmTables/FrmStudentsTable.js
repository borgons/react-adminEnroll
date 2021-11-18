import React, {Fragment} from 'react'

import { Link } from 'react-router-dom';
import { Button } from 'react-materialize'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteStudent } from '../../actions/studentActions';

const FrmStudentsTable = ({student:{stdID},deleteStudent, student}) => {

   const {
      stdFirstName, 
      stdLastName, 
   }= student;

   
   return (
      <Fragment>
         <tbody>
            <tr>
               <td>{student.stdID}</td>
               <td>{stdFirstName}</td>
               <td>{stdLastName}</td>
               <td>
                  <Link 
                     to={`/showStudent/${student._id}`}
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
                     to={`/stdInfo/${stdID}`}
                  >
                     <Button
                        onClick={()=> deleteStudent(stdID) }
                        tooltip="Delete Student"
                        tooltipOptions={{
                           position: 'right'
                        }}
                        className="btn red darken-4"
                     >
                     <i className="material-icons center">delete_forever</i>
                     </Button>
                  </Link>
               </td>
            </tr>
         </tbody>
      </Fragment>
   )
}

FrmStudentsTable.propTypes = {
   deleteStudent: PropTypes.func.isRequired,
   student: PropTypes.object.isRequired
}


export default connect(null, {deleteStudent}) (FrmStudentsTable)
