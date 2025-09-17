import React, { useEffect, useState } from "react";
import { dummyShowsData } from "../../assets/assets";
import Title from "../../Components/admin/Title";
import Loading from "../../Components/Loading";
import { dateFormat } from "../../lib/dateFormat";

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = async () => {
    try {
      setShows([
        {
          movie: dummyShowsData[0],
          showDateTime: "2025-10-01T13:00:00.000Z",
          showPrice: 1000,
          occupiedSeats: {
            A2: "user_1",
            A3: "user_2",
            A4: "user_3",
            A5: "user_2",
            A6: "user_3",
          },
        },
        {
          movie: dummyShowsData[3],
          showDateTime: "2025-10-30T13:00:00.000Z",
          showPrice: 200,
          occupiedSeats: {
            A1: "user_1",
          },
        },
        {
          movie: dummyShowsData[2],
          showDateTime: "2025-11-01T13:00:00.000Z",
          showPrice: 3000,
          occupiedSeats: {
            B1: "user_1",
            B2: "user_2",
            B3: "user_3",
          },
        },
        {
          movie: dummyShowsData[1],
          showDateTime: "2025-11-30T04:30:00.000Z",
          showPrice: 1000,
          occupiedSeats: {},
        },
        {
          movie: dummyShowsData[4],
          showDateTime: "2025-12-04T10:30:00.000Z",
          showPrice: 1000,
          occupiedSeats: {},
        },
        {
          movie: dummyShowsData[6],
          showDateTime: "2025-12-01T04:30:00.000Z",
          showPrice: 1000,
          occupiedSeats: {},
        },
      ]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllShows();
  }, []);

  return !loading ? (
    <>
      <Title text1="List" text2="Events" />
      <div className="max-w-4xl mt-6 overflow-auto">
        <table className="w-full border-collapse rounded-md overflow-hidden text-nowrap">
          <thead>
            <tr className="bg-primary/20 text-left text-white">
              <th className="py-2 font-medium pl-5">Event Name</th>
              <th className="py-2 font-medium">Time</th>
              <th className="py-2 font-medium">Total Bookings</th>
              <th className="py-2 font-medium">Earnings</th>
            </tr>
          </thead>
          <tbody className="text-sm font-light">
            {shows.map((show, index) => (
              <tr
                key={index}
                className="border-b border-primary/10 bg-primary/5 even:bg-primary/10"
              >
                <td className="py-2 min-w-45 pl-5">{show.movie.title}</td>
                <td className="py-2">{dateFormat(show.showDateTime)}</td>
                <td className="py-2">
                  {Object.keys(show.occupiedSeats).length}
                </td>
                <td className="py-2">
                  {currency}
                  {Object.keys(show.occupiedSeats).length * show.showPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default ListShows;
