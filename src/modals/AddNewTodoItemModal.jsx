import React, { useState } from 'react';
import { VscNewFile } from "react-icons/vsc";

const AddNewTodoItemModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState('');

  const handleSave = () => {
    if(!title) return alert('Please, provide the title');

    onSave(title);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full  flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg overflow-hidden w-96 shadow-lg">
        <div className="flex gap-2 items-center text-sky-600 text-nowrap bg-sky-200 p-3">
          <VscNewFile className='text-lg'/>
          <h1 className='text-xl'>Add new todo</h1>
        </div>
        <div className='px-4 py-10 bg-gray-100'>
          <input
            type="text"
            placeholder="Enter todo title"
            value={title}
            maxLength={15}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 text-lg "
          />
        </div>
        <div className="flex justify-center items-center bg-gray-200 p-4 gap-5">
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md mr-2">Save</button>
          <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddNewTodoItemModal;
