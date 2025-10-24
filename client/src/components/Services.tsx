import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import facialImage from "@/assets/service-facial.jpg";
import hairImage from "@/assets/service-hair.jpg";
import antiagingImage from "@/assets/service-antiaging.jpg";

const Services = () => {
  const skinServices = [
    {
      title: "Signature Facial",
      image: facialImage,
      description: "Luxurious deep-cleansing facial with massage and mask.",
      details: "Our signature facial includes deep cleansing, exfoliation, extractions, a relaxing facial massage, and a customized mask. Perfect for all skin types, this treatment leaves your skin refreshed, hydrated, and glowing.",
      duration: "60 mins",
      price: "$150",
    },
    {
      title: "Anti-Aging Treatment",
      image: antiagingImage,
      description: "Advanced technology to reduce fine lines and wrinkles.",
      details: "Utilizing the latest in skincare technology, this treatment targets fine lines, wrinkles, and age spots. Includes LED light therapy, collagen-boosting serums, and specialized massage techniques to restore youthful radiance.",
      duration: "90 mins",
      price: "$250",
    },
    {
      title: "Acne Treatment",
      image: facialImage,
      description: "Specialized care for acne-prone skin with lasting results.",
      details: "A comprehensive approach to treating acne, including deep pore cleansing, blue light therapy, extraction, and application of antibacterial treatments. Ideal for reducing breakouts and preventing future blemishes.",
      duration: "75 mins",
      price: "$180",
    },
  ];

  const hairServices = [
    {
      title: "Hair Spa Therapy",
      image: hairImage,
      description: "Rejuvenating spa treatment for stronger, shinier hair.",
      details: "Indulge in a complete hair spa experience with hot oil massage, steam treatment, deep conditioning mask, and scalp therapy. Restores moisture, shine, and vitality to damaged hair.",
      duration: "90 mins",
      price: "$120",
    },
    {
      title: "Hair Fall Treatment",
      image: hairImage,
      description: "Effective solutions to reduce hair fall and promote growth.",
      details: "Scientifically formulated treatment combining scalp analysis, stimulating massages, and growth-promoting serums. Addresses root causes of hair fall and strengthens follicles for healthier hair growth.",
      duration: "60 mins",
      price: "$100",
    },
    {
      title: "Dandruff Control",
      image: hairImage,
      description: "Gentle yet effective treatment for a healthy scalp.",
      details: "Specialized anti-dandruff therapy using medicated treatments and gentle exfoliation to eliminate flakes and soothe irritation. Includes scalp massage and moisturizing treatments for long-lasting results.",
      duration: "45 mins",
      price: "$80",
    },
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 h-full">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full font-semibold">
            {service.price}
          </div>
        </div>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="text-muted-foreground mb-4">{service.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">⏱ {service.duration}</span>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-primary hover:bg-primary/10">
                  Learn More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{service.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <p className="text-muted-foreground leading-relaxed">{service.details}</p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold text-xl text-primary">{service.price}</p>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary">Book This Treatment</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our range of premium skincare and haircare treatments designed to bring out your natural beauty.
          </p>
        </motion.div>

        <Tabs defaultValue="skincare" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="skincare" className="text-lg">Skin Care</TabsTrigger>
            <TabsTrigger value="haircare" className="text-lg">Hair Care</TabsTrigger>
          </TabsList>

          <TabsContent value="skincare">
            <div className="grid md:grid-cols-3 gap-8">
              {skinServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="haircare">
            <div className="grid md:grid-cols-3 gap-8">
              {hairServices.map((service, index) => (
                <ServiceCard key={index} service={service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
