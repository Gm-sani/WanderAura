/* eslint-disable no-unused-vars */
import React from "react";

import backpic from "./Pics/Signuppics/signUpback3.jpg";
import { Routes, Route } from "react-router-dom";

import PassengerProfile from "./Passenger/PassengerProfile";
import SidebarP from "./Passenger/SidebarP";
import TravelP from "./Passenger/TravelP";
import HotelP from "./Passenger/HotelP";
import DetailsP from "./Passenger/DetailsP";
// import Rootes_RoomP from './Passenger/Rootes_RoomP';
import RootesP from "./Passenger/RootesP";
import RoomP from "./Passenger/RoomP";

export default function DashBoardPassenger() {
  return (
    <>
      {/* ----------------------------img background------------------- */}

      <div className="">
        <img
          src={backpic}
          alt=""
          className=" h-screen w-screen absolute opacity-1 "
        />
      </div>
      {/* ---------------front------------------ */}
      <div className="flex h-screen opacity-1">
        {/* ----------------------------sidebar------------------------- */}
        <SidebarP
          type="Passenger"
          prp1="Travel"
          prp2="Hotel"
          // prp3="Details"
          prp4="Logout"
        />

        {/* -------------------------main Contanier---------------- */}
        <div className="flex-1 ">
          <Routes>
            <Route path="passenger" element={<PassengerProfile />} />

            <Route path="travelP/*" element={<TravelP />}>
              <Route
                path="rashid"
                element={
                  <RootesP
                    companyId="673d9f16d73cd4a03ae24175"
                    cmpnyName="Rashid"
                  />
                }
              />
              <Route
                path="rahman"
                element={
                  <RootesP
                    companyId="673b0aeb7f756e83f5776512"
                    cmpnyName="rahman"
                  />
                }
              />
              <Route
                path="mugal"
                element={
                  <RootesP
                    companyId="6731bed8cf0b2afcf0af3984"
                    cmpnyName="mugal"
                  />
                }
              />
              <Route
                path="RoadMaster"
                element={
                  <RootesP
                    cmpnyName="Road Master"
                    rt1="Lahore to Arifwala"
                    rt2="Atak to Faisalabad"
                    rt3="Quetta to Peshawar"
                  />
                }
              />
              <Route
                path="NiaziExpress"
                element={
                  <RootesP
                    cmpnyName="Niazi Express"
                    rt1="Lahore to Islamabad"
                    rt2="Lahore to Faisalabad"
                    rt3="Lahore to Peshawar"
                  />
                }
              />
              <Route
                path="QConnect"
                element={
                  <RootesP
                    cmpnyName="Q Connect"
                    rt1="Lahore to vehari"
                    rt2="Burewala to Faisalabad"
                    rt3="Gaggo to Peshawar"
                  />
                }
              />
              <Route
                path="Skyways"
                element={
                  <RootesP
                    cmpnyName="Skyways"
                    rt1="Lahore to Skardu"
                    rt2="Lahore to Okara"
                    rt3="Lahore to Karachi"
                  />
                }
              />
              <Route
                path="WaraichExpress"
                element={
                  <RootesP
                    cmpnyName="Waraich Express"
                    rt1="Lahore to Sakhar"
                    rt2="Lahore to Faisalabad"
                    rt3="Lahore to Peshawar"
                  />
                }
              />
            </Route>
            <Route path="hotelP/*" element={<HotelP />}>
              <Route
                path="hassan"
                element={
                  <RoomP
                    hotelId="6731bf13cf0b2afcf0af398a"
                    hotelName="Hassan Hotel"
                  />
                }
              />

              <Route
                path="raiz"
                element={
                  <RoomP
                    hotelId="673d9f58d73cd4a03ae2417b"
                    hotelName="Raiz Hotel"
                  />
                }
              />
              <Route
                path="Islamabad_Serena_Hotel"
                element={
                  <RoomP
                    cmpnyName="Islamabad Serena Hotel"
                    rt1="Room11"
                    rt2="Room112"
                    rt3="Room34"
                  />
                }
              />
              <Route
                path="Gilgit_Serena_Hotel"
                element={
                  <RoomP
                    cmpnyName="Gilgit Serena Hotel"
                    rt1="Room17"
                    rt2="Room147"
                    rt3="Room97"
                  />
                }
              />
              <Route
                path="Faisalabad_Serena_Hotel"
                element={
                  <RoomP
                    cmpnyName="Faisalabad Serena Hotel"
                    rt1="Room1167"
                    rt2="Room114"
                    rt3="Room193"
                  />
                }
              />
              <Route
                path="Serena_Khaplu_Palace"
                element={
                  <RoomP
                    cmpnyName="Serena Khaplu Palace"
                    rt1="Room52"
                    rt2="Room78"
                    rt3="Room190"
                  />
                }
              />
              <Route
                path="Swat_Serena_Hotel"
                element={
                  <RoomP
                    cmpnyName="Swat Serena Hotel"
                    rt1="Room83"
                    rt2="Room94"
                    rt3="Room96"
                  />
                }
              />
              <Route
                path="Quetta_Serena_Hotel"
                element={
                  <RoomP
                    cmpnyName="Quetta Serena Hotel"
                    rt1="Room56"
                    rt2="Room78"
                    rt3="Room73"
                  />
                }
              />
            </Route>
            <Route path="detailsP" element={<DetailsP />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
