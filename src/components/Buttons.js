import React from 'react';

const Buttons= ({onButtonSelect}) => {

    const options = []
    for(let i=0; i < 7; i++) {
        const value = <div className="button-div"><button className="button" onClick={handleChange} value={i} key={i}>Column {i+1}</button></div>
        options.push(value);
    }

    function handleChange(event) {
        onButtonSelect(event.target.value);
    }

    return(
        <div className="column-selector">
            {options}
        </div>
    )
}

export default Buttons;