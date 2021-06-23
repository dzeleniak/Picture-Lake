import './App.css';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card';
import tequila from './resources/espolon-tequila-HHGtAZHZPlM-unsplash.jpg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Card imageUrl={tequila} description="Tequila" user="dzeleniak"/>
    </div>
  );
}

export default App;
