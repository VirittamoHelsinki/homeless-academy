import React from 'react';
import img from '../../assets/Headerimage.png'

const HeaderComponent = () => {
  return (
    <div>
      <h1 className='font-MPlus text-center text-2xl font-semibold p-8 border-b border-gray-300 w-3/5 mx-auto
      '>Homeless Academy järjestää toiminnallista kuntoutusta<br></br> asunnottomille ja päihdekuntoitujille Suomessa </h1>

      <div className='flex mx-auto justify-center gap-32 pt-8 text-center'>
        <div >
          <p className='text-6xl text-blue pb-2'>1000</p>
          <p>Example statistics</p>
        </div>
        <div>
          <p className='text-6xl text-blue pb-2'>90%</p>
          <p>osallistujista ovat kokeneet<br></br> positiivisia vaikutuksia<br></br> elämäntilanteeseensa</p>
        </div>
        <div>
          <p className='text-6xl text-blue pb-2'>5</p>
          <p>Example Statistics</p>
        </div>
        <div>
          <p className='text-6xl text-blue pb-2'>40+</p>
          <p>Example statistics</p>
        </div>
      </div>
      <div>
        <img src={img} alt="header image" className=" h-auto max-w-full" />
      </div>
    </div>
  );
};

export default HeaderComponent;


