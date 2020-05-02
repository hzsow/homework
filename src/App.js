import React from 'react';
import './App.css';
import LoginPage from './modules/Login/containers/LoginContainer'
import { PersonalAreaPage } from './modules/PersonalArea/containers/PersonalAreaPage'
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { useSelector, shallowEqual} from 'react-redux';
import { isLoginSuccess, isLoginLoader } from './modules/Login/selectors/loginSelectors'

function App() {
  const token = localStorage.getItem('token');
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRouteLogin path='/login' >
            <LoginPage/>
          </PrivateRouteLogin>
          <PrivateRoute path='/main' >
            <PersonalAreaPage/>
          </PrivateRoute>
          {token && <Redirect from="*" to="/main"/>} 
          {!token && <Redirect from="*" to="/login"/>}
        </Switch>
      </Router>
      <div id="vk_community_messages"></div>
    </div>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  const isAuth = useSelector(isLoginSuccess, shallowEqual);
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (token || isAuth) 
          return children
        else {
          return <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        }
      }
    }
    />
  );
}
const PrivateRouteLogin = ({ children, ...rest }) => {
  const token = localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (!token) 
          return children
        else {
          return <Redirect
            to={{
              pathname: "/main",
              state: { from: location }
            }}
          />
        }
      }
    }
    />
  );
}
export default App;
