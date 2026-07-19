import React from 'react';
import { EyeOff, WifiOff, Sparkles } from 'lucide-react';

const pillars = [
  {
    title: 'Privacy Focused',
    icon: EyeOff,
    description: 'We do not collect personal information, device identifiers, or tracking tokens. Your data remains strictly your data, stored on-device.',
  },
  {
    title: 'Offline Experience',
    icon: WifiOff,
    description: 'Most of our utilities and games run 100% offline, keeping you independent from high-speed network connections and preserving cellular data plans.',
  },
  {
    title: 'Clean & Minimal',
    icon: Sparkles,
    description: 'No advertisements, no annoying popup alerts asking for subscriptions, and no background processes running and eating up system performance.',
  },
];

export default function WhyWeBuild() {
  return (
    <section className="why-build-section">
      <div className="section-header">
        <h2 className="section-title">Why We Build</h2>
        <p className="section-subtitle">We believe mobile applications should respect your battery, bandwidth, and rights.</p>
      </div>
      
      <div className="pillars-grid">
        {pillars.map((pillar, index) => {
          const IconComponent = pillar.icon;
          return (
            <div key={index} className="pillar-card">
              <div className="pillar-icon">
                <IconComponent />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
