import React from 'react';
import img from '../../assets/Headerimage.png'

const HeaderComponent = () => {
  return (
    <div>
      <h1 className='font-MPlus text-center  text-lg lg:text-3xl font-semibold p-8 border-b-2 border-gray-300 w-11/12  mx-auto relative 
      '>Homeless Academy järjestää toiminnallista kuntoutusta<br></br> asunnottomille ja päihdekuntoitujille Suomessa </h1>

      <div className='grid grid-cols-2 lg:grid-cols-4  ml-4 mr-4 text-center pt-8  pb-6 mb-4 md:mb-0  md:pb-0 '>
        <div >
          <p className=' text-4xl lg:text-6xl text-blue pb-2'>1000</p>
          <p className='text-sm lg:text-xl'>Example statistics</p>
        </div>
        <div>
          <p className=' text-4xl lg:text-6xl text-blue pb-2'>90%</p>
          <p className='text-sm lg:text-xl'>osallistujista ovat kokeneet<br></br> positiivisia vaikutuksia<br></br> elämäntilanteeseensa</p>
        </div>
        <div>
          <p className=' text-4xl lg:text-6xl text-blue pb-2'>5</p>
          <p className='text-sm lg:text-xl'>Example Statistics</p>
        </div>
        <div>
          <p className=' text-4xl lg:text-6xl text-blue pb-2'>40+</p>
          <p className='text-sm lg:text-xl'>Example statistics</p>
        </div>
      </div>
      <div>
        <img src={img} alt="header image" className=" h-auto max-w-full " />
      </div>
    </div>
  );
};

export default HeaderComponent;



