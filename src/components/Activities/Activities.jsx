import React from 'react';
import img1 from '../../assets/activities1.png'
import img2 from '../../assets/activities2.png'

const Activities = () => {
  return (
    <div className='lg:grid lg:grid-cols-2 bg-dark-green'>
      <div className='ml-16 mr-12 pt-16'>
        <h1 className='text-white pb-5 font-sans text-xl font-bold p-2'>Toiminta kansallisella tasolla</h1>
        <p className='text-white font-sans text-sm p-2 w-2/3'>esim Helsingissä, Turussa, Tampereella, Lahdessa, Porissa, Raumassa ja Jyväskylässä eri yhdistysten järjestämänä. Vuosittain kansallisella tasolla järjestetään 5-6 turnausta eri kaupungeissa. Joka vuosi kansallisella tasolla järjestetään Suomen mestaruuskilpailut, joihin eri kaupungeilla on mahdollisuus osallistua. Kesäisin keskitytään street socceriin, joka on Homeless Academyn päälaji. Talvisin pelataan futsalia. Kansalliselta tasolta noustaan maajoukkuetoimintaan kaupunkien suositusten perusteella. Maajoukkuetoimintaan on mahdollisuus päästä sitoutumalla Homeless Academyn arvoihin.</p>
      </div>
      <div className='p-4 pt-0 pr-0 ml-4 '>
        <img src={img1} alt="" />
      </div>
      <div className=' lg:hidden ml-14 mr-12 pt-12 '>
        <h1 className='text-white pb-5 font-sans text-xl font-bold'>Maajoukkue toiminta</h1>
        <p className='text-white font-sans text-sm w-2/3'>Homeless Academy koordinoi Suomessa asunnottomien maajoukkuetoimintaa, jonka päälaji on street soccer. Maajoukkue kerätään vuosittain Homelessin toiminnassa mukana olevien kaupunkien yhdistysten avulla. Maajoukkueryhmitys tapaa vuoden aikana 5-6 leirityksessä. Vakiintuneita leirityspaikkoja tai -tapahtumia ovat olleet Eerikkilän leiritys, Simo Syrjävaara futsal cup sekä leiritykset Helsingissä, Tampereella ja Turussa. Maajoukkueen päätapahtuma on Homeless World Cup-turnaus. Lisäksi maajoukkuetapahtumiin kuuluu Pohjoismaiden mestaruuskisat, johon pelaajaryhmistys valitaan PM-kisojen ajankohdan mukaan. PM-kisoihin osallistuvat maajoukkueet Suomesta, Ruotsista, Norjasta ja Tanskasta.</p>
      </div>
      <div className='p-4 pb-14 pl-0 mr-4'>
        <img src={img2} alt="" />
      </div>
      <div className='hidden  lg:ml-14 lg:mr-12 lg:pt-12 '>
        <h1 className='text-white pb-5 font-sans text-xl font-bold'>Maajoukkue toiminta</h1>
        <p className='text-white font-sans text-sm w-2/3'>Homeless Academy koordinoi Suomessa asunnottomien maajoukkuetoimintaa, jonka päälaji on street soccer. Maajoukkue kerätään vuosittain Homelessin toiminnassa mukana olevien kaupunkien yhdistysten avulla. Maajoukkueryhmitys tapaa vuoden aikana 5-6 leirityksessä. Vakiintuneita leirityspaikkoja tai -tapahtumia ovat olleet Eerikkilän leiritys, Simo Syrjävaara futsal cup sekä leiritykset Helsingissä, Tampereella ja Turussa. Maajoukkueen päätapahtuma on Homeless World Cup-turnaus. Lisäksi maajoukkuetapahtumiin kuuluu Pohjoismaiden mestaruuskisat, johon pelaajaryhmistys valitaan PM-kisojen ajankohdan mukaan. PM-kisoihin osallistuvat maajoukkueet Suomesta, Ruotsista, Norjasta ja Tanskasta.</p>
      </div>


    </div>
  );
};

export default Activities;