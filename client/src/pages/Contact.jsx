import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 px-6 md:px-16 lg:px-36 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
        <div className="p-6 bg-white/10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
          <p>123 Your Street, Your City, Your Country</p>
        </div>
        <div className="p-6 bg-white/10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
          <p>support@example.com</p>
        </div>
        <div className="p-6 bg-white/10 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
          <p>+94 71 234 5678</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white/10 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Send us a message
        </h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-white/90 text-black outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-white/90 text-black outline-none focus:ring-2 focus:ring-primary"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 rounded-md bg-white/90 text-black outline-none focus:ring-2 focus:ring-primary"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-2 bg-primary hover:bg-primary-dull transition rounded-full font-medium"
          >
            Send Message
          </button>
        </form>
      </div>

      
      <div className="mt-12 max-w-4xl mx-auto">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31693.833014826493!2d79.8512432!3d6.9270786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596e4c82bddd%3A0xbed5f0df26b98a14!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1700000000000"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
