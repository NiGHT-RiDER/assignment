import React from 'react'
import Checkbox from '../../components/Checkbox/Checkbox'
import { useCheckboxStore } from '../../store'
const Homepage = () => {
    const checkboxes = useCheckboxStore(state => state.checkboxes)
    const checkboxHandler = useCheckboxStore(state => state.updateCheckbox)
    return (
        <div>
            {checkboxes.map(checkbox => {
                return <Checkbox value={checkbox.value} label={checkbox.label} handler={checkboxHandler} />
            })}
            
            <ul>{checkboxes.filter(x => x.value).map(x => <li>{x.label}</li>)}</ul>
        </div>
    )
}

export default Homepage
