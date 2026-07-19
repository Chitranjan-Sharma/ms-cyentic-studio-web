import React from 'react';
import { 
  ArrowRight, 
  User, 
  ShieldCheck, 
  Gamepad2, 
  Lock, 
  Folder, 
  Wifi, 
  Battery, 
  Shield, 
  Zap, 
  Smile 
} from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="badge-container">
            <span className="studio-badge">MS Cyentic Studio</span>
          </div>
          <h1 className="hero-title">
            Building Simple, <br />
            <span className="gradient-text">Private & Reliable</span> <br />
            Android Applications.
          </h1>
          <p className="hero-subtitle">
            We create offline-first utility apps and casual games that are fast, lightweight, and easy to use. No intrusive trackers, no bloat.
          </p>
          <div className="hero-actions">
            <a href="#apps" className="btn btn-primary">
              <span>Explore Apps</span>
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-secondary">
              <span>About Us</span>
              <User size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="phone-mockup-wrapper">
            {/* Glassmorphism glowing background circles */}
            <div className="glow-circle circle-1"></div>
            <div className="glow-circle circle-2"></div>
            
            {/* Floating Tech Badges */}
            <div className="floating-badge badge-top-left">
              <ShieldCheck className="badge-icon-blue" />
            </div>
            <div className="floating-badge badge-top-right">
              <Gamepad2 className="badge-icon-purple" />
            </div>
            <div className="floating-badge badge-bottom-left">
              <Lock className="badge-icon-orange" />
            </div>
            <div className="floating-badge badge-bottom-right">
              <Folder className="badge-icon-green" />
            </div>
            
            {/* Phone Frame */}
            <div className="phone-frame">
              <div className="phone-screen" style={{ backgroundColor: '#ffffff' }}>
                <div className="phone-status-bar" style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
                  <span className="status-time">09:41</span>
                  <div className="status-icons">
                    <Wifi size={14} />
                    <Battery size={14} />
                  </div>
                </div>
                <div className="phone-app-content">
                  <img src="/logo.png" alt="MS Cyentic Studio Logo" style={{ width: '80px', height: '80px', borderRadius: '20px', objectFit: 'cover', marginBottom: '1.5rem', border: '1px solid rgba(0, 0, 0, 0.1)' }} />
                  <h3 className="phone-app-title" style={{ color: '#0f172a' }}>MS Cyentic Studio</h3>
                  <p className="phone-app-desc" style={{ color: '#475569' }}>Something amazing is currently in the works. Stay tuned for our release!</p>
                  <div className="phone-app-button" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)' }}>Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Row */}
      <div className="features-row-container">
        <div className="features-row">
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Shield />
            </div>
            <div className="feature-text">
              <h4>Privacy First</h4>
              <p>Your data stays on your device.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Zap />
            </div>
            <div className="feature-text">
              <h4>Offline First</h4>
              <p>Works without internet access.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <Smile />
            </div>
            <div className="feature-text">
              <h4>Simple & Fast</h4>
              <p>Clean design, smooth experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
