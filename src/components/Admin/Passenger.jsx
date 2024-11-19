import React from 'react'
import Navbarmini from './navbarmini'

export default function Passenger() {

  const companies = [
    {
      name: 'Ali',
      email: 'Ali@gmail.com',
      phone: '0300-66666666',
      address: 'Faisalabad',
    },
    {
      name: 'Sani',
      email: 'Sani@gmail.com',
      phone: '0300-44444444',
      address: 'Lahore',
    },
    {
      name: 'Pikachu',
      email: 'Pikachu@gmail.com',
      phone: '0300-44444444',
      address: 'Multan',
    },
  ];


  return (
   <>
    
      <div>
        {/* ----------------------------------nav--------------------------------- */}
        <Navbarmini name="Passenger"/>
        {/* ----------------------------main container----------------------------- */}
        <div  style={{
    scrollbarWidth: 'none', /* Firefox */
    msOverflowStyle: 'none', /* IE 10+ */
  }} className="overflow-auto h-[32.5rem] flex-1  p-5 m-auto pt-[5rem]  w-fit px-24 backdrop-blur-sm bg-white/10 py-[6rem] shadow-lg shadow-black text-white rounded-md  focus:outline-none focus:ring-2 placeholder-white"> 
       
{/* -----------------------------------Fetched Companies-------------------------------------- */}
<div className='flex gap-[4.7rem] m-auto w-[52rem] justify-between p-6 shadow-md shadow-black/50 hover:shadow-black/80 text-white rounded-md mt-4 '>
    <div> Name</div>
    <div> Email</div>
    <div> Phone</div>
    <div>Address</div>
    <div className=''>Action</div>
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
   
   </>
  )
}
