import './App.css';
import logo from './images/logo.svg';
import { useTranslation } from 'react-i18next';
import text_ukr from './images/text.svg';
import React, { useState } from 'react';
import Modal from './Modal/modal';



function App() {
  const [modalActive, setModalActive] = useState(false);

  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  function returnValue(){
    const select1 = document.querySelector('#from').value;
    const select2 = document.querySelector('#to').value;
    const select3 = document.querySelector('#date').value;

    let price=0;
    setPrice(select1);
    setPrice(select2);

    function setPrice (city){
      switch (city){
        case 'Kyiv':
        case 'Київ':
          return price+=200;
        
        case 'Lviv':
        case 'Львів':
          return price+=50;
        
        case 'Ternopil':
        case 'Тернопіль':
          return price+=75;
        
        case 'Ivano-Frankivsk':
        case 'Івано-Франківськ':
          return price+=100;
        
        default:
          break;
          
      }
    }

   if(select1 === select2){
    alert('Ви обрали два одинакових міста')
   } else{
    document.querySelector('.pop.from').value = select1;
    document.querySelector('.pop.to').value = select2;
    document.querySelector('.pop.date').value = select3;
    document.querySelector('.pop.price').value = `${price}₴`;
    setModalActive (true);
   }
   
   
  }

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">{t('nav.Головна')}</a>
            </li>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">{t('nav.Новини')}</a>
            </li>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">{t('nav.Про проєкт')}</a>
            </li>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">{t('nav.Контакти')}</a>
            </li>
          </ul>
          
        </nav>
        <div className="language">
          
                <input type="radio" onClick={()=> handleClick('ukr')} name="language" id="ukr" ></input>
                <label class="changelng" for="ukr">укр</label>
                <input type="radio" onClick={()=> handleClick('eng')} name="language" id="eng"></input>
                <label class="changelng" for="eng">eng</label>
        </div>
        
      </header>

      <main>
        <div className="search">
          <form>
            <select className='dropdown' id ="from">
            <option selected hidden>{t('dropdown.Звідки?')}</option>
            <option value={t('dropdown.Київ')}>{t('dropdown.Київ')}</option>
              <option value={t('dropdown.Тернопіль')}>{t('dropdown.Тернопіль')}</option>
              <option value={t('dropdown.Львів')}>{t('dropdown.Львів')}</option>
              <option value={t('dropdown.Івано-Франківськ')}>{t('dropdown.Івано-Франківськ')}</option>
          </select>
          <select className='dropdown1' id ="to">
          <option selected hidden>{t('dropdown.Куди?')}</option>
              <option value={t('dropdown.Київ')}>{t('dropdown.Київ')}</option>
              <option value={t('dropdown.Тернопіль')}>{t('dropdown.Тернопіль')}</option>
              <option value={t('dropdown.Львів')}>{t('dropdown.Львів')}</option>
              <option value={t('dropdown.Івано-Франківськ')}>{t('dropdown.Івано-Франківськ')}</option>
          </select>
          <input className='calendar' id ="date" type="date"></input>

          <button type='submit' className='search__btn' onClick = {() => {
            returnValue()
            } }>{t('dropdown.Пошук')}</button>
          </form>
        </div>


        <img className='text' src={text_ukr} alt="text" />

      </main>
      <Modal active={modalActive} setActive={setModalActive}>
      
        <div className="popup__container">
          <div className="form__item">
            <label class="topraw" for="from">{t('dropdown.Звідки?')}</label>
            <input className='pop from' type="text" disabled id="from"></input>
          </div>
          <div className="form__item">
            <label class="topraw" for="where">{t('dropdown.Куди?')}</label>
            <input className='pop to' type="text" disabled id="where"></input>
          </div>
          <div className="form__item">
            <label class="topraw" for="date">{t('dropdown.Дата')}</label>
            <input className='pop date' type="date" disabled id="date"></input>
          </div>
          <div className="form__item">
            <label class="topraw" for="price">{t('dropdown.Ціна')}</label>
            <input className='pop price' type="text" disabled  id="price"></input>
          </div>
          
          <div className="form__item">
            <button className='order__btn' id="btn">Замовити</button>
          </div>

          
        </div>
        
      </Modal>
  
    </div>
  );
}

export default App;
