import {
  Mail,
  Phone,
  MapPin,
  Send,
  Edit2,
  Trash2,
  Check,
  X,
  Users,
  Star,
  Quote,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  // Original form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submittedData, setSubmittedData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("form");

  // Load/save data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("contactSubmissions");
    if (savedData) setSubmittedData(JSON.parse(savedData));
  }, []);

  useEffect(() => {
    localStorage.setItem("contactSubmissions", JSON.stringify(submittedData));
  }, [submittedData]);

  // Original form handlers
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    if (editingIndex !== null) {
      const updatedData = [...submittedData];
      updatedData[editingIndex] = formData;
      setSubmittedData(updatedData);
      setEditingIndex(null);
    } else {
      setSubmittedData([...submittedData, formData]);
    }

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 3000);
  };

  const handleEdit = (index) => {
    setFormData(submittedData[index]);
    setEditingIndex(index);
    setActiveTab("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (index) => {
    const filteredData = submittedData.filter((_, i) => i !== index);
    setSubmittedData(filteredData);
  };

  // Contact methods data
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-amber-400" />,
      title: "Email Us",
      subtitle: "We'll reply as soon as possible",
      value: "zulqarnaialishigri@gmail.com",
      link: "mailto:zulqarnaialishigri@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-400" />,
      title: "Call Us",
      subtitle: "Mon-Fri from 9am to 5pm",
      value: "+92 3497001241",
      link: "tel:+923497001241",
    },
    {
      icon: <MapPin className="w-6 h-6 text-red-400" />,
      title: "Visit Us",
      subtitle: "Come say hello at our office",
      value: "Double Road Rwp.",
      link: "https://www.google.com/maps/place/Techsolab+Pvt.+Ltd./@33.6487911,73.0725658,19z/data=!3m1!4b1!4m14!1m7!3m6!1s0x38df955f0ae8d6d5:0xcda9098fcdb67e53!2sOnline+Shop+Advisor+(Software+Company)!8m2!3d33.6487767!4d73.0731926!16s%2Fg%2F11vyt033cs!3m5!1s0x38df958814239c4b:0x80c0d4052af7cf66!8m2!3d33.64879!4d73.0732095!16s%2Fg%2F11kc20y255?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D",
    },
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in the industry.",
      image:
        "https://c8.alamy.com/comp/BBHX6H/pokhara-nepal-senior-at-an-aged-shelter-BBHX6H.jpg",
    },
    {
      name: "Sarah Williams",
      role: "Customer Success",
      bio: "Dedicated to ensuring your complete satisfaction.",
      image:
        "https://static01.nyt.com/athletic/uploads/wp/2024/09/12083008/0910_AlexMorgan.png?width=1200&height=1200&fit=cover",
    },
    {
      name: "Michael Chen",
      role: "Technical Support",
      bio: "Expert problem solver for all technical queries.",
      image:
        "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      quote:
        "The support team went above and beyond to help me with my issue. Truly exceptional service!",
      author: "Jamie Peterson",
      role: "Marketing Director",
      rating: 5,
    },
    {
      quote:
        "Quick response time and knowledgeable staff. Made the entire process seamless.",
      author: "Robert Taylor",
      role: "Small Business Owner",
      rating: 4,
    },
    {
      quote:
        "I've worked with many support teams, but this one stands out for their professionalism.",
      author: "Maria Garcia",
      role: "IT Manager",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-10"></div>
          <div className="relative px-4 py-24 mx-auto text-center max-w-7xl sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              We're <span className="text-amber-400">Here to</span> Help
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-xl text-white">
              Whether you have questions, feedback, or need support, our team is
              ready to assist you.
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 mx-auto mt-[50px] max-w-7xl sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 mb-16 -mt-16 md:grid-cols-3"
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-8 transition-all duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-amber-50">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {method.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-400">
                    {method.subtitle}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-gray-700">{method.value}</p>
            </a>
          ))}
        </motion.div>

        {/* Tabs */}
        <div className="flex mb-8 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("form")}
            className={`py-4 px-6 font-medium text-sm focus:outline-none cursor-pointer ${
              activeTab === "form"
                ? "text-amber-500 border-b-2 border-amber-500"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            Contact Form
          </button>
          <button
            onClick={() => setActiveTab("messages")}
            className={`py-4 px-6 font-medium text-sm focus:outline-none cursor-pointer ${
              activeTab === "messages"
                ? "text-amber-500 border-b-2 border-amber-500"
                : "text-gray-400 hover:text-gray-700"
            }`}
          >
            Your Messages{" "}
            {submittedData.length > 0 && `(${submittedData.length})`}
          </button>
        </div>

        {/* Form Section */}
        <AnimatePresence mode="wait">
          {activeTab === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="mb-16 overflow-hidden bg-white shadow-md rounded-xl"
            >
              <div className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  {editingIndex !== null
                    ? "Edit Your Message"
                    : "Send Us a Message"}
                </h2>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 mb-6 text-green-800 rounded-lg bg-green-50"
                  >
                    <Check className="w-5 h-5" />
                    <span>
                      Message {editingIndex !== null ? "updated" : "sent"}{" "}
                      successfully!
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-amber-400 focus:border-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address..."
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-amber-400 focus:border-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="What would you like to say?"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:ring-amber-400 focus:border-amber-400"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-4">
                    {editingIndex !== null && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingIndex(null);
                          setFormData({ name: "", email: "", message: "" });
                        }}
                        className="flex items-center gap-2 px-6 py-3 text-gray-700 transition-all border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
                      >
                        <X className="w-5 h-5" />
                        Cancel
                      </button>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 rounded-lg text-white flex items-center gap-2 transition-all cursor-pointer ${
                        isSubmitting
                          ? "bg-amber-400 cursor-not-allowed"
                          : "bg-amber-500 hover:bg-amber-700"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="w-5 h-5 mr-2 -ml-1 text-white animate-spin"
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
                          Processing...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {editingIndex !== null
                            ? "Update Message"
                            : "Send Message"}
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Messages Section */}
        <AnimatePresence mode="wait">
          {activeTab === "messages" && (
            <motion.div
              key="messages"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white shadow-md rounded-xl"
            >
              <div className="p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                  Your Messages
                </h2>

                {submittedData.length === 0 ? (
                  <div className="py-12 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 text-gray-300">
                      <Mail className="w-full h-full opacity-50" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      No messages yet
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Messages you send will appear here.
                    </p>
                    <button
                      onClick={() => setActiveTab("form")}
                      className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer bg-amber-400 hover:bg-amber-700 focus:outline-none"
                    >
                      Send your first message
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {submittedData.map((data, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="p-6 transition-all border border-gray-200 rounded-lg hover:shadow-sm"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">
                              {data.name}
                            </h3>
                            <p className="text-sm text-amber-500">
                              {data.email}
                            </p>
                            <p className="mt-2 text-gray-700">{data.message}</p>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(index)}
                              className="p-2 text-gray-400 transition-all rounded-full cursor-pointer hover:text-amber-500 hover:bg-amber-50"
                              title="Edit"
                            >
                              <Edit2 className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete(index)}
                              className="p-2 text-gray-400 transition-all rounded-full cursor-pointer hover:text-red-500 hover:bg-red-50"
                              title="Delete"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Meet Our Team Section */}
        <section className="py-16">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-amber-100">
              <Users className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-500">
              The dedicated professionals who are ready to assist you with any
              questions or concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="overflow-hidden transition-all duration-500 bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-amber-500">{member.role}</p>
                  <p className="mt-3 text-gray-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-8 py-16 bg-amber-50 rounded-xl">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-amber-100">
              <Quote className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-500">
              Don't just take our word for it - hear from our satisfied
              customers.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="mb-6 text-lg italic text-gray-700">
                  "{testimonial.quote}"
                </blockquote>
                <div className="font-medium text-gray-900">
                  {testimonial.author}
                </div>
                <div className="text-sm text-amber-400">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;

