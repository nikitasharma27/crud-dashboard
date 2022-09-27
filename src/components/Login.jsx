// import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "@mui/material";
import { getUser } from '../service/getUser.js';
import "./Login.css";

const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        const doGetUsers = async () => {
            const result = await getUser(email);
                // setUsers(result);
            console.log("Result", result);
            
            if (!result) {
                alert("Please enter correct email and password!");
            }
                navigate("/dashboard");
                localStorage.setItem("userInfo", result);
        };

    return (
        <div className="loginForm text--center">
           <Container maxWidth="sm">
                <h1>Sign In</h1>
                <div className="loginForm__box">
                    <input type="text" placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)} 
                        className="form-control"></input>
                    <br  />
                    <input type="text" placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)} 
                        className="form-control"></input>
                    <br />
                    <Button variant="contained" size="large" onClick={doGetUsers} className="btn">Login</Button>
                </div>
            </Container>
        </div>
    )
}

export default Login;