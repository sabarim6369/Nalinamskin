import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Beauty Boulevard, Wellness District, CA 90210",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@glowandgrace.com",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon-Sat: 9AM - 8PM | Sun: 10AM - 6PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gradient-primary rounded-3xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-background/80 flex items-center justify-center flex-shrink-0">
                      <info.icon size={24} className="text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{info.title}</p>
                      <p className="text-primary-foreground/80">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-3xl h-64 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.733089091671!2d-118.39969292346624!3d34.06350101605679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c5fcf1f7d2e5!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1709821234567!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl shadow-card space-y-6">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input id="contact-name" placeholder="Your name" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="your.email@example.com" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this about?" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us more about your inquiry..."
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-gradient-primary text-lg py-6">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
