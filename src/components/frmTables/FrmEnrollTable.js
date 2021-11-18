import React, {Fragment} from 'react'
import Moment from 'react-moment'

import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteEnroll } from '../../actions/enrollActions'

const FrmEnrollTable = ({enroll:{enNum},deleteEnroll, enroll}) => {

   const {
      enSclYear,
      enGrade,
      enDate,
      enSection,
      enStudent
   } = enroll;

   return (
      <Fragment>
         <tbody>
            <tr>
               <td>{enNum}</td>
               <td>{enSclYear}</td>
               <td>{enGrade}</td>
               <td>{enSection}</td>
               <td><Moment format="YYYY/MM/DD">{enDate}</Moment></td>
               <td>{enStudent.stdID}</td>
               <td>
                  <Link 
                     to={`/showEnroll/${enroll._id}`}
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
                     to ={`/enrollment/${enNum}`}>
                     <Button 
                        onClick={() => deleteEnroll(enNum)}
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

FrmEnrollTable.propTypes = {
   deleteEnroll: PropTypes.func.isRequired,
   enroll: PropTypes.object.isRequired
}


export default connect(null,  {deleteEnroll})(FrmEnrollTable)
