import React from 'react'
import img from '../../assets/img/Снимок экрана 2022-07-21 в 23.28 1.jpg'
import './Contact.css'

function Contact() {
  return (
    <div className='container'>
      <div className="contact">
            <div className="contact-wrapper">
              <div className="contact-left">
              <div className="contact-address">
              <h2>Address</h2>
              <p>Tashkent region ,yangiyul city </p>
            </div>

            <div className="contact-phone">
              <h2>Phone</h2>
              <p>+998999331564</p>
              <p>+998999331564</p>
              <p>+998999331564</p>
            </div>

        <div className="contact-email">
          <h2>E-mail</h2>
          <a href="mailto:aliev@gmail.com">aliev@gmail.com</a>
        </div>

          <div className="contact-working">
            <h2>working hours</h2>
           <p>basedly working hours  from 8:00  to 20: 00</p>

          </div>
          
          <div className='contact-info'>
            <h2>info</h2>
            <p>  
              ИП Плешка Сержиу Федорович
              ИНН 504414360182; ОГРНИП 319774600134655
              ОКПО 0147523249
              Юр. адрес: 123098, Москва, ул.Маршала Василевского 1к1
              Факт. адрес: 125438, Москва, Лихоборская набережная 14
              Р/С №4080 2810 2015 0003 7925
              БИК:044525999, К/с:3010 1810 8452 5000 0999
              ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ" г.Москва
              E-mail: ceo@napoleoncake.ru
              </p>
          </div>
              </div>
              <div className="contact-right">
                <form>
                  
                  <h1>write to me</h1>
                  <br /><br />
                  <input type="text"  placeholder='name' />  <br />
                  <input type="number"  placeholder='number' /> <br />
                  <input type="email"  placeholder='E-mail' /> <br />
                  <textarea cols="30" rows="10"  placeholder='write some text...'/> <br />
                  <button>Send</button>
                  <p>Нажимая на кнопку «оплатить заказ», я принимаю условия публичной оферты и политики конфиденциальности</p>
                </form>
              </div>
            </div>

          <div>
            <img src={img} alt="img"  className='contact-img'/>
          </div>

      </div>
    </div>
  )
}

export default Contact
