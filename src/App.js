import DefaultLayout from './layouts/default/default-layout'
import DashboardLayout from './layouts/dashboard/dashboard-layout'
import AuthLayout from './layouts/auth/auth-layout'
import Navigation from './components/nav/navigation'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'




function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <DefaultLayout></DefaultLayout>
          </Route>
          <Route path="/login">
            <AuthLayout></AuthLayout>
          </Route>
          <Route path="/register">
            <AuthLayout></AuthLayout>
          </Route>
          <Route path="/auth">
            <AuthLayout></AuthLayout>
          </Route>
          <Route path="/dashboard">
            <DashboardLayout></DashboardLayout>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
