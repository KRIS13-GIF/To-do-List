
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import{useState, useEffect} from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';



function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist') || []) // we should keep into considerations that we need [] and suppose if the array is empty 
//using values of the localStorages instead of a fixed array. So it upodates even after refresh with the 
//appropriate values

// We do not need to use a fixed array for the values, but take it from shopping list immediatly
   /*
    [
    {
      id: 1,
      checked: true,
      item: 'Kris is from unyt'
    },
    {
      id: 2,
      checked: false,
      item: 'Erald is from Epoka'
    },
    {
      id: 3,
      checked: false,
      item: 'Adele is from Gjergji'
    }
  ]*/);
  



/**Each time we have imported a component being a search or add we always have created use state hook*/ 
const[search, setSearch]=useState('');


  // This state hook is only for new items
  const [newItem, setNewItem]=useState('');



  //immediatly loads when the useEffect is dependended on the conditions inside the array
  useEffect(()=>{
    localStorage.setItem('shoppinglist', JSON.stringify(items))},[items]);


/*
// we create this function as a reusable component. 
//Instead of typing in each line the same functionality we create a new function and 
// it uses as a parameter the list items 
  const setAndSaveItems=(newItems)=>{
    setItems(newItems) // changing the state each time you click the button
    localStorage.setItem('shoppinglist', JSON.stringify(newItems)); // savin the value to the local storage
  }
*/

  // this is done when you press the + button in the add button section
  const handleSubmit=(e)=>{
    e.preventDefault(); // preventing the reloading page
    if(!newItem) return; // if the input is blank
    addItem(newItem); // adding new Item into the list array [items]
    //after adding the item , you need to set the inputbox empty
    setNewItem('');
  }




  const addItem=(item)=>{
    // checking if there are items inside the list. 
    // evaluating the id of the last element which is the part after the ?
    // If the array has no elements , then the id is 1 ,because it is the first element of the array
    const id=items.length ? items[items.length-1].id+1 : 1
    const myNewItem={id, checked:false, item}; // new object
    const listItems=[...items, myNewItem] // using the spread operator which takes the values of the first array and connects them with the new value
        //REPLACED BY SET AND SAVE
    //setItems(listItems) // changing the state each time you click the button
    //localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // savin the value to the local storage
    setItems(listItems);
  }

  // the id is the one you passed as a key (This works for the checkbox)
  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item, // this means that it is linked with the property of the item
      checked: !item.checked
    } : item); // we haev altered the item that matches to change the status of it once
    
        //REPLACED BY SET AND SAVE
    //setItems(listItems) // changing the state each time you click the button
    //localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // savin the value to the local storage
  
    setItems(listItems);
  }


  // Button for deleting
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id); // you can do this logic also in JS manually to understand that
    //ift will create a new array without that element. The new array will only have the id which are not equal to the id which you clicked

    //REPLACED BY SET AND SAVE
    //setItems(listItems) // changing the state each time you click the button
    //localStorage.setItem('shoppinglist', JSON.stringify(listItems)); // savin the value to the local storage
    setItems(listItems);
  }



//using props and props drilling
  return (
    <div className="App">
      <strong><Header title="Grocery List" /></strong>
     
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}/>
      <SearchItem 
        search={search}
        setSearch={setSearch}/>
      <Content
        items={items.filter(item=>((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
