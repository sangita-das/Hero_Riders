import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import About from './About/About';
import Services from './Services/Services';

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <About></About>
<Services></Services>
       <Footer></Footer>
    </div>
  );
};

export default Home;