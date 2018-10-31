import React from 'react';

const Buttons= ({onButtonSelect}) => {

    const options = []
    for(let i=0; i < 7; i++) {
        const value = <option value={i} key={i}>Column {i+1}</option>
        options.push(value);
    }

    function handleChange(event) {
        onButtonSelect(event.target.value);
    }

    return(
        <select id="column-selector" defaultValue="default" onChange={handleChange} >
            <option disabled value="default">Choose a column</option>
            {options}
        </select>
    )
}

export default Buttons;