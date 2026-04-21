import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Causes from "@/components/Causes";
import Territory from "@/components/Territory";
import Proposals from "@/components/Proposals";
import LeadCapture from "@/components/LeadCapture";
import SocialMedia from "@/components/SocialMedia";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Causes />
        <Territory />
        <Proposals />
        <LeadCapture />
        <SocialMedia />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
};

export default Index;
