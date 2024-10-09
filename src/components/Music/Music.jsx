import React, { useEffect, useState } from "react";
import style from "./Music.module.css";

const Music = () => {
return (
    <div className={style.music}>
        <h2>Music</h2>
        <p>Welcome to the Music section</p>
        <p>Current time: {new Date().toLocaleTimeString()}</p>
    </div>
 );
}
export default Music;


// const [value, setValue] = useState('')
//    const [tasks, setTasks] = useState([]);
//    const addTask = () => {
//     if (value.trim())
//     setTasks([...tasks, value]);
//     setValue('')
//    }
//    const deleteTask = (i) => {
//     setTasks(tasks.filter((_, index) => index!== i));
 
//    }
//    return (
// <div>
//     <input type="text" value={value} onChange={(e) => setValue(e.target.value) }/>
//     <button onClick={addTask}>Add</button>
//     <ul>
//         {tasks.map((task, index) => (
//             <li key={index}>
//                     {task}
//                     <button onClick={() =>deleteTask(index)} >Delete</button>
//             </li>
//         ))}
        
//     </ul>
// </div>
//     );

// const [time, setTime] = useState(new Date()) 
// useEffect(() => {
//     const timer =  setInterval(() => {
//         setTime(new Date())
//     }, 1000)
//     return () => clearInterval(timer)
// }, [])
// const formatTime = (date) => {
//     const hours = date.getHours().toString().padStart(2, '0');
//     const minutes = date.getMinutes().toString().padStart(2, '0');
//     const seconds = date.getSeconds().toString().padStart(2, '0');
//     return `${hours}:${minutes}:${seconds}`;
// }
// return (
//     <div>
//         <h1>Тукущее время:</h1>
//         <h2>{formatTime(time)}</h2>
//     </div>
// )
// }  