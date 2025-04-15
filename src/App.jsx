import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Config from './Pages/Config/Config';
import Navbar from './Pages/Nav/Navbar';

function App(){
  return (
    <>
      <Navbar/>
      <div className="pt-1.5">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='config' element={<Config/>}/>
        </Routes>
      </div> 
    </>
  );
}

export default App;

