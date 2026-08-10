import React, { useState } from "react";

export default function() {
    [count, setCount] = useState(0)
    return(
        <>
        <div className="display-flex">
            <span>Count is {count}</span>
        </div>
        </>
    )
}