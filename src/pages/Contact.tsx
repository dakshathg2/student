import { useState } from "react";
import { Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { searchDeals } from "@/data/studentDeals";

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team for general inquiries and support.",
      contact: "hello@studentdiscounthub.com",
      available: "We respond within 24 hours"
    },
    {
      icon: MessageSquare,
      title: "Feedback",
      description: "Share your thoughts, suggestions, or report issues with our platform.",
      contact: "Use the form below",
      available: "All feedback is reviewed"
    }
  ];

  const subjects = [
    "General Inquiry",
    "Deal Suggestion",
    "Report Broken Link",
    "Technical Issue",
    "Partnership Opportunity",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {/* Hero Section */}
      <section className="bg-primary-light py-16 px-4">
        <div className="container mx-auto text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions, suggestions, or feedback? We'd love to hear from you. 
            Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="deal-card p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl text-foreground mb-3">{method.title}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <div className="space-y-2">
                  <p className="font-medium text-primary">{method.contact}</p>
                  <p className="text-sm text-muted-foreground">{method.available}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="deal-card p-8 text-center">
                <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for your message. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="deal-card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-sm text-muted-foreground mt-4 text-center">
                  * Required fields
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Other Ways to Connect
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="font-semibold text-lg text-foreground mb-3">Suggest a Deal</h3>
                <p className="text-muted-foreground mb-4">
                  Know of a student discount we haven't listed? Let us know and we'll add it to our collection.
                </p>
                <a
                  href="mailto:hello@studentdiscounthub.com?subject=Deal Suggestion"
                  className="text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Suggest Deal →
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-lg text-foreground mb-3">Report an Issue</h3>
                <p className="text-muted-foreground mb-4">
                  Found a broken link or incorrect information? Help us keep our listings accurate.
                </p>
                <a
                  href="mailto:hello@studentdiscounthub.com?subject=Report Issue"
                  className="text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Report Issue →
                </a>
              </div>
              
              <div className="text-center">
                <h3 className="font-semibold text-lg text-foreground mb-3">Partnership</h3>
                <p className="text-muted-foreground mb-4">
                  Interested in partnering with us? We'd love to hear about collaboration opportunities.
                </p>
                <a
                  href="mailto:hello@studentdiscounthub.com?subject=Partnership Opportunity"
                  className="text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Get in Touch →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;