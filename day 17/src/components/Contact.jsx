import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-200 text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <form className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-green-500 hover:bg-blue-800 text-white py-3 rounded-lg transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
