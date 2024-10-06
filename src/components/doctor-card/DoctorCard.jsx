import React from "react";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DoctorCard = ({item}) => {
    const navigate = useNavigate()
  return (
    <div
      className="border border-gray-400 rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 cursor-pointer"
      
      onClick={() => navigate(`/appointment/${item._id}`)}
    >
      <div className="h-[200px] text-center bg-gray-100">
        <img src={item.image} alt={item.name} className="h-full mx-auto" />
      </div>
      <div className="p-4">
        <p className="flex items-center text-green-800 text-sm font-semibold">
          <FaCircle className="w-2 mr-4" /> Available
        </p>
        <h4 className="text-xl font-bold">{item.name}</h4>
        <p className="text-sm text-gray-600 font-medium">{item.speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
