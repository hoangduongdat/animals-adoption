import React, { useContext } from 'react';
import './login.css'
import { useState } from 'react';
import { apiKey, secret } from '../../apiKey'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigation = useNavigate()

    const [apikeyInput, setApikeyInput] = useState("");
    const [secretInput, setSecretInput] = useState("");

    const { setAccessToken } = useContext(authContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (apiKey === apikeyInput.trim() && secret === secretInput.trim()) {
            const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            params.append("client_id", apiKey);
            params.append("client_secret", secret);
            const petfinderRes = await fetch(
                "https://api.petfinder.com/v2/oauth2/token",
                {
                    method: "POST",
                    body: params,
                }
            );
            const data = await petfinderRes.json();
            setAccessToken(data.access_token)
            sessionStorage.setItem("token", data.access_token)
            navigation("/")
        } else {
            alert("Please enter your key and secret ")
        }
    }
    return (
        <div className="login">
            <h2 className="login-header">Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label>Api key</label>
                <input type="text" placeholder="Enter your key" onChange={e => setApikeyInput(e.target.value)} />
                <label>Api secret</label>
                <input type="text" placeholder="Enter your secret" onChange={e => setSecretInput(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;