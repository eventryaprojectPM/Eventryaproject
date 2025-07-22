import React, { useEffect, useState } from "react";
import BlurCircle from "../Components/BlurCircle";
import { useParams, useNavigate } from "react-router-dom";
import { dummyShowsData, assets } from "../assets/assets";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import toast from "react-hot-toast";

const SeatLayout = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 🎟️ Define seat categories
  const seatCategories = {
    ODC: ["A", "B"],
    Normal: ["C", "D", "E"],
    VIP: ["F", "G", "H", "I", "J"],
  };

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ODC");
  const [show, setShow] = useState(null);

  // 🎬 Get show data
  const getShow = async () => {
    const showData = dummyShowsData.find((show) => show.id === id);
    if (showData) {
      setShow({
        movie: showData,
      });
    }
  };

  useEffect(() => {
    getShow();
  }, []);

  // 🪑 Handle seat selection
  const handleSeatClick = (seatId) => {
    if (selectedSeats.length >= 5 && !selectedSeats.includes(seatId)) {
      return toast("You can only select up to 5 seats.");
    }

    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((seat) => seat !== seatId)
        : [...prev, seatId]
    );
  };

  // 🪑 Render seat buttons
  const renderSeats = (row, count = 9) => (
    <div key={row} className="flex gap-2 mt-2">
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: count }, (_, i) => {
          const seatId = `${row}${i + 1}`;
          return (
            <button
              key={seatId}
              onClick={() => handleSeatClick(seatId)}
              className={`w-8 h-8 rounded border border-primary/60 cursor-pointer transition ${
                selectedSeats.includes(seatId)
                  ? "bg-primary text-white"
                  : "hover:bg-primary/20"
              }`}
            >
              {seatId}
            </button>
          );
        })}
      </div>
    </div>
  );

  return show ? (
    <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">
      {/* 👉 Seat Type Selector */}
      <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">
        <p className="text-lg font-semibold px-6">Select Seat Type</p>
        <div className="mt-5 space-y-1">
          {Object.keys(seatCategories).map((type) => (
            <div
              key={type}
              onClick={() => setSelectedCategory(type)}
              className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
                selectedCategory === type
                  ? "bg-primary text-white"
                  : "hover:bg-primary/20"
              }`}
            >
              <p className="text-sm capitalize">{type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🎭 Seat Layout */}
      <div className="relative flex-1 flex flex-col items-center max-md:mt-16">
        <BlurCircle top="100px" left="100px" />
        <BlurCircle bottom="0" right="0" />
        <h1 className="text-2xl font-semibold mb-4">Select Your Seat</h1>
        <img src={assets.screenImage} alt="screen" />
        <p className="text-gray-400 text-sm mb-6">SCREEN SIDE</p>

        {/* 🪑 Render Seat Rows */}
        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">
          {seatCategories[selectedCategory].map((row) => renderSeats(row))}
        </div>

        {/* ✅ Proceed Button */}
        <button
          onClick={() => navigate("/my-bookings")}
          className="flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95"
        >
          Proceed to Checkout
          <ArrowRightIcon strokeWidth={3} className="w-4 h-4" />
        </button>
      </div>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen text-lg text-gray-500">
      Loading...
    </div>
  );
};

export default SeatLayout;
