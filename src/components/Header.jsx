import React, {useState} from 'react'
import { IoMdAdd } from "react-icons/io";

const Header = ({onAddTodoClick}) => {
    const [isUser, setIsUser] = useState('');

  return (
    <div className='flex justify-between items-center bg-sky-600 px-10 py-2 fixed top-0 left-0 w-full z-10'>
        <h1 className='text-white text-2xl font-semibold pointer-events-none uppercase'>Daily Activities</h1>
        <input 
            type="text" 
            name="username" 
            id="username" 
            onChange={(e)=>setIsUser(e.target.value)}
            value={isUser}
            placeholder="Mr. Phonesai Yang"
            className='bg-white text-gray-900 text-center text-md block w-96 px-3 py-2 transition duration-200 ease-in-out rounded ring-1 focus:outline-none focus:ring-2 focus:ring-sky-700 border border-transparent focus:border-transparent'
        />

        <button 
            onClick={onAddTodoClick}
            className='bg-sky-500 hover:bg-sky-400 text-white text-md font-medium pl-5 pr-7 py-1.5 rounded-full flex items-center justify-center text-lg'
        >
            <span className="text-2xl mr-2 w-7 h-6 flex items-center justify-center">&#43;</span>New Todo 
        </button>
    </div>
  )
}

export default Header