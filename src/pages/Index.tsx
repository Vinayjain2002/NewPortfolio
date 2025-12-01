import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import CustomCursor from "@/components/CustomCursor";
import ContactDetails from "@/components/contactDetails";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      {/* <Availability />
      <Contact /> */}
      <ContactDetails />
    </div>
  );
};

export default Index;
