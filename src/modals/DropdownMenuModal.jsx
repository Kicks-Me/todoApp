import React from "react";
import { CgOptions } from "react-icons/cg";

const DropdownMenuModal = ({ onSelect, onClose }) => {
  const handleItemClick = (color) => {
    onSelect(color);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white border rounded-md shadow-md overflow-hidden w-[23rem]">
      <div className="flex gap-2 items-center text-sky-600 text-nowrap bg-sky-200 p-4">
          <CgOptions className='text-lg'/>
          <h1 className='text-xl'>Label your activity</h1>
        </div>
        <ul className="flex flex-col gap-3 p-6 text-lg">
          <li className="p-2 text-center bg-gray-500 text-white rounded-full hover:cursor-pointer hover:opacity-90" onClick={() => handleItemClick("gray")}>Pending</li>
          <li className="p-2 text-center bg-blue-500 text-white rounded-full hover:cursor-pointer hover:opacity-90" onClick={() => handleItemClick("blue")}>In Progress</li>
          <li className="p-2 text-center bg-green-500 text-white rounded-full hover:cursor-pointer hover:opacity-90" onClick={() => handleItemClick("green")}>Done</li>
          <li className="p-2 text-center bg-yellow-500 text-white rounded-full hover:cursor-pointer hover:opacity-90" onClick={() => handleItemClick("orange")}>Issue Found</li>
          <li className="p-2 text-center bg-red-500 text-white rounded-full hover:cursor-pointer hover:opacity-90" onClick={() => handleItemClick("red")}>Closed</li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenuModal;
