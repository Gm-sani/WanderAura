import React, { useEffect, useRef, useState } from 'react'
import NavbarminiT from './NavbarminiT'

export default function RootesT() {
  const companies = [
    {
      name: 'Lahore to Islambad',
      price: '3000',
      phone: '7pm 11-nov',
      address: 'Faisalabad',
    },
    {
      name: 'vehari to multan',
      price: '4000',
      phone: '7pm 14-nov',
      address: 'Lahore',
    },
    {
      name: 'okara to Islambad',
      price: '5000',
      phone: '7pm 16-nov',
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
      <NavbarminiT name="Add Rootes"/>
      {/* ------------------------main container---------------------------------- */}
      <div  style={{
  scrollbarWidth: 'none', /* Firefox */
  msOverflowStyle: 'none', /* IE 10+ */
}} className="overflow-auto h-[30rem]   p-5 m-auto pt-[5rem] w-fit px-24 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md  focus:outline-none focus:ring-2 placeholder-white"> 
      <form
className=""
onSubmit={handleSubmit}
>
  <p className='text-xl text-white font-serif my-5'>Depature</p>
<div className="flex gap-[8rem] justify-center ">
  <div>
    <input
      type="text"
      name="Location"
     
      placeholder="Location"
      onChange={handleChange}
      className="w-full  backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>

  <div>
    <input
      type="text"
      name="Date"
      
      placeholder="Date"
      onChange={handleChange}
      className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>
  <div>
    <input
      type="text"
      name="Time"
      
      placeholder="Time"
      onChange={handleChange}
      className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>
</div>
<p className='text-xl text-white font-serif my-5'>Arrival</p>
<div className="flex gap-[8rem] justify-center ">
  <div>
    <input
      type="text"
      name="Location"
     
      placeholder="Location"
      onChange={handleChange}
      className="w-full  backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>

  <div>
    <input
      type="text"
      name="Date"
      
      placeholder="Date"
      onChange={handleChange}
      className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>
  <div>
    <input
      type="text"
      name="Time"
      
      placeholder="Time"
      onChange={handleChange}
      className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>
</div>
<p className='text-xl text-white font-serif my-5'>Price</p>
<div className="flex gap-[14rem] mt-8">
  <div>
    <input
      type="text"
      name="Price"
      placeholder="Price"
     
      onChange={handleChange}
      className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>
</div>
{/* ---------------------------seats----------------------- */}
<p className='text-xl text-white font-serif my-5'>Seats</p>
<div className="flex gap-[8rem]  ">
  <div>
    <input
      type="text"
      name="Seat Number"
     
      placeholder="Seat Number"
      onChange={handleChange}
      className="w-full  backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
    />
  </div>

  <div>
    <input
      type="text"
      name="Availablity"
      
      placeholder="Availablity"
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
    Add Rootes
  </button>
</div>
</form>
{/* -----------------------------------Fetched Companies-------------------------------------- */}
<div className='flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4 '>
  <div className='tracking-tight text-[0.95rem] font-semibold'>Route Name</div>
  <div className='tracking-tight text-[0.95rem] font-semibold'> Price</div>
  <div className='tracking-tight text-[0.95rem] font-semibold'> Depature Time</div>
  {/* <div className='tracking-tight text-[0.95rem] font-semibold'>Address</div> */}
  <div className='tracking-tight text-[0.95rem] font-semibold'>Action</div>
</div>
{/* Table Rows */}
{companies.map((company, index) => (
      <div
        key={index}
        className="flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4"
      >
        <div className="tracking-tight text-[0.95rem]">{company.name}</div>
        <div className="tracking-tight text-[0.95rem]">{company.price}</div>
        <div className="tracking-tight text-[0.95rem]">{company.phone}</div>
        {/* <div className="tracking-tight text-[0.95rem]">{company.address}</div> */}
        <div className='flex gap-3'>
        <div className="px-2 py-1 bg-red-600 text-[0.65rem] rounded-lg cursor-pointer">Delete</div>
        <div className="px-2 py-1 bg-green-600 text-[0.65rem] rounded-lg cursor-pointer">Update</div>
        </div>
        
      </div>
    ))}
      </div>
    


  </div>
  </div>
  )
}

