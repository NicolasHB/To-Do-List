document.getElementById("push").onclick = function () {
  let elInput = document.getElementById("todo-input").value;

  //CONDITIONS

  if (elInput == "") {
    alert("Ajoute une tâche");
  } else if (elInput.length < 3) {
    alert("Tâche trop courte");
  } else if (elInput.length > 35) {
    alert("Tâche trop longue");
  } else {
    console.log("tout est ok");
    //Ajoute une tâche
    document.getElementById("tasks").innerHTML += `
    <div class="tasks d-flex justify-content-between align-items-center mb-3 border-bottom py-3">
    <span class="my-0 tasksDone">${elInput}</span>
    <button class="btn btn-danger delete ">Delete</button>
    </div>
    `;

    //DELETE TASKS
    let tasksDelete = document.querySelectorAll(".delete");
    console.log("tasksDelete", tasksDelete);
    //on créer une boucle for pour selectionner les élément 1 par 1
    for (let i = 0; i < tasksDelete.length; i++) {
      tasksDelete[i].onclick = function () {
        console.log("click Delete");
        //séléctionne le noeud parent
        this.parentNode.remove();
      };
    }

    //TASKS DONE
    let tasksDone = document.querySelectorAll(".tasksDone");
    for (let i = 0; i < tasksDone.length; i++) {
      tasksDone[i].onclick = function () {
        console.log("click Done");
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#todo-input").value = "";
  }
};
