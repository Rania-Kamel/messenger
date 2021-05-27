
import React from 'react'

function Select({ dateArray, disapled_option }) {
    return (
        <select>
            <option disabled >{disapled_option}</option>
            {
                dateArray.map(dateOption => {
                    return (
                        <option value={dateOption}>{dateOption}</option>
                    )
                })}
        </select>
    )
}

export default Select