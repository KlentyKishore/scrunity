

import {React,useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

//components
import Nav from "./components/Nav";

//pages
import Home from './pages/Home';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";
import EmailVerified from "./pages/EmailVerified";
import UserProfile from "./pages/UserProfile";
import Logout from "./pages/Logout";
import AllFolder from "./pages/AllFolder";

import Folder from "./pages/AllFolder";
import MyQuestions from "./pages/MyQuestions";
import Questions from './pages/Questions';
import AddQuestion from "./pages/AddQuestion";
import EditQuestion from "./pages/EditQuestion";
import Users from "./pages/Users"
import AccessList from "./pages/AccessList"

import NotFound from "./pages/NotFound";

//utils
import MyRoute from './utils/Route';

import API from "./utils/API";

//styles
import './App.css';

function App(props) {

  const [user,setUser]=useState(API.isAuth());

  return (
    <>
     
      <Router>
      <Nav user={API.getUserFromToken()}/>
        <Switch>

          <Route exact path="/" component={Home}/>
          
          <MyRoute.UserRestrictedRoute  path="/signin" component={()=>{return(<Signin setUser={setUser}/>)}}/>
          <MyRoute.UserRestrictedRoute  path="/signup" component={Signup} />

          <Route exact path="/user/verifiy/email/:USER_ID"  component={EmailVerified}/>
          
          <Route exact path="/user/forgetPassword" component={ForgetPassword} />
          <Route path="/user/reset/password/:PASSWORD_ID" component={ResetPassword} />
          
          <Route exact path="/questions" component={()=><Questions isLoggedIn={API.isAuth()}/>} />
                    
          <MyRoute.ProtectedRoute path="/user/profile"  component={UserProfile}/>
          <MyRoute.ProtectedRoute path="/user/Allfolder"  component={AllFolder}/>

          <MyRoute.ProtectedRoute path="/user/createFolder"  component={Folder} />
          <MyRoute.ProtectedRoute path="/user/myQuestions"  component={MyQuestions} />
          <MyRoute.ProtectedRoute path="/user/AddQuestion"  component={AddQuestion} />
          <MyRoute.ProtectedRoute path="/user/edit/question/:QUESTION_ID" component={EditQuestion} />
          <Route path="/admin/users" component={Users} />
          <Route path="/admin/accessList" component={AccessList} />

          
          <MyRoute.ProtectedRoute path="/user/logout"  component={()=>{return(<Logout setUser={setUser}/>)}}/>
          
          <Route component={NotFound}/>
        </Switch>
       
      </Router>
    </>
  );
}

export default App;