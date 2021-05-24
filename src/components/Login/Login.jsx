import React, {useState} from 'react';
import {Row, Input, Button} from 'antd';
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";

const Login = (props) => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const firebase = useFirebase();
  const history = useHistory();

  const submit = (e) => {
    e.preventDefault();
    firebase.login({ email, password }).then(() => history.push('/dashboard'));
  };

  return (
    <Row className='login'>
      <div className='loginForm'>

        <h2>Log In</h2>

        <Input type='email' placeholder='Enter Your Email' onChange={(e) => setEmail(e.target.value)} />
        <Input.Password placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />

        <Button type='primary' onClick={submit}>Submit</Button>
      </div>
    </Row>
  )
}

export default Login;