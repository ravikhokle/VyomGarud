'use client';

import { useState, FormEvent } from 'react';

// Constants
const WEB3FORMS_ACCESS_KEY = "d0c56bbd-d17a-45c0-b1e7-7c66ee45eb68";
const WEB3FORMS_API_URL = "https://api.web3forms.com/submit";

// Types
interface FormResult {
  message: string;
  type: 'idle' | 'loading' | 'success' | 'error';
}

export default function Home() {
  const [formResult, setFormResult] = useState<FormResult>({
    message: '',
    type: 'idle'
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormResult({ message: "Sending...", type: 'loading' });
    
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch(WEB3FORMS_API_URL, {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setFormResult({
          message: "Message sent successfully! We'll get back to you soon.",
          type: 'success'
        });
        (event.target as HTMLFormElement).reset();
      } else {
        setFormResult({
          message: "Something went wrong. Please try again.",
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormResult({
        message: "Failed to send message. Please try again.",
        type: 'error'
      });
    }
  };

  const getResultClassName = () => {
    const baseClasses = "text-center text-lg font-semibold";
    switch (formResult.type) {
      case 'success':
        return `${baseClasses} text-green-400`;
      case 'loading':
        return `${baseClasses} text-orange-400`;
      case 'error':
        return `${baseClasses} text-red-400`;
      default:
        return baseClasses;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800" role="navigation" aria-label="Main navigation">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#hero" className="text-2xl font-bold cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-white">Vyom</span>
            <span className="text-orange-500">Garud</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Home
            </a>
            <a href="#about" className="text-zinc-300 hover:text-orange-500 transition-colors">
              About
            </a>
            <a href="#capabilities" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Capabilities
            </a>
            <a href="#highlights" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Highlights
            </a>
            <a href="#contact" className="text-zinc-300 hover:text-orange-500 transition-colors">
              Contact
            </a>
          </div>
          
          <a href="#contact" className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all hidden md:block" aria-label="Get started with VyomGarud">
            Get Started
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white" 
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800">
            <div className="px-6 py-4 space-y-4">
              <a 
                href="#hero" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-300 hover:text-orange-500 transition-colors py-2"
              >
                Home
              </a>
              <a 
                href="#about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-300 hover:text-orange-500 transition-colors py-2"
              >
                About
              </a>
              <a 
                href="#capabilities" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-300 hover:text-orange-500 transition-colors py-2"
              >
                Capabilities
              </a>
              <a 
                href="#highlights" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-300 hover:text-orange-500 transition-colors py-2"
              >
                Highlights
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-zinc-300 hover:text-orange-500 transition-colors py-2"
              >
                Contact
              </a>
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
          {/* Video Background */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/drone.mp4" type="video/mp4" />
          </video>
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
          
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8 animate-fade-in">
            <div className="inline-block text-orange-500 text-sm font-semibold tracking-wider uppercase mb-4">
              Next-Gen UAV Systems
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up">
            <span className="text-white">Vyom</span>
            <span className="text-orange-500">Garud</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto animate-slide-up-delay">
            Precision Engineering. Advanced Autonomy. Military-Grade Reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <a href="#capabilities" className="px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 text-center">
              Explore Solutions
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all text-center">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-zinc-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">Who We Are</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              About VyomGarud
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-lg text-zinc-300 leading-relaxed">
                We specialize in limitless-range UAVs powered by cellular and LoRa-based hybrid communication, 
                enabling seamless command, control, and multi-drone coordination even in challenging environments.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                Built with military-grade precision, VyomGarud systems combine cutting-edge avionics, AI-driven 
                telemetry, and secure cloud infrastructure to deliver unmatched situational awareness and mission endurance.
              </p>
              <p className="text-lg text-zinc-300 leading-relaxed">
                At VyomGarud, we believe the future of aerial operations lies in autonomy, resilience, and connectivity — 
                and we are engineering that future today.
              </p>
            </div>
            
            {/* Right Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-orange-500/50 transition-all">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-zinc-400 text-sm">Flight Hours</div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-orange-500/50 transition-all">
                <div className="text-3xl font-bold text-orange-500 mb-2">15+</div>
                <div className="text-zinc-400 text-sm">Research Projects</div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-orange-500/50 transition-all">
                <div className="text-3xl font-bold text-orange-500 mb-2">99.9%</div>
                <div className="text-zinc-400 text-sm">Success Rate</div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-xl border border-zinc-700 hover:border-orange-500/50 transition-all">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <div className="text-zinc-400 text-sm">Support Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="relative py-24 bg-black overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/road.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <span className="text-orange-500 text-sm font-semibold tracking-wider uppercase">What We Offer</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Capabilities</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 transition-all duration-500">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src="/images/sitelite.jpeg" 
                  alt="Hybrid Communication" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">Hybrid Communication</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Cellular & LoRa-based systems for limitless-range command and control in any environment.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 transition-all duration-500">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src="/images/Surveillance & Recon.jpg" 
                  alt="Multi-Drone Coordination" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">Multi-Drone Coordination</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Seamless swarm operations with intelligent coordination and real-time synchronization.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 transition-all duration-500">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src="/images/Long Endurance.png" 
                  alt="AI-Driven Telemetry" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">AI-Driven Telemetry</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Cutting-edge avionics with intelligent data processing and predictive analytics.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-zinc-700/50 transition-all duration-500">
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src="/images/Military-Grade Build.jpg" 
                  alt="Cloud Infrastructure" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">Cloud Infrastructure</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Secure cloud systems for real-time situational awareness and mission management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Key Highlights</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-orange-500 mb-3">99.9%</div>
              <h3 className="text-xl font-semibold mb-2">Mission Success Rate</h3>
              <p className="text-zinc-400">
                Proven reliability across thousands of operational hours
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-orange-500 mb-3">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Operational Support</h3>
              <p className="text-zinc-400">
                Round-the-clock technical assistance and maintenance
              </p>
            </div>
            
            <div className="text-center p-8">
              <div className="text-5xl font-bold text-orange-500 mb-3">50+</div>
              <h3 className="text-xl font-semibold mb-2">Active Deployments</h3>
              <p className="text-zinc-400">
                Serving defense and commercial clients worldwide
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400">
              Ready to elevate your operations? Contact us for a consultation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Image */}
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <img 
                src="/images/contact.webp" 
                alt="Contact VyomGarud" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  required
                  aria-label="Your Name"
                  autoComplete="name"
                  className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  required
                  aria-label="Your Email"
                  autoComplete="email"
                  className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-colors"
                />
              </div>
              
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
                aria-label="Subject"
                className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-colors"
              />
              
              <textarea
                rows={6}
                name="message"
                id="message"
                placeholder="Your Message"
                required
                aria-label="Your Message"
                className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 transition-colors resize-none"
              ></textarea>
              
              <button
                type="submit"
                disabled={formResult.type === 'loading'}
                className="w-full px-8 py-4 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                aria-label="Send message"
              >
                {formResult.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
              
              {formResult.message && (
                <p className={getResultClassName()} role="status" aria-live="polite">
                  {formResult.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Vyom</span>
                <span className="text-orange-500">Garud</span>
              </h3>
              <p className="text-zinc-400 mt-2">Next-Gen UAV Systems</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-zinc-400 hover:text-orange-500 transition-colors">
                GitHub
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-zinc-400">
            <p>&copy; 2025 VyomGarud. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

