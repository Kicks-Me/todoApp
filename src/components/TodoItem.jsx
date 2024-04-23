import React, { useState } from "react";
import AddNewActivityModal from "../modals/AddNewActivityModal";
import DropdownMenuModal from "../modals/DropdownMenuModal";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaListCheck, FaCircleChevronDown } from "react-icons/fa6";
import { MdRemoveCircle, MdLabel } from "react-icons/md";
import { GiRoundStar } from "react-icons/gi";

const TodoItem = ({
  id,
  title,
  activities,
  onDelete,
  onAddActivity,
  todoIndex,
}) => {
  const [showAddActivityModal, setShowAddActivityModal] = useState(false);
  const [newActivities, setNewActivities] = useState([]);
  const [clickedPosition, setClickedPosition] = useState({ x: 0, y: 0 });
  const [selectedActivityIndex, setSelectedActivityIndex] = useState(null);
  const [updateColorIndex, setUpdateColorIndex] = useState(null);
  const colors = [];

  const toggleAddActivityModal = () => {
    setShowAddActivityModal(!showAddActivityModal);
  };

  const handleDeleteActivity = (index) => {
    const updatedActivities = [...newActivities];
    updatedActivities.splice(index, 1);
    setNewActivities(updatedActivities);
  };

  const handleToggleDropdown = (event, index) => {
    const rect = event.target.getBoundingClientRect();
    setClickedPosition({ x: rect.left, y: rect.bottom });
    setSelectedActivityIndex(index === selectedActivityIndex ? null : index);
  };

  const handleDropdownItemClick = (color) => {
    if (selectedActivityIndex !== null) {
      newActivities[selectedActivityIndex].color = color;
      setUpdateColorIndex(selectedActivityIndex);
    }
  };

  const handleSaveActivity = (activityData) => {
    setNewActivities([...newActivities, activityData]);
    setShowAddActivityModal(false);
  };

  // ========Merge array ========
  const allActivities = [...activities, ...newActivities];

  return (
    <div className="bg-gray-100 w-80 rounded-md border border-sky-400">
      <div className="flex justify-between items-center px-3 py-2 bg-sky-200">
        <div className="flex gap-2 items-center text-sky-600 text-nowrap">
            <FaListCheck className="mt-[3px]"/>
            <h2 className="text-xl uppercase">{title}</h2>
        </div>
        <button className="text-xl text-sky-500 hover:text-red-500" onClick={onDelete}><RiDeleteBin2Fill/></button>
      </div>
       {/*========== display daily activities =======*/}
      <div className="overflow-auto p-3">
        {allActivities.map((activity, index) => (
          <div key={index} className="bg-white rounded-md mb-2 overflow-hidden w-full shadow-md">
            <div className="flex justify-between items-center mb-2 bg-gray-200 px-4 py-1">
              <div className="flex gap-2">
                <GiRoundStar className="text-md p-0 m-0"
                    style={{
                        color: activity.importance
                    }}/>
                <MdLabel className="text-lg p-0 m-0"
                    style={{
                        color: activity?.color ? activity?.color : 'gray',
                    }}/>
              </div>

              <div className="flex justify-between items-center gap-3 text-gray-400 text-lg">
                <button 
                    className="text-base hover:cursor-pointer hover:text-red-600"
                    onClick={() => handleDeleteActivity(index)}
                >
                  <MdRemoveCircle/>
                </button>
                <button 
                    className="text-sm hover:cursor-pointer hover:text-sky-600"
                    onClick={(event) => handleToggleDropdown(event, index)}
                >
                    <FaCircleChevronDown />
                </button>
              </div>
            </div>
            <div className="mb-2 px-2">
              <p className="pb-2 text-wrap break-words indent-4">{activity.activity}</p>
              <p className="pt-3 border-t text-wrap break-words"><span className="text-red-600 mr-2">From:</span>{activity.requestname ?? 'Sai'}</p>
            </div>
          </div>
        ))}
        {/*========== Add New Activity button =======*/}
        <button
          onClick={toggleAddActivityModal}
          className="bg-sky-100 text-sky-600 border border-sky-200 px-4 py-2 rounded-md mt-2 w-full"
        >
          Add New Activity
        </button>
      </div>
      {showAddActivityModal && (
        <AddNewActivityModal
          onClose={toggleAddActivityModal}
          onSave={handleSaveActivity}
        />
      )}
      {selectedActivityIndex !== null && (
        <DropdownMenuModal
          position={clickedPosition}
          onSelect={handleDropdownItemClick}
          onClose={() => setSelectedActivityIndex(null)}
        />
      )}
    </div>
  );
};

export default TodoItem;
