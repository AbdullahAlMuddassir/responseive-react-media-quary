import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router';
import useAuth from '../../../Hooks/FirebaseAuthentication/useAuth';

const PrivateRoute = ({children}) => {
    const {user,isLoading}=useAuth();
    if(isLoading){
        return  <Spinner animation="border" variant="secondary" />
    }
    return user.email ? children : <Navigate to="/Login" />
        
};

export default PrivateRoute;