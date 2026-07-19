import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="logo.png" alt="MS Cyentic Studio" style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} />
            <span>MS Cyentic Studio</span>
          </div>
          <p>
            Building simple, private, and reliable offline-first utility applications and casual games for Android.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <a href="#home">Home</a>
          <a href="#apps">Our Apps</a>
          <a href="#faq">FAQs</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-links">
          <h4>Privacy Policies</h4>
          <a href="privacy-policy.html">Company Policy</a>
          <a href="privacy-policies/notification-vault.html">Notification Vault</a>
          <a href="privacy-policies/pocket-zen.html">Pocket Zen</a>
          <a href="privacy-policies/tile-match.html">Tile Match</a>
        </div>

        <div className="footer-links">
          <h4>Get in Touch</h4>
          <a href="mailto:chitranjansharma.dev@gmail.com">Email Support</a>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Greater Noida,<br />Uttar Pradesh, India
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 MS Cyentic Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
