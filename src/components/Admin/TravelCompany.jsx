import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Navbarmini from './navbarmini';

export default function TravelCompany() {

  const companies = [
    {
      name: 'Faial Movers',
      email: 'faialMovers@gmail.com',
      phone: '0300-66666666',
      address: 'Faisalabad',
    },
    {
      name: 'Sky ways',
      email: 'skyways@gmail.com',
      phone: '0300-44444444',
      address: 'Lahore',
    },
    {
      name: 'Gujjar Tyara',
      email: 'gujjartyara@gmail.com',
      phone: '0300-44444444',
      address: 'Multan',
    },
  ];






    const formRef = useRef();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: '',
    contactInfo: {
      email: '',
      phone: '',
      address: '',
    },
  });




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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register', formData);
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert('Failed to sign up');
    }
  };



  
  return (
    <div>
      <div>
        {/* ----------------------------------nav--------------------------------- */}
        <Navbarmini name="Travel Company"/>
        {/* ------------------------main container---------------------------------- */}
        <div  style={{
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none', /* IE 10+ */
  }} className="overflow-auto h-[30rem]   p-5 m-auto pt-[5rem] w-fit px-24 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md  focus:outline-none focus:ring-2 placeholder-white"> 
        <form
  className=""
  onSubmit={handleSubmit}
>
  <div className="flex gap-[14rem] justify-center ">
    <div>
      <input
        type="text"
        name="username"
       
        placeholder="Username"
        onChange={handleChange}
        className="w-full  backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
      />
    </div>

    <div>
      <input
        type="password"
        name="password"
        
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
        placeholder="Email"
       
        onChange={handleChange}
        className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
      />
    </div>

    <div>
      <input
        type="text"
        name="role"
        placeholder="Role"
       
        onChange={handleChange}
        className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
      />
    </div>
  </div>

  <div className="flex gap-[14rem] justify-center mt-8">
    <div>
      <input
        type="text"
        name="phone"
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
      Add Travel Company
    </button>
  </div>
</form>
{/* -----------------------------------Fetched Companies-------------------------------------- */}
<div className='flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4 '>
    <div className='tracking-tight text-[0.95rem] font-semibold'>Company Name</div>
    <div className='tracking-tight text-[0.95rem] font-semibold'> Email</div>
    <div className='tracking-tight text-[0.95rem] font-semibold'> Phone</div>
    <div className='tracking-tight text-[0.95rem] font-semibold'>Address</div>
    <div className='tracking-tight text-[0.95rem] font-semibold'>Action</div>
</div>
{/* Table Rows */}
{companies.map((company, index) => (
        <div
          key={index}
          className="flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4"
        >
          <div className="tracking-tight text-[0.95rem]">{company.name}</div>
          <div className="tracking-tight text-[0.95rem]">{company.email}</div>
          <div className="tracking-tight text-[0.95rem]">{company.phone}</div>
          <div className="tracking-tight text-[0.95rem]">{company.address}</div>
          <div className="p-2 bg-red-600 text-xs rounded-lg cursor-pointer">Delete</div>
        </div>
      ))}
        </div>
      


    </div>
    </div>
  )
}
