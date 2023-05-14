import React, { useContext } from 'react'
import request from '../../service/service'
// style
import './Navbar.css'
// icons 
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineSharpIcon from '@mui/icons-material/WorkOutlineSharp';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartNames } from '../../redux/slices/cartsSlice';
import MenuBurger from '../menu-burger/Menu-Burger';
import { setPopUpShow } from '../../redux/slices/popUpSlice';
import { setShowCarts, setShowInput } from '../../redux/slices/searchBarSlice';
import SearchBar from '../searchBar/SearchBar';
import { context, likedProducts, shoppingCart } from '../../App';
import axios from 'axios';
const navTItle = ['mackbook','acer', 'lenova','asus','hp']

function Navbar() {
  const dispatch = useDispatch()
  const {popUpShow} = useSelector(state => state.popUpSlice)
  const {showInput} = useSelector(state => state.searchBarSlice)



  const handleSearch = () => {
    dispatch(setShowInput(true))
    dispatch(setShowCarts(true))
  }


 
  return (    
    <>
      {popUpShow && <MenuBurger/>}
  <div className="container">


        {
        showInput ? <SearchBar/> :
        <nav className='navbar'>
            <div className="navbar-left">
              <ul>
                <div className='navbar-left-menu'>
                  <span onClick={() => dispatch(setPopUpShow(true))}><MenuIcon sx={{fontSize:'30px'}} /></span>   <li>  <Link to={'/catalog'}><span className='cotalog-text'>Cotalog</span></Link></li>
                </div>
                  {
                    navTItle.map((item, idx) => <Link to={'/rest'} key={idx}> <li   onClick={() => dispatch(setCartNames(item))}>{item}</li> </Link>)
                  }
              </ul>
                <Link to={'/'}><h1>LapTop.uz</h1></Link>
            </div>

            <div className="navbar-right">
              <div className="navbar-addres">
                <h2>+99899 933 15 64 </h2> <span>  8:00 To 20:00</span>
                </div>

              <div className="navbar-icons">

                  <PhoneCallbackIcon sx={{fontSize:'25px'}} />
                  <span onClick={() => handleSearch()}><SearchIcon sx={{fontSize:'25px'}} /></span>
                  <PersonOutlineIcon sx={{fontSize:'25px'}} />
                  <Link to={'/liked'} >
                    <span className='like'> <FavoriteBorderIcon sx={{fontSize:'25px'}} /> <sup className='likedLenght'>{likedProducts.length}</sup> </span>
                  </Link>
                  <Link to={'/karzinka'}>
                 <span> <WorkOutlineSharpIcon sx={{fontSize:'25px'}} /> <sup className='likedLenght'>{shoppingCart.length}</sup></span>
                  </Link>
                  
              </div>
            </div>
        </nav>
        }
  </div>

    </>

  )
}

export default Navbar
