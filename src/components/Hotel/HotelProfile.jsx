import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NavbarminiH from './NavbarminiH';

export default function HotelProfile() {
    const [profileData, setProfileData] = useState({
        username: '',
        password: '',
        email: '',
        role: '',
        phone: '',
        address: '',
      });
    
    
      // Fetch profile data on component mount
    useEffect(() => {
    async function fetchProfileData() {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/users/profile');
        setProfileData(response.data); // Assuming response.data contains the profile information
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    }
    fetchProfileData();
    }, []);
    
    
    // Handle input changes
    const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    };
    
    // Form submission
    const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., POST/PUT request to update profile)
    console.log('Updated Profile Data:', profileData);
    };
    
    
    
      return (
        <div>
            {/* ----------------------------------nav--------------------------------- */}
            <NavbarminiH name="Hotel Profile"/>
          <form
      className="p-5 m-auto pt-[5rem] w-fit px-32 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md  focus:outline-none focus:ring-2 placeholder-white"
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
            className="w-full  backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
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
            value={profileData.email}
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
            value={profileData.phone}
            onChange={handleChange}
            className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
          />
        </div>
    
        <div>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={profileData.address}
            onChange={handleChange}
            className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
          />
        </div>
      </div>
    
      <div className="flex justify-center mt-5">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-[1rem]"
        >
          Update Profile
        </button>
      </div>
    </form>
        </div>
      )
    }
