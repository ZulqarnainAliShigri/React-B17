import React, { useState, useEffect } from "react";
import {
  FaPlane,
  FaHotel,
  FaUmbrellaBeach,
  FaMapMarkerAlt,
  FaStar,
  FaRegStar,
  FaSearch,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaUsers,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaMapMarkedAlt,
  FaHeadset,
  FaShieldAlt,
  FaGift,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";
import ReactPlayer from "react-player";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LoadScript } from "@react-google-maps/api";

const Home = () => {
  const [activeTab, setActiveTab] = useState("flights");
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    dates: null,
    destination: "",
    checkIn: null,
    checkOut: null,
    travelers: 1,
    flightClass: "economy",
  });
  const [searchResults, setSearchResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // In your component:
  <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
    {/* Your map components go here */}
  </LoadScript>;

  // Track scroll position for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mock flight data with more realistic details
  const flightData = [
    {
      id: 1,
      airline: "Global Airways",
      airlineLogo: "https://i.imgur.com/JbYvh3p.png",
      departure: { code: "JFK", city: "New York" },
      arrival: { code: "LAX", city: "Los Angeles" },
      departureTime: "08:45 AM",
      arrivalTime: "12:15 PM",
      date: "2023-11-15",
      price: 399,
      duration: "5h 30m",
      stops: 0,
      flightClass: "economy",
      amenities: ["WiFi", "Entertainment", "Meal"],
    },
    {
      id: 2,
      airline: "Oceanic Airlines",
      airlineLogo: "https://i.imgur.com/mQR8XZz.png",
      departure: { code: "JFK", city: "New York" },
      arrival: { code: "LAX", city: "Los Angeles" },
      departureTime: "11:30 AM",
      arrivalTime: "05:45 PM",
      date: "2023-11-15",
      price: 459,
      duration: "6h 15m",
      stops: 1,
      flightClass: "economy",
      amenities: ["WiFi", "Meal"],
    },
    {
      id: 3,
      airline: "Global Airways",
      airlineLogo: "https://i.imgur.com/JbYvh3p.png",
      departure: { code: "JFK", city: "New York" },
      arrival: { code: "LAX", city: "Los Angeles" },
      departureTime: "04:20 PM",
      arrivalTime: "08:50 PM",
      date: "2023-11-15",
      price: 529,
      duration: "5h 30m",
      stops: 0,
      flightClass: "business",
      amenities: ["WiFi", "Entertainment", "Premium Meal", "Lounge Access"],
    },
  ];

  // Mock hotel data with more details
  const hotelData = [
    {
      id: 1,
      name: "Grand Plaza Hotel",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      location: "New York, USA",
      checkIn: "2023-11-15",
      checkOut: "2023-11-20",
      price: 189,
      rating: 4.5,
      reviews: 1248,
      amenities: ["Pool", "Spa", "Gym", "Restaurant", "Free WiFi"],
      roomType: "Deluxe King Room",
    },
    {
      id: 2,
      name: "Seaside Resort",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      location: "Miami, USA",
      checkIn: "2023-11-15",
      checkOut: "2023-11-20",
      price: 249,
      rating: 4.8,
      reviews: 892,
      amenities: ["Beach Access", "Pool", "Spa", "3 Restaurants", "Free WiFi"],
      roomType: "Ocean View Suite",
    },
    {
      id: 3,
      name: "Mountain View Lodge",
      image: "https://images.unsplash.com/photo-1596178065887-1198b6148b2b",
      location: "Aspen, USA",
      checkIn: "2023-11-15",
      checkOut: "2023-11-20",
      price: 319,
      rating: 4.7,
      reviews: 567,
      amenities: ["Ski-in/Ski-out", "Hot Tub", "Fireplace", "Restaurant"],
      roomType: "Premium Chalet",
    },
  ];

  // Mock package data
  const packageData = [
    {
      id: 1,
      title: "Tropical Paradise Getaway",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      destination: "Bali, Indonesia",
      dates: "Dec 10-17, 2023",
      travelers: 2,
      price: 1299,
      originalPrice: 1899,
      duration: "7 Days",
      inclusions: [
        "Luxury beachfront resort",
        "All meals included",
        "Airport transfers",
        "3 guided tours",
        "Spa credit",
      ],
    },
    {
      id: 2,
      title: "European Adventure",
      image:
        "https://www.intrepidtravel.com/adventures/wp-content/uploads/2021/12/Intrepid-Travel-switzerland_alps_hiking-mountain-landscape.jpg",
      destination: "Paris, Rome, Barcelona",
      dates: "Jun 5-15, 2024",
      travelers: 2,
      price: 2499,
      originalPrice: 3200,
      duration: "10 Days",
      inclusions: [
        "4-star hotels",
        "Daily breakfast",
        "Guided city tours",
        "Train tickets between cities",
        "Museum entries",
      ],
    },
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubscribed(true);
        setEmail("");
        setIsLoading(false);
        setTimeout(() => setIsSubscribed(false), 3000);
      }, 1000);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (activeTab === "flights") {
        setSearchResults({
          type: "flights",
          data: flightData.filter(
            (flight) =>
              (!searchParams.from ||
                flight.departure.city
                  .toLowerCase()
                  .includes(searchParams.from.toLowerCase())) &&
              (!searchParams.to ||
                flight.arrival.city
                  .toLowerCase()
                  .includes(searchParams.to.toLowerCase())) &&
              (!searchParams.dates ||
                flight.date ===
                  new Date(searchParams.dates).toISOString().split("T")[0]) &&
              (!searchParams.flightClass ||
                flight.flightClass === searchParams.flightClass)
          ),
        });
      } else if (activeTab === "hotels") {
        setSearchResults({
          type: "hotels",
          data: hotelData.filter(
            (hotel) =>
              (!searchParams.destination ||
                hotel.location
                  .toLowerCase()
                  .includes(searchParams.destination.toLowerCase())) &&
              (!searchParams.checkIn ||
                hotel.checkIn ===
                  new Date(searchParams.checkIn).toISOString().split("T")[0])
          ),
        });
      } else if (activeTab === "packages") {
        setSearchResults({
          type: "packages",
          data: packageData.filter(
            (pkg) =>
              (!searchParams.destination ||
                pkg.destination
                  .toLowerCase()
                  .includes(searchParams.destination.toLowerCase())) &&
              (!searchParams.travelers ||
                pkg.travelers >= searchParams.travelers)
          ),
        });
      }
      setIsLoading(false);
      // Scroll to results
      window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date, field) => {
    setSearchParams((prev) => ({
      ...prev,
      [field]: date,
    }));
  };

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === modalContent.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? modalContent.images.length - 1 : prevIndex - 1
    );
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      comment:
        "The best travel experience I've ever had! Everything was perfectly organized from start to finish. The guides were knowledgeable and the accommodations exceeded our expectations.",
      rating: 5,
      location: "New York, USA",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      trip: "Italian Dream Vacation",
    },
    {
      id: 2,
      name: "Michael Chen",
      comment:
        "Exceptional service and attention to detail. When our flight was delayed, their 24/7 support team rearranged everything seamlessly. Will definitely book again!",
      rating: 5,
      location: "Toronto, Canada",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      trip: "Japan Cultural Tour",
    },
    {
      id: 3,
      name: "Emma Williams",
      comment:
        "Great value for money. We got luxury experiences at reasonable prices. The food tours were especially amazing - we tasted authentic local cuisine we never would have found on our own.",
      rating: 4,
      location: "London, UK",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      trip: "Southeast Asia Adventure",
    },
    {
      id: 4,
      name: "David Rodriguez",
      comment:
        "As a solo traveler, I felt completely safe and well taken care of. The group tours were a great way to meet people while still having freedom to explore on my own.",
      rating: 5,
      location: "Madrid, Spain",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      trip: "Peru Trekking Experience",
    },
  ];

  const popularDestinations = [
    {
      id: 1,
      name: "Bali, Indonesia",
      images: [
        "https://volcano-view.santorinihotelsonline.com/data/Pics/OriginalPhoto/12734/1273409/1273409575/volcano-view-hotel-fira-santorini-pic-36.JPEG",
      ],
      price: 899,
      description:
        "Known as the Island of the Gods, Bali combines volcanic mountains, iconic beaches, coral reefs, and a deeply spiritual culture. Perfect for both relaxation and adventure.",
      highlights: [
        "Ubud's rice terraces",
        "Uluwatu Temple",
        "Seminyak beaches",
        "Mount Batur sunrise trek",
      ],
      bestTime: "April to October",
    },
    {
      id: 2,
      name: "Santorini, Greece",
      images: ["https://www.outlooktravelmag.com/media/bali-tg.png"],
      price: 1299,
      description:
        "Famous for its dramatic views, stunning sunsets, white-washed houses, and blue domed churches, Santorini is one of the most romantic destinations in the world.",
      highlights: [
        "Oia sunset views",
        "Red Beach",
        "Ancient Thera ruins",
        "Santorini wine tasting",
      ],
      bestTime: "May to October",
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      images: [
        "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
        "https://images.unsplash.com/photo-1491884662610-374c9a5accf9",
        "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
      ],
      price: 1599,
      description:
        "With over 1,000 Buddhist temples and 400 Shinto shrines, Kyoto is Japan's cultural heart. Experience traditional tea houses, geisha districts, and cherry blossoms.",
      highlights: [
        "Fushimi Inari Shrine",
        "Kinkaku-ji Golden Pavilion",
        "Arashiyama Bamboo Forest",
        "Gion district",
      ],
      bestTime:
        "March to May (cherry blossoms), October to November (fall colors)",
    },
    {
      id: 4,
      name: "Paris, France",
      images: [
        "https://images.unsplash.com/photo-1431274172761-fca41d930114",
        "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
        "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f",
      ],
      price: 1099,
      description:
        "The City of Light needs no introduction. From the Eiffel Tower to Montmartre, world-class museums to charming cafes, Paris is always a good idea.",
      highlights: [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame Cathedral",
        "Seine River cruise",
        "Montmartre artists' quarter",
      ],
      bestTime: "April to June, September to October",
    },
  ];

  const travelPackages = [
    {
      id: 1,
      title: "Tropical Paradise Getaway",
      description:
        "7 nights in luxury beachfront resorts with all-inclusive meals and activities. Perfect for couples and honeymooners.",
      price: 1299,
      originalPrice: 1899,
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
      duration: "7 Days",
      groupSize: "2-4 People",
      discount: 32,
      destinations: ["Bali", "Gili Islands"],
      inclusions: [
        "Private pool villa",
        "Daily spa credit",
        "Private boat tour",
        "Romantic beach dinner",
        "Airport transfers",
      ],
    },
    {
      id: 2,
      title: "European Adventure",
      description:
        "10-day tour through 4 countries with guided excursions and premium hotels. Experience the best of Europe's culture and history.",
      price: 2499,
      originalPrice: 3200,
      image:
        "https://www.intrepidtravel.com/v3/assets/blt0de87ff52d9c34a8/blta15be81450a4eef5/65a4cb32e1b99e89589c12fb/Intrepid-travel-active-senior-couple-on-a-mountain-bike-tour-in-the-Julian-Alps-above-Kranska-Gora-in-Slovenia-shutterstock-2319635783-720.jpg",
      duration: "10 Days",
      groupSize: "4-8 People",
      discount: 22,
      destinations: ["Paris", "Rome", "Barcelona", "Amsterdam"],
      inclusions: [
        "4-star accommodations",
        "Daily breakfast",
        "Guided city tours",
        "High-speed train tickets",
        "Skip-the-line museum entries",
      ],
    },
    {
      id: 3,
      title: "Mountain Retreat Package",
      description:
        "5-day ski vacation with equipment rental and spa access included. Enjoy the pristine slopes and cozy alpine lodges.",
      price: 899,
      originalPrice: 1250,
      image: "https://images.unsplash.com/photo-1517825738774-7de9363ef735",
      duration: "5 Days",
      groupSize: "2-6 People",
      discount: 28,
      destinations: ["Aspen", "Vail"],
      inclusions: [
        "Ski-in/ski-out lodging",
        "Lift passes",
        "Equipment rental",
        "Daily spa access",
        "Après-ski activities",
      ],
    },
  ];

  const travelTips = [
    {
      id: 1,
      title: "10 Essential Items for Your Carry-On",
      excerpt:
        "Don't board your next flight without these must-have items in your carry-on luggage that will make your journey more comfortable and stress-free.",
      image: "https://images.unsplash.com/photo-1502786129293-79981df4e689",
      date: "May 15, 2023",
      content: [
        "1. Noise-canceling headphones - Block out crying babies and engine noise",
        "2. Portable charger - Keep your devices powered up",
        "3. Reusable water bottle - Stay hydrated after security",
        "4. Compression socks - Prevent swelling on long flights",
        "5. Travel pillow - Get some actual rest",
        "6. Eye mask - Helpful for daytime flights",
        "7. Disinfecting wipes - Clean your tray table and armrests",
        "8. Lip balm and moisturizer - Combat dry cabin air",
        "9. Snacks - Avoid overpriced airport food",
        "10. Change of clothes - Be prepared for delays or lost luggage",
      ],
    },
    {
      id: 2,
      title: "How to Travel on a Budget Without Sacrificing Comfort",
      excerpt:
        "Discover our top tips for affordable travel that still feels luxurious by making smart choices about when and how you book.",
      image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
      date: "June 2, 2023",
      content: [
        "Travel during shoulder season - Prices drop but weather is still good",
        "Book flights on Tuesday afternoons - When airlines often release deals",
        "Use fare comparison tools - But always check airline websites too",
        "Consider alternative airports - Sometimes nearby airports are cheaper",
        "Stay in boutique hotels or B&Bs - Often better value than chains",
        "Take public transportation - Instead of expensive taxis",
        "Eat like a local - Avoid tourist trap restaurants",
        "Look for free activities - Many cities offer free walking tours",
        "Use credit card points - For flights and hotel stays",
        "Be flexible - With dates and destinations for the best deals",
      ],
    },
    {
      id: 3,
      title: "The Best Hidden Gem Destinations for 2023",
      excerpt:
        "Explore these under-the-radar locations before they become mainstream. These destinations offer authentic experiences without the crowds.",
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e",
      date: "April 28, 2023",
      content: [
        "1. Albania - Stunning beaches at half the price of Croatia",
        "2. Georgia (the country) - Amazing food, wine, and mountains",
        "3. Azores, Portugal - Volcanic islands with incredible nature",
        "4. Oman - Middle Eastern hospitality with diverse landscapes",
        "5. Madagascar - Unique wildlife and pristine beaches",
        "6. Uzbekistan - Silk Road history and architecture",
        "7. Colombia - Beyond the cities to coffee regions and jungles",
        "8. Taiwan - Underrated food scene and natural beauty",
        "9. Slovenia - Like Switzerland at half the price",
        "10. Namibia - Desert landscapes and wildlife safaris",
      ],
    },
  ];

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) =>
        i < rating ? (
          <FaStar key={i} className="inline text-amber-400" />
        ) : (
          <FaRegStar key={i} className="inline text-amber-400" />
        )
      );
  };

  const renderAmenities = (amenities) => {
    return amenities.map((amenity, index) => (
      <span
        key={index}
        className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full"
      >
        {amenity}
      </span>
    ));
  };

  const renderSearchResults = () => {
    if (!searchResults) return null;

    return (
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              {searchResults.data.length > 0
                ? "Search Results"
                : "No Results Found"}
            </h2>
            <p className="text-gray-600">
              {searchResults.data.length > 0
                ? "We found these options for your trip"
                : "Try adjusting your search criteria"}
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-t-2 border-b-2 rounded-full animate-spin border-amber-500"></div>
            </div>
          ) : searchResults.type === "flights" ? (
            <div className="grid grid-cols-1 gap-6">
              {searchResults.data.map((flight) => (
                <div
                  key={flight.id}
                  className="p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-md rounded-xl hover:shadow-lg"
                >
                  <div className="flex flex-col items-start justify-between md:flex-row md:items-center">
                    <div className="flex items-center mb-4 md:mb-0">
                      <img
                        src={flight.airlineLogo}
                        alt={flight.airline}
                        className="object-contain w-12 h-12 mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-bold">{flight.airline}</h3>
                        <div className="flex items-center mt-1">
                          <span className="font-medium">
                            {flight.departure.code}
                          </span>
                          <FaPlane className="mx-3 text-amber-500" />
                          <span className="font-medium">
                            {flight.arrival.code}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-gray-500">
                          {flight.departure.city} to {flight.arrival.city}
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 text-center md:mb-0">
                      <p className="text-gray-600">Departure</p>
                      <p className="font-medium">{flight.departureTime}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(flight.date).toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                    <div className="mb-4 text-center md:mb-0">
                      <p className="text-gray-600">Duration</p>
                      <p className="font-medium">{flight.duration}</p>
                      <p className="text-sm text-gray-500">
                        {flight.stops === 0
                          ? "Non-stop"
                          : `${flight.stops} stop${
                              flight.stops > 1 ? "s" : ""
                            }`}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-amber-600">
                        ${flight.price}
                      </p>
                      <div className="mb-2 text-xs text-gray-500">
                        {flight.flightClass.charAt(0).toUpperCase() +
                          flight.flightClass.slice(1)}
                      </div>
                      <button
                        onClick={() =>
                          openModal({
                            type: "flight",
                            data: flight,
                            title: `${flight.airline} Flight`,
                          })
                        }
                        className="px-4 py-2 mt-2 text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                  {flight.amenities && (
                    <div className="pt-4 mt-4 border-t border-gray-100">
                      <h4 className="mb-2 text-sm font-semibold text-gray-700">
                        Amenities:
                      </h4>
                      <div className="flex flex-wrap">
                        {flight.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 mb-2 mr-2 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : searchResults.type === "hotels" ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.data.map((hotel) => (
                <div
                  key={hotel.id}
                  className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
                >
                  <div
                    className="h-48 bg-center bg-cover"
                    style={{ backgroundImage: `url(${hotel.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{hotel.name}</h3>
                    <div className="flex items-center mb-3">
                      <FaMapMarkerAlt className="mr-2 text-amber-500" />
                      <span>{hotel.location}</span>
                    </div>
                    <div className="flex items-center mb-4">
                      {renderStars(Math.floor(hotel.rating))}
                      <span className="ml-2 text-gray-600">
                        {hotel.rating} ({hotel.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-gray-600">Check-in:</span>
                        <span className="ml-2 font-medium">
                          {new Date(hotel.checkIn).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Check-out:</span>
                        <span className="ml-2 font-medium">
                          {new Date(hotel.checkOut).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="text-gray-600">Room Type:</span>
                      <span className="ml-2 font-medium">{hotel.roomType}</span>
                    </div>
                    {hotel.amenities && (
                      <div className="mb-4">
                        <h4 className="mb-1 text-sm font-semibold text-gray-700">
                          Amenities:
                        </h4>
                        <div className="flex flex-wrap">
                          {hotel.amenities.slice(0, 4).map((amenity, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 mb-1 mr-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full"
                            >
                              {amenity}
                            </span>
                          ))}
                          {hotel.amenities.length > 4 && (
                            <span className="inline-flex items-center px-2 py-1 mb-1 mr-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                              +{hotel.amenities.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-amber-600">
                          ${hotel.price}
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          /night
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          openModal({
                            type: "hotel",
                            data: hotel,
                            title: hotel.name,
                          })
                        }
                        className="px-4 py-2 text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : searchResults.type === "packages" ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.data.map((pkg) => (
                <div
                  key={pkg.id}
                  className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
                >
                  <div
                    className="h-48 bg-center bg-cover"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  ></div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold">{pkg.title}</h3>
                    <div className="flex items-center mb-3">
                      <FaMapMarkerAlt className="mr-2 text-amber-500" />
                      <span>{pkg.destination}</span>
                    </div>
                    <p className="mb-4 text-gray-600">{pkg.description}</p>
                    <div className="flex justify-between mb-3">
                      <div>
                        <span className="text-gray-600">Dates:</span>
                        <span className="ml-2 font-medium">{pkg.dates}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Travelers:</span>
                        <span className="ml-2 font-medium">
                          {pkg.travelers} people
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-amber-600">
                          ${pkg.price}
                        </span>
                        <span className="ml-2 text-gray-400 line-through">
                          ${pkg.originalPrice}
                        </span>
                        <span className="ml-2 text-sm font-bold text-green-600">
                          {Math.round(
                            ((pkg.originalPrice - pkg.price) /
                              pkg.originalPrice) *
                              100
                          )}
                          % OFF
                        </span>
                      </div>
                      <button
                        onClick={() =>
                          openModal({
                            type: "package",
                            data: pkg,
                            title: pkg.title,
                          })
                        }
                        className="px-4 py-2 text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    );
  };

  const renderModalContent = () => {
    if (!modalContent) return null;

    if (modalContent.type === "destination") {
      const destination = modalContent.data;
      return (
        <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div className="relative w-full overflow-hidden h-96">
              <img
                src={destination.images[currentImageIndex]}
                alt={destination.name}
                className="object-cover w-full h-full"
              />
              <button
                onClick={closeModal}
                className="absolute p-2 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-70"
              >
                <FaTimes />
              </button>
              <button
                onClick={prevImage}
                className="absolute p-2 text-white transition-colors duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-70"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute p-2 text-white transition-colors duration-300 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-70"
              >
                <FaChevronRight />
              </button>
              <div className="absolute left-0 right-0 flex justify-center space-x-2 bottom-4">
                {destination.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex
                        ? "bg-white"
                        : "bg-white bg-opacity-50"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
            <div className="p-8">
              <h2 className="mb-4 text-3xl font-bold">{destination.name}</h2>
              <div className="flex items-center mb-6">
                <span className="mr-4 text-2xl font-bold text-amber-600">
                  From ${destination.price}
                </span>
                <button className="px-6 py-2 font-medium text-white transition-colors duration-300 rounded-full bg-amber-500 hover:bg-amber-600">
                  Book Now
                </button>
              </div>

              <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h3 className="mb-3 text-xl font-bold">Description</h3>
                  <p className="mb-6 text-gray-700">
                    {destination.description}
                  </p>

                  <h3 className="mb-3 text-xl font-bold">Highlights</h3>
                  <ul className="pl-5 space-y-2 text-gray-700 list-disc">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 rounded-lg bg-gray-50">
                  <h3 className="mb-4 text-xl font-bold">Travel Info</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700">
                        Best Time to Visit
                      </h4>
                      <p className="text-gray-600">{destination.bestTime}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">
                        Average Cost
                      </h4>
                      <p className="text-gray-600">
                        ${destination.price} - ${destination.price * 1.5} per
                        person
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">
                        Recommended Stay
                      </h4>
                      <p className="text-gray-600">7-10 days</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="mb-3 text-xl font-bold">Why Book With Us</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaShieldAlt className="flex-shrink-0 mt-1 mr-2 text-amber-500" />
                        <span className="text-gray-700">
                          Best price guarantee
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaHeadset className="flex-shrink-0 mt-1 mr-2 text-amber-500" />
                        <span className="text-gray-700">
                          24/7 customer support
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FaGift className="flex-shrink-0 mt-1 mr-2 text-amber-500" />
                        <span className="text-gray-700">
                          Exclusive perks and upgrades
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-amber-50">
                <h3 className="mb-3 text-xl font-bold">Ready to Book?</h3>
                <p className="mb-4">
                  Contact our travel specialists to plan your perfect trip to{" "}
                  {destination.name}.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <button className="px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600">
                    Get a Custom Quote
                  </button>
                  <button className="px-6 py-3 font-medium transition-colors duration-300 border rounded-lg border-amber-500 text-amber-500 hover:bg-amber-50">
                    Call Us: (800) 123-4567
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (modalContent.type === "flight") {
      const flight = modalContent.data;
      return (
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  {flight.departure.city} ({flight.departure.code}) to{" "}
                  {flight.arrival.city} ({flight.arrival.code})
                </h2>
                <p className="text-gray-600">
                  {new Date(flight.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="p-6 mb-6 rounded-lg bg-gray-50">
              <div className="flex items-center mb-4">
                <img
                  src={flight.airlineLogo}
                  alt={flight.airline}
                  className="object-contain w-16 h-16 mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold">{flight.airline}</h3>
                  <p className="text-gray-600">
                    {flight.flightClass.charAt(0).toUpperCase() +
                      flight.flightClass.slice(1)}{" "}
                    Class • {flight.stops === 0 ? "Non-stop" : "1 stop"}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-between py-4 border-t border-b border-gray-200 md:flex-row">
                <div className="mb-4 text-center md:mb-0">
                  <div className="text-2xl font-bold">
                    {flight.departureTime}
                  </div>
                  <div className="text-gray-600">{flight.departure.code}</div>
                </div>
                <div className="flex flex-col items-center mb-4 md:mb-0">
                  <div className="text-gray-600">{flight.duration}</div>
                  <div className="w-32 h-px my-2 bg-gray-300"></div>
                  <div className="text-sm text-gray-500">
                    {flight.stops === 0 ? "Non-stop" : "1 stop"}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{flight.arrivalTime}</div>
                  <div className="text-gray-600">{flight.arrival.code}</div>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="mb-2 font-semibold">Flight Amenities:</h4>
                <div className="flex flex-wrap gap-2">
                  {flight.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="mb-2 font-bold">Baggage Allowance</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Cabin baggage:</span>
                    <span className="font-medium">1 piece (7kg)</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Checked baggage:</span>
                    <span className="font-medium">
                      {flight.flightClass === "economy"
                        ? "1 piece (23kg)"
                        : "2 pieces (32kg each)"}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="mb-2 font-bold">Pricing</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Base Fare:</span>
                  <span className="font-medium">${flight.price - 50}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Taxes & Fees:</span>
                  <span className="font-medium">$50</span>
                </div>
                <div className="flex items-center justify-between pt-2 mt-2 border-t border-gray-200">
                  <span className="font-bold text-gray-600">Total:</span>
                  <span className="text-2xl font-bold text-amber-600">
                    ${flight.price}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="flex-1 px-6 py-3 font-medium text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600">
                Book This Flight
              </button>
              <button className="flex-1 px-6 py-3 font-medium transition-colors duration-300 border rounded-lg border-amber-500 text-amber-500 hover:bg-amber-50">
                Save for Later
              </button>
            </div>
          </div>
        </div>
      );
    } else if (modalContent.type === "hotel") {
      const hotel = modalContent.data;
      return (
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div
              className="w-full h-64 bg-center bg-cover"
              style={{ backgroundImage: `url(${hotel.image})` }}
            ></div>
            <button
              onClick={closeModal}
              className="absolute p-2 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-70"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">{hotel.name}</h2>
                <div className="flex items-center mt-1">
                  <FaMapMarkerAlt className="mr-2 text-amber-500" />
                  <span>{hotel.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-amber-600">
                  ${hotel.price}
                  <span className="text-sm font-normal text-gray-500">
                    /night
                  </span>
                </div>
                <div className="flex items-center justify-end">
                  {renderStars(Math.floor(hotel.rating))}
                  <span className="ml-2 text-gray-600">
                    {hotel.rating} ({hotel.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="mb-2 font-bold">Room Type</h3>
                <p className="mb-4">{hotel.roomType}</p>

                <h3 className="mb-2 font-bold">Description</h3>
                <p className="mb-4">
                  This beautiful hotel offers luxurious accommodations in the
                  heart of {hotel.location.split(",")[0]}. Enjoy premium
                  amenities and exceptional service during your stay.
                </p>

                <h3 className="mb-2 font-bold">Amenities</h3>
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="mb-4 font-bold">Booking Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-600">
                      Check-in
                    </h4>
                    <p>
                      {new Date(hotel.checkIn).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-600">
                      Check-out
                    </h4>
                    <p>
                      {new Date(hotel.checkOut).toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-600">
                      Guests
                    </h4>
                    <p>2 Adults</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="mb-2 font-bold">Price Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        ${hotel.price} x 5 nights
                      </span>
                      <span>${hotel.price * 5}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes & Fees</span>
                      <span>$85</span>
                    </div>
                    <div className="flex justify-between pt-2 font-bold border-t border-gray-200">
                      <span>Total</span>
                      <span>${hotel.price * 5 + 85}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 mt-6 font-medium text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600">
                  Book Now
                </button>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-amber-50">
              <h3 className="mb-3 font-bold">Special Offer</h3>
              <p className="mb-4">
                Book now and receive a complimentary spa treatment for two and
                late check-out until 2 PM!
              </p>
              <p className="text-sm text-gray-600">
                Offer valid for bookings made before{" "}
                {new Date(
                  new Date().setDate(new Date().getDate() + 7)
                ).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      );
    } else if (modalContent.type === "package") {
      const pkg = modalContent.data;
      return (
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div
              className="w-full h-64 bg-center bg-cover"
              style={{ backgroundImage: `url(${pkg.image})` }}
            ></div>
            <button
              onClick={closeModal}
              className="absolute p-2 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-70"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold">{pkg.title}</h2>
                <div className="flex items-center mt-1">
                  <FaMapMarkerAlt className="mr-2 text-amber-500" />
                  <span>{pkg.destination}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-amber-600">
                  ${pkg.price}
                </div>
                <div className="text-gray-600">
                  <span className="line-through">${pkg.originalPrice}</span>{" "}
                  <span className="font-bold text-green-600">
                    {Math.round(
                      ((pkg.originalPrice - pkg.price) / pkg.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              <div className="md:col-span-2">
                <h3 className="mb-2 font-bold">Package Details</h3>
                <p className="mb-4">{pkg.description}</p>

                <h3 className="mb-2 font-bold">What's Included</h3>
                <ul className="pl-5 mb-4 space-y-1 list-disc">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <h3 className="mb-2 font-bold">Itinerary Overview</h3>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 font-bold">Day {index + 1}:</div>
                      <div>
                        <div className="font-semibold">
                          {pkg.destination.split(",")[0]} Highlights
                        </div>
                        <div className="text-sm text-gray-600">
                          Guided tour of the city's main attractions with lunch
                          at a local restaurant.
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="font-medium text-amber-600">
                    + {pkg.duration.split(" ")[0] - 3} more days
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gray-50">
                <h3 className="mb-4 font-bold">Booking Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-600">
                      Duration
                    </h4>
                    <p>{pkg.duration}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-600">
                      Group Size
                    </h4>
                    <p>{pkg.groupSize}</p>
                  </div>
                  <div>
                    <h4 className="mb-1 text-sm font-semibold text-gray-600">
                      Destinations
                    </h4>
                    <p>{pkg.destination}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="mb-2 font-bold">Price Breakdown</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package Price</span>
                      <span>${pkg.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxes & Fees</span>
                      <span>$120</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Travel Insurance</span>
                      <span>$49</span>
                    </div>
                    <div className="flex justify-between pt-2 font-bold border-t border-gray-200">
                      <span>Total</span>
                      <span>${pkg.price + 120 + 49}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 mt-6 font-medium text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600">
                  Book Package
                </button>

                <div className="mt-4 text-sm text-center text-gray-600">
                  <p>Deposit of $200 per person required to book</p>
                  <p>Flexible cancellation policy</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg bg-amber-50">
              <h3 className="mb-3 font-bold">Why Book This Package</h3>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="flex items-start">
                  <FaShieldAlt className="flex-shrink-0 mt-1 mr-2 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">Best Price Guarantee</h4>
                    <p className="text-sm text-gray-600">
                      We'll match any lower price you find
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaHeadset className="flex-shrink-0 mt-1 mr-2 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-sm text-gray-600">
                      Dedicated support during your trip
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaGift className="flex-shrink-0 mt-1 mr-2 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">Exclusive Perks</h4>
                    <p className="text-sm text-gray-600">
                      Special amenities and upgrades
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (modalContent.type === "article") {
      const article = modalContent.data;
      return (
        <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            <div
              className="w-full h-64 bg-center bg-cover"
              style={{ backgroundImage: `url(${article.image})` }}
            ></div>
            <button
              onClick={closeModal}
              className="absolute p-2 text-white transition-colors duration-300 bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-70"
            >
              <FaTimes />
            </button>
          </div>

          <div className="p-6">
            <div className="mb-6">
              <span className="text-sm text-gray-500">{article.date}</span>
              <h2 className="mt-1 mb-3 text-2xl font-bold">{article.title}</h2>
              <div className="flex items-center">
                <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-300 rounded-full">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Author"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-medium">Sarah Thompson</div>
                  <div className="text-sm text-gray-600">Travel Expert</div>
                </div>
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="mb-6 text-lg font-medium">{article.excerpt}</p>
              {article.content.map((item, index) => (
                <p key={index} className="mb-4">
                  {item}
                </p>
              ))}
            </div>

            <div className="pt-6 mt-8 border-t border-gray-200">
              <h3 className="mb-4 font-bold">About the Author</h3>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 mr-4 overflow-hidden bg-gray-300 rounded-full">
                  <img
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Author"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="font-bold">Sarah Thompson</h4>
                  <p className="mb-2 text-gray-600">
                    Travel Expert with 10+ years of experience exploring over 60
                    countries
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-amber-500 hover:text-amber-600">
                      <FaTwitter />
                    </a>
                    <a href="#" className="text-amber-500 hover:text-amber-600">
                      <FaInstagram />
                    </a>
                    <a href="#" className="text-amber-500 hover:text-amber-600">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Navigation */}
      {/* <nav
  //       className={`fixed w-full z-50 transition-all duration-300 ${
  //         isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
  //       }`}
  //     >
  //       <div className="container px-4 mx-auto">
  //         <div className="flex items-center justify-between">
  //           <div className="text-2xl font-bold text-amber-600">TravelEase</div>
  //           <div className="hidden space-x-8 md:flex">
  //             <a
  //               href="#"
  //               className={`font-medium ${
  //                 isScrolled ? "text-gray-800" : "text-white"
  //               } hover:text-amber-500 transition-colors duration-300`}
  //             >
  //               Home
  //             </a>
  //             <a
  //               href="#"
  //               className={`font-medium ${
  //                 isScrolled ? "text-gray-800" : "text-white"
  //               } hover:text-amber-500 transition-colors duration-300`}
  //             >
  //               Destinations
  //             </a>
  //             <a
  //               href="#"
  //               className={`font-medium ${
  //                 isScrolled ? "text-gray-800" : "text-white"
  //               } hover:text-amber-500 transition-colors duration-300`}
  //             >
  //               Packages
  //             </a>
  //             <a
  //               href="#"
  //               className={`font-medium ${
  //                 isScrolled ? "text-gray-800" : "text-white"
  //               } hover:text-amber-500 transition-colors duration-300`}
  //             >
  //               Deals
  //             </a>
  //             <a
  //               href="#"
  //               className={`font-medium ${
  //                 isScrolled ? "text-gray-800" : "text-white"
  //               } hover:text-amber-500 transition-colors duration-300`}
  //             >
  //               About
  //             </a>
  //             <a
  //               href="#"
  //               className={`font-medium ${
  //                 isScrolled ? "text-gray-800" : "text-white"
  //               } hover:text-amber-500 transition-colors duration-300`}
  //             >
  //               Contact
  //             </a>
  //           </div>
  //           <div className="flex items-center space-x-4">
  //             <button
  //               className={`px-4 py-2 rounded-full font-medium ${
  //                 isScrolled
  //                   ? "text-amber-600 border border-amber-600 hover:bg-amber-50"
  //                   : "text-white border border-white hover:bg-white hover:text-amber-600"
  //               } transition-colors duration-300`}
  //             >
  //               Sign In
  //             </button>
  //             <button
  //               className={`px-4 py-2 rounded-full font-medium ${
  //                 isScrolled
  //                   ? "bg-amber-600 text-white hover:bg-amber-700"
  //                   : "bg-white text-amber-600 hover:bg-gray-100"
  //               } transition-colors duration-300`}
  //             >
  //               Sign Up
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     </nav> */}

      {/* Hero Section with Search */}
      <section
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center mt-[-10px]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1499678329028-101435549a4e')",
        }}
      >
        <div className="container z-10 px-4 mx-auto mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mt-1 mb-4 text-5xl font-bold text-white sm:mt-0">
              Discover Your Perfect Journey
            </h1>

            <p className="hidden mb-8 text-xl text-gray-200 sm:block">
              Explore the world with our curated travel experiences and
              exclusive deals
            </p>
          </div>

          {/* Search Tabs */}
          <div className="max-w-5xl mx-auto overflow-hidden bg-white shadow-2xl rounded-xl sm:rounded-2xl">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab("flights")}
                className={`flex-1 py-3 sm:py-4 px-2 sm:px-6 text-sm sm:text-base font-medium flex items-center justify-center ${
                  activeTab === "flights"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-600 hover:text-amber-500"
                } transition-colors duration-300`}
              >
                <FaPlane className="mr-1 sm:mr-2" /> Flights
              </button>
              <button
                onClick={() => setActiveTab("hotels")}
                className={`flex-1 py-3 sm:py-4 px-2 sm:px-6 text-sm sm:text-base font-medium flex items-center justify-center ${
                  activeTab === "hotels"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-600 hover:text-amber-500"
                } transition-colors duration-300`}
              >
                <FaHotel className="mr-1 sm:mr-2" /> Hotels
              </button>
              <button
                onClick={() => setActiveTab("packages")}
                className={`flex-1 py-3 sm:py-4 px-2 sm:px-6 text-sm sm:text-base font-medium flex items-center justify-center ${
                  activeTab === "packages"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-gray-600 hover:text-amber-500"
                } transition-colors duration-300`}
              >
                <FaUmbrellaBeach className="mr-1 sm:mr-2" /> Packages
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <form onSubmit={handleSearch}>
                {activeTab === "flights" && (
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4">
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        From
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="from"
                          value={searchParams.from}
                          onChange={handleInputChange}
                          placeholder="City or Airport"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <FaMapMarkerAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        To
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="to"
                          value={searchParams.to}
                          onChange={handleInputChange}
                          placeholder="City or Airport"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <FaMapMarkerAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Departure
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={searchParams.dates}
                          onChange={(date) => handleDateChange(date, "dates")}
                          placeholderText="Select Date"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          minDate={new Date()}
                        />
                        <FaCalendarAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Class
                      </label>
                      <select
                        name="flightClass"
                        value={searchParams.flightClass}
                        onChange={handleInputChange}
                        className="w-full p-2 text-sm border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="economy">Economy</option>
                        <option value="premium">Premium Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                      </select>
                    </div>
                  </div>
                )}

                {activeTab === "hotels" && (
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4">
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Destination
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="destination"
                          value={searchParams.destination}
                          onChange={handleInputChange}
                          placeholder="City or Hotel"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <FaMapMarkerAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Check-in
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={searchParams.checkIn}
                          onChange={(date) => handleDateChange(date, "checkIn")}
                          placeholderText="Select Date"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          minDate={new Date()}
                        />
                        <FaCalendarAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Check-out
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={searchParams.checkOut}
                          onChange={(date) =>
                            handleDateChange(date, "checkOut")
                          }
                          placeholderText="Select Date"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          minDate={
                            searchParams.checkIn ||
                            new Date(
                              new Date().setDate(new Date().getDate() + 1)
                            )
                          }
                        />
                        <FaCalendarAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Travelers
                      </label>
                      <div className="relative">
                        <select
                          name="travelers"
                          value={searchParams.travelers}
                          onChange={handleInputChange}
                          className="w-full p-2 text-sm border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </option>
                          ))}
                        </select>
                        <FaUsers className="absolute text-gray-400 right-2 sm:right-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "packages" && (
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-4">
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Destination
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="destination"
                          value={searchParams.destination}
                          onChange={handleInputChange}
                          placeholder="Where to?"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        />
                        <FaMapMarkerAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Dates
                      </label>
                      <div className="relative">
                        <DatePicker
                          selected={searchParams.dates}
                          onChange={(date) => handleDateChange(date, "dates")}
                          placeholderText="Flexible Dates"
                          className="w-full p-2 pl-8 text-sm border border-gray-300 rounded-lg sm:p-3 sm:pl-10 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          minDate={new Date()}
                        />
                        <FaCalendarAlt className="absolute text-gray-400 left-2 sm:left-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div>
                      <label className="block mb-1 text-sm text-gray-700 sm:mb-2 sm:text-base">
                        Travelers
                      </label>
                      <div className="relative">
                        <select
                          name="travelers"
                          value={searchParams.travelers}
                          onChange={handleInputChange}
                          className="w-full p-2 text-sm border border-gray-300 rounded-lg sm:p-3 sm:text-base focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                        >
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <option key={num} value={num}>
                              {num} {num === 1 ? "Adult" : "Adults"}
                            </option>
                          ))}
                        </select>
                        <FaUsers className="absolute text-gray-400 right-2 sm:right-3 top-2.5 sm:top-4" />
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button
                        type="submit"
                        className="flex items-center justify-center w-full px-4 py-2 text-sm text-white transition-colors duration-300 rounded-lg sm:px-6 sm:py-3 sm:text-base bg-amber-500 hover:bg-amber-600"
                      >
                        {isLoading ? (
                          <>
                            <svg
                              className="w-4 h-4 mr-2 -ml-1 text-white sm:w-5 sm:h-5 animate-spin"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Searching...
                          </>
                        ) : (
                          <>
                            <FaSearch className="mr-1 sm:mr-2" /> Search
                            Packages
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {(activeTab === "flights" || activeTab === "hotels") && (
                  <div className="mt-3 sm:mt-4">
                    <button
                      type="submit"
                      className="flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 rounded-lg sm:px-6 sm:py-3 sm:text-base bg-amber-500 hover:bg-amber-600"
                    >
                      {isLoading ? (
                        <>
                          <svg
                            className="w-4 h-4 mr-2 -ml-1 text-white sm:w-5 sm:h-5 animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Searching...
                        </>
                      ) : activeTab === "flights" ? (
                        "Search Flights"
                      ) : (
                        "Find Hotels"
                      )}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Render search results if available */}
      {searchResults && renderSearchResults()}

      {/* Popular Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Popular Destinations</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our most sought-after travel destinations around the world
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {popularDestinations.map((destination) => (
              <div
                key={destination.id}
                className="relative overflow-hidden shadow-lg cursor-pointer group rounded-xl"
                onClick={() => {
                  setCurrentImageIndex(0);
                  openModal({
                    type: "destination",
                    data: destination,
                    title: destination.name,
                  });
                }}
              >
                <img
                  src={destination.images[0]}
                  alt={destination.name}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{destination.name}</h3>
                  <p className="mt-1 font-medium text-amber-300">
                    From ${destination.price}
                  </p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  <button className="px-6 py-2 font-medium text-white transition-colors duration-300 rounded-full bg-amber-500 hover:bg-amber-600">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="px-8 py-2 font-medium transition-colors duration-300 border-2 rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white">
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Special Travel Deals</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Limited-time offers curated just for you to make your journey
              unforgettable
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {travelPackages.map((deal) => (
              <div
                key={deal.id}
                className="relative overflow-hidden transition-shadow duration-300 shadow-lg rounded-xl hover:shadow-xl"
              >
                <div className="absolute z-10 px-3 py-1 text-sm font-bold text-white bg-red-500 rounded-full top-4 right-4">
                  SAVE {deal.discount}%
                </div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{deal.title}</h3>
                  <p className="mb-4 text-gray-600">{deal.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-sm text-gray-500">Duration:</span>
                      <span className="ml-2 font-medium">{deal.duration}</span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Group Size:</span>
                      <span className="ml-2 font-medium">{deal.groupSize}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-amber-600">
                        ${deal.price}
                      </span>
                      <span className="ml-2 text-gray-400 line-through">
                        ${deal.originalPrice}
                      </span>
                    </div>
                    <button
                      onClick={() =>
                        openModal({
                          type: "package",
                          data: deal,
                          title: deal.title,
                        })
                      }
                      className="px-4 py-2 font-medium text-white transition-colors duration-300 rounded-lg bg-amber-500 hover:bg-amber-600"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="px-8 py-2 font-medium transition-colors duration-300 border-2 rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white">
              View All Deals
            </button>
          </div>
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-gray-100">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Travel Inspiration</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Watch our featured travel videos to get inspired for your next
              adventure
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden shadow-lg rounded-xl">
              <div className="relative pt-[56.25%]">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=1La4QzGeaaQ"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                  controls={true}
                  light={
                    <img
                      src="https://i.ytimg.com/vi/1La4QzGeaaQ/maxresdefault.jpg"
                      alt="Thumbnail"
                      className="object-cover w-full h-full"
                    />
                  }
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="mb-2 text-xl font-bold">
                  Top 10 Destinations for 2023
                </h3>
                <p className="text-gray-600">
                  Discover the most exciting places to visit this year
                </p>
              </div>
            </div>

            <div className="overflow-hidden shadow-lg rounded-xl">
              <div className="relative pt-[56.25%]">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=PSYHMWmyVfo"
                  width="100%"
                  height="100%"
                  style={{ position: "absolute", top: 0, left: 0 }}
                  controls={true}
                  light={
                    <img
                      src="https://i.ytimg.com/vi/PSYHMWmyVfo/maxresdefault.jpg"
                      alt="Thumbnail"
                      className="object-cover w-full h-full"
                    />
                  }
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="mb-2 text-xl font-bold">
                  Hidden Gems of Europe
                </h3>
                <p className="text-gray-600">
                  Explore off-the-beaten-path locations in Europe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">
              Why Choose Our Travel Agency
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              We go above and beyond to make your travel experience exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <FaStar className="mb-4 text-4xl text-amber-500" />,
                title: "Best Price Guarantee",
                description:
                  "We guarantee the best prices for all our travel packages. Found a better deal? We'll match it!",
              },
              {
                icon: <FaHeadset className="mb-4 text-4xl text-amber-500" />,
                title: "24/7 Customer Support",
                description:
                  "Our travel experts are available round the clock to assist you with any queries or emergencies.",
              },
              {
                icon: (
                  <FaMapMarkedAlt className="mb-4 text-4xl text-amber-500" />
                ),
                title: "Local Expertise",
                description:
                  "We work with local guides and partners to provide authentic and immersive travel experiences.",
              },
              {
                icon: <FaShieldAlt className="mb-4 text-4xl text-amber-500" />,
                title: "Travel Protection",
                description:
                  "Comprehensive travel insurance options to protect your investment and give you peace of mind.",
              },
              {
                icon: <FaGift className="mb-4 text-4xl text-amber-500" />,
                title: "Exclusive Perks",
                description:
                  "Enjoy special amenities, room upgrades, and VIP treatment at select hotels and resorts.",
              },
              {
                icon: <FaUsers className="mb-4 text-4xl text-amber-500" />,
                title: "Customized Experiences",
                description:
                  "Tailor-made itineraries designed specifically for your interests and preferences.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 text-center transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">What Our Travelers Say</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Hear from our satisfied customers about their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="p-6 transition-shadow duration-300 rounded-lg bg-gray-50 hover:shadow-md"
              >
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="mb-4 italic text-gray-700">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 mr-4 overflow-hidden bg-gray-300 rounded-full">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.location}
                    </p>
                    <p className="text-xs font-medium text-amber-600">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-2 text-3xl font-bold">Travel Tips & Guides</h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Helpful advice and inspiration for your next adventure
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {travelTips.map((article) => (
              <div
                key={article.id}
                className="overflow-hidden transition-shadow duration-300 bg-white shadow-md cursor-pointer rounded-xl hover:shadow-lg"
                onClick={() =>
                  openModal({
                    type: "article",
                    data: article,
                    title: article.title,
                  })
                }
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="object-cover w-full h-48"
                />
                <div className="p-6">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <h3 className="my-2 text-xl font-bold">{article.title}</h3>
                  <p className="mb-4 text-gray-600">{article.excerpt}</p>
                  <div className="flex items-center font-medium text-amber-500 hover:text-amber-600">
                    Read More{" "}
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="px-8 py-2 font-medium transition-colors duration-300 border-2 rounded-full border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter
      <section className="py-16 text-white bg-amber-500">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Get Travel Deals & Inspiration
            </h2>
            <p className="mb-6">
              Subscribe to our newsletter and receive exclusive offers, travel
              tips, and destination inspiration straight to your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col max-w-md gap-4 mx-auto sm:flex-row"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-grow px-4 py-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300"
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center px-6 py-3 font-medium text-white transition-colors duration-300 bg-gray-900 rounded-lg hover:bg-gray-800 whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg
                      className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {isSubscribed && (
              <div className="p-3 mt-4 bg-green-500 rounded-lg">
                Thank you for subscribing! You'll receive our next newsletter
                soon.
              </div>
            )}

            <p className="mt-4 text-sm opacity-80">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-800 to-amber-600">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">
            Ready to Start Your Adventure?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Let us help you plan the perfect trip tailored to your preferences
            and budget.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="px-8 py-3 text-lg font-bold transition-colors duration-300 bg-white rounded-full text-amber-600 hover:bg-gray-100">
              Book Now
            </button>
            <button className="px-8 py-3 text-lg font-bold text-white transition-colors duration-300 border-2 border-white rounded-full hover:bg-white hover:text-amber-600">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70">
          {renderModalContent()}
        </div>
      )}
    </div>
  );
};

export default Home;
