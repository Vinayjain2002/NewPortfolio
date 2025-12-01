import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import hero3d from "@/assets/hero-3d.png";
import { useDisclosure } from "@mantine/hooks";
import { Button } from "@/components/ui/button";
import ResumeViewer from "./ResumeViewer";

const Hero = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const Info = { name: "Vinay Jain" };
  return (
    <div>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Hero background image */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <img 
                src={hero3d} 
                alt="3D geometric background" 
                className="w-full h-full object-cover animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
            </motion.div>
            <motion.div
              className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <span className="font-mono text-primary text-sm md:text-base">
                  &lt;Hello World /&gt;
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
              >
                <span className="text-foreground">Vinay</span>{" "}
                <span className="text-gradient glow-text">Jain</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground mb-8 font-mono uppercase tracking-wider"
              >
                Software Engineer, Full Stack Developer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="xs-mx:w-[90%] flex gap-3 items-center justify-center"
              >
                <Button onClick={open} className="focus-visible:!outline-none !text-bgColor !w-fit xs-mx:!w-[46%]" size="lg" variant="default">Check Resume</Button>
                <a href="Resume.pdf" download={Info.name} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 !text-primaryColor !w-fit xs-mx:!w-[46%]">
                  Download
                  <Download size={20} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 flex items-center justify-center gap-2 text-sm text-muted-foreground"
              >
                <span className="font-mono">AS FEATURED IN</span>
              </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mt-6 flex items-center justify-center gap-8 flex-wrap opacity-50"
                >
                  {[
                    { name: "GitHub", url: "https://github.com/yourusername" },
                    { name: "CodePen", url: "https://codepen.io/yourusername" },
                    { name: "Dev.to", url: "https://dev.to/yourusername" },
                    { name: "Medium", url: "https://medium.com/@yourusername" }
                  ].map((platform) => (
                    <a 
                      key={platform.name} 
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-sm hover:text-primary transition-colors cursor-pointer"
                    >
                      {platform.name}
                    </a>
                  ))}
            </motion.div>

            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.a
              href="#expertise"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-xs font-mono">SCROLL</span>
              <ArrowDown size={20} />
            </motion.a>
          </motion.div>
        </section>
       {/* <ResumeViewer opened={opened} close={close} /> */}
    </div>
  
  );
};

export default Hero;
