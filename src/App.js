import './App.css';
import logo from './images/logo.svg';
import text from './images/text.svg';

function App() {

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">Головна</a>
            </li>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">Новини</a>
            </li>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">Про проєкт</a>
            </li>
            <li>
              <a class="menu__text" href="#// eslint-disable-next-line">Контакти</a>
            </li>
          </ul>
        </nav>
        <div className="language">
          
        </div>
        
      </header>

      <main>
        <div className="search">
          <form>
            <select className='dropdown' id ="from">
            <option selected hidden>Звідки?</option>
              <option value="Kyiv">Київ</option>
              <option value="Ternopil">Тернопіль</option>
              <option value="Lviv">Львів</option>
              <option value="Frankivsk">Івано-Франківськ</option>
          </select>
          <select className='dropdown1' id ="to">
              <option selected disabled hidden>Куди?</option>
              <option value="Kyiv">Київ</option>
              <option value="Ternopil">Тернопіль</option>
              <option value="Lviv">Львів</option>
              <option value="Frankivsk">Івано-Франківськ</option>
          </select>
          <input className='calendar' type="date"></input>

          <button className='search__btn'>Пошук</button>
          </form>
        </div>

        <img className='text' src={text} alt="Logo" />

      </main>
    </div>
  );
}

export default App;
