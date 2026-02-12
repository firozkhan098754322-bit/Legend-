
import React, { useState } from 'react';
import { WHATSAPP_MESSAGES } from '../constants';
import WhatsAppButton from './WhatsAppButton';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate backend delay
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-20">
            <div className="glass-card p-8 md:p-12 rounded-2xl scroll-animation max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary heading-font">Let's Build Your Dream App</h2>
                    <p className="text-lg text-secondary mt-4 max-w-2xl mx-auto">
                        Ready to turn your idea into a reality? Fill out the form below or chat on WhatsApp for a faster response.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-1">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-1">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-1">Project Details</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4} 
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="Tell me about your app idea..."
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                disabled={status !== 'idle'}
                                className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                                    status === 'success' 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:shadow-lg'
                                }`}
                            >
                                {status === 'idle' && 'Send Message'}
                                {status === 'submitting' && 'Sending...'}
                                {status === 'success' && 'Message Sent! ✅'}
                            </button>
                        </form>
                    </div>

                    <div className="text-center md:text-left">
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-primary mb-2">Book a Call</h3>
                            <p className="text-secondary mb-4">Schedule a 15-min discovery call to discuss your project requirements.</p>
                             <button onClick={() => alert("This would open a Calendly modal in production.")} className="w-full md:w-auto px-6 py-3 rounded-full border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all mb-6">
                                📅 Schedule Appointment
                            </button>

                            <h3 className="text-xl font-bold text-primary mb-2">Instant Chat</h3>
                             <WhatsAppButton message={WHATSAPP_MESSAGES.general} className="w-full md:w-auto">
                                Chat on WhatsApp
                            </WhatsAppButton>
                        </div>
                        <div className="pt-8 border-t border-white/10">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                <span className="text-secondary">mohsin@example.com</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                <span className="text-secondary">Response time: &lt; 2 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
