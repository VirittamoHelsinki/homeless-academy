import React from 'react';
import img1 from '../../assets/activities1.png'
import img2 from '../../assets/activities2.png'






const Activities = () => {

  return (
    <div className='lg:grid lg:grid-cols-2 bg-dark-green laptop:gap-y-5'>
      <div className=' lg:pt-2 lg:ml-16  lg:pt-16 '>
        <h1 className='text-white  lg:pb-5 font-sans text-xl lg:text-2xl font-bold pt-10 text-center lg:text-left'>Toiminta kansallisella tasolla</h1>
        <p className='text-white text-center font-sans text-base lg:text-lg  p-10 pt-6 lg:p-2 w-full laptop:w-full lg:w-11/12 lg:text-left'>esim Helsingissä, Turussa, Tampereella, Lahdessa, Porissa, Raumassa ja Jyväskylässä eri yhdistysten järjestämänä. Vuosittain kansallisella tasolla järjestetään 5-6 turnausta eri kaupungeissa. Joka vuosi kansallisella tasolla järjestetään Suomen mestaruuskilpailut, joihin eri kaupungeilla on mahdollisuus osallistua. Kesäisin keskitytään street socceriin, joka on Homeless Academyn päälaji. Talvisin pelataan futsalia. Kansalliselta tasolta noustaan maajoukkuetoimintaan kaupunkien suositusten perusteella. Maajoukkuetoimintaan on mahdollisuus päästä sitoutumalla Homeless Academyn arvoihin.</p>
      </div>
      <div className=' lg:p-4 lg:pt-0 lg:pr-0 lg:ml-4 '>
        <img className='w-full' src={img1} alt="" />
      </div>
      <div className=' lg:hidden'>
        <h1 className='text-white  lg:pb-5 font-sans text-xl lg:text-2xl font-bold  lg:p-2 pt-10 text-center lg:text-left'>Maajoukkue toiminta</h1>
        <p className='text-white text-center font-sans text-base lg:text-lg  p-10 pt-6 lg:p-2 w-full  lg:w-11/12 lg:text-left'>Homeless Academy koordinoi Suomessa asunnottomien maajoukkuetoimintaa, jonka päälaji on street soccer. Maajoukkue kerätään vuosittain Homelessin toiminnassa mukana olevien kaupunkien yhdistysten avulla. Maajoukkueryhmitys tapaa vuoden aikana 5-6 leirityksessä. Vakiintuneita leirityspaikkoja tai -tapahtumia ovat olleet Eerikkilän leiritys, Simo Syrjävaara futsal cup sekä leiritykset Helsingissä, Tampereella ja Turussa. Maajoukkueen päätapahtuma on Homeless World Cup-turnaus. Lisäksi maajoukkuetapahtumiin kuuluu Pohjoismaiden mestaruuskisat, johon pelaajaryhmistys valitaan PM-kisojen ajankohdan mukaan. PM-kisoihin osallistuvat maajoukkueet Suomesta, Ruotsista, Norjasta ja Tanskasta.</p>
      </div>
      <div className='lg:p-4 lg:pb-0 lg:pl-0 lg:mr-4 laptop:pt-18 '>
        <img className='w-full' src={img2} alt="" />
      </div>
      <div className='hidden  lg:flex flex-col lg:ml-14 lg:mr-12 lg:pt-12 laptop:pt-2'>
        <h1 className='text-white pb-5 font-sans text-2xl font-bold'>Maajoukkue toiminta</h1>
        <p className='text-white font-sans text-lg  w-5/6 lg:w-11/12 laptop:w-full laptop:pb-4'>Homeless Academy koordinoi Suomessa asunnottomien maajoukkuetoimintaa, jonka päälaji on street soccer. Maajoukkue kerätään vuosittain Homelessin toiminnassa mukana olevien kaupunkien yhdistysten avulla. Maajoukkueryhmitys tapaa vuoden aikana 5-6 leirityksessä. Vakiintuneita leirityspaikkoja tai -tapahtumia ovat olleet Eerikkilän leiritys, Simo Syrjävaara futsal cup sekä leiritykset Helsingissä, Tampereella ja Turussa. Maajoukkueen päätapahtuma on Homeless World Cup-turnaus. Lisäksi maajoukkuetapahtumiin kuuluu Pohjoismaiden mestaruuskisat, johon pelaajaryhmistys valitaan PM-kisojen ajankohdan mukaan. PM-kisoihin osallistuvat maajoukkueet Suomesta, Ruotsista, Norjasta ja Tanskasta.</p>
      </div>


    </div>
  );
};

export default Activities;








