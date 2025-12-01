import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import projectEcommerce from "@/assets/project-ecommerce.png";
import projectTravel from "@/assets/project-travel.png";
import projectHotel from "@/assets/projectHotel.png";
import projectWMS from "@/assets/projectWMS.png";
import projectDaycare from "@/assets/projectDaycare.png";
import projectStream from "@/assets/projectStream.png";

import { link } from "fs";

const Work = () => {
const projects = [ 
  {
    title: "Warehouse Management System",
    description: "Government WMS for Haryana integrating OCR and FastTag to automate vehicle identification, gate entries, and weight tracking with real-time alerts and reporting.",
    tags: ["Node.js", "Python", "OCR", "FastTag", "Real-time Alerts"],
    image: projectWMS,
    link: "https://cwcgate.rsintegrators.in/"
  },
  {
    title: "MyDayCare - Daycare Management Platform",
    description: "Full-stack daycare management web and mobile app for Reliable PBX with parent portals, attendance tracking, and real-time notifications using Capacitor for cross-platform deployment.",
    tags: ["React", "Node.js", "Capacitor", "Firebase", "MongoDB"],
    image: projectDaycare,
    link: "https://my-day-care-private.vercel.app/"
  },
  {
    title: "StreamSync - Video Streaming Platform",
    description: "Scalable video streaming backend with AWS S3, RabbitMQ, Docker, and Kubernetes using HLS protocol. Features Elasticsearch for video search and optimized bandwidth usage.",
    tags: ["Node.js", "AWS", "RabbitMQ", "Docker", "Kubernetes", "Elasticsearch"],
    image: projectStream,
    link:""
  },
  {
    title: "Stay Smart - Hotel Booking App",
    description: "MERN-based hotel booking application using GraphQL for efficient data fetching. Features filtered search, booking history, and admin dashboard for hotel and room management.",
    tags: ["React", "Node.js", "MongoDB", "GraphQL", "Express"],
    image: projectHotel,
    link: ""
  },
  {
    title: "PeerPoint - Real-time Chat Application",
    description: "Real-time chat application using MERN stack and Socket.io with secure private chats, group discussions, and instant notifications for seamless communication.",
    tags: ["React", "Socket.IO", "Redux", "Node.js", "MongoDB"],
    image: projectHotel,
    link: " "
  },
  {
    title: "Infinity - Event Discovery Platform",
    description: "Hackathon and bootcamp discovery platform with Redux state management and MySQL for scalable queries, centralizing college fests and tech events for students.",
    tags: ["React", "Redux", "MySQL", "Node.js"],
    image: projectHotel,
    link: ""
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
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={18} />
                      </a>
                      <a
                        href="#"
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
