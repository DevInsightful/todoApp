import { useDispatch } from "react-redux"
import { searchTodo } from "../features/todoSlice/todoSlice"
function Search() {
  const dispatch = useDispatch()
  const handleSearch=(event:React.ChangeEvent<HTMLInputElement>)=>{
    dispatch(searchTodo(event.target.value))
  }
  return (
    <div className="sm:ml-auto">
      <input type="text" className="outline-none px-2 py-1 rounded-full" placeholder='search' onChange={handleSearch}/>
    </div>
  )
}

export default Search
