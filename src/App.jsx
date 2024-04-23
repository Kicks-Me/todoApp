import { useState } from 'react'
import Header from './components/Header'
import TodoItem from './components/TodoItem';
import AddNewTodoItemModal from './modals/AddNewTodoItemModal';
import AddNewActivityModal from './modals/AddNewActivityModal';

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const [showAddTodoModal, setShowAddTodoModal] = useState(false);
  const [showAddActivityModal, setShowAddActivityModal] = useState(false);

  const handleAddTodo = () => {
    setShowAddTodoModal(true);
  };

  const handleSaveTodo = (title) => {
    const newTodoItem = { title, activities: [] };
    setTodoItems([...todoItems, newTodoItem]);
  };

  const handleCloseAddTodoModal = () => {
    setShowAddTodoModal(false);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodoItems = [...todoItems];
    updatedTodoItems.splice(index, 1);
    setTodoItems(updatedTodoItems);
  };

  const handleAddActivity = (index) => {
    setShowAddActivityModal(true);
  };

  const handleSaveActivity = ({ activity, importance }) => {
    setShowAddActivityModal(false);
  };

  const handleCloseAddActivityModal = () => {
    setShowAddActivityModal(false);
  };

  console.log(`todoItems:`,todoItems)
  return (
    <div className='min-h-screen'>
      <Header onAddTodoClick={handleAddTodo}/>
      <div className=' bg-sky-600 pt-[3.6rem]'>
        <div className='bg-white flex flex-row flex-wrap gap-10 rounded-md p-8'>
           {/*========== Display todoItems.... =======*/}
          {todoItems.map((todo, index) => (
            <TodoItem
              key={index}
              todoIndex={index}
              title={todo.title}
              activities={todo.activities}
              onDelete={() => handleDeleteTodo(index)}
              onAddActivity={() => handleAddActivity(index)}
            />
          ))}
        </div>

        {showAddTodoModal && <AddNewTodoItemModal onClose={handleCloseAddTodoModal} onSave={handleSaveTodo} />}
        {showAddActivityModal && <AddNewActivityModal onClose={handleCloseAddActivityModal} onSave={handleSaveActivity} />}
      
      </div>
    </div>
  )
}

export default App
