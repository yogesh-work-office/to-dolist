const form = document.querySelector('form');
const itemList = document.querySelector('#itemList');
//<ul id="itemList">   </ul>


// Add item to list
function addItem(e) {
    e.preventDefault();

    // Get input value
    const newItem = document.querySelector('#itemInput').value;
		// "Sugar 2 KG"
    // Create new li element
  if(newItem!="")
    {
     
    }
  else
    {
      alert("Enter Something ");
      return false
    }
    
    // <li></li>
    
   const li =document.createElement('li');
  li.textContent = newItem;
    // <li>Sugar 2 KG</li>
    // Add delete button to li
    const deleteButton = document.createElement('button');
// <button></button>
    deleteButton.textContent = 'X';
// <button>X</button>
    deleteButton.className = 'delete';
//<button class='delete'>X</button>
	
    li.appendChild(deleteButton);
// <li>Sugar 2 KG <button class='delete'>X</button></li>
  
  // Add li to itemList
    itemList.appendChild(li);
//<ul id="itemList"> 
//	<li>Sugar 2 KG <button class='delete'>X</button></li>
//  </ul>


    // Clear input field
    document.querySelector('#itemInput').value = '';
}

// <li> Bring milk<button class="delete">X</button></li>
// <li> Sugar 2kg<button class="delete">X</button></li>
// <li> Apple 1 Kg<button class="delete">X</button></li>

// Remove item from list
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this item?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Event listeners
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
