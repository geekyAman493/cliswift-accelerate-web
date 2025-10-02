import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-display font-bold mb-6">
              About <span className="text-gradient">Cliswift</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Learn more about our mission, values, and the team driving innovation.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
