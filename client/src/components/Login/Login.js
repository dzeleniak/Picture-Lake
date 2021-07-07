import React from 'react';
import './Login.css';

export default function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    )
}
