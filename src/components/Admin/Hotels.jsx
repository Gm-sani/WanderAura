/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import Navbarmini from "./navbarmini";
import {
  addHotel,
  getAllHotel,
  updateHotel,
  deleteHotel,
} from "../../backend-services/adminHotelServices";

export default function Hotels() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    role: "Hotel",
    contactInfo: {
      email: "",
      phone: "",
      address: "",
    },
  });

  const [hotels, setHotels] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingHotelId, setEditingHotelId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.contactInfo) {
      setFormData({
        ...formData,
        contactInfo: { ...formData.contactInfo, [name]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const startEditing = (hotel) => {
    setFormData({
      username: hotel.username,
      password: "", // Leave blank for security
      role: "Hotel",
      contactInfo: { ...hotel.contactInfo },
    });
    setIsEditing(true);
    setEditingHotelId(hotel._id); // or company._id based on your schema
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("authToken");

    if (!token) {
      alert("You must be logged in to perform this action.");
      return;
    }

    if (isEditing) {
      // Update mode
      try {
        const response = await updateHotel(editingHotelId, formData, token);
        alert(response.message || "Hotel updated successfully");
        fetchHotels(); // Refresh the list
        setIsEditing(false);
        setEditingHotelId(null);
        setFormData({
          username: "",
          password: "",
          role: "Hotel",
          contactInfo: { email: "", phone: "", address: "" },
        }); // Reset form
      } catch (error) {
        console.error("Update failed:", error.message);
        alert("Failed to update Hotel");
      }
    } else {
      // Add mode
      try {
        const response = await addHotel(formData, token);
        alert(response.message || "Hotel added successfully");
        fetchHotels();
      } catch (error) {
        console.error("Registration failed:", error.message);
        alert("Failed to register Hotel");
      }
    }
  };

  const fetchHotels = async () => {
    const token = localStorage.getItem("authToken"); // Retrieve token from storage

    if (!token) {
      alert("You must be logged in to view hotel.");
      return;
    }

    try {
      const response = await getAllHotel(token);
      console.log("API Response:", response); // Log response to check structure
      setHotels(response.data || []); // Adjust based on actual response structure
    } catch (error) {
      console.error("Failed to fetch hotels:", error.message);
    }
  };

  const deleteCompany = async (hotelId) => {
    const token = localStorage.getItem("authToken"); // Retrieve token from storage

    if (!token) {
      alert("You must be logged in to perform this action.");
      return;
    }

    try {
      const response = await deleteHotel(hotelId, token);
      alert(response.message || "Hotel deleted successfully");
      fetchHotels(); // Refresh the hotels list after deletion
    } catch (error) {
      console.error("Failed to delete hotel:", error.message);
      alert("Failed to delete hotel");
    }
  };

  useEffect(() => {
    fetchHotels(); // Fetch the companies on component mount
  }, []);

  return (
    <div>
      <Navbarmini name="Hotels" />
      <div className="overflow-auto h-[30rem] p-5 m-auto pt-[5rem] w-fit px-24 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md">
        {/* Add Hotel Form */}
        <form className="" onSubmit={handleSubmit}>
          <div className="flex gap-[14rem] justify-center">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                placeholder="Username"
                onChange={handleChange}
                className="w-full backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
              />
            </div>
          </div>
          <div className="flex gap-[14rem] justify-center mt-8">
            <div>
              <input
                type="email"
                name="email"
                value={formData.contactInfo.email}
                placeholder="Email"
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
              />
            </div>
            <div>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="TravelCompany">TravelCompany</option>
                <option value="Hotel">Hotel</option>
                <option value="Passenger">Passenger</option>
              </select>
            </div>
          </div>
          <div className="flex gap-[14rem] justify-center mt-8">
            <div>
              <input
                type="text"
                name="phone"
                value={formData.contactInfo.phone}
                placeholder="Phone"
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.contactInfo.address}
                onChange={handleChange}
                className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-[1rem] shadow-md shadow-black/30"
            >
              {isEditing ? "Update Hotel" : "Add Hotel"}
            </button>
          </div>
        </form>

        {/* Companies List */}
        <div className="flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4">
          <div className="tracking-tight text-[0.95rem] font-semibold">
            Hotel Name
          </div>
          <div className="tracking-tight text-[0.95rem] font-semibold">
            Email
          </div>
          <div className="tracking-tight text-[0.95rem] font-semibold">
            Phone
          </div>
          <div className="tracking-tight text-[0.95rem] font-semibold">
            Address
          </div>
          <div className="tracking-tight text-[0.95rem] font-semibold">
            Action
          </div>
        </div>
        <div>
          <div>
            {/* Companies List */}
            {Array.isArray(hotels) &&
              hotels.map((hotel, index) => (
                <div
                  key={index}
                  className="flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4"
                >
                  <div className="tracking-tight text-[0.95rem]">
                    {hotel.username}
                  </div>
                  <div className="tracking-tight text-[0.95rem]">
                    {hotel.contactInfo.email}
                  </div>
                  <div className="tracking-tight text-[0.95rem]">
                    {hotel.contactInfo.phone}
                  </div>
                  <div className="tracking-tight text-[0.95rem]">
                    {hotel.contactInfo.address}
                  </div>
                  <div
                    className="p-2 bg-red-600 text-xs rounded-lg cursor-pointer"
                    onClick={() => deleteCompany(hotel._id)}
                  >
                    Delete
                  </div>
                  <div
                    className="p-2 bg-yellow-600 text-xs rounded-lg cursor-pointer"
                    onClick={() => startEditing(hotel)}
                  >
                    Edit
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
