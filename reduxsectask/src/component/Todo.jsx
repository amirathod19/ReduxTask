import React, { useEffect } from 'react';



const Todo = ({todata}) => {
    
    return (
        <>
        Your Work Chart
        console.log("TODO COMPONENT")
       
        <div>{todata.id}</div>
        <div>{todata.title}</div>
        <h4>{todata.completed}</h4>
       
        
        
        
        </>
    );
};

export default Todo;