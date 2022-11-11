import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Routes } from 'react-router';
import { Home } from './Pages/Home';
import { Services } from './Pages/Services';
import { Ourstory } from './Pages/Ourstory';
import { Contactus } from './Pages/Contactus';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Services' element={<Services/>}></Route>
          <Route path='/Ourstory' element={<Ourstory/>}></Route>
          <Route path='/About' element={<Contactus/>}></Route>
          {/* <Route path={`/Productdetails/:page/:id`} element={<Productdetails/>}></Route> */}

        </Routes>
    </div>
  );
}

export default App;
