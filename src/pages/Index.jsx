import React, { useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { ReasonsSection } from './sections/ReasonsSection';
import { PurposesSection } from './sections/PurposesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';

const Index = () => {
  const [isChecked, setIsChecked] = useState(false);
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection scrollToContact={scrollToContact} />
      <AboutSection />
      <ProgramsSection />
      <ReasonsSection />
      <FAQSection />
      <PurposesSection />
      <TestimonialsSection />
      <ContactSection contactRef={contactRef} isChecked={isChecked} setIsChecked={setIsChecked} />
      <Footer />
    </div>
  );
};

export default Index;