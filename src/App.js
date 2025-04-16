import './App.css';
import MAIN from './main';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Veg from './vegetable';
import Poq from './pqolyat';
import Fruit from './frut';
import Sweet from './sweet';
import Alban from './alban';
import Cart from './cart';
import {TextProvider}from"./provider"
import Prtofilo from './prtofilo';
import LOG from './log in';
import ABOUT from './about';
function App() {
  return (
  <TextProvider>
    <HashRouter>
        <Routes>
          <Route path='/' element={<LOG />}/>
          <Route path='/home' element={<MAIN />}/>
          <Route path='/vegetable' element={<Veg />}/>
          <Route path='/fruit' element={<Fruit />}/>
          <Route path='/linut' element={<Poq />}/>
          <Route path='/milk' element={<Alban />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/sweet' element={<Sweet />}/>
          <Route path='/person' element={<Prtofilo />}/>
          <Route path='/about' element={<ABOUT />}/>
          
        </Routes>
      </HashRouter>
  </TextProvider>


  );
}

export default App;
