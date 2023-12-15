import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componet/Login/login';
import Home from './Componet/Home/home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<Home/>} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Home/>
    </div>
  );
}

export default App;
