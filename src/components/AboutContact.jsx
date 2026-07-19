import React from 'react';
import { Mail, MapPin } from 'lucide-react';

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
          <p>Have questions, feedback, or support inquiries about our applications? Reach out directly via email.</p>
          
          <div className="contact-methods">
            <a href="mailto:chitranjank.co@gmail.com" className="contact-item">
              <Mail />
              <span>chitranjansharma.dev@gmail.com</span>
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
