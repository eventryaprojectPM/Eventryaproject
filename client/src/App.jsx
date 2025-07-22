import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import SeatLayout from "./pages/SeatLayout";
import MyBookings from "./pages/MyBookings";
import Favorite from "./pages/Favorite";
import Navbar from "./Components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import Dashboard from "./pages/admin/Dashboard";
import ListShows from "./pages/admin/ListShows";
import AddShows from "./pages/admin/AddShows";
import Layout from "./pages/admin/Layout";
import ListBooking from "./pages/admin/ListBooking";

const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/:date" element={<SeatLayout />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/admin/*" element={<Layout/>}>
        <Route index element ={<Dashboard/>}/>
        <Route path="add-shows" element ={<AddShows/>}/>
        <Route path="list-shows" element ={<ListShows/>}/>
        <Route path="list-booking" element ={<ListBooking/>}/>

        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
