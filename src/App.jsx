import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/home';
import Forgotpassword from './pages/Forgotpassword';
import Fly from './pages/Fly';
import Plan from './pages/Plan';
import Newpassword from './pages/Newpassword'
import Userprofile from './pages/Userprofile';

function App() {
  return (
    <Router>
      <div>
      <Routes>
      <Route path = "/" element={<Login />} />
      <Route path='/home'  element={<Home/>}/>
      <Route path='/forgot' element={<Forgotpassword />} />
      <Route path='/fly' element={<Fly />} />
      <Route path='/plan' element={<Plan />} />
      <Route path='/newpassword' element={<Newpassword />}/>
      <Route path='/userprofile' element={<Userprofile/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;