'use client';

import React, { useRef, useState }        from "react";
import emailjs                            from "@emailjs/browser";
import { useTranslations }                from "next-intl";

import './index.scss';

export default function Contact() {
  const formRef = useRef();
  const t = useTranslations("Contact-us-component");

  //State
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //Functions
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

    emailjs
      .send(
        "service_ro4u14g",
        "template_lledwkg",
        {
          from_name: form.name,
          to_name: "Luciano",
          from_email: form.email,
          to_email: "lucianogermani93@gmail.com",
          message: form.message,
        },
        "p4zQqM0lGfEuM7HC9"
      )
      .then(
        () => {
          setLoading(false);
          alert(t('success-alert'));

          setForm({
            name: "",
            surname:"",
            email: "",
            phone: "",
            message: "",
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
      <div className="contact-form">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='form'
        >
          <label className='form-label'>
            <span className='name'>{t('name-tag')}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              className='input'
            />
          </label>
          <label className='form-label'>
            <span className='surname'>{t('surname-tag')}</span>
            <input
              type='text'
              surname='surname'
              value={form.surname}
              onChange={handleChange}
              className='input'
            />
          </label>
          <label className='form-label'>
            <span className='email'>{t('email-tag')}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              className='input'
            />
          </label>
          <label className='form-label'>
            <span className='phone'>{t('phone-tag')}</span>
            <input
              type='phone'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              className='input'
            />
          </label>
          <label className='form-label textarea'>
            <span className='message'>{t('message-tag')}</span>
            <textarea
              rows={3}
              name='message'
              value={form.message}
              onChange={handleChange}
              className='input textarea'
            />
          </label>

          <button
            type='submit'
            className='button'
          >
            {loading ? t('loading') : t('send')}
          </button>
        </form>
      </div>

  )
}