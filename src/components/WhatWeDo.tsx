import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Lightbulb,
  Cloud,
  Users,
  Database,
  Brain,
  Shield,
} from "lucide-react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Lightbulb,
      title: "Consulting Services",
      description:
        "We design and deliver tailored strategies that enable businesses to scale faster, optimize operations, and stay ahead in today's competitive landscape.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description:
        "Partnering with AWS, Microsoft Azure, and Google Cloud to bring best-in-class solutions that unlock new opportunities for innovation.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Expert data engineering services with platforms like Snowflake, enabling data-driven decision making and business intelligence.",
    },
    {
      icon: Brain,
      title: "AI Engineering",
      description:
        "Cutting-edge AI-driven solutions that automate processes, enhance efficiency, and drive innovation across your organization.",
    },
    {
      icon: Users,
      title: "Staffing Services",
      description:
        "Top-class engineering talent with deep expertise in Data, Cloud, and AI, combining years of hands-on experience with modern best practices.",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description:
        "Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.",
    },
  ];

  const partners = [
    { name: "AWS", color: "text-orange-500" },
    { name: "Microsoft Azure", color: "text-blue-500" },
    { name: "Google Cloud", color: "text-red-500" },
    { name: "Snowflake", color: "text-cyan-500" },
  ];

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            What <span className="text-gradient">We Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powering client success through comprehensive consulting and engineering
            services, backed by leading technologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-premium)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer border border-border/50"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-gradient transition-all">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl font-display font-semibold mb-8">
            Powered by Leading Technologies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-card rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer"
              >
                <span className={`text-lg font-semibold ${partner.color}`}>
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
