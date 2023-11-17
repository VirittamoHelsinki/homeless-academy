import React from 'react';

const Testimonials = () => {
  return (
    <div>
      <div className="card w-96 bg-white shadow-2xl relative pb-10 mb-10 mt-10 ml-10">
        <div className="card-body">
          <h2 className=" text-center font-lexend font-bold p-3">Efficient Collaborating</h2>
          <p className='text-center font-lexend text-sm text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
        </div>
        <div className="bottom-arrow ">

        </div>
        <style jsx>{`
          .bottom-arrow {
            position: absolute;
            left: 0;
            right: 0;
            bottom: -25px;
            margin: 0 auto;
            width: 0;
            height: 0;
            border-top: 25px solid #FFFF;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
          }
        `}</style>
      </div>
    </div>
  );
};

export default Testimonials;
