import React, { useState } from "react";

const blogData = [
  {
    id: 1,
    title: "Top 10 Hidden Gems in Pakistan",
    summary: "Discover the most breathtaking yet underrated travel spots.",
    image:
      "https://media.istockphoto.com/id/683284538/photo/karakorum-range.jpg?s=612x612&w=0&k=20&c=f81sDsdtg5g69ZHce8lpJVKQsaPBgD-UcdBe-MffP_0=",
    content: [
      "Pakistan is full of breathtaking travel destinations that often go unnoticed by mainstream tourism.",
      "1. Rama Meadow, Astore - A serene alpine meadow with breathtaking views of Nanga Parbat.",
      "2. Kund Malir Beach, Balochistan - Pristine golden beaches with turquoise waters.",
      "3. Shandur Pass - The 'Roof of the World' hosts the highest polo ground at 3,700 meters.",
      "4. Katas Raj Temples - Ancient Hindu temples with a sacred pond mentioned in the Mahabharata.",
      "5. Hingol National Park - Home to the majestic Princess of Hope rock formation.",
      "6. Deosai Plains - The second highest plateau in the world at 4,114 meters.",
      "7. Chitral Gol National Park - One of the last habitats of the majestic Markhor.",
      "8. Ushu Forest - A magical pine forest near Kalam that looks straight out of a fairy tale.",
      "9. Manthoka Waterfall, Skardu - A hidden waterfall in the heart of Baltistan.",
      "10. Gorakh Hill Station - The 'Murree of Sindh' with cool temperatures year-round.",
    ],
    author: "Sarah Khan",
    date: "May 15, 2023",
    readTime: "8 min read",
    tags: ["Adventure", "Nature", "Culture"],
    rating: 4.8,
  },
  {
    id: 2,
    title: "Best Time to Visit Skardu",
    summary:
      "Plan your trip to Skardu with this seasonal guide to this magical place.",
    image:
      "https://wander-lush.org/wp-content/uploads/2020/12/Beautiful-places-in-Pakistan-Passu-Cones-SiddiquiGetty-CanvaPro.jpg",
    content: [
      "Skardu offers stunning landscapes year-round, but each season brings a unique experience:",
      "Spring (March-May):",
      "- Pleasant temperatures (10-20°C)",
      "- Blooming apricot and apple orchards",
      "- Ideal for moderate trekking",
      "Summer (June-August):",
      "- Warm days (25-30°C) and cool nights",
      "- Best time for high-altitude treks to K2 base camp",
      "- Shigar and Khaplu festivals occur in July",
      "Autumn (September-November):",
      "- Stunning fall foliage in the valleys",
      "- Harvest season - try fresh fruits",
      "- Clear skies for photography",
      "Winter (December-February):",
      "- Sub-zero temperatures but magical snowscapes",
      "- Frozen lakes and winter sports opportunities",
      "- Fewer tourists and lower prices",
    ],
    author: "Ali Raza",
    date: "June 2, 2023",
    readTime: "6 min read",
    tags: ["Mountains"],
  },
  {
    id: 3,
    title: "A Guide to Trekking in Fairy Meadows",
    summary: "All you need to know about trekking to this magical place.",
    image:
      "https://cultureroadtravel.com/wp-content/uploads/2023/03/Pakistan-Karakoram-Highway-Fairy-Meadows-View.jpeg",
    content: [
      "Fairy Meadows is a paradise for trekkers with its breathtaking views of Nanga Parbat.",
      "Getting There:",
      "- Take a 4x4 jeep from Raikot Bridge (3-4 hours rough ride)",
      "- Then a 2-3 hour moderate trek to the meadows",
      "Best Time to Visit:",
      "- May to October (avoid monsoon in July-August)",
      "Essential Gear:",
      "- Sturdy hiking boots",
      "- Warm layers (temperatures drop at night)",
      "- Rain gear and sun protection",
      "- Basic first aid kit",
      "Accommodation:",
      "- Camping (bring your own or rent on site)",
      "- Basic wooden huts available",
      "Trekking Routes:",
      "- Fairy Meadows to Beyal Camp (4-5 hours)",
      "- Nanga Parbat Base Camp trek (full day)",
      "- Optional extension to Rakhiot Glacier",
      "Safety Tips:",
      "- Acclimatize properly to altitude",
      "- Hire local guides for difficult routes",
      "- Carry enough water and snacks",
      "- Respect local culture and environment",
    ],
    author: "Fatima Ahmed",
    date: "April 28, 2023",
    readTime: "10 min read",
    tags: ["Trekking", "Adventure", "Mountains"],
  },
  {
    id: 4,
    title: "Culinary Journey Through Pakistan",
    summary: "Explore the diverse and delicious food culture of Pakistan.",
    image:
      "https://media.evendo.com/locations-resized/RestaurantImages/360x263/04b75908-e480-4067-b832-a11ac03f47aa",
    content: [
      "Pakistan's culinary landscape is as diverse as its geography:",
      "Punjab:",
      "- Try the famous Lahori chargha (whole fried chicken)",
      "- Savor saag with makai ki roti (mustard greens with cornbread)",
      "- Don't miss the street food in Gawalmandi",
      "Sindh:",
      "- Sindhi biryani with its unique flavors",
      "- Sai bhaji (spinach and dal dish)",
      "- Thadal, a refreshing drink made with almonds",
      "Khyber Pakhtunkhwa:",
      "- Chapli kabab, a Peshawari specialty",
      "- Lamb karahi with naan",
      "- Dried fruits and nuts from Dir",
      "Balochistan:",
      "- Sajji (whole roasted lamb)",
      "- Kaak, a traditional stone-baked bread",
      "- Dates from Turbat",
      "Northern Areas:",
      "- Try apricot soup and walnut bread",
      "- Local trout fish dishes",
      "- Sea buckthorn juice for altitude sickness",
      "Food Etiquette Tips:",
      "- Eat with right hand (considered more respectful)",
      "- Try everything offered (refusing may offend)",
      "- Meals often start with dates or fruit",
    ],
    author: "Zainab Malik",
    date: "July 18, 2023",
    readTime: "12 min read",
    tags: ["Food", "Culture", "Travel"],
  },
  {
    id: 5,
    title: "Historic Forts of Pakistan",
    summary:
      "A tour through the magnificent forts that tell Pakistan's history.",
    image:
      "https://image-tc.galaxy.tf/wijpeg-bbq7bf0e7cksafmtb0pvgo884/shigar-exterior5.jpg",
    content: [
      "Pakistan's landscape is dotted with historic forts that showcase its rich past:",
      "Lahore Fort:",
      "- Mughal-era UNESCO World Heritage Site",
      "- Features Sheesh Mahal (Palace of Mirrors)",
      "- Nighttime light show tells its history",
      "Rohtas Fort:",
      "- 16th century fortress built by Sher Shah Suri",
      "- Never conquered despite many attempts",
      "- Blend of Afghan and Hindu architecture",
      "Ranikot Fort:",
      "- The 'Great Wall of Sindh' (32km circumference)",
      "- Origins shrouded in mystery",
      "- Offers stunning desert views",
      "Baltit Fort, Hunza:",
      "- 700-year-old fort overlooking Hunza Valley",
      "- Recently restored by Aga Khan Trust",
      "- Museum showcases local culture",
      "Derawar Fort, Cholistan:",
      "- Impressive desert fortress with 40 bastions",
      "- Nearby Channan Pir shrine has annual festival",
      "- Best visited during Jeep rally season",
      "Travel Tips:",
      "- Hire local guides at each site",
      "- Visit early morning to avoid heat/crowds",
      "- Respect any religious areas within forts",
      "- Carry water and wear comfortable shoes",
    ],
    author: "Omar Farooq",
    date: "March 5, 2023",
    readTime: "9 min read",
    tags: ["History", "Culture"],
  },
  {
    id: 6,
    title: "Wildlife Safaris in Pakistan",
    summary:
      "Discover the incredible biodiversity of Pakistan's national parks.",
    image: "https://i.dawn.com/large/2019/12/5df77f5793d64.jpg",
    content: [
      "Pakistan offers remarkable wildlife viewing opportunities:",
      "Hingol National Park:",
      "- See the endangered Balochistan bear",
      "- Spot ibex and urial sheep",
      "- Famous for mud volcanoes",
      "Chitral Gol National Park:",
      "- Home to the majestic Markhor (national animal)",
      "- Snow leopard sightings possible in winter",
      "- Over 200 bird species recorded",
      "Lal Suhanra National Park:",
      "- One of the largest parks in South Asia",
      "- See blackbuck and chinkara gazelles",
      "- Winter home to migratory houbara bustards",
      "Deosai National Park:",
      "- 'Land of Giants' with Himalayan brown bears",
      "- Summer home to golden marmots",
      "- Stunning wildflower displays in July",
      "Kirthar National Park:",
      "- See Sindh ibex and urial sheep",
      "- Ancient rock carvings throughout park",
      "- Best visited October to March",
      "Safari Tips:",
      "- Always go with experienced guides",
      "- Carry binoculars and good camera gear",
      "- Respect wildlife viewing distances",
      "- Wear earth-toned clothing for better sightings",
      "- Support conservation efforts",
    ],
    author: "Nadia Hussain",
    date: "August 22, 2023",
    readTime: "11 min read",
    tags: ["Wildlife", "Nature", "Adventure"],
  },
  {
    id: 7,
    title: "Wildlife Safaris",
    summary: "Discover the incredible of Skardu Pakistan's and more.",
    image:
      "https://res.cloudinary.com/www-travelpakistani-com/image/upload/w_900,h_360,c_fill,g_auto,q_30,dpr_1.0,f_auto/blogs/qhoqbtnod5ayltswpkdo.webp",
    content: [
      "Pakistan offers remarkable wildlife viewing opportunities:",
      "Hingol National Park:",
      "- See the endangered Balochistan bear",
      "- Spot ibex and urial sheep",
      "- Famous for mud volcanoes",
      "Chitral Gol National Park:",
      "- Home to the majestic Markhor (national animal)",
      "- Snow leopard sightings possible in winter",
      "- Over 200 bird species recorded",
      "Lal Suhanra National Park:",
      "- One of the largest parks in South Asia",
      "- See blackbuck and chinkara gazelles",
      "- Winter home to migratory houbara bustards",
      "Deosai National Park:",
      "- 'Land of Giants' with Himalayan brown bears",
      "- Summer home to golden marmots",
      "- Stunning wildflower displays in July",
      "Kirthar National Park:",
      "- See Sindh ibex and urial sheep",
      "- Ancient rock carvings throughout park",
      "- Best visited October to March",
      "Safari Tips:",
      "- Always go with experienced guides",
      "- Carry binoculars and good camera gear",
      "- Respect wildlife viewing distances",
      "- Wear earth-toned clothing for better sightings",
      "- Support conservation efforts",
    ],
    author: "Zanish Batool",
    date: "June 30, 2020",
    readTime: "11 min read",
    tags: ["Wildlife", "Nature", "Adventure"],
  },
  {
    id: 8,
    title: "K2",
    summary: "Discover the incredible K2 Pakistan World 2nd highest mountain.",
    image:
      "https://pakistantours.chkar.com/wp-content/uploads/2023/05/k2-skardu-pakistan-pakistan-tours-850x540.jpeg",
    content: [
      "Pakistan offers remarkable wildlife viewing opportunities:",
      "Hingol National Park:",
      "- See the endangered Balochistan bear",
      "- Spot ibex and urial sheep",
      "- Famous for mud volcanoes",
      "Chitral Gol National Park:",
      "- Home to the majestic Markhor (national animal)",
      "- Snow leopard sightings possible in winter",
      "- Over 200 bird species recorded",
      "Lal Suhanra National Park:",
      "- One of the largest parks in South Asia",
      "- See blackbuck and chinkara gazelles",
      "- Winter home to migratory houbara bustards",
      "Deosai National Park:",
      "- 'Land of Giants' with Himalayan brown bears",
      "- Summer home to golden marmots",
      "- Stunning wildflower displays in July",
      "Kirthar National Park:",
      "- See Sindh ibex and urial sheep",
      "- Ancient rock carvings throughout park",
      "- Best visited October to March",
      "Safari Tips:",
      "- Always go with experienced guides",
      "- Carry binoculars and good camera gear",
      "- Respect wildlife viewing distances",
      "- Wear earth-toned clothing for better sightings",
      "- Support conservation efforts",
    ],
    author: "Zulqarnain Ali",
    date: "August 22, 2023",
    readTime: "23 min read",
    tags: ["Wildlife"],
  },
  {
    id: 9,
    title: "Blossom in Skardu",
    summary: "Bolssom is incredible biodiversity of Pakistan's Skardu.",
    image:
      "https://hunzaadventuretours.com/wp-content/uploads/2020/06/Cherry-Blossom-at-Shangrila-Resort-Skardu-Baltistan-1.jpg",
    content: [
      "Pakistan offers remarkable wildlife viewing opportunities:",
      "Hingol National Park:",
      "- See the endangered Balochistan bear",
      "- Spot ibex and urial sheep",
      "- Famous for mud volcanoes",
      "Chitral Gol National Park:",
      "- Home to the majestic Markhor (national animal)",
      "- Snow leopard sightings possible in winter",
      "- Over 200 bird species recorded",
      "Lal Suhanra National Park:",
      "- One of the largest parks in South Asia",
      "- See blackbuck and chinkara gazelles",
      "- Winter home to migratory houbara bustards",
      "Deosai National Park:",
      "- 'Land of Giants' with Himalayan brown bears",
      "- Summer home to golden marmots",
      "- Stunning wildflower displays in July",
      "Kirthar National Park:",
      "- See Sindh ibex and urial sheep",
      "- Ancient rock carvings throughout park",
      "- Best visited October to March",
      "Safari Tips:",
      "- Always go with experienced guides",
      "- Carry binoculars and good camera gear",
      "- Respect wildlife viewing distances",
      "- Wear earth-toned clothing for better sightings",
      "- Support conservation efforts",
    ],
    author: "Yasmeen Ali",
    date: "Feb 11, 2025",
    readTime: "25 min read",
    tags: ["Wildlife", "Nature", "Culture"],
  },
];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const openPopup = (blog) => {
    setSelectedBlog(blog);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedBlog(null);
    setFormData({
      name: "",
      email: "",
      comment: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      blogTitle: selectedBlog.title,
    });
    alert("Thank you for your interest! We'll contact you soon.");
    closePopup();
  };

  const allTags = ["All", ...new Set(blogData.flatMap((blog) => blog.tags))];

  const filteredBlogs = blogData.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === "All" || blog.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="w-full bg-gray-50">
      {/* Hero Banner */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src="https://i.tribune.com.pk/media/images/beautiful-neelum-valley1/beautiful-neelum-valley1.jpg"
          alt="Pakistan Landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent">
          <div className="container mx-auto h-full flex flex-col justify-end pb-20 px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Discover the{" "}
              <span className="text-amber-400">Hidden Treasures</span> of
              Pakistan
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 max-w-2xl">
              Explore breathtaking landscapes, rich cultural heritage, and
              unforgettable adventures
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        {/* Search and Filter */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search destinations, activities..."
                className="w-full py-3 pl-12 pr-4 text-gray-900 bg-white border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                    selectedTag === tag
                      ? "bg-amber-500 text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                onMouseEnter={() => setHoveredCard(blog.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredCard === blog.id ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {blog.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium text-white bg-black/30 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {blog.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-amber-600">
                        {blog.date}
                      </span>
                      <span className="text-gray-300">•</span>
                      <span className="text-sm text-gray-500">
                        {blog.readTime}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{blog.summary}</p>

                  <button
                    onClick={() => openPopup(blog)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-medium rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center bg-white rounded-xl shadow-sm">
            <svg
              className="w-16 h-16 mx-auto text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-5 text-2xl font-medium text-gray-900">
              No matching blogs found
            </h3>
            <p className="mt-2 text-gray-500">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedTag("All");
              }}
              className="mt-6 px-6 py-2 bg-amber-500 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Newsletter */}
        <div className="mt-24 bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Join Our Travel Community
            </h2>
            <p className="mt-4 text-xl text-amber-100">
              Get exclusive travel tips and early access to new guides
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 text-gray-900 rounded-lg focus:ring-2 focus:ring-white focus:border-white focus:outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-amber-600 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-sm text-amber-100">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Popup Form with Image at Top */}
      {showPopup && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Image at Top */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedBlog.title}
                </h3>
                <button
                  onClick={closePopup}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-4 space-y-4 text-gray-700">
                {selectedBlog.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <h4 className="text-lg font-medium text-gray-900">
                  Interested in visiting?
                </h4>
                <p className="text-gray-600">
                  Get more information and travel tips
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Questions
                  </label>
                  <textarea
                    name="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-4 pt-4">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors duration-200"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
