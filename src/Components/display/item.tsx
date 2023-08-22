import React from 'react'
import { useRef } from "react"
import { useDispatch } from 'react-redux';
import { updateTaskStatus } from '../../features/todoSlice/todoSlice';
interface todo{
    todoTitle:string;
    dateAndTime:{date:string; time:string;};
    status:boolean;
}
interface MyCompProps{
  ItemProp:todo;
  Id:number;
}
const Item:React.FC<MyCompProps>=({ItemProp, Id})=> {
    const dispatch = useDispatch();
    const statusRef = useRef<HTMLInputElement | null>(null);
    const {todoTitle, dateAndTime, status} = ItemProp;
    const handleStatus=(id:number)=>{
      dispatch(updateTaskStatus(id))
    }


  return (
    <>
<td><input type="checkbox" ref={statusRef} checked={status?true:false} onChange={()=>handleStatus(Id)}/></td>
  <td>{todoTitle}</td>
  <td><p>{dateAndTime.time}</p><p>{dateAndTime.date}</p></td>
  {status?<td className='w-20'>completed</td>:<td className='w-20'>pending</td>}      
    </>
  )
}

export default Item
