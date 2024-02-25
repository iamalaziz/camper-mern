import React from 'react';

import HeroSlider from '../components/HeroSlider';
import Recomend from '../components/Recommend/Recomend';
import Footer from '../components/Footer/Footer';

const HomeScreen: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <Recomend />
      <Footer />
    </div>
  );
};

export default HomeScreen;
