"use client"

import Header from '@/components/ui/header';
import Hero from '@/components/ui/hero';
import React from 'react';

interface Props {
    // define your props here
}

const HomePage: React.FC<Props> = () => {
    return (
      <>
      <Header/>
      <Hero/>
        <div className="min-h-screen">
        <header className=" p-4 shadow-md md:flex md:items-center md:justify-between">
          <h1 className="text-xl font-bold">My Web App</h1>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-blue-600 hover:underline">Home</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
              <li><a href="#" className="text-blue-600 hover:underline">Contact</a></li>
            </ul>
          </nav>
        </header>
      
        <main className="p-4 md:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">Item 1</div>
            <div className="p-4 bg-white rounded-lg shadow">Item 2</div>
            <div className="p-4 bg-white rounded-lg shadow">Item 3</div>
          </div>
        </main>
      
        <footer className="bg-gray-900 text-white p-4 text-center">
          &copy; 2024 My Web App. All Rights Reserved.
        </footer>
      </div>
      
      </>
    );
};

export default HomePage;