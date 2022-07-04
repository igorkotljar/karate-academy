import React, {useState} from 'react'

function NavBar() {

const [open, setOpen] = useState(false);

  return (
    <div>
        <nav>
            <div className='logo'>QA Shop</div>
            <ul className='nav-links' style={{transform: open ? "translateX(0px)" : ""}}>
                <li><a>Home</a></li>
                <li><a>Product</a></li>
                <li><a>Services</a></li>
                <li><a>Contact</a></li>
            </ul>
            <i onClick={() => setOpen(!open)} className="fa-solid fa-bars burger"></i>
        </nav>
    </div>
  )
}

export default NavBar