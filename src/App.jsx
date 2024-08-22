import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartShopping, faBars} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import AddedCarts from './AddedCarts/AddedCarts';
import Home from './Home/Home';
import About from './About/About';
import Shop from './Shop/Shop';
import Faq from './FAQ/Faq';
import Contact from './Contact/Contact';
import Login from './Login/Login';
function App() {

  const [isToolsVisible, setIsToolsVisible] = useState(false);
    
    useEffect(() => {
      const tools = document.getElementById('list');
  
      // Initial setting of display property
      if (tools) {
        tools.style.display = isToolsVisible ? 'block' : 'none';
      }
    }, [isToolsVisible]);
  
    const handleButtonClick = () => {
      setIsToolsVisible(prevState => !prevState);
      
    }


  return (

  <BrowserRouter>
  <header className='header'>
    <FontAwesomeIcon icon={faBars} className='bars' onClick={handleButtonClick}/>
  <h2>Xpression</h2>
  <nav className='menu'>
  <ul className='list' >
  <li>
                <Link to="/Xpressionstore/home" className='link' >Home</Link>
            </li> 
            <li>
                <Link to="/Xpressionstore/about" className='link' > About</Link>
            </li>
            <li>
                <Link to="/Xpressionstore/shop" className='link' >Shop</Link>
            </li>
            <li>
              <Link to='/Xpressionstore/contact' className='link' >Contact</Link>
            </li>
            <li>
              <Link to='/Xpressionstore/faq' className='link' >Faqs</Link>
            </li>
            </ul>
            </nav>
  <span>
  <Link to="/login" className='link'> <FontAwesomeIcon icon={faUser} style={{marginRight: '10px'}} /> </Link>
  <Link to="/addedCarts" className='link'><FontAwesomeIcon icon={faCartShopping} /> </Link>
  </span>
  </header>
  <nav className='menu'>
  <ul id='list'>
  <li>
                <Link to="/Xpressionstore/home" className='link' onClick={handleButtonClick}>Home</Link>
            </li> 
            <li>
                <Link to="/Xpressionstore/about" className='link' onClick={handleButtonClick}> About</Link>
            </li>
            <li>
                <Link to="/Xpressionstore/shop" className='link' onClick={handleButtonClick}>Shop</Link>
            </li>
            <li>
              <Link to='/Xpressionstore/contact' className='link' onClick={handleButtonClick}>Contact</Link>
            </li>
            <li>
              <Link to='/Xpressionstore/faq' className='link' onClick={handleButtonClick}>Faqs</Link>
            </li>
            </ul>
            </nav>

  <Routes>
  <Route path='/Xpressionstore' Component={Home} />
  <Route path='/Xpressionstore/home'  Component={Home} />
  <Route path='/Xpressionstore/about'   Component={About} />
  <Route path='/Xpressionstore/shop' Component={Shop} />
  <Route path='/Xpressionstore/contact' Component={Contact} />
  <Route path='/Xpressionstore/faq' Component={Faq} />
  <Route path='/Xpressionstore/login' Component={Login} />
  <Route path='/Xpressionstore/AddedCarts' Component={AddedCarts} />
  </Routes>
  
  </BrowserRouter>
  );
}

export default App
