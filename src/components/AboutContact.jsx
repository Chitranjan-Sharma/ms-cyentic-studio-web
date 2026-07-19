import React from 'react';
import { FileText, MapPin } from 'lucide-react';

export default function AboutContact() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-card">
          <h2>About MS Cyentic Studio</h2>
          <p>
            MS Cyentic Studio is an independent development studio dedicated to creating purposeful, efficient, and beautifully designed utility applications and casual gaming experiences for Android. 
          </p>
          <p>
            Our engineering principle is built on simplicity, transparency, and reliable execution. We code our apps to perform efficiently and respect the hardware they run on.
          </p>
        </div>
        
        <div id="contact" className="contact-card">
          <h2>Get In Touch</h2>
          <p>Have questions, feedback, or support inquiries about our applications? Please fill out our contact form.</p>
          
          <div className="contact-methods">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdBx0WG_jCXtDjuzZu2cGDT_0inIOA5QlydcdHOfhn1j1S9rA/viewform?usp=publish-editor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-form-btn"
            >
              <FileText />
              <span>Open Google Form</span>
            </a>
            <div className="contact-item">
              <MapPin />
              <span>Greater Noida, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
