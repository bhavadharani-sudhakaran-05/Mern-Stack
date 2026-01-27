import {Route,Routes} from 'react-router-dom';
import Profile from "./components/Profile";
import Navbar from "./pages/Navbar";
import State from "./hooks/State";
import Parent from "./components/Parent";
import Form from "./hooks/Form"; 
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Products  from './pages/Products';
import ProductDetails from './pages/ProductDetails';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
       <Route path='/products' element={<Products/>}/>
       <Route path='/products/:id' element={<ProductDetails/>}/>
  </Routes>      
  <div>App Profile</div>

      <Profile
        name="Bhava"
        age={25}
        skills={["JavaScript", "React", "Node.js"]}
      />

      <State />
      <Parent />
      <Form />
    </>  
   );
};

export default App;
