const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

///////////////////////////
let taskName = document.getElementById("taskName");
let description = document.getElementById("description");
let image = document.getElementById("image");
let addBtn = document.getElementById("addBtn");
let tableData = document.getElementById("tableData");
let deleteAllBtn = document.getElementById("deleteAllBtn");
let modal = document.getElementById("model2");
let counter = 1;
let idNo = 1;


deleteAllBtn.addEventListener("click", deleteAll);
addBtn.addEventListener("click", addTask);

function addTask() {
  const taskNameValue = taskName.value;
  const descriptionValue = description.value;
  const imageValue = image.value;
  tableData.innerHTML += ` <table class="table table-hover" data-bs-toggle="modal" onclick="showTask(${idNo++}, '${taskNameValue}', '${descriptionValue}', '${imageValue}')"
  data-bs-target="#staticBackdrop2">
        <tbody class="">
        <tr class="">
            <th class="th-left col-1" scope="col">${counter++}</th>
            <th class="col-3 text-truncate nameClass" style="max-width: 100px;" scope="col">${
                taskNameValue
            }</th>
            <th class="col-4 text-truncate desClass" style="max-width: 100px;" scope="col">${
                descriptionValue
            }</th>
            <th class="th-right col-3" scope="col">
            <img class="imgClass"  src="${imageValue}" alt="Error">
        </th>
        </tr>
    </tbody>
    </table>`;
  clearData();
}

function clearData() {
  taskName.value = "";
  description.value = "";
  image.value = "";
}

function deleteAll() {
  counter = 1;
  tableData.innerHTML = "";
}

function showTask(id,taskNameValue, descriptionValue, imageValue) {
console.log(id);
  modal.innerHTML = `<div class="card">
    <img src="${imageValue}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${taskNameValue}</h5>
        <p class="card-text">${descriptionValue}</p>

    </div>
</div>`;
}

