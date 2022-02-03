
import {addProject} from './addProject';

let dom = (() => {

    let projectList = document.querySelector("#project-list");
    let todoList = document.querySelector("#todo-section");

    let createProjectDiv = (title, id) => {
        let div = document.createElement('div');
        div.classList.add("project-div");
        div.textContent = title;
        div.dataset.id = id;

        let deletebtn = document.createElement('button');
        deletebtn.textContent = "X";
        deletebtn.classList.add('delete-btn');
        deletebtn.dataset.id = id;
        deletebtn.id = "delete-project";

        div.appendChild(deletebtn);
        
        return div;
    };

    let createToDoDiv = (task, duedate,description,priority,complete) => {
        //div for each todo
        let todoDiv = document.createElement('div');
        todoDiv.classList.add("todo-div");
        let todoDivDetails = document.createElement('div');
        todoDivDetails  .classList.add("todo-details");

        //checkbox
        let todoTask = document.createElement('input');
        todoTask.type = "checkbox";
        todoTask.name = 'task';
        todoTask.id = task;
        todoTask.classList.add("todo-checkbox")

        //label
        let taskLabel = document.createElement('label');
        taskLabel.htmlFor = task;
        taskLabel.appendChild(document.createTextNode(task));
        taskLabel.classList.add("strike");

        //if checked logic
        if (complete){
            taskLabel.classList.add("through");
            todoTask.checked = true;
        }
        
        //other todo div details:
        let todoDescription = document.createElement('div')
        todoDescription.id = "todo-description"
        let todoDueDate = document.createElement('div')
        todoDueDate.id = "todo-duedate"
        let todoPriority = document.createElement('div');
        todoPriority.id = "todo-priority"
        let todoComplete = document.createElement('div');
        todoComplete.id = "todo-complete"
        let detailsbtn = document.createElement("button");
        detailsbtn.id = "details-btn";
        detailsbtn.classList.add('details-button')

        let todoInformationArray = [todoTask, todoDescription,todoDueDate,todoPriority,todoComplete];

        //add class to all todos
        todoInformationArray.forEach(item => {
            item.classList.add("todoInfo");
        });

        //text content
        todoDescription.textContent = description;
        todoDueDate.textContent = `Due: ${duedate}`;
        todoPriority.textContent = priority;
        todoComplete.textContent = complete;
        detailsbtn.textContent = "Details";

        //append todoDetails section
        todoDivDetails.appendChild(todoDescription)
        todoDivDetails.appendChild(todoDueDate)
        todoDivDetails.appendChild(todoPriority)
        todoDivDetails.appendChild(todoComplete);

        //append everything to main todoDiv
        todoDiv.appendChild(todoTask);
        todoDiv.appendChild(todoDivDetails);
        todoDiv.appendChild(detailsbtn);
        todoDiv.appendChild(taskLabel)

        return todoDiv;
        
    };


    let appendToDoDiv = (div) => {
        todoList.appendChild(div);
    }

    let appendProjectDiv = (div) => {
        projectList.appendChild(div);
    };

    let clearPage = (el) => {
        while (el.firstChild) {
          el.removeChild(el.firstChild)
        }
      }

    let render = () => {    
        clearPage(projectList);
        clearPage(todoList);
        
        //render project list
        addProject.mainArr.forEach(project => {
            dom.appendProjectDiv(dom.createProjectDiv(project.title, project.id));
        })

        //render todo list
        addProject.mainArr.forEach(item => {
            if (item.tasks.length > 0){
            if (item.id === Number(addProject.currentID)){
                for(let i = 0; i <= item.tasks.length; i++){
                appendToDoDiv(createToDoDiv(item.tasks[i].task, item.tasks[i].duedate, item.tasks[i].description, item.tasks[i].priority, item.tasks[i].completed));
                }
            }
        }
        })
        
    };

    return {createProjectDiv, appendProjectDiv, render }
})();

export {dom};

