import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import projectEcommerce from "@/assets/project-ecommerce.png";
import projectTravel from "@/assets/project-travel.png";
import projectDashboard from "@/assets/project-dashboard.png";
import projectChat from "@/assets/project-chat.png";

const Work = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management and payment processing.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      image: projectEcommerce,
    },
    {
      title: "Mobile Travel App",
      description: "Cross-platform travel application with booking system and real-time notifications.",
      tags: ["React Native", "TypeScript", "Firebase"],
      image: projectTravel,
    },
    {
      title: "Dashboard Analytics",
      description: "Data visualization dashboard with interactive charts and real-time data updates.",
      tags: ["Next.js", "D3.js", "TailwindCSS"],
      image: projectDashboard,
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered response suggestions and sentiment analysis.",
      tags: ["React", "WebSocket", "OpenAI"],
      image: projectChat,
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
