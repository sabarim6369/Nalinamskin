import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every treatment is customized to your unique skin and hair needs.",
    },
    {
      icon: Award,
      title: "Expert Team",
      description: "Certified professionals with years of experience in aesthetics.",
    },
    {
      icon: Users,
      title: "Client First",
      description: "Your comfort and satisfaction are our top priorities.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Glow & Grace</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a premium skincare and haircare clinic dedicated to helping you achieve 
            radiant skin and healthy hair through advanced treatments and personalized care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-medium transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mb-6">
                <feature.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary/10 rounded-3xl p-8 md:p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            To provide world-class skincare and haircare treatments that enhance natural beauty, 
            boost confidence, and promote overall wellness through cutting-edge technology and 
            compassionate care.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
