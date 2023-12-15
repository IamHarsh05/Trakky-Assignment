import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Componet/Login/login';
import Home from './Componet/Home/home';
import TopMenu from './Componet/Header/Dashboard_Top';
import Upload from './Componet/Upload/Upload';

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <div className='w-screen'>
        <TopMenu/>
      </div>
      <div className='overflow-y-scroll'>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={
              <>
                <Upload/>
                <Home />
              </>
              } />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
