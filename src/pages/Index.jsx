import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import FAQSection from '../components/FAQSection';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import all section components
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProgramsSection } from './sections/ProgramsSection';
import { ReasonsSection } from './sections/ReasonsSection';
import { CountriesSection } from './sections/CountriesSection';
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
    <>
      <Header />
      <HeroSection scrollToContact={scrollToContact} />
      <AboutSection />
      <ProgramsSection />
      <ReasonsSection />
      <CountriesSection />
      <PurposesSection />
      <TestimonialsSection />
      <ContactSection contactRef={contactRef} isChecked={isChecked} setIsChecked={setIsChecked} />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Index;