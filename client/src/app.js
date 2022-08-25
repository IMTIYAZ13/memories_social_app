import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';


import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";

const App = () => {
    return (
        <GoogleOAuthProvider clientId="326579534717-2cjt4j4dfs7gu140tq357i0p0e8e6g1q.apps.googleusercontent.com">
            <Router>
                <Container maxWidth='lg'>
                    <Navbar />
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                        <Route exact path='/auth' element={<Auth/>} />
                    </Routes>
                </Container>
            </Router>
        </GoogleOAuthProvider>
    );
};
export default App;