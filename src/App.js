import DefaultLayout from './layouts/default/default-layout'
import DashboardLayout from './layouts/dashboard/dashboard-layout'
import AuthLayout from './layouts/auth/auth-layout'
import Navigation from './components/nav/navigation'
import ActivityBarComponent from './components/activity-bar/activity-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import {AuthProvider} from './firebase-context';

function App() {
  return (
    <AuthProvider>
          <div className="App">
      <Router>
        <Navigation></Navigation>
        <ActivityBarComponent></ActivityBarComponent>
        <Switch>
          <Route exact path="/">
            <DefaultLayout></DefaultLayout>
          </Route>
          <Route path="/dashboard">
            <DashboardLayout></DashboardLayout>
          </Route>
          <Route path="/:authType">
            <AuthLayout></AuthLayout>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
    </AuthProvider>

  )
}

export default App
