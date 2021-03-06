import React, { useEffect, useRef, useState, memo } from 'react';

export default memo(function RefsDom() {

    const inputRef = useRef()
    const count = useRef(1)
    const [,setValue] = useState(false)

    const handleClick = () => {
        inputRef.current.focus()
        console.log("inputRef.current", inputRef.current)
    }

    useEffect(() => {
        setTimeout(() => {
            console.log("Went here");
            count.current = 300
            setValue(true)
        }, 3000)
    })

    return (
        <>
            <h1>Count value: {count.current}</h1>
            <span>Focus:</span> <input ref={inputRef} />
            <br />
            <button onClick={handleClick}>Focus</button>
        </>
    );
})