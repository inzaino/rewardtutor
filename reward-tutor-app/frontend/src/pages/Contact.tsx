import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon 
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    userType: 'student',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement contact form submission
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const faqItems = [
    {
      question: 'How do SmartCoins work?',
      answer: 'SmartCoins are earned by completing lessons, quizzes, and educational activities. You can redeem them for real rewards like gift cards and event tickets with parent approval.',
    },
    {
      question: 'Is the content really free?',
      answer: 'Yes! All educational content, including Khan Academy materials, remains freely accessible. You only pay for the SmartCoin redemption service when purchasing rewards.',
    },
    {
      question: 'How do I track my child\'s progress?',
      answer: 'Parents have access to a comprehensive dashboard showing learning progress, SmartCoin balance, time spent studying, and detailed performance reports.',
    },
    {
      question: 'What grades does Reward Tutor support?',
      answer: 'We support all K-12 grade levels, from Kindergarten through 12th grade, including AP courses across all major subjects.',
    },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-xl text-gray-300">
          We're here to help! Reach out with any questions or feedback.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-slate-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">I am a...</label>
              <select
                name="userType"
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white focus:outline-none focus:border-primary-500"
                value={formData.userType}
                onChange={handleChange}
              >
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="teacher">Teacher</option>
                <option value="administrator">School Administrator</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                required
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-primary-500"
                placeholder="Tell us more about your question or feedback..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information & FAQ */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Support</h4>
                  <p className="text-gray-400">support@rewardtutor.ai</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Live Chat</h4>
                  <p className="text-gray-400">Available 9 AM - 6 PM EST</p>
                  <p className="text-sm text-gray-500">Click the chat bubble in the bottom right</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Phone Support</h4>
                  <p className="text-gray-400">1-800-REWARD-1</p>
                  <p className="text-sm text-gray-500">Monday - Friday, 9 AM - 6 PM EST</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-slate-800 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-2 text-primary-400">{item.question}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-700">
              <p className="text-gray-400 text-sm">
                Don't see your question here? Send us a message and we'll get back to you quickly!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;