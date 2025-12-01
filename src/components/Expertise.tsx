import { motion } from "framer-motion";
import { Code2, Palette, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import codeIllustration from "@/assets/code-illustration.png";

  const tagsToMap = {
      "React": "https://react.dev/",
      "Node.js": "https://nodejs.orgs/",
      "MongoDB": "http://mongodb.com/",
      "GraphQL": "https://graphql.com/",
      "Express": "https://expressjs.com/",
      "Capacitor": "https://capacitorjs.com/",
      "Python": "https://docs.python.org/",
      "OCR": "https://en.wikipedia.org/wiki/Optical_character_recognition",
      "FastTag": "https://fasttag.org/",
      "Real-time Alerts": "https://en.wikipedia.org/wiki/Real-time_computing",
      "AWS": "https://aws.amazon.com/",
      "RabbitMQ": "https://www.rabbitmq.com/",
      "Docker": "https://www.docker.com/",
      "Kubernetes": "https://kubernetes.io/",
      "Elasticsearch": "https://www.elastic.co/elasticsearch/",
      "Redux": "https://redux.js.org/",
      "WebSocket": "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      "Socket.IO": "https://socket.io/",
      "Jenkins": "https://www.jenkins.io/",
      "Firebase": "https://firebase.google.com/",
      "Flutter": "https://flutter.dev/",
      "C++": "https://isocpp.org/",
      "System Design": "https://en.wikipedia.org/wiki/System_design",
      "CLI Tools": "https://en.wikipedia.org/wiki/Command-line_interface",
      "Cross-Platform": "https://en.wikipedia.org/wiki/Cross-platform_software",
  };

const Expertise = () => {
  const expertiseItems = [
{ 
  icon: Code2,
  title: "Software Development",
  subtitle: "C++ & System Programming",
  description:
    "Building high-performance systems and microservices using C++ and Python. Experience with CLI tools, automation scripts, and interfacing between C++ microservices and Python applications for real-time configuration and monitoring.",
  skills: ["C++", "Python", "System Design", "CLI Tools"],
},
{
  icon: Palette,
  title: "Full Stack & DevOps",
  subtitle: "MERN Stack & Cloud Infrastructure",
  description:
    "Developing scalable web applications with MERN stack, GraphQL, and real-time features. Proficient in containerization, orchestration, and CI/CD pipelines for seamless deployment and high availability.",
  skills: ["Node.js", "React", "MongoDB", "Docker", "Kubernetes", "AWS", "Jenkins"],
},
{
  icon: Smartphone,
  title: "Mobile Development",
  subtitle: "Capacitor & Flutter",
  description:
    "Building cross-platform mobile applications using Capacitor and Flutter with Node.js backends. Integrating Firebase for real-time features and deploying production-ready apps to iOS and Android platforms.",
  skills: ["Capacitor", "Flutter", "Firebase", "Node.js", "Cross-Platform"],
},

  ];

  return (
    <section id="expertise" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {expertiseItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-primary/5 h-full relative overflow-hidden">
                  {/* Decorative gradient */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                  
                  <CardHeader className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-accent/30 transition-all group-hover:scale-110 shadow-lg shadow-primary/20">
                      <Icon className="text-primary" size={28} />
                    </div>
                    <div className="mb-2">
                      <div className="text-xs font-mono text-primary mb-1">{item.subtitle}</div>
                      <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                      {item.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.skills.map((skill) => (
                        <a
                          key={skill}
                          href={tagsToMap[skill]}
                          target="_blank"
                          className="px-2 py-1 text-xs font-mono bg-primary/5 text-primary rounded border border-primary/10"
                        >
                          {skill}
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="relative rounded-xl overflow-hidden border border-border bg-card">
            <img 
              src={codeIllustration} 
              alt="Code editor with Hello World" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-3xl mx-auto mt-12"
        >
          <blockquote className="border-l-4 border-primary pl-6 py-4">
            <p className="text-xl md:text-2xl text-muted-foreground italic mb-2">
              "Sometimes the best way to solve a problem is to help others."
            </p>
            <footer className="text-sm text-primary font-mono">
              - Uncle Iroh, 'Avatar: The Last Airbender'
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
