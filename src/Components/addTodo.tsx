import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoSlice/todoSlice';
import { useRef } from 'react';


function AddTodo() {
    const dispatch = useDispatch();
    const addTodoRef = useRef<HTMLInputElement | null>(null);
    const addTimeStamp=()=>{
        const createdAt=new Date();
        const d = createdAt.getDate();
        const m = createdAt.getMonth();
        const y = createdAt.getFullYear();
        const date = `${d}-${m}-${y}`;
        const hours = createdAt.getHours();
        const min = createdAt.getMinutes();
        const sec = createdAt.getSeconds();
        const time = `${hours}:${min}:${sec}`;
        return {date, time}
    }

    const handleAdd=()=>{
      if(addTodoRef.current!.value){
        const todoTitle = addTodoRef.current!.value;
        const addedAt = addTimeStamp()
        const status:boolean = false;
        dispatch(addTodo({todoTitle, addedAt ,status}))
        addTodoRef.current!.value = ''
      }
    }
  return (
    <div className='py-4 px-3 backdrop-blur-md bg-white/30 rounded-lg'>
      <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor='add' className='bg-white flex justify-between px-2 py-1 rounded-md'>
        <input id='add' type="text" className='outline-none' placeholder='Add New Todo...' ref={addTodoRef}/>
        <button onClick={handleAdd} className='bg-slate-500 text-white px-2 py-1 text-md- rounded-md'>+</button>
        </label>
      </form>
    </div>
  )
}

export default AddTodo
