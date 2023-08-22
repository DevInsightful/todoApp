import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface todoData{
    todoTitle:string;
    dateAndTime:{date:string; time:string;};
    status:boolean;
}
interface Itodo{
    notificationPopUp:boolean;
    updatePopUp:boolean;
    updateItemId:number;
    message:string;
    todoInfo:todoData[];
}
const initialState:Itodo={
    notificationPopUp : false,
    updatePopUp : false,
    todoInfo:[],
    message:'',
    updateItemId : -1,
}
const todoSlice= createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo(state, action:PayloadAction<{todoTitle:string, addedAt:{date:string, time:string} ,status:boolean}>){
            const data={
                todoTitle:action.payload.todoTitle,
                dateAndTime:{date:action.payload.addedAt.date, time:action.payload.addedAt.time},
                status:action.payload.status
            }
            state.todoInfo=[...state.todoInfo, data];
            state.message = 'Added'
        },
        removeTodo(state, action:PayloadAction<number>){
            state.todoInfo.splice(action.payload,1);
            state.message = 'Removed';
        },
        setTodoForUpdate(state, action:PayloadAction<number>){
            state.updatePopUp=true;
            state.updateItemId = action.payload;
        },
        updateTodo(state, action:PayloadAction<string>){
            state.todoInfo[state.updateItemId].todoTitle = action.payload;
            state.updatePopUp = false;
            state.message = 'Updated';
        },
        cancleUpdate(state){
            state.updatePopUp = false
        },
        updateTaskStatus(state, action:PayloadAction<number>){
            state.todoInfo[action.payload].status = !state.todoInfo[action.payload].status
        },
        changeMessage(state){
            state.message='';
        },
        searchTodo(state, action:PayloadAction<string>){
            const searchedList = state.todoInfo.filter((_, index)=>{
                return state.todoInfo[index].todoTitle.includes(action.payload);
            })
            console.log(searchedList)
        }


    }

})
export default todoSlice.reducer
export const {addTodo, removeTodo, setTodoForUpdate, cancleUpdate, updateTodo, updateTaskStatus, changeMessage, searchTodo}= todoSlice.actions