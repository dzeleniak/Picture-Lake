import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Upload from './components/Upload/Upload';
import Login from './components/Login/Login';
import axios from 'axios';
import { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch, 
  Route, 
  Link,
  useLocation
} from 'react-router-dom';

function App() {

  const [images, setImages] = useState(null);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  const location = useLocation();

  const loginHandler = async (username, password) => {

    await axios.post(apiUrl + "auth/login", {
      username: username, 
      password: password
    })
      .then(res => {
        setIsLoggedIn(true);
        setUserId(res.data.id);
      })
      .catch(err => {
        console.log(err);
      })
  }
  
  // Fetch user profile
  useEffect(() => {
    axios.get(apiUrl + `users/${userId}`)
      .then(res => {
        setUser(res.data.body);
      })
      .catch(err => {
        console.log(err);
      })
  }, [userId])

  // Fetch images
  useEffect(()=>{
    if(location.pathname === '/') {
      axios.get(apiUrl + "images")
        .then(res =>{
          const usersImages = res.data.body.filter(x => x.username === user.username);  
          setImages(usersImages);
        });
    }
  }, [location]);

  return (
    <div className="App">        
        <Navbar />

        <Switch>

          <Route path="/login">
            {/* Login Component */}
            <Login login={loginHandler} loggedIn={isLoggedIn}/>
          </Route>

          <Route path="/upload">
            {/* Upload Form */}
            {
              isLoggedIn ? 
                <Upload user={user}/>
                :
                <h1>Please Log In</h1>
            }
          </Route>

          <Route path="/">
            {
              isLoggedIn ? 
              (images) && <Gallery images={images}/>
              :
              <h1>Please Log In</h1>
            }
          </Route>

        </Switch>
    </div>
  );
}

export default App;
