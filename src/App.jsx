// import { useState , useEffect} from 'react';
import './App.css'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App



// const [count,setCount] = useState(0); 
  // useEffect(() => {
  //   alert("Welcome to e-commerce site")
  // }, [])