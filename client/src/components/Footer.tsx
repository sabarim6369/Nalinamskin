import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing!");
  };

  return (
    <footer className="bg-gradient-primary py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Glow & Grace</h3>
            <p className="text-primary-foreground/80">
              Your destination for premium skincare and haircare treatments.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Home</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">About</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Facial Treatments</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Anti-Aging</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Hair Spa</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Hair Treatment</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-primary-foreground/80 mb-4">Subscribe for beauty tips and exclusive offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <Button type="submit" className="w-full bg-background/20 hover:bg-background/30">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 text-center text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Glow & Grace Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
