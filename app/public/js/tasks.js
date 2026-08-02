let taskTabel = document.getElementById("task-table");
let taskLists = document.getElementById("task-lists");
let counter = 0;


taskTabel.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-btn")){
        let addedTask = prompt("Enter Task Name").trim();
        counter ++;

        if (!addedTask){
            alert("Please Enter Tasks");
            return;
        }

        let taskRow = document.createElement("tr");

        let sno = document.createElement("td");
        sno.classList.add("col-num");
        sno.innerText = "" + counter;
        taskRow.append(sno);

        

        let taskName = document.createElement("td");
        taskName.innerText = addedTask;
        taskName.classList.add("col-task");
        taskRow.append(taskName);

        let statusBtn = document.createElement("td");
        statusBtn.classList.add("col-status");
        let st_btn = document.createElement("button");
        st_btn.innerText = "Incomplete";
        st_btn.classList.add("status-btn");
        st_btn.classList.add("red")
        st_btn.type = "button";
        statusBtn.append(st_btn);
        taskRow.append(statusBtn);

        let del_btn = document.createElement("td");
        del_btn.classList.add("col-del")
        let d_btn = document.createElement("button");
        d_btn.classList.add("del-btn");
        d_btn.innerText = "Delete";
        d_btn.type = "button";
        del_btn.append(d_btn);
        taskRow.append(del_btn);

        taskLists.append(taskRow);
    } else if (event.target.classList.contains("status-btn")){
        if (event.target.innerText === "Incomplete"){
            event.target.classList.remove("red");
            event.target.classList.add("yellow");
            event.target.innerText = "In Progress";
        } else if (event.target.innerText === "In Progress"){
            event.target.classList.remove("yellow");
            event.target.classList.add("green");
            event.target.innerText = "Complete";
        } else {
            event.target.classList.remove("green");
            event.target.classList.add("red");
            event.target.innerText = "Incomplete";
        }
    } else if (event.target.classList.contains("del-btn")){
        counter--;
        let row = event.target.closest("tr");
        row.remove();
    }
});