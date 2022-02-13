import './App.css';
import Navbar from './Navbar';
import { useEffect, useRef } from 'react';
import Sidebar from './Sidebar';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import Cars from './Cars';
import Homepage from './Homepage';
import Cybertruck from './Cybertruck';

const url = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/e90a341e-f9ca-4aa1-8eab-94afea118786/bvlatuR/std/2880x1800/M3-Homepage-D'
const url1 = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/8e2df1b9-a4bf-4eb9-beec-2cf5cc77fca0/bvlatuR/std/2880x2400/Desktop-ModelY?quality=70'
const url2 = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/676da95d-942e-414c-8534-f1832f0d4ced/bvlatuR/std/3296x1798/ms-homepage-desktop'
const url3 = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D'
const url4 = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D'
const url5 = 'https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories'


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/cyber' element={<Cybertruck />}></Route>
        </Routes>
      </Router>
      
    </>

  );
}

export default App;
