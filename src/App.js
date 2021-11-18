import React, {useEffect} from 'react'
import { BrowserRouter 
  as Router, Route} from 'react-router-dom'

import { useDispatch } from 'react-redux'

import Navbar from './components/layouts/Navbar'

// ADMIN PAGES
import Login from './components/views/adminPages/Login'
import Register from './components/views/adminPages/Register'

import StudentInfo from './components/views/adminPages/StudentInfo'
import Enrollment from './components/views/adminPages/Enrollment'
import TeacherInfo from './components/views/adminPages/TeacherInfo'

import ShowStudentInfo from './components/views/adminPages/ShowStudentInfo'
import ShowEnrollInfo from './components/views/adminPages/ShowEnrollInfo'
import ShowTeacherInfo from './components/views/adminPages/ShowTeacherInfo'

import AddStudent from  './components/views/adminPages/AddStudent'
import AddEnroll from  './components/views/adminPages/AddEnroll'
import AddTeacher from  './components/views/adminPages/AddTeacher';



import { loadUser } from './actions/authActions'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
      <Router>
        <div className="router">
            <Navbar />
            <Route path="/" exact render={(props) => (
              <>
                <Login />
              </>
            )} />
            <Route path="/register" component={Register} />
            <Route path="/stdInfo" component={StudentInfo} />
            <Route path="/addStudent" component={AddStudent} />
            <Route path="/showStudent/:id" component={ShowStudentInfo} />

            <Route path="/enrollment" component={Enrollment} />
            <Route path="/addEnroll" component={AddEnroll} />
            <Route path="/showEnroll/:id" component={ShowEnrollInfo} />
            
            <Route path="/tchInfo" component={TeacherInfo} />
            <Route path="/addTeacher" component={AddTeacher} />
            <Route path="/showTeacher/:id" component={ShowTeacherInfo} />


        </div>  
      </Router>
  );
}


export default App;
