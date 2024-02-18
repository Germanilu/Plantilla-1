'use client';

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

import './index.scss';

export default function Booking() {

    return (
        <div className="booking-design">

            <div class="reserva-item">
                <label for="comensales">Número de comensales:</label>
                <select id="comensales" name="comensales" className="input">

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
                <label for="fecha">Fecha de reserva:</label>
                <input type="date" id="fecha" name="fecha"></input>
            </div>

            <div class="reserva-item">
                <label for="horario">Horario de reserva:</label>
                <select id="horario" name="horario">
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
    )
}