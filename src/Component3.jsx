import React,{useContext,} from 'react';
import { UserContext } from './component1';


function Component3() {
    const userName=useContext(UserContext);
    return (
        <div>
           <h1>
               hello Component 3 {userName}
               </h1> 
        </div>
    );
}

export default Component3;