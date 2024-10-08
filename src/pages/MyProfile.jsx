import React, { useState } from "react";
import { assets } from "../../public/assets";

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    image: assets.profileImg2,
    email: "dsfsdfsdf@gamil.com",
    phone: "56565656565",
    address: {
      line1: "dsfkjdsklfjskdlfj",
      line2: "sfjdskfjsdlfjdsflk",
    },
    dob: "22-2-2020",
    gender: "male",
  });
  return (
    <>
      <div className="w-[400px] shadow-lg rounded-lg p-4 mx-auto border my-20">
        <div className="flex gap-3">
          <img
            src={assets.profileImg2}
            alt=""
            className="w-[60px] h-[60px] object-cover rounded-full"
          />
          <span className="text-3xl font-bold">Edward Vincent</span>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p className="underline text-sm font-medium">Contact Information</p>
          <div className="flex mt-2 items-center gap-4 mb-4">
            <p className="w-[150px] whitespace-nowrap">Email Id : </p>
            {isEdit ? (
              <input
                type="text"
                className="border border-gray-500 rounded w-full p-2"
                value={userData.email}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            ) : (
              <p>{userData.email}</p>
            )}
          </div>
          <div className="flex mt-2 items-center gap-4 mb-4">
            <p className="w-[150px] whitespace-nowrap">Phone Number : </p>
            {isEdit ? (
              <input
                type="text"
                className="border border-gray-500 rounded w-full p-2"
                value={userData.phone}
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>
          <div className="flex mt-2 items-center gap-4 mb-4">
            <p className="w-[150px] whitespace-nowrap">Address line 1 : </p>

            {isEdit ? (
              <input
                type="text"
                className="border border-gray-500 rounded w-full p-2"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
            ) : (
              <p>{userData.address.line1}</p>
            )}
          </div>
          <div className="flex mt-2 items-center gap-4 mb-4">
            <p className="w-[150px] whitespace-nowrap">Address line 2 :</p>
            {isEdit ? (
              <input
                type="text"
                className="border border-gray-500 rounded w-full p-2"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            ) : (
              <p>{userData.address.line2}</p>
            )}
          </div>
        </div>
        <div className="mt-4 text-sm text-gray-500">
          <p className="underline text-sm font-medium">Basic Information</p>
          <div className="flex mt-2 items-center gap-4 mb-4">
            <p className="w-[150px] whitespace-nowrap">Gender : </p>
            {isEdit ? (
              <select className="border border-gray-500 rounded p-2 w-full" onChange={(e)=>setUserData(prev=>({...prev, gender:e.target.value}))}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>
          <div className="flex mt-2 items-center gap-4 mb-4">
            <p className="w-[150px] whitespace-nowrap">Date of Birth : </p>
            {isEdit ? (
              <input
                type="date"
                className="border border-gray-500 rounded w-full p-2"
                value={userData.dob} onChange={(e)=>setUserData((prev)=>({...prev, dob:e.target.value}))}
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
        <div>
          {
            isEdit ? 
            <button onClick={()=>setIsEdit(false)} className="px-10 py-3 border border-primary rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-white hover:border-primary">Save</button>
            : 
            <button onClick={()=>setIsEdit(true)} className="px-10 py-3 border border-primary rounded-full text-sm font-medium text-primary hover:bg-primary hover:text-white hover:border-primary">Edit</button>
          }
          
          
        </div>
      </div>
    </>
  );
};

export default MyProfile;
