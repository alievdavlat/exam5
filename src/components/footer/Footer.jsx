import React from 'react'
import './Footer.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import svg from '../../assets/img/Mastercard-2 1.svg'
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import wk from '../../assets/img/vk 1.png'

function Footer() {
  return (
  
      <div className="container">

        <div className='footer-wrapper'>

        <ul className='customers'>
          <h4>Customer's</h4>

          <li>Delivery</li>
          <li>payment</li>
          <li>Return</li>
          <li>Comments</li>
          <li>Answers & questions</li>
         
        </ul>

        <ul className='about'>
          <h4>About Company</h4>
          <li>About us</li>
          <li>Vacansy</li>
          <li>Contact</li>
          <li>Partners</li>
        </ul>

        <div className='pay'>
          <h4>News</h4>
          <p>new promotions recipes and useful tips</p>
          <div>
            <input type="text" placeholder='your e-mail address' /> <span><ArrowForwardIosIcon/></span>
          </div>
          <p> 
          By subscribing to the newsletter, you agree
           with conditions. Privacy Policy.
         </p>

          <img src={svg} alt='svg' />

        </div>

        <div className="contact">
          <h4>Contact</h4>
          <div className="contact-icons">
            <TelegramIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <img src={wk} alt="wk" />
            <YouTubeIcon/>

          </div>
          <div className='contact-bottom'>
          <p>+998999331564</p>
            <small>Free call within Tashkent and Tashkent region c 8:00 до 20:00</small>
            <p>+998999331564</p>
            <p>+998999331564</p>
                <br />
              <a className='contact-email' href="mailto:mail@napoleoncake.ru">mail@napoleoncake.ru</a>
              <br />
              <a href="#">Написать нам</a>
              <p>Tashkent region,  Yangiyul City , street yoshlik 7 house </p>
              <a href="#">View in map</a>

              <h5>© Company  LapTop.uz, 2002 - 2023</h5>
          </div>
        </div>
        </div>
      </div>
   
  )
}

export default Footer
