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
    document.getElementById("tasks").innerHTML += `
    <div class="tasks d-flex justify-content-between align-items-center mb-3">
    <span class="my-0" id="taskName">${elInput}</span>
    <button class="btn btn-danger ">Delete</button>
    </div>
    `;
  }
};
