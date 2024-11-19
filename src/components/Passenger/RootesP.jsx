import React, { useState } from 'react';
import ModalP from './ModalRootes';
import ModalRootes from './ModalRootes';

export default function RootesP(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedRoute, setSelectedRoute] = useState('');

    const openModal = (route) => {
        setSelectedRoute(route);
        setModalOpen(true);
      };

      const closeModal = () => {
        setModalOpen(false);
        setSelectedRoute('');
      };

      const handleSubmit = (data) => {
        console.log('Form Data:', data, 'Route:', selectedRoute);
        closeModal();
        // Add API call or state update logic here
      };

    return (
        <div>
        <div className="p-5 bg-transparent mt-16 m-auto  w-fit px-6  text-white rounded-md ">
        <p className='text-center text-[1.4rem] font-semibold'>Rootes Available from {props.cmpnyName}</p>
        <ul className='flex gap-6 text-sm mt-8'>
            <li 
             onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
            <li
            onClick={() => openModal(props.rt3)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt3}</li>
            <li
            onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li 
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
        </ul>
        <ul className='flex gap-6 text-sm mt-8'>
            <li
            onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
            <li
            onClick={() => openModal(props.rt3)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt3}</li>
            <li
            onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
        </ul>
        <ul className='flex gap-6 text-sm mt-8'>
            <li 
            onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
            <li
            onClick={() => openModal(props.rt3)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt3}</li>
            <li
            onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
        </ul>
        <ul className='flex gap-6 text-sm mt-8'>
            <li 
            onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
            <li
            onClick={() => openModal(props.rt3)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt3}</li>
            <li
            onClick={() => openModal(props.rt1)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black' >{props.rt1}</li>
            <li
            onClick={() => openModal(props.rt2)}
            className='text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black'>{props.rt2}</li>
        </ul>
        </div>

        <ModalRootes
    isOpen={modalOpen}
    onClose={closeModal}
    onSubmit={handleSubmit}
  />
      </div>
      )
    }

