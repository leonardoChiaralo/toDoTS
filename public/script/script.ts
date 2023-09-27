const taskList = document.getElementById("taskList") as HTMLLIElement;
const addTask = document.getElementById("addTask") as HTMLLIElement;
const addContainer = document.getElementById("addContainer") as HTMLLIElement;

addContainer.style.display = "none";

//Função p/ abrir a tela de add task
function openAdd() {
  if (addContainer.style.display == "none") {
    addContainer.style.display = "block";
  } else {
    addContainer.style.display = "none";
  }
}

//Função p/ cancelar add task
function cancelTask() {
  addTask.textContent = "";

  if (addContainer.style.display == "block") {
    addContainer.style.display = "none";
  }
}

//Função para listar tasks em tela e criar btn p/ excluir
async function saveTask() {
  try {
    const response = await fetch("/list");
    const data = await response.json();

    taskList.innerHTML = "";

    data.forEach((tasks: any) => {
      const task = document.createElement("li");
      const button = document.createElement("button");

      //Função p/ remover tasks pelo btn
      button.addEventListener("click", async () => {
        try {
          await fetch(`/list/${tasks._id}`, { method: "DELETE" });
          taskList.remove();
          window.location.reload();
        } catch (error) {
          console.error(error);
        }
      });

      task.textContent = tasks.content;
      task.id = tasks._id;
      taskList.appendChild(task);

      button.textContent = "X";
      task.appendChild(button);

      if (addContainer.style.display == "block") {
        addContainer.style.display = "none";
      }
    });
  } catch (error) {
    console.error(error);
  }
}

window.onload = saveTask;
