import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CWC from "../assets/CWC.png";
import MyDayCare   from "../assets/MyDayCare.png";
import Backend from "../assets/backend.png";
import SmartStay from "../assets/HotelBooking.png";
import DrawSurus from "../assets/Drawsurus.png";


const Work = () => {
const projects = [ 
  {
    title: "Warehouse Management System",
    description: "Government WMS for Haryana integrating OCR and FastTag to automate vehicle identification, gate entries, and weight tracking with real-time alerts and reporting.",
    tags: ["Node.js", "Python", "OCR", "FastTag", "Real-time Alerts"],
    image: CWC,
    link: "https://cwcgate.rsintegrators.in/",
    github: ""
  },
  {
    title: "MyDayCare - Daycare Management Platform",
    description: "Full-stack daycare management web and mobile app for Reliable PBX with parent portals, attendance tracking, and real-time notifications using Capacitor for cross-platform deployment.",
    tags: ["React", "Node.js", "Capacitor", "Firebase", "MongoDB"],
    image: MyDayCare,
    link: "https://my-day-care-private.vercel.app/",
    github: "https://github.com/Vinayjain2002/MyDayCarePrivate/"
  },
  {
    title: "StreamSync - Video Streaming Platform",
    description: "Scalable video streaming backend with AWS S3, RabbitMQ, Docker, and Kubernetes using HLS protocol. Features Elasticsearch for video search and optimized bandwidth usage.",
    tags: ["Node.js", "AWS", "RabbitMQ", "Docker", "Kubernetes", "Elasticsearch"],
    image: Backend,
    link:"https://github.com/Vinayjain2002/VideoStreamingBackend",
    github: "https://github.com/Vinayjain2002/VideoStreamingBackend"
  },
  {
    title: "Stay Smart - Hotel Booking App",
    description: "MERN-based hotel booking application using GraphQL for efficient data fetching. Features filtered search, booking history, and admin dashboard for hotel and room management.",
    tags: ["React", "Node.js", "MongoDB", "GraphQL", "Express"],
    image: SmartStay,
    link: "https://hotel-booking-ashy-mu.vercel.app/",
    github: "https://github.com/Vinayjain2002/Hotel-Booking"
  },
  {
    title: "Drawsurus - Multiplayer Drawing & Guessing Platform",
    description: "Real-time multiplayer drawing game platform where players take turns drawing prompts while others guess. Features WebSocket-based gameplay, private rooms, custom word lists, and live scoring system.",
    tags: ["React", "Redux", "WebSocket", "Node.js", "Socket.IO"],
    image: DrawSurus ,
    link: "https://drawsurus-frontend.vercel.app/",
    github: "https://github.com/Vinayjain2002/drawsurusFrontend"
  },
];

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deployed scalable web and hybrid mobile apps. Collaborated on 140+ projects with 50+ clients worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2 flex items-center justify-between">
                    {project.title}
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href={project.link} target="_blank"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
