import React from 'react';
import img1 from '../../assets/plogo.png'
import img2 from '../../assets/world.png'
import img3 from '../../assets/ylogo.png'
import img4 from '../../assets/okmlogo.png'

const CoWorkers = () => {
  return (
    <div className='bg-light-green pl-16 pb-8'>
      <h1 className='font-extrabold font-lexend lg:pb-5 font-sans text-xl lg:text-3xl font-bold pt-10 pb-4 text-left'>Yhteistyökumppanit</h1>
      <div className='lg:flex lg:items-start'>
        <div>
          <img className='w-56 h-16' src={img1} alt="" />
          <p className='py-6 w-5/6'>Teemme tiivistä yhteistyötä muun muassa Palloliiton kanssa. Yhteistyö on jatkunut jo vuosia. Homeless Academy ry:n pelaajat ja aktiivit osallistuvat talkootoimintana Palloliiton järjestämiin tapahtumiin ympäri Suomen sisältäen mm. Miesten, naisten ja juniorimaajoukkueiden maaotteluiden järjestämiseen ja valmisteluun osallistumisen.</p>
          <img className='hidden lg:flex w-56 h-16' src={img3} alt="" />
        </div>
        <div>
          <img className='w-56 h-16' src={img2} alt="" />
          <p className='py-6 w-5/6'>Globaalin ilmiön vuoksi Homeless World Cup-tapahtumaa eli Asunnottomien jalkapallon maailmanmestaruuskisoja on järjestetty vuodesta 2003 alkaen. Turnauksen tarkoituksena on tuoda esiin asunnottomuutta ilmiönä ja vaikuttaa siihen, että eri maissa asunnottomuuden poistamiseksi tehdään kaikki tehtävissä oleva. Turnauksen järjestäjämaa vaihtuu vuosittain. Suomi on osallistunut turnaukseen vuodesta 2006 lähtien.</p>
          <img className='lg:hidden w-56 h-16 py-2' src={img3} alt="" />
          <img className='w-56 h-16 py-2 lg:py-0' src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default CoWorkers;