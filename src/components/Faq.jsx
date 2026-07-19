import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Who is MS Cyentic Studio?",
      answer: "MS Cyentic Studio is an independent development studio focused on creating purposeful, efficient, and beautifully designed utility applications and casual games for Android. We prioritize simplicity, performance, and user privacy."
    },
    {
      question: "Do your apps collect or share any personal data?",
      answer: "No. Privacy is our core pillar. Our applications do not collect, store, or share any personal information, usage statistics, or telemetry. Any data generated remains entirely local on your device."
    },
    {
      question: "Do your apps require an active internet connection?",
      answer: "Most of our apps are designed to be completely offline-first. They function fully without internet access, which also ensures fast load times, zero data consumption, and improved security."
    },
    {
      question: "Are there any ads or trackers in your apps?",
      answer: "We avoid intrusive trackers entirely. Some free apps might have minimal, non-personalized ad banners, but we aim to keep our interfaces clean, lightweight, and focused purely on functionality."
    },
    {
      question: "How can I contact support or send feedback?",
      answer: "We would love to hear from you! You can reach out directly via email at chitranjansharma.dev@gmail.com for any bug reports, app suggestions, or general support inquiries."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="section-header">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Find answers to common questions about our apps, development process, and privacy practices.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className={`faq-card ${isOpen ? 'active' : ''}`}>
              <button className="faq-question-btn" onClick={() => toggleFaq(index)} aria-expanded={isOpen}>
                <div className="faq-question-content">
                  <HelpCircle className="faq-icon" size={20} />
                  <span>{faq.question}</span>
                </div>
                <ChevronDown className="faq-arrow" size={18} />
              </button>
              <div className="faq-answer-wrapper" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
