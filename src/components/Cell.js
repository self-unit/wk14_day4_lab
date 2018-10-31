import React from 'react';

const Cell = ({className}) => {
    return(
        <div>
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50%" cy="50%" r="40" stroke="black" fill={className} />
        </svg>
        </div>
    )
}

export default Cell;