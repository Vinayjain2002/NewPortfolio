import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Samriddhi Automations Pvt Ltd",
      period: "Jan 2025 - Present",
      location: "Noida, India",
      website: "samriddhiautomations.com",
      description:
        "Building backend infrastructure for Haryana Government's Warehouse Management System, integrating OCR and FastTag for automated vehicle identification and weight tracking. Developed real-time alert and reporting system that reduced manual data entry by 70% and improved processing accuracy by 95%.",
      tags: ["Node.js", "Python", "OCR", "FastTag", "Real-time Systems"],
    },
    {
      role: "Full Stack Developer",
      company: "Reliable PBX",
      period: "2024 - Present",
      location: "Remote, USA",
      website: "reliablepbx.com",
      description:
        "Developed full-stack daycare management platform with web and mobile applications using MERN stack and Capacitor. Built real-time chat and communication system for parent-teacher interactions with push notifications, attendance tracking, and administrative dashboards.",
      tags: ["React", "Node.js", "Capacitor", "Firebase", "MongoDB"],
    },
    {
      role: "Software Developer",
      company: "Ciena India",
      period: "Aug 2023 - Sept 2024",
      location: "Gurugram, India",
      website: "ciena.com",
      description:
        "Developed Python automation scripts and CLI tools interfacing with C++ microservices for WaveRouter metro routing platform. Optimized API functionality reducing latency and improved test coverage from 58% to 92%. Built Flask-based tools for real-time configuration feedback and system health monitoring.",
      tags: ["Python", "C++", "Flask", "CLI Tools", "System Automation"],
    },
    {
      role: "Open Source Contributor",
      company: "Personal Projects",
      period: "2022 - Present",
      location: "Remote",
      website: "github.com/Vinayjain2002",
      description:
        "Built scalable systems including StreamSync (video streaming with AWS, Kubernetes), Stay Smart (hotel booking with GraphQL), and PeerPoint (real-time chat with Socket.IO). Focus on distributed architectures, microservices, and cloud infrastructure.",
      tags: ["MERN", "AWS", "Docker", "Kubernetes", "GraphQL"],
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
