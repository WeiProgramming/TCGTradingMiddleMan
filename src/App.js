import DefaultLayout from './layouts/default/default-layout'
import DashboardLayout from './layouts/dashboard/dashboard-layout'
import AuthLayout from './layouts/auth/auth-layout'
import Navigation from './components/nav/navigation'
import ActivityBarComponent from './components/activity-bar/activity-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import React, {useContext} from 'react'
import './App.css'
import Footer from './components/footer/footer'
import {AuthContext} from './firebase-context';



function App() {
  const authContext = useContext(AuthContext);
  console.log('authcontext in app', authContext)
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <ActivityBarComponent></ActivityBarComponent>
        <Switch>
          <Route exact path="/dashboard" render={() => {
            if(authContext) {
              return <DashboardLayout></DashboardLayout>
            }
            else {
              return <Redirect to="/"/>
            }
          }}/>
          <Route exact path="/" render={() => {
            if(!authContext) {
              return <DefaultLayout></DefaultLayout>
            }
            else {
              return <Redirect to="/dashboard"/>
            }
          }}/>
          <Route path="/dashboard/:type" render={() => {
            if(authContext) {
              return <DashboardLayout></DashboardLayout>
            }
            else {
              return <Redirect to="/login"/>
            }
          }}>
          </Route>
          <Route path="/:authType">
            <AuthLayout></AuthLayout>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
