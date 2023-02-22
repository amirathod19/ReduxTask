import { PLUSE_NUMBER,MINUS_NUMBER } from "../constant/plusMinusConstant";
const number=10
export const addMinNumber = (state=number,action) =>{
    switch (action.type) {
        case PLUSE_NUMBER :
            // console.log(action.type)
            return state+2

        case MINUS_NUMBER:
            return state-1
    
        default:
            return state;
    }
}