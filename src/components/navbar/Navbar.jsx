import React from 'react'
// style
import './Navbar.css'
// icons 
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';

const navTItle = ['mackbooks', 'acers', 'lenova']

function Navbar() {
  return (
    <div className="container">
      
    <nav className='navbar'>
      <div className="navbar-left">
        <ul>
          <li> <MenuIcon sx={{fontSize:'30px'}} />  <span>Cotalog</span></li>
            {
              navTItle.map((item, idx) => <li key={idx}>{item}</li>)
            }
        </ul>
          <h1>LapTop.uz</h1>
      </div>

      <div className="navbar-right">
        <div className="navbar-addres">

          <h2>+99899 933 15 64 </h2> <span>  8:00 To 20:00</span>
          </div>

        <div className="navbar-icons">

            <PhoneCallbackIcon sx={{fontSize:'25px'}} />
            <SearchIcon sx={{fontSize:'25px'}} />
            <PersonOutlineIcon sx={{fontSize:'25px'}} />
            <FavoriteBorderIcon sx={{fontSize:'25px'}} />
            <WorkOutlineSharpIcon sx={{fontSize:'25px'}} />
            
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar
