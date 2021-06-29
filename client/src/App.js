import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import tequila from './resources/espolon-tequila-HHGtAZHZPlM-unsplash.jpg';
import Upload from './components/Upload/Upload';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Card imageUrl={tequila} description="Tequila" user="dzeleniak"/> */}
      <Upload />
    </div>
  );
}

export default App;
