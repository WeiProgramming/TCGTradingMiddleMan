import DefaultLayout from './layouts/default/default-layout'
import DashboardLayout from './layouts/dashboard/dashboard-layout'
import AuthLayout from './layouts/auth/auth-layout'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Link
          to={`/auth`}
          variant="contained"
          color="primary"
          component={`button`}
        >
          Login
        </Link>
        <Switch>
          <Route exact path="/">
            <DefaultLayout></DefaultLayout>
          </Route>
          <Route path="/auth">
            <AuthLayout></AuthLayout>
          </Route>
          <Route path="/dashboard">
            <DashboardLayout></DashboardLayout>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
