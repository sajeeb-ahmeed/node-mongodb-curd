import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Adduser from './Components/AddUser/Adduser';
import Home from './Components/Home/Home';
import User from './Components/Users/User';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/user' element={<User></User>}></Route>
        <Route path='user/add' element={<Adduser></Adduser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
