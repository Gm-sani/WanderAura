import React , { useEffect } from 'react'
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';

export default function SidebarH(props) {
    useEffect(() => {
        const t1 = gsap.timeline();
        t1.to("#prp1", { duration: 0 , y: -50, opacity: 0 })
        

        const t2 = gsap.timeline();
        t2.to("#prp1", { duration: 0.5 , y: 10, opacity: 1 })
        
      }, []);

      const navigate =useNavigate();
  return (
    <div>
    <div className="flex-1 bg-transparent m-3 rounded-lg py-3 px-6  ">
      
      <p className="text-2xl font-semibold font-sans text-white">Quick As</p>
      {/* -----------------changing by props------------------------- */}
      <div className="text-white text-lg my-8 text-center">
        <p onClick={()=>{navigate("Hotel")}} className="p-2 hover:cursor-pointer rounded-2xl my-3 backdrop-blur-sm bg-white/10  hover:shadow-md hover:shadow-black/40 active:shadow-md active:shadow-black/40">{props.type} Profile</p>
        <div onClick={()=>{navigate("RoomH")}} id='prp1' className="p-2 px-10 backdrop-blur-sm bg-white/20  rounded-2xl my-3 cursor-pointer text-white hover:shadow-md hover:shadow-black/40">
          <p>{props.prp1}</p>
        </div>
        
      </div>
    
    </div>
  </div>
  )
}