import React from 'react';
import History from '../components/History';
import Activities from '../components/Activities/Activities';
import OurValues from '../components/OurValues/OurValues';
import Testimonials from '../components/Testimonials/Testimonials';
import CoWorkers from '../components/CoWorkers/CoWorkers';

function About() {
  return (
    <div>
      <Activities />
      <History />
      <Testimonials />
      <OurValues />
      <CoWorkers />
    </div>
  )
}

export default About;
