import React from 'react';
import img from '../../assets/unsplash.png'


const Identity = () => {
  return (
    <div>
      <div className='bg-light-green'>
        <h1 className='text-center text-2xl font-bold lg:text-6xl pb-2 pt-8 lg:pb-4 lg:pt-12 font-sans '><span className='text-dark-green'>Keitä</span> olemme?</h1>
        <p className='text-center lg:text-xl text-light-gray font-semibold w-11/12 p-8 lg:w-2/5 mx-auto pb-12 '>Homeless Academy ry on voittoa tavoittelematon yhdistys, joka tuottaa ja kehittää asunnottomien ja päihdekuntoutujien toiminnallisen kuntoutuksen menetelmiä. Yhtenä toimintamme muotona järjestämme, kehitämme ja koordinoimme jalkapallotoimintaa Suomessa, erityisesti katujalkapallotoimintaa. Toimintaa järjestetään sekä naisille että miehille.</p>
      </div>
      <div className='bg-light-green flex items-center justify-between mx-auto mb-[-50px] lg:mb-[-190px]'>
        <img className='mx-auto w-4/6 h-4/6 lg:w-2/5 lg:h-2/5' src={img} alt="image" />
      </div>
      <div className='bg-dark-green '>
        <div>
          <h2 className='text-center text-white  text-xl lg:text-4xl font-lexend  pt-20 lg:pt-60  font-semibold'>Toimintaamme voidaan kutsua<br></br> sosiaaliseksi innovaatioksi</h2>
          <p className='text-center text-white w-3/4 lg:w-1/3 mx-auto pb-10 pt-10 lg:text-xl font-lexend'>Toiminnalla on suuria positiivisia vaikutuksia yksilöiden elämään, jotka toiminnassa ovat mukana. Yksilön hyvinvoinnin kautta positiiviset vaikutukset ulottuvat yhteiskunnan tasolle.  </p>
          <p className='text-center text-white w-3/4 lg:w-1/3 mx-auto pb-14 lg:text-xl font-lexend'>Tämä toteutuu sillä, että kohderyhmämme henkilöille tuotetaan toimintaa, jonka kautta he voivat saada positiivisia elämyksiä omassa vertaisryhmässään sekä itsetunnon ja päihteettömän identiteetin kasvun myötä tavoitella tuetusti mm. opiskelu- ja työpaikkaa sekä omaa pysyvää asuntoa.  </p>
        </div>
      </div>
    </div>
  );
};

export default Identity;