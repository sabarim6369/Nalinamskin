import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Skincare transformation results" },
    { src: gallery2, alt: "Hair treatment before and after" },
    { src: gallery3, alt: "Radiant skin after facial treatment" },
    { src: gallery1, alt: "Professional skincare results" },
    { src: gallery2, alt: "Healthy hair transformation" },
    { src: gallery3, alt: "Glowing skin results" },
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Results</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the transformative results our clients have achieved with our expert treatments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-lg">
            Results may vary. Consult with our experts to create a personalized treatment plan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
