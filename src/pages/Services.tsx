import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Cloud, Database, Brain, Users, Shield } from "lucide-react";
import digitalTransformationImg from "@/assets/services/digital-transformation.jpg";
import cloudSolutionsImg from "@/assets/services/cloud-solutions.jpg";
import dataAnalyticsImg from "@/assets/services/data-analytics.jpg";
import aiMlImg from "@/assets/services/ai-ml.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import itConsultingImg from "@/assets/services/it-consulting.jpg";

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Consulting Services",
      description: "We design and deliver tailored strategies that enable businesses to scale faster, optimize operations, and stay ahead in today's competitive landscape.",
      features: [
        "Digital transformation strategy",
        "Business process optimization",
        "Technology roadmap planning",
        "Innovation consulting"
      ],
      image: digitalTransformationImg,
      imageAlt: "Digital transformation consulting services"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Partnering with AWS, Microsoft Azure, and Google Cloud to bring best-in-class solutions that unlock new opportunities for innovation.",
      features: [
        "Cloud migration & architecture",
        "Multi-cloud solutions",
        "Cloud-native development",
        "Infrastructure optimization"
      ],
      image: cloudSolutionsImg,
      imageAlt: "Cloud infrastructure and solutions"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Expert data engineering services with platforms like Snowflake, enabling data-driven decision making and business intelligence.",
      features: [
        "Data pipeline development",
        "ETL/ELT solutions",
        "Data warehouse design",
        "Real-time data processing"
      ],
      image: dataAnalyticsImg,
      imageAlt: "Data engineering and analytics"
    },
    {
      icon: Brain,
      title: "AI Engineering",
      description: "Cutting-edge AI-driven solutions that automate processes, enhance efficiency, and drive innovation across your organization.",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision solutions",
        "AI integration & deployment"
      ],
      image: aiMlImg,
      imageAlt: "AI and machine learning solutions"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets, ensure compliance, and maintain business continuity.",
      features: [
        "Security assessments & audits",
        "Threat detection & response",
        "Compliance management",
        "Security architecture design"
      ],
      image: cybersecurityImg,
      imageAlt: "Cybersecurity services"
    },
    {
      icon: Users,
      title: "Staffing Services",
      description: "Top-class engineering talent with deep expertise in Data, Cloud, and AI, combining years of hands-on experience with modern best practices.",
      features: [
        "Skilled technology professionals",
        "Flexible staffing models",
        "Domain expertise",
        "Cultural fit assessment"
      ],
      image: itConsultingImg,
      imageAlt: "IT staffing and consulting services"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT consulting and technology solutions tailored to your
              business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Sections */}
      <main className="pb-16">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const Icon = service.icon;
          
          return (
            <section 
              key={index} 
              className={`py-16 ${index !== 0 ? 'border-t border-border/50' : ''}`}
            >
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content Side */}
                  <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h2 className="text-4xl font-display font-bold">
                      {service.title}
                    </h2>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="outline" 
                      className="group mt-6"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Image Side */}
                  <div className="flex-1 w-full">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative rounded-3xl overflow-hidden shadow-2xl group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Decorative gradient overlay */}
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/30 to-transparent rounded-full blur-3xl" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        })}
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
