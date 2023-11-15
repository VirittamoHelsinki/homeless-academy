import { CssSyntaxError } from 'postcss';
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/footer.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer  items-center p-10 bg-neutral text-white">
        <aside className="items-center grid-flow-row ps-8">
          <div className='flex  items-center gap-4'>
            <div>
              <img className="h-14 w-10" src={img} alt="logo" />
            </div>
            <div className='flex flex-col'>
              <p className=' font-extrabold text-3xl text-white font-lexend pb-2'
                style={{ borderBottomWidth: '1px', borderBottomColor: '#3983C0' }}>Homeless Academy <br></br></p>
              <p className='text-center text-sky-600 text-lg font-bold '>DESIRE TO CHANGE</p>
            </div>
          </div>

          <nav className="grid grid-flow-col gap-12 pt-8 pb-8" >
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/news'>News</Link>
            <Link to='/events'>Events</Link>
            <Link to='/stories'>Stories</Link>

          </nav>
          <p>
            Tilinumero: FI 81 8000 2710 1432 22
          </p>
          <p className='pb-8'>Y-tunnus: 2289677-6</p>
          <div className="grid grid-flow-col gap-4" >
            <p>@ Homeless Academy 2023</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
        </aside>

        <div className="grid-flow-row gap-8 md:place-self-start md:justify-self-end">
          <button className="border border-white  text-white px-6 py-2 my-2 mr-4">Contact us</button>
          <div className="flex items-center gap-2 pr-8">

            <Link to='https://www.instagram.com/hwc.teamfinland/'><svg width="24" height="24" viewBox="0 0 24 24" className="fill-current" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" /></svg></Link>

            <Link to='https://www.facebook.com/HWCTeamFinland/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Footer;




