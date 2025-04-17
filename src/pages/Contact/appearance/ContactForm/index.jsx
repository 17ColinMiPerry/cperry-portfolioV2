import { useState } from 'react';
import { Button } from "flowbite-react";
import { sendEmail } from '../../../../services/EmailHandler';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({
        submitting: false,
        success: false,
        error: null
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ submitting: true, success: false, error: null });
        
        sendEmail(formData)
            .then(() => {
                setStatus({ submitting: false, success: true, error: null });
                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                setTimeout(() => {
                    setStatus(prev => ({ ...prev, success: false }));
                }, 5000);
            })
            .catch(error => {
                setStatus({ submitting: false, success: false, error: error.message || 'Failed to send email' });
            });
    };
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start justify-between bg-gray-900/80 rounded-3xl w-full backdrop-blur-md py-6 px-8 border border-white/10">
            <div className="flex flex-col items-start justify-start w-full h-full gap-4">

                <div className="w-full">
                    <div className="mb-2">
                        <label htmlFor="name1" className="text-white text-lg">Your Name</label>
                    </div>
                    <input
                        id="name1"
                        name="name"
                        type="text"
                        placeholder="First Last"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-gray-700/50 text-white placeholder-gray-400 rounded-xl p-2 border border-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                        disabled={status.submitting}
                    />
                </div>
                
                <div className="w-full">
                    <div className="mb-2">
                        <label htmlFor="email1" className="text-white text-lg">Your Email</label>
                    </div>
                    <input
                        id="email1"
                        name="email"
                        type="email"
                        placeholder="name@email.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-gray-700/50 text-white placeholder-gray-400 rounded-xl p-2 border border-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                        disabled={status.submitting}
                    />
                </div>
                
                <div className="w-full">
                    <div className="mb-2">
                        <label htmlFor="subject" className="text-white text-lg">Subject</label>
                    </div>
                    <input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="bg-gray-700/50 text-white placeholder-gray-400 rounded-xl p-2 border border-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
                        disabled={status.submitting}
                    />
                </div>
                
                <div className="w-full flex-grow flex flex-col h-full">
                    <div className="mb-2">
                        <label htmlFor="message" className="text-white text-lg">Your Message</label>
                    </div>
                    <div className="flex-grow h-full flex flex-col pb-2">
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={8}
                            className="bg-gray-700/50 text-white placeholder-gray-400 rounded-xl p-2 border border-white/25 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full flex-grow resize-none"
                            disabled={status.submitting}
                        />
                    </div>
                </div>

                {status.success && (
                    <div className="w-full text-center py-2 px-4 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
                        Message sent successfully! Thank you for reaching out.
                    </div>
                )}
                
                {status.error && (
                    <div className="w-full text-center py-2 px-4 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
                        {status.error}
                    </div>
                )}
            </div>

            <div className="relative z-20 pointer-events-auto w-full flex justify-center mt-3">
                <Button
                    type="submit"
                    pill
                    className="bg-gradient-to-r from-purple-400 to-purple-700 text-gray-900 px-6 py-2 cursor-pointer hover:opacity-90 transition-opacity"
                    disabled={status.submitting}
                >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
        </form>
    );
}

export default ContactForm;