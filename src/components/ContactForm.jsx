import React, { useContext, useEffect } from 'react';
import AppContext from '../AppContext';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function ContactForm() {
  const { language, handleHideContactForm } = useContext(AppContext);
  useEffect(() => emailjs.init('blybkcpl3NcA1DLJD'), []); // Public key from Email.js

  const handleSubmit = async (event) => {
    event.preventDefault()
    handleHideContactForm()

    // Get form values
    const name = event.target[1].value;
    const email = event.target[0].value;
    const message = event.target[2].value;

    // Form validation: check for empty fields
    if (!name || !email || !message || name === '' || email === '' || message === '') {
      toast.error(language === 'en-US' ? 'Please fill all fields' : 'Täytä kaikki kentät')
      return;
    }

    // Form validation: Regex for email format
    const emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
    if (!emailPattern.test(email)) {
      toast.error(language === 'en-US' ? 'Check email format' : 'Tarkista sähköpostiosoite')
      return;
    }

    // Send email
    try {
      await emailjs.send('service_rlj2iup', 'template_th8oubo', {
        name: name,
        email: email,
        message: message,
      });
      toast.success(language === 'EN' ? 'Email sent successfully' : 'Sähköpostin lähetys onnistui');
    } catch (error) {
      console.log(error);
      toast.error(language === 'en-US' ? 'Sending form was unsuccessful' : 'Lomakkeen lähetys epäonnistui');
    }
  };

  const text = {
    title: {
      'fi-FI': 'Ota yhteyttä',
      'en-US': 'Contact us',
    },
    description: {
      'fi-FI': 'Ohjeteksti Homeless Academyn toimintaan mukaan pääsemisestä tai ohjeita yhteydenottolomakkeen täyttöön',
      'en-US': 'Description about joining Homeless Academy and instructions for filling contact form',
    },
    prompt: {
      'fi-FI': 'Lähetä yhteydenottolomake ja vastaamme sinulle mahdollisimman pian',
      'en-US': 'Complete the form and we will contact you shortly',
    },
    nameField: {
      'fi-FI': 'Nimi *',
      'en-US': 'Name *',
    },
    emailField: {
      'fi-FI': 'Sähköposti *',
      'en-US': 'Email *',
    },
    messageField: {
      'fi-FI': 'Viesti *',
      'en-US': 'Message *',
    },
    button: {
      'fi-FI': 'Lähetä',
      'en-US': 'Submit',
    }
  };

  return (
      <dialog id='my_modal_1' className='modal' onClick={(e) => e.target.close()}>
        <div className='modal-box bg-light-green prose flex flex-col lg:flex-row gap-6 max-w-5xl'>
            <div className='flex-1'>
              <h1>{text.title[language]}</h1>
              <h3>{text.description[language]}</h3>
              <p>{text.prompt[language]}</p>
            </div>
            <div className='flex-1'>
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <input className='border-b border-dark-gray mb-6 p-4 bg-inherit placeholder-dark-gray outline-none' placeholder={text.emailField[language]} />
                <input className='border-b border-dark-gray mb-6 p-4 bg-inherit placeholder-dark-gray outline-none' placeholder={text.nameField[language]} />
                <textarea className='border-b border-dark-gray mb-6 px-4 pt-4 bg-inherit placeholder-dark-gray outline-none' placeholder={text.messageField[language]} />
                <button type='submit' className='btn bg-inherit border-dark-gray rounded-3xl hover:bg-blue mt-6 w-32'>{text.button[language]}</button>
              </form>
            <div className='modal-action'>
              <form method='dialog'>
                <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>✕</button>
              </form>
            </div>
            </div>
        </div>
      </dialog>
  )
}

export default ContactForm;
