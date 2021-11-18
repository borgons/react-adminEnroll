import React, { Fragment, useState } from 'react'
import { Modal, Button } from 'react-materialize';

import { Link } from 'react-router-dom'

import axios from 'axios'
import { URL } from '../../utils/utils'

import { toast, ToastContainer } from 'react-toastify'

const trigger = 
   <Button 
      style={{marginLeft:'2rem'}} 
      tooltip="Add More..."
      tooltipOptions={{
         position: 'top'
      }}
      className="btn-small green darken-4">
      <i className="material-icons center ">add_box</i>
   </Button>;

const MdlAddStudents =({teacher}) => {

   const [tchStudents, setTchStudents] = useState("")

   const {
      tchID, 
   } = teacher;

   const assignedStudent = () => {
      axios.put(`${URL}teachers/assignAddStudents/${tchID}`, {tchStudents})
         .then(res => {
            setTchStudents(res.data.data)
            setTchStudents("")

            toast.success(res.data.msg,{
               theme: 'dark',
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined
            });
         }).catch(err => {

            if(err.response.status === 422){
               toast.error(err.response.data.error,{
                  theme: 'dark',
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
               });

            }

         })

   }

   const removedStudents  = () => {
      axios.put(`${URL}teachers/assignRemoveStudents/${tchID}`, {tchStudents})
         .then(res => {
            setTchStudents(res.data.data)
            setTchStudents("")

            toast.success(res.data.msg,{
               theme: 'dark',
               position: "top-right",
               autoClose: 5000,
               hideProgressBar: false,
               closeOnClick: true,
               pauseOnHover: true,
               draggable: true,
               progress: undefined
            });

         }).catch(err => {

            if(err.response.status === 422){
               toast.error(err.response.data.error,{
                  theme: 'dark',
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined
               });
            } 

         })
   }


   // const stdIDNo = Object.values(teacher.tchStudents).map(tchStudent => tchStudent._id )

   const stdObjID = Object.values(teacher.tchStudents).map(tchStudent => {
      return (
         <Fragment>
            <li className="collection-item">
                  <b style={{color:'red'}}>{tchStudent._id}</b>
                  <a href="#!" 
                  onClick={removedStudents}
                  className="secondary-content"><i 
                  className="material-icons red-text text-darken-2">delete_forever</i></a>
            </li>
            <li className="collection-item">
               <b>
                  {tchStudent.stdID} - 
                  {tchStudent.stdFirstName} {tchStudent.stdLastName} - {tchStudent.stdGender}
                  <i className="secondary-content material-icons green-text text-darken-2">details</i>
               </b>
               
            </li>
         </Fragment>
      )
   })

   return (
      <Modal 
      actions={[
         <Link to={`/tchInfo`}>
               <Button flat modal="close" node="button" waves="green">Close</Button>
            </Link>
         ]}
         header="Add Students" 
         trigger={trigger}
         options={{
            dismissible: false,
         }}>
         Please ADD and REMOVE Student ID No. for {tchID}

         <ToastContainer />
         
            <ul
               style={{marginBottom:'2rem'}}
               className="collection">
               {
                  <div>
                     {stdObjID}
                  </div>
               }
            </ul>
         

            <div className="row">
               <div className="col s6 offset-s3"></div>
                  <div className="input-field">
                     <label 
                        htmlFor="" 
                        className="active black-text"
                        style={{fontSize:'1.3rem'}}>
                        Type here to confirm:
                     </label>
                     <input 
                        type="text"
                        name="tchStudents"
                        value={tchStudents}
                        className="validate"
                        onChange={(e) => setTchStudents(e.target.value)}
                        />
                  </div>
            </div>
            
            <div className="row">
               <div className="col s2 offset-s3" ></div>
                  
                  <Button 
                     onClick={assignedStudent}
                     tooltip="Add Students"
                     tooltipOptions={{
                        position: 'right'
                     }}
                     className="btn green darken-3">
                     <i className="material-icons ">add_circle</i>
                  </Button>
            </div>

         <p>There are {Object.values(teacher.tchStudents).length} student/s assigned</p>

      </Modal>
   )
}

export default MdlAddStudents;
