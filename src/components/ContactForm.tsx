'use client'; 

import { useState, FormEvent } from 'react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default page reload
    setStatus('sending');
    setMessage('Sending...');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzAyNR7ByTO03IQOKeoQ_QRFdErx_ZBnKZ7aLnSSGuoVAqiJeIpnKzUg8AS3PP2anB4/exec';
    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(scriptURL, { method: 'POST', body: formData });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.result === 'success') {
        setStatus('success');
        setMessage('Thanks for your message! We will get back to you soon.');
        form.reset(); 
      } else {
        throw new Error(data.error || 'An unknown error occurred.');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');

      if (error instanceof Error) {
        setMessage(error.message);
      } else {
        setMessage('Oops! Something went wrong. Please check your connection and try again.');
      }
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8 space-y-4 text-left"
    >
      {/* Name Input */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
          Full Name
        </label>
        <input
          id="name"
          name="name" // match Google Sheet header
          type="text"
          placeholder="name"
          required
          className="w-full px-4 py-2 border rounded-md bg-black/20 border-indigo-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Email Input */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
          Email
        </label>
        <input
          id="email"
          name="email" // match Google Sheet header
          type="email"
          placeholder="email@example.com"
          required
          className="w-full px-4 py-2 border rounded-md bg-black/20 border-indigo-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Message Textarea */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message" // match Google Sheet header
          rows={5}
          placeholder="Tell us about your interest in systems design..."
          required
          className="w-full px-4 py-2 border rounded-md bg-black/20 border-indigo-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-indigo-700 hover:bg-indigo-600 text-gray-200 font-semibold py-2.5 rounded-md transition-colors duration-200 disabled:bg-indigo-900 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Status Message */}
      {message && (
        <p className={`text-sm text-center ${
          status === 'success' ? 'text-green-400' : ''
        } ${
          status === 'error' ? 'text-red-400' : ''
        }`}>
          {message}
        </p>
      )}
    </form>
  );
}
