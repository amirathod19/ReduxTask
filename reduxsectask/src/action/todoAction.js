import { TODO_REQUEST, TODO_COMPLETED } from "../constant/todoConstant";
import axios from "axios";
import { useEffect } from "react";

export const  getTodoData=()=>async(dispatch)=> {

    
    let API = "https://jsonplaceholder.typicode.com/todos"  
    
    // useEffect(()=>{
    //     const tdata = axios.get(API)
    //     const {tododa}  = tdata.data
        
    //     console.log(tododa)   
    //     dispatch({type:TODO_COMPLETED, payload:tododa})
    // },[])

        const tdata =await axios.get(API)
        const {tododa}  = tdata.data
        console.log(tododa)   
        dispatch({type:TODO_COMPLETED, payload:tododa})
        
        
  
   
   
    console.log("todoaction")
}

 // useEffect(()=>{
    // const tdata =await axios.get(API)
    // const tododa  = tdata.data
//     console.log(tododa)
// },[])

// export const todoRequest = () =>{
//     return{
//         type:TODO_REQUEST
//     }
// }

// export const todoCompleted =()=>{
//     return {
//         type:TODO_COMPLETED,
//         payload:tododa
//     }
// }

