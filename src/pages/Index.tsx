import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import CustomCursor from "@/components/CustomCursor";
import ContactDetails from "@/components/contactDetails";
import { useEffect, useState } from "react";
import { Loader } from "@/components/Loader";

const Index = () => {
  const [loading, setLoading]= useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    },4000);
    
  },[])
   return <div className={` focus-visible:[&_button]:!outline-none min-h-[100dvh] ${loading?"flex":""} items-center overflow-hidden justify-center`}>
{   loading!==true?<>
     <CustomCursor />
      <Navigation />
      <Hero />
      <Expertise />
      <Work />
      <Experience />
      <ContactDetails />
        </>:
        <Loader/>}
    </div>
};

export default Index;
