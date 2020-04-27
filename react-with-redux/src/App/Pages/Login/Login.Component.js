import React from 'react';
import { Wrapper, H1, H4 } from './Login.Styles';
import { Button } from 'Atoms';

const Login = () => {
  return (
    <Wrapper>
      <H1>Login</H1>
      <H4>Select with which role do you want to log in</H4>
      <Button>Log In as User</Button>
      <Button>Log In as Admin</Button>
    </Wrapper>
  );
};

Login.displayName = 'Login';

export default Login;
