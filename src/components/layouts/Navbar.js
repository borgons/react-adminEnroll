import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/authActions'

import Logo from '../../assets/img/schoolLogo.png'

const Navbar = () => {

   const dispatch = useDispatch();
   const token = useSelector((state) => state.auth.token)

   //LOGOUT
   const handleLogOut = () => {
      dispatch(logout)
   }

   const authNav = (
      <Fragment>
         <nav className="green darken-4" style={{marginBottom:'5px'}}>
            <div className="nav-wrapper">
               <img style={{marginLeft:'12px'}} src={Logo} width="58" height="58" alt="School Logo"/>
               <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li>
                     <Link to="/stdInfo">
                        <i className="large material-icons left">content_paste</i>Student Info
                     </Link>
                  </li>
                  <li>
                     <Link to="enrollment">
                        <i className="medium material-icons left">person_add</i>Enrollment
                     </Link>
                  </li>
                  <li>
                     <Link to="/tchInfo">
                        <i className="medium material-icons left">assignment_ind</i>Teacher ASMT
                     </Link>
                  </li>
                  <li>
                     <button 
                        onClick={() => handleLogOut() }
                        className="btn green">
                        Logout
                     </button>
                  </li>
               </ul>
            </div>
         </nav>
      </Fragment>
   );

   const guestNav = ('');

   return (

      <Fragment>
         {/* NAVBAR HERE*/}
         { token ? authNav : guestNav}
      </Fragment>

   )
}

Navbar.propTypes ={
   logout: PropTypes.func.isRequired
}

export default connect(null, {logout})(Navbar);
