import React from 'react';

const Main = ({ t, text, setModalActive }) => {
  const test = (e) => {
    e.preventDefault();
    returnValue();
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;

  // function handleClick(lang){
  //   i18n.changeLanguage(lang);
  // }

  function returnValue() {
    const select1 = document.querySelector('#from').value;
    const select2 = document.querySelector('#to').value;
    const select3 = document.querySelector('#date').value;

    let time = '21:30';
    let price = 0;

    const localeCity = (city) => {
      switch (city) {
        case 'Kyiv':
          return 'Київ';
        case 'Ternopil':
          return 'Тернопіль';
        case 'Lviv':
          return 'Львів';
        case 'Ivano-Frankivsk':
          return 'Івано-Франківськ';
        default:
          return city;
      }
    };

    const setPrice = (direction) => {
      switch (direction) {
        case '${select1-Тернопіль':
          price = 158;
          time = '15:02';
          break;

        case 'Тернопіль-Київ':
          price = 158;
          time = '21:50';
          break;

        case 'Київ-Львів':
          price = 213;
          time = '21:08';
          break;

        case 'Львів-Київ':
          price = 213;
          time = '08:20';
          break;

        case 'Київ-Івано-Франківськ':
          price = 312;
          time = '19:25';
          break;

        case 'Івано-Франківськ-Київ':
          price = 312;
          time = '14:15';
          break;

        case 'Тернопіль-Львів':
          price = 96;
          time = '15:03';
          break;

        case 'Львів-Тернопіль':
          price = 96;
          time = '17:15';
          break;

        case 'Тернопіль-Івано-Франківськ':
          price = 170;
          time = '21:53';
          break;

        case 'Івано-Франківськ-Тернопіль':
          price = 170;
          time = '12:34';
          break;

        case 'Івано-Франківськ-Львів':
          price = 142;
          time = '16:51';
          break;

        case 'Львів-Івано-Франківськ':
          price = 142;
          time = '12:03';
          break;

        default:
          break;
      }
    };

    let newselect1 = localeCity(select1);
    let newselect2 = localeCity(select2);

    const twoCity = `${newselect1}-${newselect2}`;
    setPrice(twoCity);

    if (select1 === select2) {
      alert('Ви обрали два одинакових міста');
    } else if (select1 === 'Звідки?' || select2 === 'Куди?' || select3 === '') {
      alert('Заповніть усі поля');
    } else {
      document.querySelector('.pop.from').value = select1;
      document.querySelector('.pop.to').value = select2;
      document.querySelector('.pop.date').value = select3;
      document.querySelector('.pop.price').value = `${price}₴`;
      document.querySelector('.pop.time').value = time;

      localStorage.setItem('from', select1);
      localStorage.setItem('to', select2);
      localStorage.setItem('date', select3);
      localStorage.setItem('price', `${price}₴`);

      setModalActive(true);
    }
  }

  return (
    <main>
      <div className="search">
        <form>
          <select className="dropdown" id="from">
            <option selected hidden>
              {t('dropdown.Звідки?')}
            </option>
            <option value={t('dropdown.Київ')}>{t('dropdown.Київ')}</option>
            <option value={t('dropdown.Тернопіль')}>{t('dropdown.Тернопіль')}</option>
            <option value={t('dropdown.Львів')}>{t('dropdown.Львів')}</option>
            <option value={t('dropdown.Івано-Франківськ')}>{t('dropdown.Івано-Франківськ')}</option>
          </select>
          <select className="dropdown1" id="to">
            <option selected hidden>
              {t('dropdown.Куди?')}
            </option>
            <option value={t('dropdown.Київ')}>{t('dropdown.Київ')}</option>
            <option value={t('dropdown.Тернопіль')}>{t('dropdown.Тернопіль')}</option>
            <option value={t('dropdown.Львів')}>{t('dropdown.Львів')}</option>
            <option value={t('dropdown.Івано-Франківськ')}>{t('dropdown.Івано-Франківськ')}</option>
          </select>
          <input className="calendar" id="date" type="date" min={today}></input>

          <button type="submit" className="search__btn" onClick={(e) => test(e)}>
            {t('dropdown.Пошук')}
          </button>
        </form>
      </div>

      <img className="text" src={text} alt="text" />
    </main>
  );
};

export default Main;
