import React, { useEffect, useState } from 'react';
import dummyBookingData from '../../../lib/dummyBookingData';
import { format } from 'date-fns'; // 

const ListBooking = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const [bookings, setBookings] = useState([]); // ✅ useState instead of Bookings
  const [isLoading, setIsLoading] = useState(true); // ✅ fixed typo `useStare`

  const getAllBookings = async () => {
    setBookings(dummyBookingData); // ✅ make sure you have this dummy data
    setIsLoading(false);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  const dateFormat = (dateStr) => format(new Date(dateStr), 'yyyy-MM-dd HH:mm'); // ✅ format date

  return !isLoading ? (
    <>
      <h1 className="text-2xl font-bold">List Bookings</h1>

      <div className="max-w-4xl mt-6 overflow-x-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="p-2 font-medium pl-5">User Name</th>
              <th className="p-2 font-medium">Movie Name</th>
              <th className="p-2 font-medium">ShowTime</th>
              <th className="p-2 font-medium">Seats</th>
              <th className="p-2 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {bookings.map((item, index) => (
              <tr
                key={index}
                className="border-b border-primary/20 bg-primary/5 even:bg-primary/10"
              >
                <td className="p-2 min-w-45 pl-5">{item.user.name}</td>
                <td className="p-2">{item.show.movie.title}</td>
                <td className="p-2">{dateFormat(item.show.showDateTime)}</td>
                <td className="p-2">
                  {Object.values(item.bookedSeats).join(', ')}
                </td>
                <td className="p-2">
                  {currency} {item.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <p>Loading...</p> // ✅ replaces invalid <loading />
  );
};

export default ListBooking;
