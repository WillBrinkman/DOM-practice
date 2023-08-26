function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    if (itemInput.value.trim() === '') return;

    const li = document.createElement('li');
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('check', function() {
        const parentLi = this.parentElement;
        if (this.checked) {
            parentLi.style.textDecoration = 'line-through';
        } else {
            parentLi.style.textDecoration = 'none';
        }

    
    });

    li.appendChild(checkbox);  // Adding the checkbox to the li
    li.appendChild(document.createTextNode(` ${itemInput.value}`));  // Adding the text next to the checkbox
    itemList.appendChild(li);

    itemInput.value = '';
};