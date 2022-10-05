import './App.css';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import Modal from './components//Modal/modal';
import eng_text from './images/eng_text.svg';
import ua_text from './images/ua_text.svg';
import Header from './components//Header/Header';
import Main from './pages/Main/Main';
import About from './pages/About/About';
import EnterData from './pages/EnterData/EnterData';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function App() {
  const [modalActive, setModalActive] = useState(false);

  const { t, i18n } = useTranslation();

  const [text, setText] = React.useState(ua_text);

  return (
    <div className="App">
      <Router>
        <Header t={t} i18n={i18n} setText={setText } ua_text={ua_text} eng_text={eng_text} />
        <Routes>
          <Route path="/" element={<Main t={t} text={text} setModalActive={setModalActive}  />} />
          <Route path="/about" element={ <About/>} />
          <Route path="/enterdata" element={ <EnterData/>} />
        </Routes>
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
          <Link to="enterdata">
              <button className='order__btn' id="btn" onClick={() => setModalActive(false)}>
                  Замовити
              </button>
            </Link>
          </div>
        </div>
      </Modal>
      </Router>
    </div>
  );
}

export default App;
