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
  Link
} from 'react-router-dom';
function App() {

  const [images, setImages] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;
  
  useEffect(()=>{
    axios.get(apiUrl + "images")
      .then(res =>{
        setImages(res.data.body);
      });
  }, [])

  return (
    <div className="App">
      <Router>
        
          <Navbar />

          <Switch>

            <Route path="/login">
              {/* Login Component */}
              <Login />
            </Route>

            <Route path="/upload">
              {/* Upload Form */}
              <Upload/>
            </Route>

            <Route path="/">
              {images && <Gallery images={images}/>}
            </Route>

          </Switch>
      </Router>
    </div>
  );
}

export default App;
