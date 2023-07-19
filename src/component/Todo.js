import React, { useState } from 'react';
import Card from './Card';
import Footer from './Footer';

function Todo() {
   const [tab, setTab] = useState(0);
   const [todos, setTodos] = useState([]);
   const [checked, setChecked] = useState(false);
   const [data, setData] = useState('');

   const changeTab = (itemId) => {
       setTab(itemId);
   }

   const handleDeleteTodo = (id) => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
   }

   const handleCheckBox = (id) => {
      const updatedTodos = todos.map((todo) => {
         if (todo.id === id) {
            return {
               ...todo,
               active: !todo.active
            };
         }
         return todo;
      });
      setTodos(updatedTodos);
   }

   const handleUpLoad = (e) => {
       setData(e.target.value);
   }

   const handleAddTodo = () => {
      if (data === '') {
         alert('Input a task');
      } else {
         const newTodo = {
            id: Math.random() * 1000,
            text: data,
            active: true
         }
         setTodos([...todos, newTodo]);
         setData('');
      }
   }

   return (
      
      <div className='max-w-[70%] p-5 flex-column h-[100vh] mx-auto space-y-7'>
         <h3 className='text-center'>#Todo</h3>
         <div className='flex justify-evenly mb-80'>
            <button
               onClick={() => changeTab(0)}
               className={tab === 0 ? 'border-blue-600 border-b-2' : ''}
            >
               All
            </button>
            <button
               onClick={() => changeTab(1)}
               className={tab === 1 ? 'border-blue-600 border-b-2' : ''}
            >
               Active
            </button>
            <button
               onClick={() => changeTab(2)}
               className={tab === 2 ? 'border-blue-600 border-b-2' : ''}
            >
               Completed
            </button>
         </div>
         <hr />
         <div className='mx-auto max-w-[100%] flex align-center justify-between'>
            <input type="text" className='border border-3 w-[90%]' onChange={handleUpLoad} value={data} />
            <button className='bg-blue-600 hover:bg-blue-800 transition-all px-6 py-2 text-white rounded-md' onClick={handleAddTodo}>Add</button>
         </div>
         {/* tab */}
         <div>
            {tab === 0 && (
               <div>
                  {todos.map(item => (
                     <Card
                        key={item.id}
                        text={item.text}
                        onClick={() => handleDeleteTodo(item.id)}
                        onChange={() => handleCheckBox(item.id)}
                     />
                  ))}
               </div>
            )}
            {tab === 1 && (
               <div>
                  {todos
                     .filter(item => item.active)
                     .map(item => (
                        <Card
                           key={item.id}
                           text={item.text}
                           onClick={() => handleDeleteTodo(item.id)}
                           onChange={() => handleCheckBox(item.id)}
                        />
                     ))}
               </div>
            )}
            {tab === 2 && (
               <div>
                  {todos
                     .filter(item => !item.active)
                     .map(item => (
                        <Card
                           key={item.id}
                           text={item.text}
                           onClick={() => handleDeleteTodo(item.id)}
                           onChange={() => handleCheckBox(item.id)}
                           className={" line-through"}
                        />
                     ))}
               </div>
            )}
         </div>
         <Footer style={"text-center"}/>
      </div>
   );
}
export default Todo;
