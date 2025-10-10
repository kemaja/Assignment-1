

const favButton = document.getElementById('actionButton');
const message = document.getElementById('message');
const list = document.getElementById('itemList');

const items = ["Raindrops on roses", "Whiskers on kittens", "Bright copper kettles"];

favButton.addEventListener('click', () => {
    message.textContent = "Magic happens when you are brave";

    list.innerHTML = "All of my favorites things?";

    items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });
});


const button = document.getElementById("showTime");
const output = document.getElementById("timeDisplay");

button.addEventListener("click", () => {
    const now = new Date();
    output.textContent = "Current time: " + now.toLocaleTimeString();
});
