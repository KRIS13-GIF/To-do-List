import React from 'react';
import ItemList from './ItemList';

//Its parent is App.js
const Content = ({items,handleCheck, handleDelete}) => {

  return (
   <main>
      {items.length>0 ?( 
      <ItemList items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete} />
      ):(
        <h2>There are no items</h2>
      )}

   </main>
  )
}

export default Content
