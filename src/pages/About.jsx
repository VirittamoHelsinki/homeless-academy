import React from 'react';
import Activities from '../components/Activities/Activities';
import OurValues from '../components/OurValues/OurValues';
import Testimonials from '../components/Testimonials/Testimonials';
import CoWorkers from '../components/CoWorkers/CoWorkers';

function About() {
  return (
    <div>
      <Activities></Activities>
      <Testimonials></Testimonials>
      <OurValues></OurValues>
      <CoWorkers></CoWorkers>

    </div>
  )
}

export default About;
