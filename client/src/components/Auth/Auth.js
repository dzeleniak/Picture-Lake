import React, {useState} from 'react';
import './Auth.css';

import { useHistory } from 'react-router-dom';

// TODO: Set form to be modular for sign up, sign in, and log out
// TODO: set form to change to user profile once user logs in
export default function Auth(props) {

    const { loggedIn, login } = props;
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [signUp, setSignUp] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const history = useHistory();

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    }

    const loginHandler = () => {
        login(username, password);
        if(loggedIn) {
            history.push('/');
        } else {
            setLoginError(true);
        }
    }

    return (
        <div className="auth-container">
            {!signUp && 
                <div className="auth-form">
                    {loginError && <h3 className="error-message">Incorrect Login Information</h3>}
                    <input type="text" placeholder="Username" onChange={usernameChangeHandler} value={username}/>
                    <input type="password" placeholder="Password" onChange={passwordChangeHandler} value={password}/>
                    <button className='submit-button' onClick={loginHandler}>Login</button>
                    <button className='form-change-button' onClick={() => {setSignUp(true)}}>Sign Up</button>
                </div>
            }

            {signUp && 
                <div className="auth-form">
                    <input type="text" placeholder="Email" onChange={emailChangeHandler} value={email}/>
                    <input type="text" placeholder="Username" onChange={usernameChangeHandler} value={username}/>
                    <input type="password" placeholder="Password" onChange={passwordChangeHandler} value={password}/>
                    {/* Create sign up function */}
                    <button className='submit-button' onClick={() => {}}>Sign Up</button>
                    <button className='form-change-button' onClick={() => {setSignUp(false)}}>Log In</button>
                </div>
            }
        </div>
    );
}
