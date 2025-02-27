import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Config from './Pages/Config/Config';
import Navbar from './Pages/Nav/Navbar';

function App(){
  return (
    <>
      {/* Navbar applied to all pages */}
      <Navbar/>
      <div className="pt-16">
        <Routes>
            <Route path='/' index element={<Home/>}/>
            <Route path='config' element={<Config/>}/>
        </Routes>
        </div> 
    </>
  );
}

export default App;

