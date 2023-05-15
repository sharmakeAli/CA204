import React,{useEffect,useState} from 'react';

function App() {
  const [time,settime]=useState(0)
useEffect(()=>{
  let interval= setInterval(() => {
    settime(time+1)
    return ()=>{
      clearInterval(interval)
    }
  }, 1000);
  
},[time])
  
  
  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
}

export default App;