import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Apps() {
  return (
    <section id="apps" className="apps-section">
      <div className="section-header">
        <h2 className="section-title">Our Apps</h2>
        <p className="section-subtitle">Lightweight, functional utility apps and relaxing games built for everyone.</p>
      </div>
      
      <div className="coming-soon-container">
        <div className="coming-soon-card">
          <div className="coming-soon-glow"></div>
          <div className="coming-soon-icon">
            <Sparkles size={32} />
          </div>
          <h3>Apps Coming Soon</h3>
          <p>
            We are actively designing and building offline-first utility apps and casual games. Stay tuned for our first release!
          </p>
        </div>
      </div>
    </section>
  );
}
