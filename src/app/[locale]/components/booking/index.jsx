'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

import './index.scss';

export default function Booking() {

    const [loading, setLoading] = useState(false);
     //State
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    debugger
    const text = `${form.name} ${form.phone} ${form.people} ${form.date} ${form.time}`
    debugger
    emailjs
      .send(
        "service_ro4u14g",
        "template_lledwkg",
        {
          from_name: form.name,
          to_name: "Luciano",
          to_email: "lucianogermani93@gmail.com",
          message: text,
        },
        "p4zQqM0lGfEuM7HC9"
      )
      .then(
        () => {
          setLoading(false);
        //   alert(t('success-alert'));

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

        <div class="reserva-item">
            <label for="horario">Nombre</label>
            <input type="text" name="name" id="name" placeholder="Nombre" value={form.name} onChange={handleChange} />
        </div>
        <div class="reserva-item">
            <label for="horario">Telefono</label>
            <input type="text" name="phone" id="phone" placeholder="Telefono" value={form.phone} onChange={handleChange} />
        </div>

        <div class="reserva-item">
            <label class="reserva-label" for="people">Número de comensales:</label>
            <select id="people" name="people" className="input" value={form.people} onChange={handleChange}>

                <option value="2">2 personas</option>
                <option value="3">3 personas</option>
                <option value="4">4 personas</option>
                <option value="5">5 personas</option>
                <option value="6">6 personas</option>
                <option value="7">7 personas</option>
                <option value="8">8 personas</option>
                <option value="9">9 personas</option>
                <option value="10">10 personas</option>
            </select>
        </div>

            <div class="reserva-item">
                <label for="date">Fecha de reserva:</label>
                <input type="date" id="date" name="date" className="input" value={form.date} onChange={handleChange}></input>
            </div>

            <div class="reserva-item">
                <label for="time">Horario de reserva:</label>
                <select id="time" name="time" className="input" value={form.time} onChange={handleChange}>
                    <option value="15:00" >15:00</option>
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
            <div className="button" onClick={handleSubmit}>Reserva</div>
            {loading ? 'loading': 'send'}
        </>
    )
}