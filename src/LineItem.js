import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

// It parent is the ItemList
const LineItem = ({item,handleCheck, handleDelete}) => {
    return (
        <li className='item' key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)} />
            <label>{item.item}</label>
            <FaTrashAlt role='button' tabIndex="0" onClick={() => handleDelete(item.id)} />
        </li>

    )
}

export default LineItem;