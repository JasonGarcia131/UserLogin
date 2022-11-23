import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import HomePage from './components/HomePage';
import {Routes, Route} from "react-router-dom";
import Users from "./components/Users";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
      {/* <div className="formContainer">
        <Register/>
      </div>
     
      <div  className="formContainer">
        <Login/>
      </div> */}
      
    </div>
  );
}

export default App;
