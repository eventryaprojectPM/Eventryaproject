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
    image: "/images/padura.jpg",
    videoUrl: "/images/Tvideo.mp4",
  },
  {
    image: "https://img.youtube.com/vi/-sAOWhvheK8/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=-sAOWhvheK8",
  },
  {
    image: "https://img.youtube.com/vi/1pHDWnXmK7Y/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=1pHDWnXmK7Y",
  },
  {
    image: "https://img.youtube.com/vi/umiKiW4En9g/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/watch?v=umiKiW4En9g",
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
      "A queen sends the powerful and feared sorceress Gray Alys to the ghostly wilderness of the Lost Lands in search of a magical power, where she and her guide, the drifter Boyce, must outwit and outfight both man and demon.",
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
    original_language: "en",
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
      "One year after her sister Melanie mysteriously disappeared, Clover and her friends head into the remote valley where she vanished in search of answers. Exploring an abandoned visitor center, they find themselves stalked by a masked killer and horrifically murdered one by one...only to wake up and find themselves back at the beginning of the same evening.",
    poster_path: "/images/kalawakasha.jpg",
    backdrop_path: "/images/kalawakasha.jpg",
    genres: [
      { id: 27, name: "Horror" },
      { id: 9648, name: "Mystery" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-23",
    original_language: "en",
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
      "The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.",
    poster_path:
      "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
    backdrop_path: "/images/Medusa.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 878, name: "Science Fiction" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
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
      "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
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
    original_language: "en",
    tagline: "No law. Only disorder.",
    vote_average: 6.537,
    vote_count: 35960,
    runtime: 107,
  },
  {
    _id: "950387",
    id: 950387,
    title: "A Minecraft Movie",
    overview:
      "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    poster_path:
      "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
    genres: [
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" },
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
    ],
    casts: dummyCastsData,
    release_date: "2025-03-31",
    original_language: "en",
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
      "Set in a time of political unrest, 'Raja Man Wahala' follows the journey of a humble villager who dares to defy royal injustice and inspire a movement for freedom. A story of resistance, sacrifice, and courage.",
    poster_path:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB69M97uig0LtHZR37cCCEtjHk_m2P6ADznA&s",
    backdrop_path: "/images/raja.jpg",
    genres: [
  { id: 18, name: "Drama" },
  { id: 36, name: "History" },
  { id: 10752, name: "War" },       // If political/historical background
  { id: 99, name: "Documentary" },  // If real-based
  { id: 35, name: "Comedy" },       // If satirical or stage-play
],

    casts: dummyCastsData,
    release_date: "2025-04-25",
    original_language: "en",
    tagline: "No law. Only disorder.",
    vote_average: 6.537,
    vote_count: 35960,
    runtime: 107,
  },
  {
    _id: "575265",
    id: 575265,
    title: "Mission: Impossible - The Final Reckoning",
    overview:
      "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
    poster_path:
      "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 53, name: "Thriller" },
    ],
    casts: dummyCastsData,
    release_date: "2025-05-17",
    original_language: "en",
    tagline: "Our lives are the sum of our choices.",
    vote_average: 7.042,
    vote_count: 19885,
    runtime: 170,
  },
  {
    _id: "986056",
    id: 986056,
    title: "Thunderbolts*",
    overview:
      "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    poster_path:
      "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg",
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" },
    ],
    casts: dummyCastsData,
    release_date: "2025-04-30",
    original_language: "en",
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