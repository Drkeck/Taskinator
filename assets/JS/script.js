console.dir(window.document);
var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#task-to-do");
var taskIdCounter = 0;

var createTaskHandler = function() {
    event.preventDefault();

    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;

    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return;
    }

    formE1.reset();

    var taskFormData = {
        name: taskNameInput,
        type: taskTypeInput
    };

    createTaskE1(taskFormData);
};

var createTaskE1 = function(taskDataObj) {
    var listItemE1 = document.createElement("li");
    listItemE1.className = "task-item";

    listItemE1.setAttribute("data-task-id", taskIdCounter);

    var taskInfoE1 = document.createElement("div");

    taskInfoE1.className = "task-info";

    taskInfoE1.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    listItemE1.appendChild(taskInfoE1);

    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemE1.appendChild(taskActionsEl)

    tasksToDoE1.appendChild(listItemE1);

    taskIdCounter++;
}

var createTaskActions = function (taskId) {
    var actionContainerE1 = document.createElement("div");
    actionContainerE1.className = "task-actions";

    //edit button
    var editButtonE1 = document.createElement("button");
    editButtonE1.textContent = "Edit";
    editButtonE1.className = "btn edit-btn"
    editButtonE1.setAttribute("data-task-id", taskId);

    actionContainerE1.appendChild(editButtonE1);

    //delete button
    var deleteButtonE1 = document.createElement("button");
    deleteButtonE1.textContent = "delete";
    deleteButtonE1.className = "btn delete-btn";
    deleteButtonE1.setAttribute("data-task-id", taskId)

    actionContainerE1.appendChild(deleteButtonE1);

    var statusSelectE1 = document.createElement("select");
    statusSelectE1.className = "select-status";
    statusSelectE1.setAttribute("name", "status-change");
    statusSelectE1.setAttribute("data-task-id", taskId);

    actionContainerE1.appendChild(statusSelectE1);

    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);

        statusSelectE1.appendChild(statusOptionEl)
    }

    return actionContainerE1
};



formE1.addEventListener("submit", createTaskHandler);