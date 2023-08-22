import { useSelector } from 'react-redux'
import Search from './search'
import { RootState } from '../features/store'

function ListHeader() {
  const itemsAva = useSelector((state:RootState)=>state.todo.todoInfo);
  const total = itemsAva.length
  const completed = itemsAva.reduce((prevVal, _, index)=>{
    return itemsAva[index].status? prevVal+1 : prevVal+0
  },0)
  const pending = total - completed;
  return (
    <div className='text-center space-y-2 sm:flex'>
        <div className='sm:text-left'>
            <h4 className='font-medium text-xl md:text-2xl lg:text-3xl'>Todo's</h4>
            <h6 className='text-base'>{`${total} Total, ${completed} Completed and ${pending} Pending`}</h6>
        </div>
        <Search/>
    </div>
  )
}

export default ListHeader
