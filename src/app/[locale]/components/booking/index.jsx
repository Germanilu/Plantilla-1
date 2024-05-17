'use client';
import React, {useState }      from "react";
import {every,values,negate,isEmpty}   from 'lodash';
import emailjs                          from "@emailjs/browser";
import { useTranslations }              from "next-intl";

import './index.scss';

/**
 * @component
 * <Booking/>
 * Component that use emailjs service to send contact form data to recipient email. 
 */
export default function Booking() {

  const t = useTranslations("Booking");
  const [loading, setLoading] = useState(false);

  //State
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
    time: "",
  });

  /**
   * 
   * @method
   * Function that check if all the form fields are filled with data
   * @returns {Boolean}
   * 
   */
  const checkEmptyFormFields = () => {
    let allFieldsFilled = every(values(form), negate(isEmpty));
    return allFieldsFilled;
  }

  /**
   * 
   * @method
   * Update the form state with the current value
   * @param {Event} e 
   * 
   */
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({...form,[name]: value});
  };


  /**
   * @method
   * Set the loading message and send message form to recipient email with current form state data. 
   * @param {Event} e 
   */
  const handleSubmit = (e) => {
    debugger
    if(!checkEmptyFormFields()) return;

    e.preventDefault();
    setLoading(true);

    const text = `${form.name} ${form.phone} ${form.people} ${form.date} ${form.time}`;

    const params = {
      from_name: form.name,
      to_name: "Luciano",
      to_email: "lucianogermani93@gmail.com",
      message: text,
    }
    emailjs
      .send("service_ro4u14g","template_lledwkg",params,"p4zQqM0lGfEuM7HC9")
      .then(() => {
          setLoading(false);
          alert(t('success-alert'));
          setForm({
            name: "",
            phone: "",
            people: "",
            date: "",
            time: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert(t('unsuccess-alert'));
        }
      );
  };

  return (
    <>
      <div className="booking-design">
        <div className="reserva-item">
          <label for="horario">{t('name')}</label>
          <input className="input" type="text" name="name" id="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
        </div>
        <div class="reserva-item">
          <label for="horario">{t('phone')}</label>
          <input className="input" type="text" name="phone" id="phone" placeholder="Telefono" value={form.phone} onChange={handleChange} />
        </div>

        <div class="reserva-item">
          <label class="reserva-label" for="people">{t('people')}</label>
          <select id="people" name="people" className="input" value={form.people} onChange={handleChange}>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="reserva-item">
          <label for="date">{t('date-reserve')}</label>
          <input type="date" id="date" name="date" className="input" value={form.date} onChange={handleChange}></input>
        </div>

        <div class="reserva-item">
          <label for="time">{t('hour-reserve')}</label>
          <select id="time" name="time" className="input" value={form.time} onChange={handleChange}>
            <option value="15:00">15:00</option>
            <option value="15:30">15:30</option>
            <option value="16:00">16:00</option>
            <option value="16:30">16:30</option>
            <option value="17:00">17:00</option>
            <option value="17:30">17:30</option>
            <option value="18:00">18:00</option>
            <option value="18:30">18:30</option>
            <option value="19:00">19:00</option>
            <option value="19:30">19:30</option>
            <option value="20:00">20:00</option>
            <option value="20:30">20:30</option>
            <option value="21:00">21:00</option>
            <option value="21:30">21:30</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
      </div>
      <div className="button" onClick={handleSubmit}>{loading ? t('loading') : t('send')}</div>

    </>
  )
}