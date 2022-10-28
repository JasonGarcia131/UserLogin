import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div className="App">
      <Register handleSubmit={handleSubmit}/>
      <Login  handleSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
