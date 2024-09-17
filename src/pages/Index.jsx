import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Index;
