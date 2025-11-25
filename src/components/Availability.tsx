import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, Instagram, Github } from "lucide-react";

const Availability = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com",
      primary: true,
    },
    {
      icon: MessageCircle,
      label: "Messenger",
      value: "Chat on Messenger",
      href: "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "#",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "Follow on Instagram",
      href: "#",
    },
    {
      icon: Github,
      label: "Github",
      value: "View on GitHub",
      href: "#",
    },
  ];

  return (
    <section id="availability" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border-2 border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center mb-8"
              >
                <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-primary font-mono text-sm">✨ AVAILABLE FOR WORK</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Available for select{" "}
                  <span className="text-gradient">freelance opportunities</span>
                </h2>

                <p className="text-lg text-muted-foreground mb-8">
                  Have an exciting project you need help with?
                  <br />
                  Send me an email or contact me via instant message!
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid gap-3"
              >
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.label}
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                        method.primary
                          ? "bg-primary/10 border-primary/50 hover:bg-primary/20"
                          : "bg-background/50 border-border hover:border-primary/50"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          method.primary
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-primary"
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="text-sm text-muted-foreground font-mono">{method.label}</div>
                        <div
                          className={`font-medium ${
                            method.primary ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {method.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Availability;
