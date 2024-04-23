if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', renderList)
} 
else{
    renderList()
}

var values = localStorage.getItem('items')
var valuesArray = values ? JSON.parse(values) : [];

function renderList() {
    var values = localStorage.getItem('items')
    var listContainer = document.getElementById('list-container')
    listContainer.innerHTML = ''
    var valuesJSON = JSON.parse(values)
    for (i = 0; i < valuesJSON.length; i++ ) {
        var itemValue = valuesJSON[i]
        var itemContainer = document.createElement('article')
        var itemTemplate = `
        <h1 type="text" class="itemname"> 
            ${itemValue}
        </h1>
        <div class="itemButtons">
            <button type="button" class="checkmark">&check;</button>
            <button class="btn removebutton">
                <svg viewBox="0 0 15 17.5" height="17.5" width="15" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path transform="translate(-2.5 -1.25)" d="M15,18.75H5A1.251,1.251,0,0,1,3.75,17.5V5H2.5V3.75h15V5H16.25V17.5A1.251,1.251,0,0,1,15,18.75ZM5,5V17.5H15V5Zm7.5,10H11.25V7.5H12.5V15ZM8.75,15H7.5V7.5H8.75V15ZM12.5,2.5h-5V1.25h5V2.5Z" id="Fill"></path>
                </svg>
            </button>
        </div>
        `   
        // SVG for the button element above is copied from the url below
        // https://uiverse.io/boryanakrasteva/tidy-falcon-17
        itemContainer.classList.add('item-container')
        itemContainer.innerHTML = itemTemplate
        listContainer.insertBefore(itemContainer, listContainer.lastElementChild)
    }

    functionalButtons()
}

function functionalButtons() {
    var removeButtons = document.getElementsByClassName('removebutton')
    for(j = 0; j < removeButtons.length; j++) {
        var removeButton = removeButtons[j]
        
        removeButton.addEventListener('click', removeItem)
    }

    var linethroughButtons = document.getElementsByClassName('checkmark')
    for (x = 0; x < linethroughButtons.length; x++) {
        var lineButton = linethroughButtons[x]
        lineButton.addEventListener('click', linethroughItem)
    }
}

function newItem () {
    var itemValue = document.getElementById('addItemText').value.trim()
    if (itemValue == '') {
        alert('Du kan ikke legge til tomme elementer i handlelisten!')
    } else {
        valuesArray.push(itemValue)
        var valuesString = JSON.stringify(valuesArray)
        localStorage.setItem("items", valuesString)
        renderList()
    }
}

function removeItem(event) {
    var buttonClicked = event.target
    var parentDiv = buttonClicked.parentElement.parentElement
    var valueToRemove = parentDiv.children[0].textContent
    var indexToRemove = valuesArray.indexOf(valueToRemove)
    valuesArray.splice(indexToRemove, 1)
    var valuesString = JSON.stringify(valuesArray)
    localStorage.setItem("items", valuesString)
    renderList()
}

function linethroughItem(event) {
    var buttonClicked = event.target
    var parentDiv = buttonClicked.parentElement.parentElement
    var textElementToEdit = parentDiv.children[0]

    if ( textElementToEdit.style.textDecoration != 'line-through') {
        textElementToEdit.style.textDecoration = 'line-through'
    } else {
        textElementToEdit.style.textDecoration = 'none'
    }
}