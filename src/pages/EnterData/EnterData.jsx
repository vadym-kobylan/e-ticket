import React, { useState } from 'react';
import Modal from '../../components/Modal/modal';
import trains from '../../images/trains.svg';

const EnterDate = () => {
  const [modalActive, setModalActive] = useState(false);

  const from = localStorage.getItem('from');
  const to = localStorage.getItem('to');
  const date = localStorage.getItem('date');
  const price = localStorage.getItem('price');

  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [type, setType] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();

  function returnValue() {
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const type = document.querySelector('#type').value;
    const email = document.querySelector('#email').value;
    const tel = document.querySelector('#tel').value;

    if (name === '' || surname === '' || type === 'Тип пасажира' || email === '' || tel === '') {
      alert('Заповінть всі поля');
    } else if (validateEmail(email)) {
      if (phonenumber(tel)) {
        setName(name);
        setSurname(surname);
        setType(type);
        setEmail(email);
        setTel(tel);

        setModalActive(true);
      }
    }
  }

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    alert('Ви ввели неправильний email!');
    return false;
  }

  function phonenumber(tel) {
    if (/^\+380\d{3}\d{2}\d{2}\d{2}$/.test(tel) || /^380\d{3}\d{2}\d{2}\d{2}$/.test(tel)) {
      return true;
    }
    alert('Ви ввели неправильний номер телефону!');
    return false;
  }

  return (
    <div className="EnterDate">
      <div className="full__container">
        <div className="maintext">Інформація пасажира</div>
        <div className="subtext">
          Введіть інформацію пасажира, зверніть увагу на правильність заповнення
        </div>

        <div className="text">Ваші дані</div>

        <div className="info__conrainer">
          <div className="firstLineInfo">
            <input className="input surname" type="text" placeholder="Ім'я" id="name"></input>
            <input className="input name" type="text" placeholder="Прізвище" id="surname"></input>
            <select className="input type" id="type">
              <option selected hidden>
                Тип пасажира
              </option>
              <option>Дорослий</option>
              <option>Дитина</option>
              <option>Студент</option>
              <option>Пенсіонер</option>
            </select>
          </div>

          <div className="secondLineInfo">
            <input
              className="input bigger"
              type="email"
              placeholder="someone@example.com"
              id="email"></input>
          </div>

          <div className="thirfLineInfo">
            <input
              className="input bigger"
              type="tel"
              name="phone"
              placeholder="Номер телефону"
              id="tel"></input>
          </div>
        </div>

        <button className="order__btn two" onClick={() => returnValue()}>
          Сплатити
        </button>
      </div>
      <div className="image">
        <img className="trains" src={trains} alt="" />
      </div>

      <Modal active={modalActive} setActive={setModalActive}>
        <div className="ticket">
          <h4>Квиток</h4>
          <p>
            Потяг: {from} - {to}
          </p>
          <p>Дата: {date}</p>
          <p>
            Пасажир: {surname} {name}
          </p>
          <p>Тип: {type}</p>
          <p>Пошта: {email}</p>
          <p>Номер телефону: {tel}</p>
          <p className="price popo">Ціна: {price}</p>
        </div>
      </Modal>
    </div>
  );
};

export default EnterDate;
