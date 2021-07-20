import React, {useState} from 'react';
import './Login.css';


// TODO: Set form to be modular for sign up, sign in, and log out
// TODO: set form to change to user profile once user logs in
export default function Login(props) {
    
    const {loggedIn, login} = props;
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login-container">
            <div className="login-form">
                <input type="text" placeholder="Username" onChange={usernameChangeHandler} value={username}/>
                <input type="password" placeholder="Password" onChange={passwordChangeHandler} value={password}/>
                <button onClick={() => {login(username, password)}}>Login</button>
            </div>
        </div>
    )
}
