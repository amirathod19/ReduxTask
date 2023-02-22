import { TODO_REQUEST,TODO_COMPLETED } from "../constant/todoConstant";

export const todoDataReducer = (state = {todata : []}, action) =>{
    console.log("Todoreducer action type",action.type)
    switch (action.type) {
        case TODO_REQUEST:
            return {
                ...state,
                // loding:true,
            }
        case TODO_COMPLETED:
            return{
                //  loding:false,
                todata:action.payload.data,
            }
    
        default:
            return{
                state
            }
    }

    
}