'use client';

import { useState } from 'react';
import { Mail, Send, Instagram, Twitter, Youtube, Github, ChevronDown } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const faqs = [
  {
    question: 'Can I use these templates for commercial projects?',
    answer: 'Absolutely! All InkGood templates come with a commercial license. Use them for client work, your business, or resale as part of your own products.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'Yes! If you\'re not satisfied within 30 days of purchase, we offer a full refund. Just reach out to us with your order details.',
  },
  {
    question: 'What software do I need?',
    answer: 'It depends on the product! Most templates work with Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, After Effects). Check individual product descriptions for specific requirements.',
  },
  {
    question: 'Can I request custom work?',
    answer: 'We love collaborating! Reach out via this form with details about your project, timeline, and budget. We\'ll get back to you within 24-48 hours.',
  },
  {
    question: 'How do I access my downloads?',
    answer: 'After purchase, you\'ll receive an email with download links. You can also access all your purchases from your account dashboard.',
  },
  {
    question: 'Do you offer student discounts?',
    answer: 'Yes! Students get 20% off all products. Email us from your .edu address with proof of enrollment for your discount code.',
  },
];

function FAQItem({ faq }: { faq: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-2 border-acid-green/30 bg-black hover:border-neon-pink transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-white font-black uppercase text-sm md:text-base group-hover:text-neon-pink transition-colors">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-acid-green flex-shrink-0 ml-4 transition-transform group-hover:text-neon-pink ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="bg-black min-h-screen pt-20">
      <section className="py-16 px-4 bg-gradient-to-b from-pink-950/20 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-black text-neon-pink glow-pink uppercase mb-4">
            Let's Connect
          </h1>
          <p className="text-acid-green text-xl uppercase tracking-wider">
            Questions? Ideas? Just Want to Say Hi?
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="border-2 border-neon-pink p-8 bg-gradient-to-b from-pink-950/10 to-black">
              <h2 className="text-3xl font-black text-neon-pink uppercase mb-6 glow-pink">
                Send a Message
              </h2>

              {status === 'success' && (
                <div className="mb-6 bg-acid-green/10 border-2 border-acid-green p-4">
                  <p className="text-acid-green font-black uppercase text-sm">
                    ✓ Message sent! We'll get back to you soon.
                  </p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 bg-red-500/10 border-2 border-red-500 p-4">
                  <p className="text-red-500 font-black uppercase text-sm">
                    ✗ {errorMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-black uppercase text-sm mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black border-2 border-acid-green text-white font-bold px-4 py-3 uppercase text-sm placeholder:text-gray-600 focus:border-neon-pink focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="LUNA MAHER"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-black uppercase text-sm mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black border-2 border-acid-green text-white font-bold px-4 py-3 uppercase text-sm placeholder:text-gray-600 focus:border-neon-pink focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="LUNA@EMAIL.COM"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-black uppercase text-sm mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-black border-2 border-acid-green text-white font-bold px-4 py-3 uppercase text-sm placeholder:text-gray-600 focus:border-neon-pink focus:outline-none transition-colors disabled:opacity-50"
                    placeholder="CUSTOM PROJECT INQUIRY"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-black uppercase text-sm mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    rows={6}
                    className="w-full bg-black border-2 border-acid-green text-white font-bold px-4 py-3 uppercase text-sm placeholder:text-gray-600 focus:border-neon-pink focus:outline-none transition-colors disabled:opacity-50 resize-none"
                    placeholder="TELL US ABOUT YOUR PROJECT..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-neon-pink text-black font-black py-4 uppercase text-sm hover:bg-acid-green transition-colors flex items-center justify-center gap-2 box-glow-pink hover:box-glow-green disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-2 border-acid-green p-6 bg-black">
              <h3 className="text-2xl font-black text-acid-green uppercase mb-6 glow-green">
                Contact Info
              </h3>

              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="w-5 h-5 text-neon-pink" />
                    <p className="text-white font-black uppercase text-sm">Email</p>
                  </div>
                  <a
                    href="mailto:hello@inkgood.com"
                    className="text-acid-green hover:text-neon-pink transition-colors text-sm"
                  >
                    hello@inkgood.com
                  </a>
                </div>

                <div>
                  <p className="text-white font-black uppercase text-sm mb-3">Follow Us</p>
                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-acid-green hover:text-neon-pink transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-acid-green hover:text-neon-pink transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-acid-green hover:text-neon-pink transition-colors"
                    >
                      <Youtube className="w-6 h-6" />
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-acid-green hover:text-neon-pink transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-acid-green/30">
                  <p className="text-gray-400 text-xs leading-relaxed">
                    We typically respond within 24-48 hours. For urgent inquiries, please mention "URGENT" in your subject line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-black text-neon-pink uppercase mb-8 text-center glow-pink">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>

      <footer className="bg-black border-t-2 border-acid-green py-12 px-4 mt-24">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-neon-pink font-black text-3xl uppercase mb-4 glow-pink">INKGOOD.</p>
          <p className="text-white uppercase tracking-widest text-sm mb-2">Digital Grunge Culture</p>
          <p className="text-acid-green text-xs uppercase tracking-wider">Est. 2026 - All Chaos Reserved</p>
        </div>
      </footer>
    </main>
  );
}
