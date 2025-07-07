
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Blog from './pages/Blogs/Blog';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import Count from "./pages/Count/Count";

const App = () => { 

  const name ="Nabina";
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/count' element={<Count/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

