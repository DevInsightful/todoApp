import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../features/store'
import Todo from './todo';

function DisplayTodo() {
    const store = useSelector((state:RootState)=>state.todo)
    console.log(store);
    
    
  return (
    <div className='overflow-hidden rounded-2xl'>
        <table className='w-full bg-white text-sm'>
            <thead className='bg-[#3d39aa] text-white py-7'>
                <tr className=''><th>#</th><th>Title</th><th>Date/Time</th><th>Status</th><th>Actions</th></tr>
            </thead>
            <tbody className='text-center'>
              <Todo/>
            </tbody>
        </table>
    </div>

  )
}

export default DisplayTodo
