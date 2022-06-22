import React from 'react'


const Checkbox = ({ label, value, handler = void 0 }) => {
    return (
        <div>
            <label>
                <input type="checkbox" checked={value} onChange={(event) =>handler({value : event.target.value , id : label})} />
                {label}
            </label>
        </div>
    )
}

export default Checkbox
