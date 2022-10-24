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
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" />
        </Link>       
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/" className="menu__text">
                {t('nav.Головна')}
              </Link>              
            </li>
            <li>
              <Link to="/news" className="menu__text">
                {t('nav.Новини')}
              </Link>
            </li>
            <li>
              <Link to="/about" className="menu__text">
                {t('nav.Про проєкт')}
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="menu__text">
                {t('nav.Контакти')}
              </Link>
            </li>
          </ul>
          
        </nav>
        <div className="language">
          
                <input type="radio" onClick={()=> {
                  handleClick('ukr');
                  onClickText('ukr');
                  }} 
                  name="language" id="ukr" ></input>
                <label className="changelng" for="ukr">укр</label>
                <input type="radio" onClick={()=> {
                  handleClick('eng');
                  onClickText('eng');
                }}
                name="language" id="eng"></input>
                <label className="changelng" for="eng">eng</label>
        </div>   
      </header>
    )
}

export default Header;