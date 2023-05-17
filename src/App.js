import React,{useEffect,useState} from 'react';
import FocusComponent from './focus';
import focusComponent from './focus';
import InputComponent from './UseRef';

function App() {
//   const [time,settime]=useState(0)
// useEffect(()=>{
//   let interval= setInterval(() => {
//     settime(time+1)
//     return ()=>{
//       clearInterval(interval)
//     }
//   }, 1000);
  
// },[time])
  
  
  return (
    <div>
      {/* <h1>{time}</h1> */}
      {/* <InputComponent/> */}
      <FocusComponent/>
    </div>
  );
}

export default App;