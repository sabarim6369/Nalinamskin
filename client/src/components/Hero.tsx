import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-spa.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury spa treatment room" 
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-primary" size={24} />
              <span className="text-primary font-medium">Premium Care Awaits You</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Revive Your Skin,
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Redefine Your Glow
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Experience the perfect blend of science and luxury with our advanced skincare 
              and haircare treatments tailored just for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-medium transition-all duration-300 text-lg px-8"
              >
                <Calendar className="mr-2" size={20} />
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary hover:bg-primary/10 text-lg px-8"
              >
                Explore Services
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-3 gap-8"
          >
            {[
              { value: "10K+", label: "Happy Clients" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
