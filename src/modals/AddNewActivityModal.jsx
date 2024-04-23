import React, { useState } from 'react';
import { MdNoteAdd } from "react-icons/md";

const AddNewActivityModal = ({ onClose, onSave }) => {
  const [activity, setActivity] = useState('');
  const [requestname, setRequestName] = useState('');
  const [importance, setImportance] = useState('');
  const importanceOptions = [
    { red: 'Very important' },
    { orange: 'Important' },
    { green: 'Normal' },
    { gray: 'Rare' },
    { white: 'Info' }
  ];

  const handleSave = () => {
    if(!activity) return alert('Please, enter some description')
    
    onSave({ activity, importance,requestname });
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white w-2/5 rounded-md overflow-hidden">
        <div className="flex gap-2 items-center text-sky-600 text-nowrap bg-sky-200 p-4">
          <MdNoteAdd className='text-lg'/>
          <h1 className='text-xl'>Add new activity</h1>
        </div>
        <div className='p-10'>
          <div className='flex flex-col gap-2 mb-2'>
            <label className='ml-2'>Enter your description</label>
            <textarea
              placeholder="Enter activity detail"
              value={activity}
              maxLength={150}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
          </div>
          <div className='flex flex-col gap-2 mb-2'>
            <label className='ml-2'>Enter request owner</label>
            <input
              type='text'
              placeholder="Request name"
              value={requestname}
              maxLength={15}
              onChange={(e) => setRequestName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 mb-4"
            />
          </div>
          <div className="flex flex-col gap-2 justify-start mb-6">
            <label className='ml-2'>Select a role</label>
            <select
              value={importance}
              onChange={(e) => setImportance(e.target.value)}
              className="ml-2 border border-gray-300 rounded-md p-2 w-1/2"
            >
              <option disabled value="">Select</option>
              {importanceOptions.map((option, index) => (
                <option key={index} value={Object.keys(option)[0]}>
                  {Object.values(option)[0]}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end gap-5 pt-2 pr-4">
            <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-md mr-2">Save</button>
            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-md">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewActivityModal;
