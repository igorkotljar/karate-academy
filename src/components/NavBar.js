import React, {useState} from 'react'
import {Link} from 'react-router-dom'

function NavBar() {

const [open, setOpen] = useState(false);

  return (
    <div>
        <nav>
            <div className='logo'>
              {/* <i className="fa-solid fa-laptop-code navLogo"></i> */}
                <h4 className='topLogo'>GEVORGYAN</h4>
                <h2 className='botLogo'>Karate Academy</h2>
            </div>
            <ul className='nav-links' style={{transform: open ? "translateX(0px)" : ""}}>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/">ABOUT</Link></li>
                <li><Link to="/services">GALLERY</Link></li>
                <li><Link to="/contact">CONTACTS</Link></li>
                
            </ul>
            <i onClick={() => setOpen(!open)} className="fa-solid fa-bars burger"></i>
        </nav>
    </div>
  )
}

export default NavBar