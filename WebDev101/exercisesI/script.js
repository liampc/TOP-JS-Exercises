const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";
container.appendChild(content);

let addP = document.createElement("p");
addP.style.color = "red";
addP.textContent = "Hey I'm red";
container.appendChild(addP);

let addh3 = document.createElement("h3");
addh3.style.color = "blue";
addh3.textContent = "I am blue h3!"
container.appendChild(addh3);

const addDiv = document.createElement("div");
addDiv.style.border = "1px solid black";
addDiv.style.backgroundColor = "pink";
container.appendChild(addDiv);

let addh1 = document.createElement("h1");
addh1.textContent = "I'm in a div";
addDiv.appendChild(addh1);

let addP1 = document.createElement("p");
addP1.textContent = "Me too!";
addDiv.appendChild(addP1);

let btn = document.querySelector("#btn")
btn.addEventListener('click', function (e) {
    e.target.style.background = "blue";
  });