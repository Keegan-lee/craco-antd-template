import React from 'react';
import {compose} from 'redux';
import {connect, useDispatch, useSelector} from 'react-redux';
import {firestoreConnect, useFirestore, withFirestore, isLoaded, isEmpty} from 'react-redux-firebase';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import {Dashboard, Login} from './components';

import './App.less';

// Ant Design Components
import {Layout, Menu} from 'antd';

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated or if auth is not
// yet loaded
function PrivateRoute({children, ...rest}) {
  const auth = useSelector(state => state.firebase.auth)
  return (
    <Route
      {...rest}
      render={({location}) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location}
            }}
          />
        )
      }
    />
  );
}

const {Header, Content, Footer} = Layout;

const App = (props) => {
  return (
    <Layout className='layout'>

      <Header>
        <div className='logo' />
        <Menu theme='dark' mode='horizontal'>
        </Menu>
      </Header>

      <Content style={{padding: '0 50px'}}>
          <Switch>
            <Route path='/' exact render={() => <h1>Hello World</h1>}></Route>
            <Route path='/login' component={Login}></Route>
            <PrivateRoute path='/dashboard' component={Dashboard}></PrivateRoute>
          </Switch>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

const enhance = connect(
  ({firebase: {auth, profile}}) => ({auth, profile})
);

export default enhance(App);
