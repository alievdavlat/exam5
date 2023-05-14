import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import svg from '../../assets/img/Mastercard-2 1.svg'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import wk from '../../assets/img/vk 1.png'
import './Menu-Burger.css'
import { useDispatch, useSelector } from 'react-redux';
import { setPopUpShow } from '../../redux/slices/popUpSlice';
import { Link } from 'react-router-dom';
import { setCartNames } from '../../redux/slices/cartsSlice';

function MenuBurger() {
  const {popUpShow} = useSelector(state => state.popUpSlice)
  const dispatch = useDispatch()

  return (
    <div className='menuBurger-overlay' onClick={() => dispatch(setPopUpShow(false))}> 

     <div className={`menu-burger__inner ${popUpShow ? 'transformShow' : 'transformHide'}`} >
        <button className='menu-burger__closeBtn'  onClick={() => dispatch(setPopUpShow(false))}><CloseIcon/></button>
        <ul className="menu-burger">
            <Link to={'/about'}>
            <li><span>About us</span> <ArrowForwardIosIcon/></li>
            </Link>

            <Link to={'/rest'} onClick={() => dispatch(setCartNames('all'))}>
            <li><span>all lapTops</span> <ArrowForwardIosIcon/></li>
            </Link>

            <Link to={'/rest'} onClick={() => dispatch(setCartNames('popular'))}>
            <li><span>popular lapTops</span> <ArrowForwardIosIcon/></li>
            </Link>

            <Link to={'/contact'}>
            <li><span>Contact</span> <ArrowForwardIosIcon/></li>
            </Link>

            <Link to={'/comment'}>
            <li><span>comments</span> <ArrowForwardIosIcon/></li>
            </Link>
        </ul>
        
        <div className="menu-burger__contact">
          <h4>Contact</h4>
          <div className="menu-burger__contact-icons">
            <TelegramIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <img src={wk} alt="wk" />
            <YouTubeIcon/>

          </div>
          <div className='menu-burger__contact-bottom'>
          <p>+998999331564</p>
            <small>Free call within Tashkent and Tashkent region c 8:00 до 20:00</small>
            
             <br />
              <a className='menu-burger__contact-email' href="mailto:mail@napoleoncake.ru">mail@napoleoncake.ru</a>
              <br />
              <a href="#">Написать нам</a>
              <p>Tashkent region,  Yangiyul City , street yoshlik 7 house </p>
              <a href="#">View in map</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MenuBurger
