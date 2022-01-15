import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../../Hooks/FirebaseAuthentication/useAuth';

const Login = () => {
    const {signInUsingGoole}=useAuth();
    return (
        <div>
            <h1>Please Login</h1>
            <button className="btn btn-warnig">Please Login</button>
            <br/>
            <Button onClick={signInUsingGoole} variant="secondary">Click</Button>
        </div>
    );
};

export default Login;