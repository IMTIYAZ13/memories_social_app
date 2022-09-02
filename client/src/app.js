import React from "react";
import { Container } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import PostDetails from "./components/PostDetails/postdetails";

import { GoogleOAuthProvider } from '@react-oauth/google';


import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Auth from "./components/Auth/auth";

const App = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <GoogleOAuthProvider clientId="326579534717-2cjt4j4dfs7gu140tq357i0p0e8e6g1q.apps.googleusercontent.com">
            <Router>
                <Container maxWidth='xl'>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Navigate replace to="/posts" />} />
                        {/* <Route path="/" element={() => <Navigate replace to ="/posts" />} /> */}
                        <Route path="/posts" element={<Home/>} />
                        <Route path="/posts/search" element={<Home/>} />
                        <Route path="/posts/:id" element={<PostDetails/>} />
                        <Route path="/auth" element={(!user ? <Auth /> : <Navigate replace to ="/posts" />)} />
                    </Routes>
                </Container>
            </Router>
        </GoogleOAuthProvider>
    );
};
export default App;