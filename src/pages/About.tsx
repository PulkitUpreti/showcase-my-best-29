import { Target, Eye, TrendingUp, ClipboardCheck, BookOpen, Users, MessageSquare, Award, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/about-hero.jpg";
import nsdcLogo from "@/assets/nsdc-logo.png";
import pmkvyLogo from "@/assets/pmkvy-logo.png";
import msdeLogo from "@/assets/msde-logo.png";
import skillIndiaLogo from "@/assets/skill-india-logo.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0F1F38 0%, #1A2C47 100%)'
        }}
      >
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Corporate training session" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About TalentVue Solution
            </h1>
            <p className="text-xl" style={{ color: '#E2E8F0' }}>
              Pioneering excellence in IT solutions, skill development & corporate consulting since inception
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F38' }}>
              Who We Are
            </h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#4A5568' }}>
              TalentVue Solution is a leading provider of IT solutions, corporate training, and strategic consulting services. Founded with a vision to bridge the gap between industry demands and workforce capabilities, we specialize in empowering organizations through cutting-edge technology adoption, comprehensive skill development programs, and strategic business consulting.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: '#4A5568' }}>
              Our team comprises certified industry experts, experienced trainers, and technology consultants who bring real-world insights to every engagement. We partner with organizations across sectors—from startups to Fortune 500 companies—delivering customized solutions that drive measurable business outcomes, enhance team performance, and accelerate digital transformation journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Impact */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="animate-scale-in shadow-md">
              <CardContent className="p-10 text-center flex flex-col h-full">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#0F1F38' }}
                >
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F1F38' }}>
                  Mission
                </h3>
                <p style={{ color: '#4A5568' }}>
                  To empower organisations through innovative technology solutions and strategic consulting services that drive measurable success and sustainable growth.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in shadow-md" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-10 text-center flex flex-col h-full">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#0F1F38' }}
                >
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F1F38' }}>
                  Vision
                </h3>
                <p style={{ color: '#4A5568' }}>
                  To be recognised as the premier partner for digital transformation and talent development, setting industry standards for excellence and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-scale-in shadow-md" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-10 text-center flex flex-col h-full">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: '#0F1F38' }}
                >
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#0F1F38' }}>
                  Impact
                </h3>
                <p style={{ color: '#4A5568' }}>
                  Integrity, Excellence, Innovation, Collaboration and Social Responsibility form the foundation of everything we do, shaping our decisions and relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#0F1F38' }}>
              Our Journey in Milestones
            </h2>
            <p className="text-lg mb-12" style={{ color: '#4A5568' }}>
              From our founding in 2010 to training 500+ professionals across 100+ corporate clients, our story is one of growth, learning and impact.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Horizontal Timeline line */}
              <div className="absolute top-8 left-0 right-0 h-1" style={{ backgroundColor: '#FF8C00' }}></div>

              {/* Timeline items */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {[
                  { year: '2010', event: 'Founded in Delhi NCR', description: 'Started with a vision to transform corporate learning' },
                  { year: '2013', event: 'First Cloud Training', description: 'Pioneered cloud technology training in the region' },
                  { year: '2016', event: 'APAC Expansion', description: 'Grew our footprint across Asia-Pacific markets' },
                  { year: '2019', event: '50+ Certified Trainers', description: 'Built a world-class team of industry experts' },
                  { year: '2023-Present', event: '100+ Partners', description: 'Achieved milestone of serving 500+ professionals' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="relative animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-4 h-4 rounded-full border-4 border-white relative z-10 mb-4"
                        style={{ backgroundColor: '#FF8C00' }}
                      ></div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Calendar className="h-4 w-4 mr-1" style={{ color: '#FF8C00' }} />
                          <span className="text-lg font-bold" style={{ color: '#FF8C00' }}>
                            {item.year}
                          </span>
                        </div>
                        <h4 className="text-sm font-semibold mb-2" style={{ color: '#0F1F38' }}>
                          {item.event}
                        </h4>
                        <p className="text-xs" style={{ color: '#4A5568' }}>{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - How We Work */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F1F38' }}>
              How We Work
            </h2>
            <p className="text-xl" style={{ color: '#4A5568' }}>
              Our methodology transforms learning into performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: ClipboardCheck,
                title: 'Needs Assessment',
                description: 'We analyse skill-gaps and business goals before designing the program.'
              },
              {
                icon: BookOpen,
                title: 'Custom Curriculum',
                description: 'Tailored content aligned to your industry, culture & technology stack.'
              },
              {
                icon: Users,
                title: 'Interactive Delivery',
                description: 'Hands-on labs, real-world case-studies, blended virtual and on-site sessions.'
              },
              {
                icon: MessageSquare,
                title: 'Post-Training Support',
                description: 'Quizzes, mentoring and refresher content ensure knowledge sticks.'
              }
            ].map((item, index) => (
              <Card key={index} className="animate-scale-in shadow-md" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#FF8C00' }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#0F1F38' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: '#4A5568' }}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Metrics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-12" style={{ color: '#0F1F38' }}>
              Making a Difference
            </h2>
            <p className="text-xl mb-12" style={{ color: '#4A5568' }}>
              We believe in tangible outcomes. Here are some key numbers from our clients
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '500+', label: 'Professionals Trained' },
              { number: '120+', label: 'Corporate Clients Served' },
              { number: '4.8/5', label: 'Participant Satisfaction' },
              { number: '30%', label: 'Productivity Improvement' }
            ].map((metric, index) => (
              <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold mb-3" style={{ color: '#FF8C00' }}>
                  {metric.number}
                </div>
                <p className="text-sm font-semibold" style={{ color: '#4A5568' }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Project Association */}
      <section className="py-20" style={{ backgroundColor: '#F9FAFB' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F1F38' }}>
              Government Project Association
            </h2>
            <p className="text-lg" style={{ color: '#4A5568' }}>
              Proudly associated with India's leading government initiatives for skill development and entrepreneurship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { logo: nsdcLogo, alt: 'NSDC - National Skill Development Corporation' },
              { logo: msdeLogo, alt: 'MSDE - Ministry of Skill Development & Entrepreneurship' },
              { logo: pmkvyLogo, alt: 'PMKVY - Pradhan Mantri Kaushal Vikas Yojana' },
              { logo: skillIndiaLogo, alt: 'Skill India' }
            ].map((org, index) => (
              <Card 
                key={index} 
                className="animate-scale-in shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 flex items-center justify-center min-h-[200px]">
                  <img 
                    src={org.logo} 
                    alt={org.alt}
                    className="w-full h-auto object-contain max-h-[150px]"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#0F1F38' }}>
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "The cloud training by TalentVue Solution accelerated our team's delivery by 35%.",
                author: 'CPO, Infosys Technologies'
              },
              {
                quote: "The leadership workshops transformed how our managers think.",
                author: 'HR Head, Tata Consultancy Services'
              },
              {
                quote: "Professional, knowledgeable, and results-driven. Highly recommended for corporate training.",
                author: 'CTO, Tech Mahindra'
              },
              {
                quote: "Their customized approach perfectly matched our industry needs and organizational culture.",
                author: 'L&D Director, Wipro Limited'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="animate-fade-in shadow-md" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-8">
                  <div className="mb-4">
                    <Award className="h-8 w-8" style={{ color: '#FF8C00' }} />
                  </div>
                  <p className="text-lg mb-6 italic" style={{ color: '#0F1F38' }}>
                    "{testimonial.quote}"
                  </p>
                  <p className="font-semibold" style={{ color: '#4A5568' }}>
                    — {testimonial.author}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 text-center"
        style={{ backgroundColor: '#0F1F38' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Elevate Your Team?
            </h2>
            <p className="text-xl mb-8" style={{ color: '#E2E8F0' }}>
              Contact us today for a custom training roadmap tailored for your organisation
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 text-white font-semibold hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: '#FF8C00' }}
              onClick={() => window.location.href = '/contact'}
            >
              Get a Free Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
