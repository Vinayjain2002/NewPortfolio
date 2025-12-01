import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const ContactDetails = () => {
const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "vinayjain.sde@gmail.com",
    href: "mailto:vinayjain.sde@gmail.com",
    primary: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9306648591",
    href: "tel:+919306648591",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://linkedin.com/in/er-vinayjain",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "View on GitHub",
    href: "https://github.com/Vinayjain2002",
  },
];


  return (
    <section id="contact" className="pt-24 relative">
      <div className="container mx-auto px-6">
        <motion.div className="max-w-3xl mx-auto">
          {/* Availability Badge */}
          <motion.div className="text-center mb-8">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary font-mono text-sm">✨ AVAILABLE FOR WORK</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Available for full-time opportunities and select freelance projects.
              <br />
              Send me an email or reach out via social media!
            </p>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid gap-3 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-all ${
                    method.primary
                      ? "bg-primary/10 border-primary/50 hover:bg-primary/20"
                      : "bg-background/50 border-border hover:border-primary/50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    method.primary ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm text-muted-foreground font-mono">{method.label}</div>
                    <div className={`font-medium ${method.primary ? "text-primary" : ""}`}>
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer className="mt-24 py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground font-mono">
              © 2024 Vinay Jain. All rights reserved.
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default ContactDetails;
