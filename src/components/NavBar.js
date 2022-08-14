import { Button } from '@mui/material';
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
                <li><Link to="/"><Button variant='text' style={{color:"white"}}>HOME</Button></Link></li>
                <li><Link to="/"><Button variant='text' style={{color:"white"}}>ABOUT</Button></Link></li>
                <li><Link to="/services"><Button variant='text' style={{color:"white"}}>GALLERY</Button></Link></li>
                <li><Link to="/contact"><Button variant='text' style={{color:"white"}}>CONTACTS</Button></Link></li>
                <li><Link to="/"><Button variant='contained' color="success">EVENTS</Button></Link></li>
            </ul>
            <i onClick={() => setOpen(!open)} className="fa-solid fa-bars burger"></i>
        </nav>
    </div>
  )
}

export default NavBar