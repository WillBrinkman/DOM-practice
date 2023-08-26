function addItem() {
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList');

    if (itemInput.value.trim() === '') return;

    const li = document.createElement('li');
    li.textContent = `• ${itemInput.value}`;
    itemList.appendChild(li);

    itemInput.value = '';
}