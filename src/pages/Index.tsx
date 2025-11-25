import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Availability from "@/components/Availability";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <Availability />
      <Contact />
    </div>
  );
};

export default Index;
