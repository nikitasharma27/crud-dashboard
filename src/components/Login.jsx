// import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import "./Login.css";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login() {
        console.log(email, password);
        navigate("/dashboard");
        // localStorage.setItem("userInfo", result);
    }

    return (
        <div className="loginForm text--center">
           <Container maxWidth="sm">
                <h1>Sign In</h1>
                <div className="">
                    <input type="text" placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)} 
                        className="form-control"></input>
                    <br  />
                    <input type="text" placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)} 
                        className="form-control"></input>
                    <br />
                    <Button variant="contained" size="large" onClick={login} className="btn">Login</Button>
                </div>
            </Container>
        </div>
    )
}

export default Login;