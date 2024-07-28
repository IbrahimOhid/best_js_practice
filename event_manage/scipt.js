function handelClick() {
  const user = (document.querySelector("#user").innerHTML = "Mohammad");
}

const personName = document.querySelector("#person_name");
const button = document.querySelector("#btn");
button.addEventListener("click", changeName);
function changeName() {
  personName.innerHTML = "Mohammad Ibrahim OHid";
}

const listItem = document.querySelector("#list-item");
const addButton = document.querySelector("#add-btn").addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.innerHTML = "Brand Item";
    listItem.appendChild(newItem);
  });

