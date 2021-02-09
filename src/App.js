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
    <Router>
      <div className="App">
        <Link
          to={`/auth`}
          variant="contained"
          color="primary"
          component={`button`}
        >
          Login
        </Link>
        <Switch>
          <Route path="/auth">
            <AuthLayout></AuthLayout>
          </Route>
          <Route path="/dashboard">
            <DashboardLayout></DashboardLayout>
          </Route>
          <Route path="/">
            <DefaultLayout></DefaultLayout>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
