
import './App.css';
import {BrowserRouter, Routes , Route, Link} from 'react-router-dom';
import Login from './components/Authentication/login'
import Signup from './components/Authentication/signup';
import Dashboard from './components/Dashboard/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dashbaord' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
