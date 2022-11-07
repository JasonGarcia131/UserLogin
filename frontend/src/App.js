import './App.css';
import Register from './components/Register';
import Login from './components/Login';

function App() {

  return (
    <div className="App">
      <div className="formContainer">
        <Register/>
      </div>
     
      <div  className="formContainer">
        <Login/>
      </div>
      
    </div>
  );
}

export default App;
