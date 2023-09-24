import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Login/>}/>
          <Route path='/home' exact element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
