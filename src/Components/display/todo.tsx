
import { useSelector } from "react-redux"
import Actions from "./actions"
import { RootState } from "../../features/store"
import Item from "./item"

function Todo() {
  const todoInfo = useSelector((state:RootState)=>state.todo.todoInfo)
  // console.log(todoInfo[0].todoTitle);
  // const {todoTitle, dateAndTime, status} = todoInfo
  
  return (
    todoInfo.map((todo, index)=>{
      // console.log(todo)
      const itemProp:typeof todo={
        todoTitle:todo.todoTitle,
        status:todo.status,
        dateAndTime:todo.dateAndTime,
      }
return(
<tr key={index} className="border-slate-200 border-b-2 py-5">
  <Item ItemProp={itemProp} Id={index}/>
  {/* <td className="flex justify-evenly"> */}
    <Actions id={index}/>
    {/* </td> */}
</tr>)

    })
)
}

export default Todo
