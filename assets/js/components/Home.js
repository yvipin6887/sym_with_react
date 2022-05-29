// ./assets/js/components/Home.js
    
import React, {Component} from 'react';
import { Routes,Route, Navigate, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
import AddUserForm from './AddUserForm';
    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> Symfony React Project </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/posts"}> Posts </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Users </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Routes>
                  <Route exact path="/" element={<Users />} />
                   <Route exact path="/users" element={<Users />} />
                   <Route exact path="/posts" element={<Posts />} />
                   <Route exact path="/add-user" element={<AddUserForm />} />
               </Routes>
           </div>
        )
    }
}
    
export default Home;
