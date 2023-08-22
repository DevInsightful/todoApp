import { useDispatch } from 'react-redux';
import bin from '../../assets/bin.png';
import edit from '../../assets/edit.png';
import { removeTodo, setTodoForUpdate } from '../../features/todoSlice/todoSlice';

const Actions:React.FC<{id:number}>=({id})=>{
  const dispatch = useDispatch();
  const handleDelete=(id:number)=>{
    dispatch(removeTodo(id))
  }
  const handleUpdate=(id:number)=>{
    dispatch(setTodoForUpdate(id));
  }
  return (
    <td className="">
        <button className='px-2' onClick={()=>handleDelete(id)}>
          <img src={bin} alt="Delete"/>
        </button>

        <button className='px-2' onClick={()=>handleUpdate(id)}>
          <img src={edit} alt="Update"/>
        </button>
    </td>
  )
}

export default Actions
