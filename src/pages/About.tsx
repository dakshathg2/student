import { useState } from "react";
import { GraduationCap, Target, Users, Shield, Search } from "lucide-react";
import Navigation from "@/components/Navigation";
import { searchDeals } from "@/data/studentDeals";

const About = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      icon: GraduationCap,
      title: "Student-Focused",
      description: "Exclusively curated discounts and deals for verified students across all major categories."
    },
    {
      icon: Target,
      title: "50+ Platforms",
      description: "Comprehensive collection of the most popular platforms offering legitimate student discounts."
    },
    {
      icon: Shield,
      title: "Verified Deals",
      description: "All deals are regularly verified and updated to ensure they're current and legitimate."
    },
    {
      icon: Users,
      title: "Easy to Use",
      description: "Simple, intuitive interface makes finding and claiming student discounts effortless."
    }
  ];

  const verificationMethods = [
    {
      method: "School Email",
      description: "Most common method - use your .edu email address to verify student status.",
      platforms: "Amazon Prime Student, Microsoft, HP, Adobe"
    },
    {
      method: "Student ID Upload",
      description: "Upload a photo of your valid student ID card for verification.",
      platforms: "SheerID, Target, McDonald's, Chick-fil-A"
    },
    {
      method: "Third-Party Services",
      description: "Verify through UNiDAYS, Student Beans, ID.me, or SheerID platforms.",
      platforms: "Apple, Nike, Adidas, Logitech"
    },
    {
      method: "Enrollment Documents",
      description: "Provide enrollment verification or transcript as proof of student status.",
      platforms: "Some travel and specialty retailers"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSearch={setSearchQuery} searchQuery={searchQuery} />
      
      {/* Hero Section */}
      <section className="bg-primary-light py-16 px-4">
        <div className="container mx-auto text-center">
          <GraduationCap className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About StudentDiscountHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted source for discovering and accessing exclusive student discounts 
            from 50+ popular platforms. Save money while you study.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that being a student shouldn't mean breaking the bank. Our mission is to help 
              students discover and access exclusive discounts across technology, entertainment, retail, 
              travel, food, and more. By aggregating deals from trusted platforms and providing clear 
              verification instructions, we make it easy for students to save money on the things they need most.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting student discounts is easier than ever with our simple 4-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Browse & Search",
                description: "Explore categories or search for specific brands and deals you're interested in."
              },
              {
                step: "2", 
                title: "Choose Your Deal",
                description: "Click on any deal to view detailed information, discount amount, and requirements."
              },
              {
                step: "3",
                title: "Verify Student Status",
                description: "Follow the verification instructions using your school email, ID, or approved services."
              },
              {
                step: "4",
                title: "Start Saving",
                description: "Click 'Claim Offer' to visit the platform and enjoy your exclusive student discount."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Student Verification Methods</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Different platforms use different verification methods. Here's what you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {verificationMethods.map((method, index) => (
              <div key={index} className="deal-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">{method.method}</h3>
                <p className="text-muted-foreground mb-4">{method.description}</p>
                <div className="bg-primary-light p-3 rounded-lg">
                  <p className="text-sm font-medium text-primary mb-1">Common Platforms:</p>
                  <p className="text-sm text-muted-foreground">{method.platforms}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Are all these discounts really available to students?",
                answer: "Yes! All deals listed on StudentDiscountHub are legitimate student discounts offered directly by the platforms themselves. We regularly verify and update our listings to ensure accuracy."
              },
              {
                question: "Do I need to pay to access these discounts?",
                answer: "No, StudentDiscountHub is completely free to use. You only pay for the products or services you purchase through the platforms, at their discounted student prices."
              },
              {
                question: "What if I'm having trouble verifying my student status?",
                answer: "Each platform has its own verification process. Make sure you have access to your school email (.edu works best) and a valid student ID. If you're still having trouble, contact the platform's customer support directly."
              },
              {
                question: "How often are the deals updated?",
                answer: "We regularly review and update our deal listings to ensure they're current. However, discount amounts and availability can change, so always check the platform's website for the most up-to-date information."
              },
              {
                question: "Can graduate students use these discounts?",
                answer: "Most platforms extend their student discounts to graduate students, but requirements vary. Check each platform's specific eligibility criteria to confirm you qualify."
              }
            ].map((faq, index) => (
              <div key={index} className="deal-card p-6">
                <h3 className="font-semibold text-lg text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Start Saving?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Explore our collection of 50+ student discounts and start saving money today.
            </p>
            <a
              href="/"
              className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium text-lg hover:bg-primary-dark transition-colors"
            >
              <Search className="h-5 w-5" />
              <span>Browse All Deals</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;