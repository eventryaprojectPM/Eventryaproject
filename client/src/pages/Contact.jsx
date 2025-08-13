import React, { useState } from "react";

// ChatBot component
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
   // Enhanced FAQ with better matching keywords
  const faq = [
    {
      question: "How do I book tickets?",
      answer: "Browse events, select seats, and checkout.",
      keywords: ["book", "ticket", "reserve", "buy"]
    },
    {
      question: "What's your contact info?",
      answer: "Email:- cineceventrya@gmail.com   or  call:- 0112369874.",
      keywords: ["contact", "email", "phone", "call", "reach"]
    },
    {
      question: "Are my details secure?",
      answer: "Yes, our system is secure.",
      keywords: ["secure", "safe", "privacy", "details"]
    },
    {
      question: "Can I cancel tickets?",
      answer: "Check our refund policy or contact support.",
      keywords: ["cancel", "refund", "return"]
    },
    {
      question: "How do I get a refund?",
      answer: "Review our refund policy or contact support.",
      keywords: ["refund", "money back", "return"]
    },
    {
      question: "What's the most popular event?",
      answer: "Check our homepage for trending events.",
      keywords: ["popular", "trending", "best", "event"]
    },
    {
      question: "Can I book seats for multiple people?",
      answer: "Yes, you can book multiple seats during checkout.",
      keywords: ["multiple", "group", "people", "seats"]
    },
    {
      question: "How do I know if seats are available?",
      answer: "Check the event page for seat availability.",
      keywords: ["available", "seats", "vacant"]
    },
    {
      question: "Can I change my ticket details?",
      answer: "Contact support to see if changes are possible.",
      keywords: ["change", "modify", "edit", "details"]
    },
    {
      question: "Do you offer discounts?",
      answer: "Check our promotions page or contact support for current offers.",
      keywords: ["discount", "offer", "promo", "deal"]
    }
  ];

  const handleSend = () => {
  if (inputValue.trim()) {
    // පරිශීලක පණිවිඩය එකතු කරන්න
    setMessages([...messages, { text: inputValue, sender: "user" }]);
    
    // FAQ හි පිළිතුරු සොයන්න
    const lowerInput = inputValue.toLowerCase();
    const matchedFaq = faq.find(item => 
      item.keywords.some(keyword => lowerInput.includes(keyword))
    );

    setTimeout(() => {
      if (matchedFaq) {
        // FAQ පිළිතුරු එකතු කරන්න
        setMessages(prev => [...prev, { text: matchedFaq.answer, sender: "bot" }]);
      } else {
        // Default පිළිතුරු
        setMessages(prev => [...prev, { 
          text: "Thanks for your message! Our team will get back to you soon.", 
          sender: "bot" 
        }]);
      }
    }, 1000);
    
    setInputValue("");
  }
};

  return (
    <div className="fixed bottom-5 right-6 z-50">
      {isOpen ? (
        <div className="w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden text-white">
          <div className="bg-blue-500 p-3 flex justify-between items-center">
            <h3 className="font-medium">EVENTRYA SUPPORT</h3>
           <button
  onClick={() => setIsOpen(!isOpen)}  // !isOpen භාවිතා කරන්න
  className="bg-blue-600 p-1 rounded-full shadow-lg hover:bg-gray-700 transition-all"
>
  <img
    src="chat.webp"  // රූපයේ path නිවැරදිදැයි පරීක්ෂා කරන්න
    alt="AI Chatbot icon"
    className="h-12 w-12 rounded-full object-cover"
  />
</button>
          </div>
          <div className="h-64 p-4 overflow-y-auto bg-gray-900">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-3 ${
                  msg.sender === "bot" ? "text-left" : "text-right"
                }`}
              >
                <div
                  className={`inline-block p-2 rounded-lg ${
                    msg.sender === "bot" ? "bg-gray-700" : "bg-blue-600"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 bg-gray-800 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-gray-700 text-white rounded-l-lg p-2 focus:outline-none"
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg- red-600 p-4 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          {/* The chatbot icon has been updated with the new image you uploaded */}
          <img
            src="chat.webp"
            alt="AI Chatbot icon"
            className="h-25 w-25 rounded-full object-cover"
          />
        </button>
      )}
    </div>
  );
};

// Main Contact component
// Main Contact component
const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/contact.jpg')",
            filter: "blur(1px)",
            transform: "scale(1.1)"
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="backdrop-blur-sm bg-black/30 p-8 rounded-lg max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              We Are Always Ready to Hear From You!
            </h1>
            <div className="space-y-4 text-lg md:text-xl">
              <p>
                Whether you have queries, feedback, or just want to say hello,
                our team is committed to assist you. Reach out to us effortlessly
                through our Hotline.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How we can help Section */}
      <div className="py-16 px-6 md:px-16 lg:px-36 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold color-blue mb-8">
            Hey! Tell us how we can help you?
          </h2>
          <div className="px-4 md:px-8">
            <p className="text-lg md:text-xl leading-relaxed">
              Our unwavering commitment to customer satisfaction is at the core
              of our operations. We take immense pride in delivering exceptional
              customer care, guided by our deeply ingrained values.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information with Icons */}
      <div className="py-16 px-6 md:px-16 lg:px-36 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - Contact Info */}
          <div className="md:w-1/2 bg-white/10 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">CONTACT US</h2>

            <div className="mb-6 flex items-start space-x-4">
              <img src="P.png" alt="Phone" className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Customer Support:</h3>
                <p>Hotline (24X7)</p>
                <p>
                  Dial 0112369874 (Toll-free) or WhatsApp 0775698425
                </p>
              </div>
            </div>

            <div className="mb-6 flex items-start space-x-4">
              <img src="E.png" alt="Email" className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Email:</h3>
                <p>
                  Write to us:{" "}
                  <a
                    href="mailto:cineceventrya@gmail.com"
                    className="text-blue-400 hover:underline"
                  >
                    cineceventrya@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="mb-6 flex items- space-x-4">
              <img src="L.png" alt="Location" className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">CINEC Address:</h3>
                <p>Millennium Drive, It Park,</p>
                <p>Malabe,</p>
                <p>Sri Lanka.</p>
              </div>
            </div>

            <div className="mb-6 flex items-start space-x-4">
              <img src="F.png" alt="Fax" className="h-6 w-6 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2">Fax:</h3>
                <p>+94112413505</p>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="md:w-1/2">
            <div className="bg-white/10 p-8 rounded-lg shadow-lg h-full">
              <h2 className="text-2xl font-semibold mb-6">OUR LOCATION</h2>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/place/CINEC+Campus+(Pvt)+Ltd/@6.9203631,79.9477627,14z/data=!4m6!3m5!1s0x3ae25726e571c433:0xe6e8ba439e8a3bf8!8m2!3d6.9157034!4d79.9604549!16s%2Fm%2F06w1wy7?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="min-h-[300px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Contact;