import React from 'react';
import Hero from '../../components/hero/hero';
import NavbarLanding from '../../components/navbarlanding/navbarlanding';
import AboutUS from '../../components/aboutus/aboutus';
import WhychooseUS from '../../components/kelebihan/whychoouseus';
import ClientReviews from '../../components/clientreviews/clientreviews';
import Price from '../../components/price/price';
import Footer from '../../components/footer/footer';
import './users/css/landing.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <NavbarLanding />
      <Hero />
      <AboutUS />
      <WhychooseUS />
      <ClientReviews />
      <Price />
      <Footer />
    </div>
  );
};

export default LandingPage;