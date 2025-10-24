import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      treatment: "Anti-Aging Facial",
      rating: 5,
      review: "Absolutely amazing experience! My skin has never looked better. The staff is incredibly professional and the results exceeded my expectations.",
    },
    {
      name: "Emily Chen",
      treatment: "Hair Spa Therapy",
      rating: 5,
      review: "The hair spa treatment was pure bliss. My hair feels so soft and healthy now. I'll definitely be coming back for more treatments!",
    },
    {
      name: "Michael Brown",
      treatment: "Acne Treatment",
      rating: 5,
      review: "After struggling with acne for years, this treatment has been life-changing. My skin is clearer than ever and my confidence is back!",
    },
    {
      name: "Jessica Davis",
      treatment: "Signature Facial",
      rating: 5,
      review: "The most relaxing and effective facial I've ever had. The ambiance is beautiful and the results are incredible. Highly recommend!",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experiences.
          </p>
        </motion.div>

        <Carousel className="max-w-5xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4"
                >
                  <Card className="shadow-card hover:shadow-medium transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="hsl(var(--primary))" className="text-primary" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed italic">
                        "{testimonial.review}"
                      </p>
                      <div>
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.treatment}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
