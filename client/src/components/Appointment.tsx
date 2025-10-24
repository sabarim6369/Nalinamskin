import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !date) {
      toast.error("Please fill in all fields");
      return;
    }

    // Show success state
    setIsSubmitted(true);
    toast.success("Appointment request submitted successfully!");

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", phone: "", service: "" });
      setDate(undefined);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="appointment" className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center bg-card p-12 rounded-3xl shadow-elegant"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <CheckCircle2 size={80} className="text-primary mx-auto mb-6" />
            </motion.div>
            <h3 className="text-3xl font-bold mb-4">Appointment Requested!</h3>
            <p className="text-muted-foreground text-lg">
              Thank you for choosing Glow & Grace. We'll contact you shortly to confirm your appointment.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="appointment" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to begin your journey to radiant skin and beautiful hair? Schedule your appointment today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card p-8 rounded-3xl shadow-elegant space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="service">Select Service</Label>
              <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="signature-facial">Signature Facial</SelectItem>
                  <SelectItem value="anti-aging">Anti-Aging Treatment</SelectItem>
                  <SelectItem value="acne-treatment">Acne Treatment</SelectItem>
                  <SelectItem value="hair-spa">Hair Spa Therapy</SelectItem>
                  <SelectItem value="hair-fall">Hair Fall Treatment</SelectItem>
                  <SelectItem value="dandruff">Dandruff Control</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Preferred Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button type="submit" className="w-full bg-gradient-primary text-lg py-6">
              Book Appointment
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;
