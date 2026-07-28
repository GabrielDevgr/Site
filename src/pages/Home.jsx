import React from 'react';
import TopBar from '@/components/landing/TopBar';
import Hero from '@/components/landing/Hero';
import StreamingBar from '@/components/landing/StreamingBar';
import Showcase from '@/components/landing/Showcase';
import PlanMatrix from '@/components/landing/PlanMatrix';
import Entertainment from '@/components/landing/Entertainment';
import Howitworks from '@/components/landing/Howitworks';
import FAQ from '@/components/landing/FAQ';
import SiteFooter from '@/components/landing/SiteFooter';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#070314] text-white">
      <TopBar />
      <main>
        <Hero />
        <StreamingBar />
        <Showcase />
        <PlanMatrix />
        <Entertainment />
        <Howitworks />
        <FAQ />
      </main>
      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}