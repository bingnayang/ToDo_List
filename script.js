// Define variables
const form = document.querySelector('#taskForm');
const taskList = document.querySelector('.list-group');
const taskInput = document.querySelector('#taskName');
const clearAll = document.querySelector('.clearTaskBtn');

// Load all eventlisteners
loadAllEventListeners();

// Load all event listeners function
function loadAllEventListeners(){
    // Add task event
    form.addEventListener('submit',addListTask);
    // Remove task event
    taskList.addEventListener('click',removeListTask);
    // Cross out task event
    taskList.addEventListener('click',crossOutTask);
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
    const aElement = document.createElement('a');
    // Add html
    aElement.innerHTML = `<span class="badge badge-info badge-secondary"><i class="fa fa-check"></i></span>
    <span class="badge badge-danger badge-secondary"><i class="fa fa-remove"></i></span>`;
    // Append the a element to li
    li.appendChild(aElement);

    // Append li to ul
    taskList.appendChild(li);
    // Clear the input after submit
    taskInput.value = '';
    e.preventDefault();
}

// Remove List Task Function
function removeListTask(e){
    if(e.target.parentElement.classList.contains('badge-danger')){
        e.target.parentElement.parentElement.parentElement.remove();
    }
}

// Cross List Task Function
function crossOutTask(e){
    if(e.target.parentElement.classList.contains('badge-info')){
        e.target.parentElement.parentElement.parentElement.style.color = "red";
    }
}

// Clear all Task List Function
function clearAllTask(){
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
}