const svgValidBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>';
const svgUpdateBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wrench-adjustable-circle" viewBox="0 0 16 16"> <path d="M12.496 8a4.5 4.5 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11q.04.3.04.61"/><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-1 0a7 7 0 1 0-13.202 3.249l1.988-1.657a4.5 4.5 0 0 1 7.537-4.623L7.497 6.5l1 2.5 1.333 3.11c-.56.251-1.18.39-1.833.39a4.5 4.5 0 0 1-1.592-.29L4.747 14.2A7 7 0 0 0 15 8m-8.295.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27z"/></svg>';
const svgDelteBtn = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"> <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/> </svg>';

const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn');

const taskListContainers = document.querySelector('.tasks__container');

addTaskBtn.addEventListener('click',() => {

    if(taskInput.value==''){
        alert("Please enter a valid Task");
    } else{
        

        taskListContainers.style.animation = 'fade .5s linear';
        const TaskDate = new Date();

        const hours = TaskDate.getHours();
        const minutes = TaskDate.getMinutes();
        const seconds = TaskDate.getSeconds();


        const taskContainer = document.createElement('div');
        taskContainer.className = 'task__container';

        const taskInputContainer = document.createElement('div');
        taskInputContainer.className = 'task__input';

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons';

        const timeContainer = document.createElement('div');
        timeContainer.className = 'time__container';

        const myTask = document.createElement('input');
        myTask.value = taskInput.value;
        myTask.setAttribute('readonly',true);

        const validBtn = document.createElement('button');
        validBtn.innerHTML = svgValidBtn ;
        validBtn.className = 'validate-btn';
        validBtn.style.display ='none';

        const updateBtn = document.createElement('button');
        updateBtn.innerHTML = svgUpdateBtn ;
        updateBtn.className = 'update-btn';

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = svgDelteBtn ;
        deleteBtn.className = 'delete-btn';

        const time = document.createElement('button');
        time.className = 'time';
        time.textContent = hours + ':' + minutes + ':' + seconds;


        taskInputContainer.appendChild(myTask);

        buttonsContainer.appendChild(validBtn);
        buttonsContainer.appendChild(updateBtn);
        buttonsContainer.appendChild(deleteBtn);

        timeContainer.appendChild(time);

        taskContainer.appendChild(taskInputContainer);
        taskContainer.appendChild(buttonsContainer);
        taskContainer.appendChild(timeContainer);

        taskListContainers.appendChild(taskContainer);

        validBtn.addEventListener('click',() => {
            myTask.setAttribute('readonly',true);
            taskContainer.style.transition = 'all .8s linear';
            taskContainer.style.backgroundColor = 'green';
            validBtn.style.display ='none';
            myTask.style.border = 'none';

            setTimeout(()=>{
                taskContainer.style.backgroundColor = '';
            },2000)

        });

        updateBtn.addEventListener('click',()=>{
            validBtn.style.display = 'block';
            taskContainer.style.backgroundColor = '';
            myTask.removeAttribute('readonly');
            myTask.style.border = '1px solid white';
        });

        deleteBtn.addEventListener('click',(e)=>{
            taskContainer.style.display='none';
        });
    }
});





