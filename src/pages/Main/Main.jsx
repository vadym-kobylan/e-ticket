import React from "react";

const Main = ({t, text, setModalActive}) => {

    const test = (e) => {
        e.preventDefault();
        returnValue();
      }
    
    
      // function handleClick(lang){
      //   i18n.changeLanguage(lang);
      // }
    
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

          <button type='submit' className='search__btn' onClick = {(e) => test(e)}>{t('dropdown.Пошук')}</button>
          </form>
        </div>


        <img className='text' src={text} alt="text" />

      </main>

    )
}

export default Main; 