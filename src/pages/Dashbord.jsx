import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaSignOutAlt,
  FaChartPie,
  FaUser,
  FaPlus,
  FaUsers,
  FaMoneyBillWave,
  FaHotel,
  FaSuitcaseRolling,
  FaCalendarCheck,
  FaPlane,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Dashboard");

  // State for Users
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      cnic: "12345-6789012-3",
      address: "123 Main St",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      cnic: "98765-4321098-7",
      address: "456 Elm St",
      role: "User",
    },
  ]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    phone: "",
    cnic: "",
    address: "",
    role: "User",
  });
  const [showAddUser, setShowAddUser] = useState(false);
  const [editUser, setEditUser] = useState(null); // State for editing user

  // State for Hotels
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Luxury Hotel",
      location: "Paris",
      rooms: 50,
      price: "$200/night",
    },
    {
      id: 2,
      name: "Beach Resort",
      location: "Bali",
      rooms: 100,
      price: "$300/night",
    },
  ]);
  const [newHotel, setNewHotel] = useState({
    name: "",
    location: "",
    rooms: "",
    price: "",
  });
  const [showAddHotel, setShowAddHotel] = useState(false);
  const [editHotel, setEditHotel] = useState(null); // State for editing hotel

  // State for Tour Packages
  const [tourPackages, setTourPackages] = useState([
    {
      id: 1,
      name: "Paris Getaway",
      destination: "Paris",
      duration: "7 Days",
      price: "$1500",
    },
    {
      id: 2,
      name: "Bali Adventure",
      destination: "Bali",
      duration: "10 Days",
      price: "$2000",
    },
  ]);
  const [newTourPackage, setNewTourPackage] = useState({
    name: "",
    destination: "",
    duration: "",
    price: "",
  });
  const [showAddTourPackage, setShowAddTourPackage] = useState(false);
  const [editTourPackage, setEditTourPackage] = useState(null); // State for editing tour package

  // State for Bookings
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "John Doe",
      package: "Paris Getaway",
      date: "2023-10-15",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Jane Smith",
      package: "Bali Adventure",
      date: "2023-11-01",
      status: "Pending",
    },
  ]);
  const [newBooking, setNewBooking] = useState({
    customer: "",
    package: "",
    date: "",
    status: "",
  });
  const [showAddBooking, setShowAddBooking] = useState(false);
  const [editBooking, setEditBooking] = useState(null); // State for editing booking

  // State for Customers
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      bookings: 2,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      bookings: 1,
    },
  ]);
  const [newCustomer, setNewCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    bookings: "",
  });
  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [editCustomer, setEditCustomer] = useState(null); // State for editing customer

  // Sample data for charts
  const salesData = [
    { month: "Jan", revenue: 2500, profit: 0 },
    { month: "Feb", revenue: 4800, profit: 2500 },
    { month: "Mar", revenue: 6200, profit: 3300 },
    { month: "Apr", revenue: 6800, profit: 4200 },
    { month: "May", revenue: 9100, profit: 4600 },
    { month: "Jun", revenue: 8500, profit: 4300 },
    { month: "Jul", revenue: 7500, profit: 4700 },
    { month: "Aug", revenue: 8700, profit: 6400 },
    { month: "Sep", revenue: 5000, profit: 2000 },
    { month: "Oct", revenue: 9300, profit: 6600 },
    { month: "Nov", revenue: 8800, profit: 4300 },
    { month: "Dec", revenue: 9200, profit: 4600 },
  ];

  const bookingDistributionData = [
    { name: "Hotels", value: 400 },
    { name: "Tours", value: 300 },
    { name: "Flights", value: 200 },
  ];

  const topDestinationsData = [
    { name: "Paris", bookings: 120 },
    { name: "Tokyo", bookings: 90 },
    { name: "New York", bookings: 80 },
    { name: "Bali", bookings: 70 },
    { name: "London", bookings: 60 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]; // Colors for Pie Chart

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      // User confirmed, navigate to the home page
      navigate("/");
    } else {
      // User canceled, do nothing or handle accordingly
      console.log("Logout canceled");
    }
  };

  // Functions for Users
  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.phone || !newUser.role) {
      return alert("Please fill all fields!");
    }
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({
      name: "",
      email: "",
      phone: "",
      role: "User",
    });
    setShowAddUser(false);
  };

  const handleEditUser = (user) => {
    setEditUser(user); // Set the user to edit
  };

  const handleUpdateUser = () => {
    if (
      !editUser.name ||
      !editUser.email ||
      !editUser.phone ||
      !editUser.role
    ) {
      return alert("Please fill all fields!");
    }
    setUsers(users.map((u) => (u.id === editUser.id ? editUser : u)));
    setEditUser(null); // Clear the edit state
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Functions for Hotels
  const handleAddHotel = () => {
    if (
      !newHotel.name ||
      !newHotel.location ||
      !newHotel.rooms ||
      !newHotel.price
    ) {
      return alert("Please fill all fields!");
    }
    setHotels([...hotels, { id: hotels.length + 1, ...newHotel }]);
    setNewHotel({
      name: "",
      location: "",
      rooms: "",
      price: "",
    });
    setShowAddHotel(false);
  };

  const handleEditHotel = (hotel) => {
    setEditHotel(hotel); // Set the hotel to edit
  };

  const handleUpdateHotel = () => {
    if (
      !editHotel.name ||
      !editHotel.location ||
      !editHotel.rooms ||
      !editHotel.price
    ) {
      return alert("Please fill all fields!");
    }
    setHotels(hotels.map((h) => (h.id === editHotel.id ? editHotel : h)));
    setEditHotel(null); // Clear the edit state
  };

  const handleDeleteHotel = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  // Functions for Tour Packages
  const handleAddTourPackage = () => {
    if (
      !newTourPackage.name ||
      !newTourPackage.destination ||
      !newTourPackage.duration ||
      !newTourPackage.price
    ) {
      return alert("Please fill all fields!");
    }
    setTourPackages([
      ...tourPackages,
      { id: tourPackages.length + 1, ...newTourPackage },
    ]);
    setNewTourPackage({
      name: "",
      destination: "",
      duration: "",
      price: "",
    });
    setShowAddTourPackage(false);
  };

  const handleEditTourPackage = (tourPackage) => {
    setEditTourPackage(tourPackage); // Set the tour package to edit
  };

  const handleUpdateTourPackage = () => {
    if (
      !editTourPackage.name ||
      !editTourPackage.destination ||
      !editTourPackage.duration ||
      !editTourPackage.price
    ) {
      return alert("Please fill all fields!");
    }
    setTourPackages(
      tourPackages.map((tp) =>
        tp.id === editTourPackage.id ? editTourPackage : tp
      )
    );
    setEditTourPackage(null); // Clear the edit state
  };

  const handleDeleteTourPackage = (id) => {
    setTourPackages(
      tourPackages.filter((tourPackage) => tourPackage.id !== id)
    );
  };

  // Functions for Bookings
  const handleAddBooking = () => {
    if (
      !newBooking.customer ||
      !newBooking.package ||
      !newBooking.date ||
      !newBooking.status
    ) {
      return alert("Please fill all fields!");
    }
    setBookings([...bookings, { id: bookings.length + 1, ...newBooking }]);
    setNewBooking({
      customer: "",
      package: "",
      date: "",
      status: "",
    });
    setShowAddBooking(false);
  };

  const handleEditBooking = (booking) => {
    setEditBooking(booking); // Set the booking to edit
  };

  const handleUpdateBooking = () => {
    if (
      !editBooking.customer ||
      !editBooking.package ||
      !editBooking.date ||
      !editBooking.status
    ) {
      return alert("Please fill all fields!");
    }
    setBookings(
      bookings.map((b) => (b.id === editBooking.id ? editBooking : b))
    );
    setEditBooking(null); // Clear the edit state
  };

  const handleDeleteBooking = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  // Functions for Customers
  const handleAddCustomer = () => {
    if (
      !newCustomer.name ||
      !newCustomer.email ||
      !newCustomer.phone ||
      !newCustomer.bookings
    ) {
      return alert("Please fill all fields!");
    }
    setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
    setNewCustomer({
      name: "",
      email: "",
      phone: "",
      bookings: "",
    });
    setShowAddCustomer(false);
  };

  const handleEditCustomer = (customer) => {
    setEditCustomer(customer); // Set the customer to edit
  };

  const handleUpdateCustomer = () => {
    if (
      !editCustomer.name ||
      !editCustomer.email ||
      !editCustomer.phone ||
      !editCustomer.bookings
    ) {
      return alert("Please fill all fields!");
    }
    setCustomers(
      customers.map((c) => (c.id === editCustomer.id ? editCustomer : c))
    );
    setEditCustomer(null); // Clear the edit state
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 text-white shadow-md bg-gradient-to-r from-blue-600 to-blue-800">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setActiveTab("Dashboard")}
        >
          Travel Admin Dashboard
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 transition rounded-md shadow-md bg-amber-500 hover:bg-amber-600"
        >
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex flex-grow p-6">
        {/* Sidebar */}
        <aside className="w-1/4 p-4 bg-white rounded-md shadow-lg">
          <ul className="space-y-4">
            <li
              className={`p-3 rounded-md flex items-center cursor-pointer ${
                activeTab === "Dashboard"
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Dashboard")}
            >
              <FaChartPie className="mr-2" /> Dashboard
            </li>
            <li
              className={`p-3 rounded-md flex items-center cursor-pointer ${
                activeTab === "Users"
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Users")}
            >
              <FaUser className="mr-2" /> Users
            </li>
            <li
              className={`p-3 rounded-md flex items-center cursor-pointer ${
                activeTab === "Hotels"
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Hotels")}
            >
              <FaHotel className="mr-2" /> Hotels
            </li>
            <li
              className={`p-3 rounded-md flex items-center cursor-pointer ${
                activeTab === "TourPackages"
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("TourPackages")}
            >
              <FaSuitcaseRolling className="mr-2" /> Tour Packages
            </li>
            <li
              className={`p-3 rounded-md flex items-center cursor-pointer ${
                activeTab === "Bookings"
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Bookings")}
            >
              <FaCalendarCheck className="mr-2" /> Bookings
            </li>
            <li
              className={`p-3 rounded-md flex items-center cursor-pointer ${
                activeTab === "Customers"
                  ? "bg-blue-100 text-blue-800"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab("Customers")}
            >
              <FaUsers className="mr-2" /> Customers
            </li>
          </ul>
        </aside>

        {/* Content Area */}
        <main className="w-3/4 p-6 ml-6 bg-white rounded-md shadow-lg">
          {activeTab === "Dashboard" && (
            <div>
              <h2 className="mb-4 text-xl font-semibold">Welcome, Admin</h2>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="p-6 text-white transition-shadow rounded-md shadow-md bg-gradient-to-r from-blue-500 hover:shadow-lg to-blue-600">
                  <h3 className="text-lg font-bold">
                    <FaHotel className="inline-block" /> Hotels
                  </h3>
                  <p className="text-2xl font-semibold">30</p>
                </div>
                <div className="p-6 text-white transition-shadow rounded-md shadow-md bg-gradient-to-r from-green-500 hover:shadow-lg to-green-600">
                  <h3 className="text-lg font-bold">
                    <FaSuitcaseRolling className="inline-block" /> Tour Packages
                  </h3>
                  <p className="text-2xl font-semibold">50</p>
                </div>
                <div className="p-6 text-white transition-shadow rounded-md shadow-md bg-gradient-to-r from-purple-500 hover:shadow-lg to-purple-600">
                  <h3 className="text-lg font-bold">
                    <FaPlane className="inline-block" /> Flights
                  </h3>
                  <p className="text-2xl font-semibold">25</p>
                </div>
                <div className="p-6 text-white transition-shadow rounded-md shadow-md bg-gradient-to-r from-yellow-500 hover:shadow-lg to-yellow-600">
                  <h3 className="text-lg font-bold">
                    <FaCalendarCheck className="inline-block" /> Bookings
                  </h3>
                  <p className="text-2xl font-semibold">120</p>
                </div>
                <div className="p-6 text-white transition-shadow rounded-md shadow-md bg-gradient-to-r from-red-500 hover:shadow-lg to-red-600">
                  <h3 className="text-lg font-bold">
                    <FaUsers className="inline-block" /> Customers
                  </h3>
                  <p className="text-2xl font-semibold">1,200</p>
                </div>
                <div className="p-6 text-white transition-shadow rounded-md shadow-md bg-gradient-to-r from-pink-500 hover:shadow-lg to-pink-600">
                  <h3 className="text-lg font-bold">
                    <FaMoneyBillWave className="inline-block" /> Revenue
                  </h3>
                  <p className="text-2xl font-semibold">$80,000</p>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 gap-6 mt-8">
                {/* Line Chart */}
                <div className="p-6 bg-white rounded-md shadow-md">
                  <h3 className="mb-4 text-lg font-bold">
                    Revenue & Profit Trends
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8884d8"
                      />
                      <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Pie Chart */}
                <div className="p-5 bg-white rounded-md shadow-md">
                  <h3 className="mb-4 text-lg font-bold">
                    Booking Distribution
                  </h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={bookingDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={63}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {bookingDistributionData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Bar Chart */}
                <div className="col-span-2 p-6 bg-white rounded-md shadow-md">
                  <h3 className="mb-4 text-lg font-bold">Top Destinations</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={topDestinationsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="bookings" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === "Users" && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-700">
                User Management
              </h2>

              {/* Add User Button */}
              <button
                onClick={() => setShowAddUser(!showAddUser)}
                className="flex items-center px-5 py-2 mb-4 text-white transition duration-300 rounded-lg shadow-md bg-amber-500 hover:bg-amber-600"
              >
                <FaPlus className="mr-2" /> Add New User
              </button>

              {/* Add User Form */}
              {showAddUser && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Add New User
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newUser.name}
                      onChange={(e) =>
                        setNewUser({ ...newUser, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newUser.email}
                      onChange={(e) =>
                        setNewUser({ ...newUser, email: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newUser.phone}
                      onChange={(e) =>
                        setNewUser({ ...newUser, phone: e.target.value })
                      }
                    />

                    <select
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newUser.role}
                      onChange={(e) =>
                        setNewUser({ ...newUser, role: e.target.value })
                      }
                    >
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>

                  <button
                    onClick={handleAddUser}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Add User
                  </button>
                </div>
              )}

              {/* Edit User Form */}
              {editUser && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Edit User
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editUser.name}
                      onChange={(e) =>
                        setEditUser({ ...editUser, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editUser.email}
                      onChange={(e) =>
                        setEditUser({ ...editUser, email: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editUser.phone}
                      onChange={(e) =>
                        setEditUser({ ...editUser, phone: e.target.value })
                      }
                    />

                    <select
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editUser.role}
                      onChange={(e) =>
                        setEditUser({ ...editUser, role: e.target.value })
                      }
                    >
                      <option value="">Select Role</option>
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                      <option value="Manager">Manager</option>
                    </select>
                  </div>

                  <button
                    onClick={handleUpdateUser}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Update User
                  </button>
                </div>
              )}

              {/* Users Table */}
              <div className="overflow-hidden bg-white rounded-lg shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead className="text-white bg-amber-600">
                    <tr>
                      <th className="p-3 border">ID</th>
                      <th className="p-3 border">Name</th>
                      <th className="p-3 border">Email</th>
                      <th className="p-3 border">Phone</th>
                      <th className="p-3 border">Role</th>
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr
                        key={index}
                        className="text-gray-700 bg-gray-100 border-b hover:bg-gray-200"
                      >
                        <td className="p-3 border">{index + 1}</td>
                        <td className="p-3 border">{user.name}</td>
                        <td className="p-3 border">{user.email}</td>
                        <td className="p-3 border">{user.phone}</td>
                        <td className="p-3 border">{user.role}</td>
                        <td className="p-3 border">
                          <button
                            onClick={() => handleEditUser(user)}
                            className="px-4 py-1 mr-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="px-4 py-1 text-white transition duration-300 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Hotels" && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-700">
                Hotels Management
              </h2>

              {/* Add Hotel Button */}
              <button
                onClick={() => setShowAddHotel(!showAddHotel)}
                className="flex items-center px-5 py-2 mb-4 text-white transition duration-300 rounded-lg shadow-md bg-amber-500 hover:bg-amber-600"
              >
                <FaPlus className="mr-2" /> Add New Hotel
              </button>

              {/* Add Hotel Form */}
              {showAddHotel && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Add New Hotel
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Hotel Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newHotel.name}
                      onChange={(e) =>
                        setNewHotel({ ...newHotel, name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newHotel.location}
                      onChange={(e) =>
                        setNewHotel({ ...newHotel, location: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Number of Rooms"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newHotel.rooms}
                      onChange={(e) =>
                        setNewHotel({ ...newHotel, rooms: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Price per Night"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newHotel.price}
                      onChange={(e) =>
                        setNewHotel({ ...newHotel, price: e.target.value })
                      }
                    />
                  </div>

                  <button
                    onClick={handleAddHotel}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Add Hotel
                  </button>
                </div>
              )}

              {/* Edit Hotel Form */}
              {editHotel && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Edit Hotel
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Hotel Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editHotel.name}
                      onChange={(e) =>
                        setEditHotel({ ...editHotel, name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editHotel.location}
                      onChange={(e) =>
                        setEditHotel({ ...editHotel, location: e.target.value })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Number of Rooms"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editHotel.rooms}
                      onChange={(e) =>
                        setEditHotel({ ...editHotel, rooms: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Price per Night"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editHotel.price}
                      onChange={(e) =>
                        setEditHotel({ ...editHotel, price: e.target.value })
                      }
                    />
                  </div>

                  <button
                    onClick={handleUpdateHotel}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Update Hotel
                  </button>
                </div>
              )}

              {/* Hotels Table */}
              <div className="overflow-hidden bg-white rounded-lg shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead className="text-white bg-amber-600">
                    <tr>
                      <th className="p-3 border">ID</th>
                      <th className="p-3 border">Name</th>
                      <th className="p-3 border">Location</th>
                      <th className="p-3 border">Rooms</th>
                      <th className="p-3 border">Price</th>
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotels.map((hotel, index) => (
                      <tr
                        key={index}
                        className="text-gray-700 bg-gray-100 border-b hover:bg-gray-200"
                      >
                        <td className="p-3 border">{index + 1}</td>
                        <td className="p-3 border">{hotel.name}</td>
                        <td className="p-3 border">{hotel.location}</td>
                        <td className="p-3 border">{hotel.rooms}</td>
                        <td className="p-3 border">{hotel.price}</td>
                        <td className="p-3 border">
                          <button
                            onClick={() => handleEditHotel(hotel)}
                            className="px-4 py-1 mr-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteHotel(hotel.id)}
                            className="px-4 py-1 text-white transition duration-300 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "TourPackages" && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-700">
                Tour Packages Management
              </h2>

              {/* Add Tour Package Button */}
              <button
                onClick={() => setShowAddTourPackage(!showAddTourPackage)}
                className="flex items-center px-5 py-2 mb-4 text-white transition duration-300 rounded-lg shadow-md bg-amber-500 hover:bg-amber-600"
              >
                <FaPlus className="mr-2" /> Add New Tour Package
              </button>

              {/* Add Tour Package Form */}
              {showAddTourPackage && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Add New Tour Package
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Package Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newTourPackage.name}
                      onChange={(e) =>
                        setNewTourPackage({
                          ...newTourPackage,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newTourPackage.destination}
                      onChange={(e) =>
                        setNewTourPackage({
                          ...newTourPackage,
                          destination: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Duration"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newTourPackage.duration}
                      onChange={(e) =>
                        setNewTourPackage({
                          ...newTourPackage,
                          duration: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Price"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newTourPackage.price}
                      onChange={(e) =>
                        setNewTourPackage({
                          ...newTourPackage,
                          price: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    onClick={handleAddTourPackage}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Add Tour Package
                  </button>
                </div>
              )}

              {/* Edit Tour Package Form */}
              {editTourPackage && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Edit Tour Package
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Package Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editTourPackage.name}
                      onChange={(e) =>
                        setEditTourPackage({
                          ...editTourPackage,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Destination"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editTourPackage.destination}
                      onChange={(e) =>
                        setEditTourPackage({
                          ...editTourPackage,
                          destination: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Duration"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editTourPackage.duration}
                      onChange={(e) =>
                        setEditTourPackage({
                          ...editTourPackage,
                          duration: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Price"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editTourPackage.price}
                      onChange={(e) =>
                        setEditTourPackage({
                          ...editTourPackage,
                          price: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    onClick={handleUpdateTourPackage}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Update Tour Package
                  </button>
                </div>
              )}

              {/* Tour Packages Table */}
              <div className="overflow-hidden bg-white rounded-lg shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead className="text-white bg-amber-600">
                    <tr>
                      <th className="p-3 border">ID</th>
                      <th className="p-3 border">Name</th>
                      <th className="p-3 border">Destination</th>
                      <th className="p-3 border">Duration</th>
                      <th className="p-3 border">Price</th>
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tourPackages.map((tourPackage, index) => (
                      <tr
                        key={index}
                        className="text-gray-700 bg-gray-100 border-b hover:bg-gray-200"
                      >
                        <td className="p-3 border">{index + 1}</td>
                        <td className="p-3 border">{tourPackage.name}</td>
                        <td className="p-3 border">
                          {tourPackage.destination}
                        </td>
                        <td className="p-3 border">{tourPackage.duration}</td>
                        <td className="p-3 border">{tourPackage.price}</td>
                        <td className="p-3 border">
                          <button
                            onClick={() => handleEditTourPackage(tourPackage)}
                            className="px-4 py-1 mr-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteTourPackage(tourPackage.id)
                            }
                            className="px-4 py-1 text-white transition duration-300 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Bookings" && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-700">
                Bookings Management
              </h2>

              {/* Add Booking Button */}
              <button
                onClick={() => setShowAddBooking(!showAddBooking)}
                className="flex items-center px-5 py-2 mb-4 text-white transition duration-300 rounded-lg shadow-md bg-amber-500 hover:bg-amber-600"
              >
                <FaPlus className="mr-2" /> Add New Booking
              </button>

              {/* Add Booking Form */}
              {showAddBooking && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Add New Booking
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Customer Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newBooking.customer}
                      onChange={(e) =>
                        setNewBooking({
                          ...newBooking,
                          customer: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Package Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newBooking.package}
                      onChange={(e) =>
                        setNewBooking({
                          ...newBooking,
                          package: e.target.value,
                        })
                      }
                    />
                    <input
                      type="date"
                      placeholder="Booking Date"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newBooking.date}
                      onChange={(e) =>
                        setNewBooking({ ...newBooking, date: e.target.value })
                      }
                    />
                    <select
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newBooking.status}
                      onChange={(e) =>
                        setNewBooking({ ...newBooking, status: e.target.value })
                      }
                    >
                      <option value="">Select Status</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  <button
                    onClick={handleAddBooking}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Add Booking
                  </button>
                </div>
              )}

              {/* Edit Booking Form */}
              {editBooking && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Edit Booking
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Customer Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editBooking.customer}
                      onChange={(e) =>
                        setEditBooking({
                          ...editBooking,
                          customer: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Package Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editBooking.package}
                      onChange={(e) =>
                        setEditBooking({
                          ...editBooking,
                          package: e.target.value,
                        })
                      }
                    />
                    <input
                      type="date"
                      placeholder="Booking Date"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editBooking.date}
                      onChange={(e) =>
                        setEditBooking({ ...editBooking, date: e.target.value })
                      }
                    />
                    <select
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editBooking.status}
                      onChange={(e) =>
                        setEditBooking({
                          ...editBooking,
                          status: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Status</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Pending">Pending</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>

                  <button
                    onClick={handleUpdateBooking}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Update Booking
                  </button>
                </div>
              )}

              {/* Bookings Table */}
              <div className="overflow-hidden bg-white rounded-lg shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead className="text-white bg-amber-600">
                    <tr>
                      <th className="p-3 border">ID</th>
                      <th className="p-3 border">Customer</th>
                      <th className="p-3 border">Package</th>
                      <th className="p-3 border">Date</th>
                      <th className="p-3 border">Status</th>
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking, index) => (
                      <tr
                        key={index}
                        className="text-gray-700 bg-gray-100 border-b hover:bg-gray-200"
                      >
                        <td className="p-3 border">{index + 1}</td>
                        <td className="p-3 border">{booking.customer}</td>
                        <td className="p-3 border">{booking.package}</td>
                        <td className="p-3 border">{booking.date}</td>
                        <td className="p-3 border">{booking.status}</td>
                        <td className="p-3 border">
                          <button
                            onClick={() => handleEditBooking(booking)}
                            className="px-4 py-1 mr-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteBooking(booking.id)}
                            className="px-4 py-1 text-white transition duration-300 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "Customers" && (
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-700">
                Customers Management
              </h2>

              {/* Add Customer Button */}
              <button
                onClick={() => setShowAddCustomer(!showAddCustomer)}
                className="flex items-center px-5 py-2 mb-4 text-white transition duration-300 rounded-lg shadow-md bg-amber-500 hover:bg-amber-600"
              >
                <FaPlus className="mr-2" /> Add New Customer
              </button>

              {/* Add Customer Form */}
              {showAddCustomer && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Add New Customer
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Customer Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newCustomer.name}
                      onChange={(e) =>
                        setNewCustomer({ ...newCustomer, name: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newCustomer.email}
                      onChange={(e) =>
                        setNewCustomer({
                          ...newCustomer,
                          email: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newCustomer.phone}
                      onChange={(e) =>
                        setNewCustomer({
                          ...newCustomer,
                          phone: e.target.value,
                        })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Number of Bookings"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={newCustomer.bookings}
                      onChange={(e) =>
                        setNewCustomer({
                          ...newCustomer,
                          bookings: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    onClick={handleAddCustomer}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Add Customer
                  </button>
                </div>
              )}

              {/* Edit Customer Form */}
              {editCustomer && (
                <div className="p-6 mb-6 bg-white rounded-lg shadow-md">
                  <h3 className="mb-4 text-lg font-semibold text-gray-600">
                    Edit Customer
                  </h3>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Customer Name"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editCustomer.name}
                      onChange={(e) =>
                        setEditCustomer({
                          ...editCustomer,
                          name: e.target.value,
                        })
                      }
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editCustomer.email}
                      onChange={(e) =>
                        setEditCustomer({
                          ...editCustomer,
                          email: e.target.value,
                        })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editCustomer.phone}
                      onChange={(e) =>
                        setEditCustomer({
                          ...editCustomer,
                          phone: e.target.value,
                        })
                      }
                    />
                    <input
                      type="number"
                      placeholder="Number of Bookings"
                      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500"
                      value={editCustomer.bookings}
                      onChange={(e) =>
                        setEditCustomer({
                          ...editCustomer,
                          bookings: e.target.value,
                        })
                      }
                    />
                  </div>

                  <button
                    onClick={handleUpdateCustomer}
                    className="w-full p-3 mt-5 text-white transition duration-300 rounded-lg bg-amber-600 hover:bg-amber-700"
                  >
                    Update Customer
                  </button>
                </div>
              )}

              {/* Customers Table */}
              <div className="overflow-hidden bg-white rounded-lg shadow-md">
                <table className="w-full text-left border-collapse">
                  <thead className="text-white bg-amber-600">
                    <tr>
                      <th className="p-3 border">ID</th>
                      <th className="p-3 border">Name</th>
                      <th className="p-3 border">Email</th>
                      <th className="p-3 border">Phone</th>
                      <th className="p-3 border">Bookings</th>
                      <th className="p-3 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) => (
                      <tr
                        key={index}
                        className="text-gray-700 bg-gray-100 border-b hover:bg-gray-200"
                      >
                        <td className="p-3 border">{index + 1}</td>
                        <td className="p-3 border">{customer.name}</td>
                        <td className="p-3 border">{customer.email}</td>
                        <td className="p-3 border">{customer.phone}</td>
                        <td className="p-3 border">{customer.bookings}</td>
                        <td className="p-3 border">
                          <button
                            onClick={() => handleEditCustomer(customer)}
                            className="px-4 py-1 mr-2 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteCustomer(customer.id)}
                            className="px-4 py-1 text-white transition duration-300 bg-red-500 rounded-lg cursor-pointer hover:bg-red-600"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
