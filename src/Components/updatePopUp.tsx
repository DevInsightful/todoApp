import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../features/store';
import { cancleUpdate, updateTodo } from '../features/todoSlice/todoSlice';
import {useState} from 'react'

function UpdatePopUp() {
    const store = useSelector((state:RootState)=>state.todo);
    const shouldUpdate = store.updatePopUp;
    const updateItemId = store.updateItemId;
    const prevVal = store.todoInfo[updateItemId]?.todoTitle;
    const [newValue, setNewValue] = useState(prevVal)
    const dispatch = useDispatch();
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setNewValue(event.target.value)
    }
    const update=()=>{
        if(newValue)
        dispatch(updateTodo(newValue))
    }
  return (
    <div className={`absolute w-full h-screen backdrop-blur-md bg-black/30 z-20 flex items-center justify-center transition-all ease-in-out ${shouldUpdate? 'scale-100':'scale-0'}`}>
        <div className='text-right'>
        <button onClick={()=>dispatch(cancleUpdate())} className='relative top-2 text-lg font-bold'>x</button>
        <form onSubmit={(e)=>e.preventDefault()} className='bg-white p-5 flex flex-col'>
            <input type="text" placeholder='new value here' onChange={handleChange} value={newValue}/>
            <button onClick={update}>save</button>
        </form>

        </div>
    </div>
  )
}

export default UpdatePopUp
