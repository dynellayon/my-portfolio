import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "danayon3@gmail.com",
    href: "mailto:danayon3@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09664689907",
    href: "tel:09664689907",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cagayan de Oro, Philippines",
    href: "#",
  },
];

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    }

    setIsLoading(false);
  };

  return (
    <section id="contact" className="py-32 scroll-mt-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-primary text-sm uppercase tracking-wider">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's work together
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project idea or opportunity? Send me a message and let's
            build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm">Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-surface border border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input
                  required
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-surface border border-border focus:border-primary outline-none"
                />
              </div>

              <div>
                <label className="text-sm">Message</label>
                <textarea
                  required
                  rows="5"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-surface border border-border focus:border-primary outline-none resize-none"
                />
              </div>

              <Button
                className="w-full flex justify-center items-center gap-2"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-2 text-sm mt-4 ${
                    submitStatus.type === "success"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle size={18} />
                  ) : (
                    <AlertCircle size={18} />
                  )}
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-surface transition"
                  >
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-lg">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border border-primary/30">
              <p className="text-sm text-muted-foreground">
                I'm currently available for freelance work, collaborations, and
                full-time opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
