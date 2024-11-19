import React, { useEffect, useRef, useState } from 'react'
import NavbarminiH from './NavbarminiH';

export default function RoomH(props) {
    const companies = [
        {
          Type: 'Single',
          Price: '3000',
          From : '21/nov',
          To : '31/nov',
        },
        {
          Type: 'Double',
          Price: '4000',
          From : '1/dec ',
          To :  ' 11/dec',
        },
        {
          Type: 'Family',
          Price: '6000',
          From : '12/dec ',
          To :  ' 21/dec',
        },
      ];
    
    
    
    
    
    
        const formRef = useRef();
      const [formData, setFormData] = useState({
        Type: '',
        Price: '',
        From: '',
        To : '',
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
          <NavbarminiH name="Add Room"/>
          {/* ------------------------main container---------------------------------- */}
          <div  style={{
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none', /* IE 10+ */
    }} className="overflow-auto h-[30rem]   p-5 m-auto pt-[5rem] w-fit px-24 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md  focus:outline-none focus:ring-2 placeholder-white"> 
          <form
    className=""
    onSubmit={handleSubmit}
    >
      {/* ---------------------------Type----------------------- */}
    <div className="flex gap-[8rem] justify-center ">
      <div>
        <input
          type="text"
          name="Type"
          placeholder="Type"
          onChange={handleChange}
          className="w-full  backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
        />
      </div>
    
    </div>
    {/* ------------------------Price Per NIght----------------------------------- */}
    <div className="flex gap-[8rem] justify-center mt-6">
      <div>
        <input
          type="text"
          name="Price"
         
          placeholder="Price Per Night"
          onChange={handleChange}
          className="w-full  backdrop-blur-none bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
        />
      </div>
  {/* -------------------------Availablity--------------------------- */}
    </div>
    <p className='text-xl text-white font-serif my-5'>Availablity</p>
    <div className="flex gap-[14rem] justify-center mt-8">
      <div>
        <input
          type="text"
          name="From"
          placeholder="From"
         
          onChange={handleChange}
          className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
        />
      </div>
      <div>
        <input
          type="text"
          name="To"
          placeholder="To"
         
          onChange={handleChange}
          className="w-full bg-transparent px-4 py-2 shadow-sm shadow-black text-white rounded-md focus:outline-none focus:ring-2 placeholder-white"
        />
      </div>
    </div>
    {/* ---------------------------Add Room----------------------- */}
   
    
    
    <div className="flex justify-center mt-5">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded mt-[1rem] shadow-md shadow-black/30"
      >
        Add Room
      </button>
    </div>
    </form>
    {/* -----------------------------------Fetched Companies-------------------------------------- */}
    <div className='flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4 '>
      <div className='tracking-tight text-[0.95rem] font-semibold'>Room Type</div>
      <div className='tracking-tight text-[0.95rem] font-semibold'> Price</div>
      <div className='tracking-tight text-[0.95rem] font-semibold'> Availablity</div>
      <div className='tracking-tight text-[0.95rem] font-semibold'>Action</div>
    </div>
    {/* Table Rows */}
    {companies.map((company, index) => (
          <div
            key={index}
            className="flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4"
          >
            <div className="tracking-tight text-[0.95rem]">{company.Type}</div>
            <div className="tracking-tight text-[0.95rem]">{company.Price}</div>
            <div className="tracking-tight text-[0.95rem]">{`${company.From} to ${company.To}`}</div>
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
    
    