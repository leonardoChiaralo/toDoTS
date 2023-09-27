"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
const taskList = document.getElementById("taskList");
const addTask = document.getElementById("addTask");
const addContainer = document.getElementById("addContainer");
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
function saveTask() {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const response = yield fetch("/list");
      const data = yield response.json();
      taskList.innerHTML = "";
      data.forEach((tasks) => {
        const task = document.createElement("li");
        const button = document.createElement("button");
        //Função p/ remover tasks pelo btn
        button.addEventListener("click", () =>
          __awaiter(this, void 0, void 0, function* () {
            try {
              yield fetch(`/list/${tasks._id}`, { method: "DELETE" });
              taskList.remove();
              window.location.reload();
            } catch (error) {
              console.error(error);
            }
          })
        );
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
  });
}
window.onload = saveTask;
