import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Co-Founder",
      company: "Tech Startup Ventures",
      period: "2024 - Present",
      location: "San Francisco, USA",
      website: "techstartup.com",
      description:
        "Co-founded a tech startup, managing end-to-end technical infrastructure, including server architecture, automation pipeline development, leadership of the web development team, and driving initiatives to optimize scalability.",
      tags: ["DevOps", "CI/CD", "Kubernetes", "JS/TS", "NextJS"],
    },
    {
      role: "Senior Lead Software Engineer",
      company: "Digital Solutions Inc",
      period: "2020 - 2024",
      location: "Remote",
      website: "digitalsolutions.com",
      description:
        "Led a frontend team to design and develop robust B2C and B2B solutions, utilizing React/Next.js for web applications, with a focus on responsive design, scalability, and enhanced user experience.",
      tags: ["JS", "TS", "React", "NextJS", "TailwindCSS"],
    },
    {
      role: "Full Stack Developer",
      company: "Creative Agency",
      period: "2018 - 2020",
      location: "New York, USA",
      website: "creativeagency.com",
      description:
        "Developed the UI and UX ecosystem for multiple client projects using modular component structures with modern frameworks and best practices.",
      tags: ["JS", "React", "Node.js", "MongoDB"],
    },
    {
      role: "Frontend Developer",
      company: "Freelance",
      period: "2017 - Present",
      location: "Remote",
      website: "upwork.com",
      description:
        "Top-rated developer specializing in Front-end technologies with a 100% job success rate and client satisfaction rating based on 150+ jobs.",
      tags: ["JavaScript", "React", "HTML", "CSS", "Figma"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <Briefcase size={12} className="text-primary-foreground" />
              </div>

              <div className="mb-2">
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {exp.role} <span className="text-primary">@</span> {exp.company}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-2">
                  <span className="font-mono">{exp.period}</span>
                  <span>•</span>
                  <span>{exp.location}</span>
                  <span>•</span>
                  <a
                    href={`https://${exp.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {exp.website}
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
