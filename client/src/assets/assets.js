import logo from "./logo.jpg";
import marvelLogo from "./marvelLogo.svg";
import googlePlay from "./googlePlay.svg";
import appStore from "./appStore.svg";
import screenImage from "./screenImage.svg";
import profile from "./profile.png";

export const assets = {
  logo,
  marvelLogo,
  googlePlay,
  appStore,
  screenImage,
  profile,
};

export const dummyTrailers = [
  {
    movieId: "324544", // Padura
    image: "/images/padura.jpg",
    videoUrl: "/images/Tvideo.mp4",
  },
  {
    movieId: "552524", // Medusa
    image: "/images/Medusa.jpg",
    videoUrl: "/images/Tvideo2.mp4",
  },
  {
    movieId: "1232546", // kalawakasha
    image: "/images/kalawakasha.jpg",
    videoUrl: "https://youtu.be/1pHDWnXmK7Y",
  },
  {
    movieId: "668489", // Kanimadala
    image: "/images/kanimadala.jpg",
    videoUrl: "https://youtu.be/umiKiW4En9g",
  },
];

const dummyCastsData = [
  {
    name: "Piyath Rajapaksha",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITdMhJThxmS_t3rAipTxve-FmdeTJHJsK9w&s",
  },
  {
    name: "Yashodha medagedara",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMufrCVgHwGjfxKk70WTXHQBVzh3ndSYhKJg&s",
  },
  {
    name: "Supun Perera",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeIHyHyUCPlbPKMSAT69B3xqBTb3ukz4ULg&s",
  },
  {
    name: "Adithya Weliwatta",
    profile_path:
      "https://yt3.googleusercontent.com/Z7_99ADdH1ZqaUo6jjRa3i4W89cxgHMSP0daSKorSIdW_9vgZu11QVpwzcgs8k-I9ozDWKOiNSo=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Yasas Medagedara",
    profile_path:
      "https://yt3.googleusercontent.com/duzDd0Tn1IAMynR6HohzS-UrSVX-OHYz6SUKUpfRRp7Pl7wdv9GQl1XlZbJfT74SO26cyXJ54g=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Shashika Nisansala",
    profile_path:
      "https://i1.sndcdn.com/artworks-000546693393-dvof39-t500x500.jpg",
  },
  {
    name: "Bathiya Jayakody",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5NpdI5Hv4UihutiN0oez68HMTtxST9Kye-Q&s",
  },
  {
    name: "Umaria Sinhawansa",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUPNQmKrhzPbmUiBScgA-dEcYCTUhQkfYR-eeGFDmekvBmJTUfjfnEY3XARkNS6nPi7g&usqp=CAU",
  },
  {
    name: "Athma Liyanage",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4VtCsWf7Lf5H8haaK4WFBvVX--oNhvd3kw&s",
  },
  {
    name: "Nirosha Virajini",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LHOZY4KhKktyywzOYyuG4BlhQhQxH4FRAQ&s",
  },
  {
    name: "Samitha Mudunkotuwa",
    profile_path:
      "https://yt3.googleusercontent.com/kKvELo2durrEQDsnSlBmaO-Mr1sHRfR4LEJcFqSqjRn__qo9rWkou_uY0-nLFiDmjT18zxQVTQ=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Ruwan Hettiarachchi",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgRCQeSgb2TjE1PqqD9qESkwsHQOWisPEV7A&s",
  },
  {
    name: "Windy Goonatillake",
    profile_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLjCbuEzav0nCmxGu2z_NGL6RU12SCwRy9eg&s",
  },
  {
    name: "Kasun Kalhara",
    profile_path:
      "https://i.scdn.co/image/ab6761610000e5eb59fbda6de903c584116aa5bd",
  },
  {
    name: "Ashanthi De Alwis",
    profile_path:
      "https://www.sundaytimes.lk/201011/uploads/Ashanthi.jpg",
  },
];

export const dummyShowsData = [
  {
    _id: "324544",
    id: 324544,
    title: "Padura",
    overview:
      "Padura is a captivating musical show that brings together powerful voices, live instruments, and soulful performances. It celebrates culture, rhythm, and the magic of music in an unforgettable experience.",
    poster_path:
      "https://motacolombo.lk/wp-content/uploads/2023/01/padura/8-768x512.jpg",
    backdrop_path: "/images/padura.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 14, name: "Fantasy" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-02-27",
    original_language: "entertainment",
    tagline: "She seeks the power to free her people.",
    vote_average: 6.4,
    vote_count: 15000,
    runtime: 102,
  },
  {
    _id: "1232546",
    id: 1232546,
    title: "kalaawakasha",
    overview:
      "Kalawakasha is a vibrant cultural show that brings together dancing, singing, and stage dramas in one spectacular event. It celebrates creativity and talent with performances full of color, rhythm, and emotion.",
    poster_path: "/images/kalawakasha.jpg",
    backdrop_path: "/images/kalawakasha.jpg",
    genres: [
      { id: 27, name: "Horror" },
      { id: 9648, name: "Mystery" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-23",
    original_language: "entertainment",
    tagline: "Every night a different nightmare.",
    vote_average: 6.405,
    vote_count: 18000,
    runtime: 103,
  },
  {
    _id: "552524",
    id: 552524,
    title: "Medusa",
    overview:
      "Medusa is a grand musical show featuring powerful live performances and dynamic musical bands. With stunning vocals, rhythm, and stage energy, it promises an unforgettable night of music and entertainment.",
    poster_path:
      "/images/Medusa.jpg",
    backdrop_path: "/images/Medusa.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "entertainment",
    tagline: "Hold on to your coconuts.",
    vote_average: 7.117,
    vote_count: 27500,
    runtime: 108,
  },
  {
    _id: "668489",
    id: 668489,
    title: "Kanimadala",
    overview:
      "Kanimadala is a vibrant cultural event showcasing Sri Lankan traditions through music, dance, and drama. Alongside the performance, a food festival adds a practical hospitality experience, making it both a cultural celebration and an educational project.",
    poster_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDPi0IYjZJbBfqwBqCqv_-QzyyfntbdSrDA&s",
    backdrop_path: "/images/kanimadala.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-25",
    original_language: "entertainment",
    tagline: "No law. Only disorder.",
    vote_average: 6.537,
    vote_count: 35960,
    runtime: 107,
  },
  {
    _id: "950387",
    id: 950387,
    title: "IGNITE",
    overview:
      "IGNITE is CINEC's annual event for students to showcase creativity, innovation, and leadership. It features workshops, competitions, and exhibitions to learn, present ideas, and connect with professionals.",
    poster_path:
      "/images/Rectangle 8.png",
    backdrop_path:
      "/images/Rectangle 8.png",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
    ],
    casts: dummyCastsData,
    release_date: "2025-03-31",
    original_language: "entertainment",
    tagline: "Be there and be square.",
    vote_average: 6.516,
    vote_count: 15225,
    runtime: 101,
  },
  {
    _id: "668490",
    id: 668490,
    title: "Raja Man Wahala",
    overview:
      "Raja Man Wahala is a popular Sri Lankan stage drama that blends comedy, drama, and music to entertain audiences. It has won several awards and is known for its engaging storytelling and lively performances.",
    poster_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB69M97uig0LtHZR37cCCEtjHk_m2P6ADznA&s",
    backdrop_path: "/images/raja.jpg",
    genres: [
      { id: 18, name: "Drama" },
      { id: 36, name: "History" },
      { id: 10752, name: "War" }, // If political/historical background
      { id: 99, name: "Documentary" }, // If real-based
      { id: 35, name: "Comedy" }, // If satirical or stage-play
    ],

    casts: dummyCastsData,
    release_date: "2025-04-25",
    original_language: "entertainment",
    tagline: "No law. Only disorder.",
    vote_average: 6.537,
    vote_count: 35960,
    runtime: 107,
  },
  {
    _id: "575265",
    id: 575265,
    title: "Adayalama",
    overview:
      "Adayalama is an annual cultural event where students showcase their drama and theatre skills. It promotes creativity, teamwork, and performing arts within the campus.",
    poster_path:
      "/images/Rectangle 9.png",
    backdrop_path:
      "/images/Rectangle 9.png",
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "entertainment",
    tagline: "Our lives are the sum of our choices.",
    vote_average: 7.042,
    vote_count: 19885,
    runtime: 170,
  },
  {
    _id: "986056",
    id: 986056,
    title: "APEXPATH'25",
    overview:
      "APEXPATH'25 is an annual freshers’ welcome event where seniors from various departments host performances, activities, and interactive sessions to warmly integrate new students into the CINEC community.",
    poster_path:
      "/images/images.jpeg",
    backdrop_path:
      "/images/images.jpeg",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-30",
    original_language: "entertainment",
    tagline: "Everyone deserves a second shot.",
    vote_average: 7.443,
    vote_count: 23569,
    runtime: 127,
  },
];

export const dummyDateTimeData = {
  "2025-07-24": [
    { time: "2025-07-24T01:00:00.000Z", showId: "68395b407f6329be2bb45bd1" },
    { time: "2025-07-24T03:00:00.000Z", showId: "68395b407f6329be2bb45bd2" },
    { time: "2025-07-24T05:00:00.000Z", showId: "68395b407f6329be2bb45bd3" },
  ],
  "2025-07-25": [
    { time: "2025-07-25T01:00:00.000Z", showId: "68395b407f6329be2bb45bd4" },
    { time: "2025-07-25T03:00:00.000Z", showId: "68395b407f6329be2bb45bd5" },
    { time: "2025-07-25T05:00:00.000Z", showId: "68395b407f6329be2bb45bd6" },
  ],
  "2025-07-26": [
    { time: "2025-07-26T01:00:00.000Z", showId: "68395b407f6329be2bb45bd7" },
    { time: "2025-07-26T03:00:00.000Z", showId: "68395b407f6329be2bb45bd8" },
    { time: "2025-07-26T05:00:00.000Z", showId: "68395b407f6329be2bb45bd9" },
  ],
  "2025-07-27": [
    { time: "2025-07-27T01:00:00.000Z", showId: "68395b407f6329be2bb45bda" },
    { time: "2025-07-27T03:00:00.000Z", showId: "68395b407f6329be2bb45bdb" },
    { time: "2025-07-27T05:00:00.000Z", showId: "68395b407f6329be2bb45bdc" },
  ],
};




export const dummyDashboardData = {
  totalBookings: 14,
  totalRevenue: 1517,
  totalUser: 5,
  activeShows: [
    {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        C1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "6835238fe96d99513e4221a8",
      movie: dummyShowsData[1],
      showDateTime: "2025-06-30T15:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221a9",
      movie: dummyShowsData[2],
      showDateTime: "2025-06-30T03:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {},
    },
    {
      _id: "6835238fe96d99513e4221aa",
      movie: dummyShowsData[3],
      showDateTime: "2025-07-15T16:30:00.000Z",
      showPrice: 81,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A4: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
    },
    {
      _id: "683682072b5989c29fc6dc0d",
      movie: dummyShowsData[4],
      showDateTime: "2025-06-05T15:30:00.000Z",
      showPrice: 49,
      occupiedSeats: {
        A1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        A3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B1: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B2: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
        B3: "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
      },
      __v: 0,
    },
    {
      _id: "68380044686d454f2116b39a",
      movie: dummyShowsData[5],
      showDateTime: "2025-06-20T16:00:00.000Z",
      showPrice: 79,
      occupiedSeats: {
        A1: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
        A2: "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
      },
    },
  ],
};

export const dummyBookingData = [
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 98,
    bookedSeats: ["D1", "D2"],
    isPaid: false,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 49,
    bookedSeats: ["A1"],
    isPaid: true,
  },
  {
    _id: "68396334fb83252d82e17295",
    user: { name: "GreatStack" },
    show: {
      _id: "68352363e96d99513e4221a4",
      movie: dummyShowsData[0],
      showDateTime: "2025-06-30T02:30:00.000Z",
      showPrice: 59,
    },
    amount: 147,
    bookedSeats: ["A1", "A2", "A3"],
    isPaid: true,
  },
];