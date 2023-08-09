
import './App.css';
import {BrowserRouter, Routes , Route, Link} from 'react-router-dom';
import Login from './components/Authentication/login'
import Signup from './components/Authentication/signup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
