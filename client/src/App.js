import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import Upload from './components/Upload/Upload';
import axios from 'axios';
import { useState, useEffect } from 'react'

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
      <Navbar />
      <Upload />
      {images && images.map(item => <Card key={item.id} name={item.name} url={item.url} description={item.description} user={item.username}/>)}
    </div>
  );
}

export default App;
