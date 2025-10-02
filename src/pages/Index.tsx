import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import WhatWeDo from "@/components/WhatWeDo";
import OurPromise from "@/components/OurPromise";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhoWeAre />
        <WhatWeDo />
        <OurPromise />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
