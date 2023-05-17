import React, { useRef } from 'react';

function FocusComponent() {
    const focus=useRef();
    const inputFocus =()=>{
        focus.current.focus()
    }
    return (
        <div>
            <input type="text" ref={focus} />
            <button type="button" onClick={inputFocus}> inputFocus </button>
        </div>
    );
}

export default FocusComponent;