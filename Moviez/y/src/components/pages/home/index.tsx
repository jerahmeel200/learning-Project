"use client"

import Header from '@/components/ui/header';
import Hero from '@/components/ui/hero';
import Trending from '@/components/ui/trending';
import React from 'react';

interface Props {
    // define your props here
}

const HomePage: React.FC<Props> = () => {
    return (
      <>
      <Header/>
      <Hero/>
      <Trending/>
      
      
      </>
    );
};

export default HomePage;