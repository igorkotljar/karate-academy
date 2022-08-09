import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function NavBar() {

const [open, setOpen] = useState(false);

  return (
    <div>
        <nav>
            <div className='logo'>
              <i className="fa-solid fa-laptop-code navLogo"></i>
                QA Shop
            </div>
            <ul className='nav-links' style={{transform: open ? "translateX(0px)" : ""}}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
            </ul>
            <i onClick={() => setOpen(!open)} className="fa-solid fa-bars burger"></i>
        </nav>
    </div>
  )
}

export default NavBar