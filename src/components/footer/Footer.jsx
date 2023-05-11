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
          <h4>ПОКУПАТЕЛЯМ</h4>

          <li>Доставка</li>
          <li>Оплата</li>
          <li>Возврат</li>
          <li>Отзывы</li>
          <li>Вопросы и ответы</li>
         
        </ul>

        <ul className='about'>
          <h4>О КОМПАНИИ</h4>
          <li>О Нас</li>
          <li>Пресса о нас</li>
          <li>Вакансии</li>
          <li>Контакты</li>
          <li>Кафе партнеры</li>
        </ul>

        <div className='pay'>
          <h4>НОВОСТИ</h4>
          <p>Новинки, акции, рецепты и полезные советы</p>
          <div>
            <input type="text" placeholder='Введите ваш e-mail' /> <span><ArrowForwardIosIcon/></span>
          </div>
          <p> 
            Подписываясь на рассылку, вы соглашаетесь
           с условиями. Политики конфиденциальности.
         </p>

          <img src={svg} alt='svg' />

        </div>

        <div className="contact">
          <h4>КОНТАКТЫ</h4>
          <div className="contact-icons">
            <TelegramIcon/>
            <FacebookIcon/>
            <InstagramIcon/>
            <img src={wk} alt="wk" />
            <YouTubeIcon/>

          </div>
          <div className='contact-bottom'>
            <p>8 800 200-95-70</p>
            <small>Бесплатный звонок по Москве и МО c 8:00 до 20:00</small>
            <p>8 495 128-95-70</p>
            <p>8 915 124-03-03</p>
                <br />
              <a className='contact-email' href="mailto:mail@napoleoncake.ru">mail@napoleoncake.ru</a>
              <br />
              <a href="#">Написать нам</a>
              <p>125438, г. Москва, Лихоборская набережная, 14</p>
              <a href="#">Смотреть на карте</a>

              <h5>© Кондитерская NapoleonCake, 2015 - 2022</h5>
          </div>
        </div>
        </div>
      </div>
   
  )
}

export default Footer
