import React from 'react';
import {BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Catagories from './components/catagories/Catagories';
import Profile from './components/profile/Profile';
import ProviderSignup from './components/Provider-signup/Provider-signup'
import Navbar from "./components/Nav-bar/Nav-bar";
import Categories from "./components/Categories-container/Categories-container";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main-view/Main-view";
import ForgotPassword from "./components/Forgot-password/Forgot-password";
import ResetPassword from "./components/Reset-password/Reset-password";
import ResetPasswordConfirm from "./components/Reset-password/Reset-password-confirm"
import ProviderContainer from "./components/Provider-container/Provider-container";
import Activate from './components/Activate';
import Search from "./components/Search/Search";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />
<<<<<<< HEAD
        <Signup />
        <Login />
        {/* <ProviderSignup />  */}
         <Catagories />

        <Switch>

          <Route exact path="/" component={Main} />
          <Route exact path="/" component={Categories} />
          {/* <Route path="/prov/signup" component={ProviderSignup} /> */}
          <Route path="/user/signup" component={Signup} />
          <Route path="/user/login" component={Login} />
          {/* <Route path="/provider" component={ProviderContainer} /> */}
          <Route path="/reset_password" component={ForgotPassword} />
          <Route path="/reset_password" component={ResetPassword} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
=======
        {/* <Signup />
        <Login /> */}
        {/* <ProviderSignup /> */}
        {/* <Catagories /> */}
        {/* <Search /> */}

        <Switch>

          {/* <Route exact path="/" component={Main} /> */}
          {/* <Route exact path="/" component={Categories} /> */}
          {/* <Route path="/prov/signup" component={ProviderSignup} /> */}
          {/* <Route path="/user/signup" component={Signup} /> */}
          {/* <Route path="/user/login" component={Login} /> */}
          {/* <Route path="/provider" component={ProviderContainer} /> */}
          <Route path="/auth/users/reset_password/" component={ForgotPassword} />
          <Route path="/reset/:token" component={ResetPassword} />
>>>>>>> 57236b1aeb8935a1aef9e126eaed1630b81ff683
          <Route path="/activate/:uid/:token" component={Activate} />

        </Switch>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
