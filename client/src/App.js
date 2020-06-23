import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch'
import Home from './components/Home';
import UserView from './components/UserView'
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser'
import ProtectedRoute from './components/ProtectedRoute';
import Users from './components/Users';
import Profile from './components/Profile';


function App() {
  return (
   <>
   <NavBar/>
   <FetchUser>
   <Container>
     <Switch>
       <ProtectedRoute exact path='/' component={Home}/>
       <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
       <ProtectedRoute exact path='/users' component={Users}/>
       <ProtectedRoute exact path='/users/:id' component={UserView}/> 
       <ProtectedRoute exact path='/profile' component={Profile}/>     
       <Route component={NoMatch}></Route>
     </Switch>
   </Container>
   </FetchUser>
   </>
  );
}

export default App;
