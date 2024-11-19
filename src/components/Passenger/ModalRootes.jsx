import React  from 'react'

export default function ModalRootes({ isOpen, onClose, onSubmit }) {
   


  if (!isOpen) return null;
  return (
    <div
    style={{
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* IE 10+ */
      }}
    className="fixed inset-0 opacity-1 bg-black/60 backdrop-blur-2xl flex justify-center items-center z-50 overflow-auto">
      <div className="pt-[8rem]  rounded-lg shadow-xl shadow-white/60 p-6 w-[30rem] backdrop-blur-3xl bg-white/10 ">
        <h2 className="text-lg font-semibold mb-4 text-white/80 text-center">Roote Details</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            onSubmit(data);
          }}
        >
          <div className="mb-4">
           
            <input
              type="text"
              name="departureLocation"
              required
              placeholder='DepartureLocation'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="date"
              name="departureDate"
              required
              placeholder='Departure Date'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="time"
              name="departureTime"
              required
             placeholder='Departure Time'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="mb-4">
          
            <input
              type="text"
              name="arrivalLocation"
              required
             placeholder='Arrival Location'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="mb-4">
           
            <input
              type="date"
              name="arrivalDate"
              required
              placeholder='Arrival Date'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="mb-4">
           
            <input
              type="time"
              name="arrivalTime"
              required
             placeholder='Arrival Time'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="mb-4">
           
            <input
              type="number"
              name="price"
              required
             placeholder='Price'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="mb-4">
        
            <input
              type="number"
              name="seats"
              required
             placeholder='Seats'
              className="w-full mt-1 backdrop-blur-none bg-transparent px-4 py-1 shadow-sm shadow-white/70 text-white/80 rounded-md focus:outline-none focus:ring-2 placeholder-white/70"
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white/20 shadow-sm border border-white/10 shadow-white/50 px-2 py-1 rounded hover:bg-gray-300 hover:text-black/80"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-white/20 shadow-sm border border-white/10 shadow-white/50  text-white px-2 py-1 rounded  hover:bg-gray-300 hover:text-black/80"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


