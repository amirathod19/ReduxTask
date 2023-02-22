import { PLUSE_NUMBER, MINUS_NUMBER } from "../constant/plusMinusConstant";

export const addNumber =()=>{
    // console.log("addacion")
    return {
        type:PLUSE_NUMBER
    }
}

export const minNumer =() =>{
    return{
        type:MINUS_NUMBER
    }
}
