// Define variables
const form = document.querySelector('#taskForm');
const taskList = document.querySelector('.list-group');
const taskInput = document.querySelector('#taskName');
const clearAll = document.querySelector('.clearTaskBtn');

// Load all eventlisteners
loadAllEventListeners();

// Load all event listeners function
function loadAllEventListeners(){
    let date = new Date();
    document.getElementById("todayDate").innerHTML = date;


    // Add task event
    form.addEventListener('submit',addListTask);
    // Remove task event
    taskList.addEventListener('click',removeListTask);
    // Clear all the list
    clearAll.addEventListener('click',clearAllTask);
}

// Add List Task Function
function addListTask(e){
    if(taskInput.value === ''){
        alert("Add a task");
    }
    // Create li element
    const li = document.createElement('li');
    // Add class name to li element
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    // Append the input value to li
    li.appendChild(document.createTextNode(taskInput.value));

    // Create a element
    const spanElement = document.createElement('span');
    // Add class name to span element
    spanElement.className = 'badge badge-light badge-secondary';
    // Add html
    spanElement.innerHTML = `<i class="fa fa-close"></i>`;
    // Append the a element to li
    li.appendChild(spanElement);

    // Append li to ul
    taskList.appendChild(li);
    // Clear the input after submit
    taskInput.value = '';
    e.preventDefault();
}

// Remove List Task Function
function removeListTask(e){
    if(e.target.parentElement.classList.contains('badge-light')){
        e.target.parentElement.parentElement.remove();
    }
}