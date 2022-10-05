import React from 'react'
import logo from '../../images/logo.svg';
import {Link} from 'react-router-dom';


const Header = ({t, i18n, setText, ua_text, eng_text}) => {

    function handleClick(lang){
        i18n.changeLanguage(lang);
      }

    const onClickText = (lang) => {
      lang === 'ukr' ? setText(ua_text) : setText(eng_text);
    }

    return (
        <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
            <Link to="/" class="menu__text">
                {t('nav.Головна')}
            </Link>              
            {/* <a class="menu__text" href="/">{t('nav.Головна')}</a> */}
            </li>
            <li>
            <Link to="/about" class="menu__text">
                {t('nav.Новини')}
            </Link>
              {/* <a class="menu__text" href="/">{t('nav.Новини')}</a> */}
            </li>
            <li>
              <a class="menu__text" href="/">{t('nav.Про проєкт')}</a>
            </li>
            <li>
              <a class="menu__text" href="/">{t('nav.Контакти')}</a>
            </li>
          </ul>
          
        </nav>
        <div className="language">
          
                <input type="radio" onClick={()=> {
                  handleClick('ukr');
                  onClickText('ukr');
                  }} 
                  name="language" id="ukr" ></input>
                <label class="changelng" for="ukr">укр</label>
                <input type="radio" onClick={()=> {
                  handleClick('eng');
                  onClickText('eng');
                }}
                name="language" id="eng"></input>
                <label class="changelng" for="eng">eng</label>
        </div>   
      </header>
    )
}

export default Header;