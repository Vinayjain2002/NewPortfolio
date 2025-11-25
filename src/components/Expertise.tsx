import { motion } from "framer-motion";
import { Code2, Palette, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Expertise = () => {
  const expertiseItems = [
    {
      icon: Code2,
      title: "Software Development",
      description:
        "Experienced in both functional and OOP: JavaScript, TypeScript, Python, and modern frameworks.",
    },
    {
      icon: Palette,
      title: "Frontend Dev React, NextJS",
      description:
        "Passionate about UI/UX. Over 5 years of development experience in HTML, CSS, JS, React and NextJS frameworks.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Skilled in developing hybrid mobile apps and cross-platform solutions using modern frameworks.",
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
                <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto"
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
