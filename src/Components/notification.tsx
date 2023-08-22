import { useSelector } from 'react-redux'
import { RootState } from '../features/store'

function Notification() {
    const message=useSelector((state:RootState)=>state.todo.message)
  return (
    <div className={`absolute bg-black/30 w-full h-screen transition-all ${message? 'scale-100': 'scale-0'} z-20 flex flex-col items-center justify-center`}>
        <div className={`${message==='Removed'? 'bg-red-500':'bg-green-500'} px-6 py-3 rounded-md`}>
            <h6>{`${message} Sucessfully`}</h6>
        </div>
      
    </div>
  )
}

export default Notification
