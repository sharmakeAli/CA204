import React,{useState,createContext} from 'react';
import Component2 from './component2';
;
export  const UserContext=createContext()
function Component1() {
  
    const [user,setUser]=useState('Mohamed Ali')
    return (
        <UserContext.Provider value={user}>
        <div>
            <h1>
                hello {user}
            </h1>
            <Component2 user={user} />
        </div>
        </UserContext.Provider>
    );
}

export default Component1;