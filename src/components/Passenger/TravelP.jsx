/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavbarminiP from "./NavbarminiP";
import { getAllTravelCompanies } from "../../backend-services/bookingServices";

const TravelP = () => {
  const [companies, setCompanies] = useState([]); // State for storing companies
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await getAllTravelCompanies();
        console.log("API Response:", response);

        // Set data to state after validating response structure
        if (Array.isArray(response.data)) {
          setCompanies(response.data);
        } else {
          setCompanies([response.data]);
        }
      } catch (error) {
        console.error("Failed to fetch companies:", error.message);
        alert("Unable to load data. Please try again later.");
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      <NavbarminiP name="Travel" />

      {/* Main Body */}
      <div className="p-5 m-auto overflow-auto h-[30rem] pt-[5rem] w-fit px-20 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md no-scrollbar">
        {/* Buttons */}
        <div className="lg:flex min-[315px]:flex-row gap-8 justify-center">
          {companies.length > 0 ? (
            companies.map((company) => (
              <div
                key={company._id}
                role="button"
                aria-label={`Navigate to ${company.username || company.name}`}
                onClick={() =>
                  company.username
                    ? navigate(company.username.replace(/\s+/g, ""))
                    : console.error("Invalid company username")
                }
                className="text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black"
              >
                <p className="text-sm">{company.username || company.name}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-white">
              No companies found. Please check back later!
            </p>
          )}
        </div>

        {/* Nested Routes Rendered Here */}
        <Outlet />
      </div>
    </div>
  );
};

export default TravelP;

// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import NavbarminiP from "./NavbarminiP";
// import { getUserProfile } from "../../backend-services/authServices";
// // Adjust the path to your actual API utility

// const TravelP = () => {
//   const [companies, setCompanies] = useState([]); // State for storing companies
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const response = await getUserProfile(); // Fetch from API
//         console.log("API Response:", response);

//         // Check if response.data is an array or a single object
//         if (Array.isArray(response.data)) {
//           setCompanies(response.data); // Set directly if it's an array
//         } else {
//           // Wrap the single object in an array for consistent handling
//           setCompanies([response.data]);
//         }
//       } catch (error) {
//         console.error("Failed to fetch companies:", error.message);
//       }
//     };

//     fetchCompanies();
//   }, []);

//   return (
//     <div>
//       <div>
//         {/* ----------------------------------nav--------------------------------- */}
//         <NavbarminiP name="Travel" />

//         {/* Main Body */}
//         <div
//           style={{
//             scrollbarWidth: "none", // Firefox
//             msOverflowStyle: "none", // IE 10+
//           }}
//           className="p-5 m-auto overflow-auto h-[30rem] pt-[5rem] w-fit px-20 backdrop-blur-sm bg-white/10 py-24 shadow-lg shadow-black text-white rounded-md"
//         >
//           {/* Buttons */}
//           <div className="lg:flex min-[315px]:flex-row gap-8 justify-center">
//             {companies.length > 0 ? (
//               companies.map((company) => (
//                 <div
//                   key={company._id} // Use `_id` as a unique key
//                   onClick={() => navigate(company.username.replace(/\s+/g, ""))} // Navigate to company-specific route
//                   className="text-center p-2 bg-transparent rounded-2xl cursor-pointer shadow-sm shadow-black/50 hover:shadow-black"
//                 >
//                   <p className="text-sm">{company.username || company.name}</p>
//                 </div>
//               ))
//             ) : (
//               <p className="text-center text-white">No companies available.</p> // Show this if no companies are returned
//             )}
//           </div>

//           {/* Nested Routes Rendered Here */}
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TravelP;
