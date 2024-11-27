/* eslint-disable no-unused-vars */
// Updated AdminProfile component
import React, { useEffect, useState } from "react";
import Navbarmini from "./Navbarmini";
import {
  getUserProfile,
  updateUserProfile,
} from "../../backend-services/authServices";

export default function AdminProfile() {
  const [profileData, setProfileData] = useState({
    username: "",
    password: "",
    role: "",
    contactInfo: {
      email: "",
      phone: "",
      address: "",
    },
  });

  const [loading, setLoading] = useState(false); // To handle loading state
  const [message, setMessage] = useState(null); // To display success/error messages

  // Fetch profile data on component mount
  useEffect(() => {
    async function fetchProfileData() {
      try {
        const response = await getUserProfile();
        setProfileData(response.data); // Assuming response.data contains the profile information
      } catch (error) {
        console.error("Error fetching profile data:", error);
        setMessage("Failed to load profile data. Please try again.");
      }
    }
    fetchProfileData();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the field is inside the contactInfo object
    if (["email", "phone", "address"].includes(name)) {
      setProfileData((prevData) => ({
        ...prevData,
        contactInfo: {
          ...prevData.contactInfo,
          [name]: value,
        },
      }));
    } else {
      setProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const updatedProfile = await updateUserProfile(profileData); // Call the update function
      setProfileData(updatedProfile.data); // Update the state with the new data
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbarmini name="Admin Profile" />
      <form
        className="p-5 m-auto pt-[5rem] w-fit px-32 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
        onSubmit={handleSubmit}
      >
        <div className="flex gap-[14rem] justify-center mt-12">
          <div>
            <input
              type="text"
              name="username"
              value={profileData.username}
              placeholder="Username"
              onChange={handleChange}
              className="w-full backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              value={profileData.password}
              placeholder="Password"
              onChange={handleChange}
              className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
            />
          </div>
        </div>

        <div className="flex gap-[14rem] justify-center mt-12">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profileData.contactInfo.email}
              onChange={handleChange}
              className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={profileData.role}
              onChange={handleChange}
              className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
            />
          </div>
        </div>

        <div className="flex gap-[14rem] justify-center mt-12">
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={profileData.contactInfo.phone}
              onChange={handleChange}
              className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
            />
          </div>

          <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={profileData.contactInfo.address}
              onChange={handleChange}
              className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
            />
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded mt-[1rem]"
            disabled={loading}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
        {message && (
          <div className="text-center mt-4 text-sm text-yellow-400">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
