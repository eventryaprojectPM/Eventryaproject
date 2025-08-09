import React from "react";

const App = () => {
  const cardsData = [
    {
      image:
        "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/473271946_1573850560002930_8904573397851995401_n.jpg?stp=c0.132.1200.1200a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_eui2=AeF6YgSk-k38kfX33kijFcL4xqojz1EQwgjGqiPPURDCCNYZ1fU_KGLygz0Y23Y73MimEMnU8s_tXc9AuXMms47Q&_nc_ohc=plQ6KKskf-4Q7kNvwFXzbJz&_nc_oc=AdmyPcdOBb6HBFe3R4qyAruixsNr9WgmlIeNY3CHIWjf0bdElYJ_lKZBltMHYgfSvbs&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=ExvBUiBUO7njPtMAwNSfQg&oh=00_AfUmt1aTJLPFuyRG7LkY75zwgAuU2cDEQviGnipjsxOA6A&oe=689968A0",
      name: "Rangi Wathsala",
      handle: "Rangi Wathsala",
      date: "April 20, 2025",
      feedback:
        "Booking venues for our university events has never been this easy! The system is fast, user-friendly, and hassle-free.",
    },
    {
      image:
        "https://z-p3-scontent.fcmb7-1.fna.fbcdn.net/v/t39.30808-6/410209524_7085679894872451_4270136939444620295_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeEhds1CjrcRRGVhjAwMGpcii15Q4FoV3xuLXlDgWhXfGwxJQpDGkDdEnkWtVlIXzRsFy6Gnk4lwvTuM6-5JI7TF&_nc_ohc=W77DavV9lc4Q7kNvwG7-wPH&_nc_oc=AdkovKOq9xGQuNO2u_2fucf6-K_mTYWpz58v8vIo-YNYIXVmztnAVYHy6hQ238zt4H0&_nc_zt=23&_nc_ht=z-p3-scontent.fcmb7-1.fna&_nc_gid=eriv4lGpRkl1cNlW0Jyl8g&oh=00_AfWYaQw9A8avGnAgGtvjufJQyuNA-PWM5xU0YhKoM8spEA&oe=68995D9A",
      name: "Anuththara Dikovita",
      handle: "Anuththara Dikovita",
      date: "May 10, 2025",
      feedback:
        "I booked the auditorium in less than a minute. This platform makes event organizing feel effortless.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
      feedback:
        "Finally! A smart booking system that actually works well. Smooth UI and no double bookings!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      feedback:
        "It’s so convenient. I can check venue availability and confirm bookings even from my phone.",
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-6 rounded-lg mx-7 my-0 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-gray-400 text-black">
      <div className="flex gap-2">
        <img
          className="w-11 h-11 rounded-full object-cover"
          src={card.image}
          alt="User"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <p className="font-semibold">{card.name}</p>
            <svg
              className="mt-0.5"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="6" r="6" fill="#2196F3" />
              <path d="M4 6l1.5 1.5L8 5" stroke="#fff" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
          <span className="text-xs text-blue-900">{card.handle}</span>
        </div>
      </div>
      <p className="text-sm py-4 text-black">{card.feedback}</p>
      <div className="flex items-center justify-between text-blue-900 text-xs">
        <div className="flex items-center gap-1">
          <span>Posted on</span>
        </div>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
        /* Background gradient from black (left/top-left) to dark red (right/bottom-right) */
        .app-bg {
          background: linear-gradient(135deg, #000000, #8B0000);
          min-height: 100vh;
          color: white;
          padding: 2rem 1rem;
          font-family: Arial, sans-serif;
        }
      `}</style>

      <div className="app-bg">
        {/* 🔻 SECTION TITLE BELOW NAVBAR */}
        <div className="pt-35 text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-100">What Our Community Thinks</h1>
          <p className="text-sm text-blue-400 mt-2">
            Real feedback from campus event organizers
          </p>
        </div>

        {/* 🔻 FEEDBACK MARQUEE SECTION */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="marquee-row w-full overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
            <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
              {[...cardsData, ...cardsData].map((card, index) => (
                <CreateCard key={index} card={card} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
          </div>

          <div className="marquee-row w-full overflow-hidden relative mt-10">
            <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-black to-transparent"></div>
            <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
              {[...cardsData, ...cardsData].map((card, index) => (
                <CreateCard key={index} card={card} />
              ))}
            </div>
            <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
