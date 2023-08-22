import { useEffect } from 'react';
import { changeMessage } from './features/todoSlice/todoSlice';
import { RootState } from './features/store';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './Components/addTodo';
import DisplayTodo from './Components/display/displayTodo';
import ListHeader from './Components/listHeader';
import UpdatePopUp from './Components/updatePopUp';
import Notification from './Components/notification';

function App() {
  const dispatch = useDispatch()
  const message = useSelector((state:RootState)=>state.todo.message);
  useEffect(()=>{
    if(!message){
      return
    }
    setTimeout(()=>{
      dispatch(changeMessage())
    },1000)
  },[message])
  
  return (
    <>
    <Notification/>
    <UpdatePopUp />
    <div className='md:w-4/5 md:mx-auto lg:w-3/5 xl:w-3/6'>
    <AddTodo/>
    <section className='mt-5 backdrop-blur-md bg-white/30 rounded-lg py-3 space-y-3 sm:px-3 px-1'>
      <ListHeader/>
      <DisplayTodo/>

    </section>
    </div>
    </>
  )
}

export default App
