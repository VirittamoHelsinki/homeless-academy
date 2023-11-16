import React, { useContext } from 'react';
import AppContext from '../AppContext';

function ContactForm() {
  const { language } = useContext(AppContext);

  const handleSubmit = (event) => {
    event.preventDefault()
    // close the pop up
  };

  const text = {
    title: {
      FI: 'Ota yhteyttä',
      EN: 'Contact us',
    },
    description: {
      FI: 'Ohjeteksti Homeless Academyn toimintaan mukaan pääsemisestä tai ohjeita yhteydenottolomakkeen täyttöön',
      EN: 'Description about joining Homeless Academy and instructions for filling contact form',
    },
    prompt: {
      FI: 'Lähetä yhteydenottolomake ja vastaamme sinulle mahdollisimman pian',
      EN: 'Complete the form and we will contact you shortly',
    },
    nameField: {
      FI: 'Nimi *',
      EN: 'Name *',
    },
    emailField: {
      FI: 'Sähköposti *',
      EN: 'Email *',
    },
    messageField: {
      FI: 'Viesti *',
      EN: 'Message *',
    },
    button: {
      FI: 'Lähetä',
      EN: 'Submit',
    }
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-light-green prose flex gap-6 max-w-5xl">
          <div className='flex-1'>
            <h1>{text.title[language]}</h1>
            <h3>{text.description[language]}</h3>
            <p>{text.prompt[language]}</p>
          </div>
          <form className='flex flex-col flex-1' onSubmit={handleSubmit}>
            <input className='border-b border-dark-gray mb-6 p-4 bg-inherit placeholder-dark-gray outline-none' placeholder={text.emailField[language]} />
            <input className='border-b border-dark-gray mb-6 p-4 bg-inherit placeholder-dark-gray outline-none' placeholder={text.nameField[language]} />
            <textarea className='border-b border-dark-gray mb-6 px-4 pt-4 bg-inherit placeholder-dark-gray outline-none' placeholder={text.messageField[language]} />
            <button type='submit' className='btn bg-inherit border-dark-gray rounded-3xl hover:bg-blue mt-6 w-32'>{text.button[language]}</button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default ContactForm;
