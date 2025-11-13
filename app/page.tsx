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
            className="md:hidden text-white" 
            aria-label="Toggle mobile menu"
            aria-expanded="false"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero section">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black" aria-hidden="true"></div>
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
      <section id="about" className="py-24 bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About VyomGarud</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-zinc-300 leading-relaxed text-center">
              VyomGarud is at the forefront of unmanned aerial vehicle (UAV) technology, 
              delivering cutting-edge drone systems engineered for precision, reliability, 
              and advanced autonomy. Our mission is to empower defense and commercial sectors 
              with innovative aerial solutions that push the boundaries of what's possible 
              in autonomous flight systems.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Capabilities</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-orange-500 transition-all transform hover:scale-105">
              <div className="text-orange-500 text-4xl mb-4">🛸</div>
              <h3 className="text-xl font-bold mb-3">Autonomous Navigation</h3>
              <p className="text-zinc-400">
                Advanced AI-powered flight systems with real-time obstacle avoidance and intelligent path planning.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-orange-500 transition-all transform hover:scale-105">
              <div className="text-orange-500 text-4xl mb-4">📡</div>
              <h3 className="text-xl font-bold mb-3">Surveillance & Recon</h3>
              <p className="text-zinc-400">
                High-resolution imaging and thermal sensing for strategic intelligence gathering.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-orange-500 transition-all transform hover:scale-105">
              <div className="text-orange-500 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Long Endurance</h3>
              <p className="text-zinc-400">
                Extended flight times with efficient power management and quick-swap battery systems.
              </p>
            </div>
            
            <div className="bg-zinc-900 p-8 rounded-lg border border-zinc-800 hover:border-orange-500 transition-all transform hover:scale-105">
              <div className="text-orange-500 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Military-Grade Build</h3>
              <p className="text-zinc-400">
                Ruggedized construction with weather resistance for extreme operational conditions.
              </p>
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-zinc-400">
              Ready to elevate your operations? Contact us for a consultation.
            </p>
          </div>
          
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

