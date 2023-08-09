import './App.css';
import {BrowserRouter  , Route , Routes} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">

    <BrowserRouter >
    <Navbar/>
      <Routes>
      {/* <Route path='/cart/:id' element={<Cart />}> Home</Route> */}

        <Route path='/cart' element={<Cart />}> Home</Route>
        <Route path='/' exact element={<Home />}> Home</Route>
        <Route path='*' element={<NotFound/>}> Home</Route>
        
    {/* nothing to worry */}


      </Routes>
    </BrowserRouter>
 
 
     
    </div>
  );
}

export default App;
