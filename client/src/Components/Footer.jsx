import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6  md:px-16 lg:px-36 mt-40 w-full text-gray-300">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
        <div className="md:max-w-96">
          <img alt="" class="h-11" src={assets.logo} />
          <p className="mt-6 text-sm font-semibold mb-5">
            The CINEC Campus Event Booking System makes it easy for students,
            staff, and guests to find, register, and stay updated on campus
            events, encouraging participation, learning, and collaboration
            within the CINEC community.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src={assets.googlePlay}
              alt="google play"
              className="h-9 w-auto"
            />
            <img
              src={assets.appStore}
              alt="app store"
              className="h-9 w-auto "
            />
          </div>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="text-xl font-semibold border-b-2 border-white inline-block mb-4">
              Navigation
            </h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Feed Back</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Favourites</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold border-b-2 border-white inline-block mb-4">
              Contact Details
            </h4>
            <p>CINEC Campus (Pvt) Ltd.</p>
            <p>Millennium Drive, IT Park, Malabe, Sri Lanka.</p>
            <p>
              Phone:{" "}
              <a
                href="tel:+94112413500"
                className="text-blue-300 hover:underline"
              >
                +94 11 2 413 500
              </a>
            </p>
            <p>
              Hotline:{" "}
              <a
                href="tel:+94114486400"
                className="text-blue-300 hover:underline"
              >
                +94 11 4 486 400
              </a>
            </p>
            <p>Fax: +94 11 2 413 505</p>
            <p>
              Email:
              <a
                href="mailto:info@cinec.edu"
                className="text-blue-300 hover:underline"
              >
                {" "}
                info@cinec.edu
              </a>
              ,
              <a
                href="mailto:maritime@cinec.edu"
                className="text-blue-300 hover:underline"
              >
                {" "}
                maritime@cinec.edu
              </a>
            </p>
          </div>

          {/* Map Section */}
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63307.92682498327!2d79.931981!3d6.915703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25726e571c433%3A0xe6e8ba439e8a3bf8!2sCINEC%20Campus%20(Pvt)%20Ltd.!5e0!3m2!1sen!2slk!4v1691642032642!5m2!1sen!2slk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[200px]"
            ></iframe>
          </div>
        </div>
      </div>
      <p className="pt-4 text-center text-sm pb-5">
        Copyright {new Date().getFullYear()} ©Evetrya All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
