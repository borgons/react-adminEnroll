import React, {Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import axios from 'axios'
import { URL } from '../../utils/utils'

import { Button } from 'react-materialize'

import loadingSpinner from '../loading/LoadingHooks'
import FrmStudentsTable from '../frmTables/FrmStudentsTable'

import '../../Global.css'

const FrmStudentInfo = () => {

   // LOADING STATE
   const [loader, showLoader, hideLoader] = loadingSpinner();


   // FORM STATE
   const [students, updateStudents] = useState([]);
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(4);
   const [skip, setSkip] = useState(0)

   async function getStudents(){
      showLoader();
      const res = await axios(`${URL}students/allStudents?page=${page}&skip=${skip}`,  {timeout:5000})
         try {
            hideLoader();
            updateStudents(res.data.data) 
            // console.log(res.data.data)
         } catch (err) {
            console.log(err);
         }
   }

   const nextPage = () => {
      setSkip(skip + limit)
      setPage(page + 1)
   }

   const previousPage = () => {
      setSkip(skip - limit)
      setPage(page - 1)
   }

   //  FETCHING
   useEffect(() => {
      getStudents(page, skip);  //eslint-disable-next-line
   }, [page, skip])
   
   let { docs,  totalPages, hasNextPage, hasPrevPage } = students;

   //SEARCH
   const onSearch = (search) => {
      showLoader();
      axios.get(`${URL}students/allStudents?stdID=${search}`, {timeout:5000})
         .then(res => {
            hideLoader();
            updateStudents(res.data.data)
         })
   }

   return (
      <Fragment>
         <div className="container">
            <div className="row">
               <div className="col s8 offset-s2">
                  <div className="card">
                     <div className="card-content lime lighten-3">
                        
                        <h6 
                           className="center-align"
                           style={{marginBottom:'2rem',
                                 fontWeight:'500'}}>
                              Please search here
                        </h6>

                        <div className="row">
                           <div className="col s6 offset-s3">
                              <div className="input-field">
                                 <label 
                                    className="active black-text"
                                    htmlFor="search"
                                    style={{fontSize:'1.3rem'}}> 
                                    Search StdID
                                 </label>
                                 <input
                                    className="validate"
                                    onChange={e => onSearch(e.target.value)}
                                    type="text"
                                 />
                              </div>
                           </div>
                        </div>

                        <div className="row">
                           <div className="col s6 ">
                           <Link to='/addStudent'> 
                              <Button className="green darken-4">
                                 <i className="material-icons left">add_box</i>
                                 Add Students
                              </Button>
                           </Link>
                           </div> 
                        </div>

                        
                     </div>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col s8 offset-s4">
                  {loader}
               </div>
            </div>

            <table className="highlight centered">
               <thead>
                  <tr>
                     <th>Std ID:</th>
                     <th>Std FirstName</th>
                     <th>Std LastName</th>
                     <th colSpan="2">Actions</th>
                  </tr>
               </thead>

               {docs && docs.map((student, key) => {
                  return(
                     <FrmStudentsTable 
                        student={student}
                        key={key}
                     />
                  );
               })}
            </table>

            <div className="row">
               <div className="col s8 offset-s4">
                  <ul className="pagination">
                     <li>
                        <Button
                           tooltip="Previous"
                           tooltipOptions={{
                              position: 'left'
                           }}
                           style={{marginRight:'2rem'}}
                           className={`btn-small green darken-4 ${hasPrevPage ? 'active' : 'disabled'} `}
                           onClick={previousPage}> 
                           <i className="material-icons">chevron_left</i>
                        </Button>
                     </li>
                     <li><p>Pages {page} to {totalPages}</p></li>
                     <li>
                        <Button 
                           tooltip="Next"
                           tooltipOptions={{
                              position: 'right'
                           }}
                           style={{marginLeft:'2rem'}}
                           className={`btn-small green darken-4 ${hasNextPage ? 'active' : 'disabled'} `} 
                           onClick={nextPage}>
                           <i className="material-icons">chevron_right</i>
                        </Button>
                     </li>
                  </ul>
               </div>
            </div>

         </div>
      </Fragment>
   )
}





export default FrmStudentInfo;
