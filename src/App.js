import DefaultLayout from './layouts/default/default-layout'
import DashboardLayout from './layouts/dashboard/dashboard-layout'
import AuthLayout from './layouts/auth/auth-layout'
import Navigation from './components/nav/navigation'
import ActivityBarComponent from './components/activity-bar/activity-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import React, {useContext, useState, useEffect} from 'react'
import './App.css'
import Footer from './components/footer/footer'
import {AuthContext} from './firebase-context';
import {ProtectedRoute} from './components/route/protected';

function App() {
  const {currentUser} = useContext(AuthContext);
  let [navUser, setNavUser] = useState(null);
      console.log('app fbuser ', currentUser)
  useEffect(() => {
    let doSetUser = () => {
      return currentUser ? setNavUser(currentUser) : setNavUser(null)
    }
    doSetUser();
    console.log('app ', navUser)
  }, [navUser, setNavUser, currentUser])

  
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <ActivityBarComponent></ActivityBarComponent>
        <Switch>
          <ProtectedRoute path="/dashboard" component={DashboardLayout} />
          <Route path="/auth/:authType" ><AuthLayout></AuthLayout></Route>
          <ProtectedRoute path="/" component={DashboardLayout}></ProtectedRoute>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
