const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");
const button = document.querySelector(".btn");

const handleInput = (event) => {
     output.textContent = event.currentTarget.value;
    
}

textInput.addEventListener("input", handleInput);


const handleClick = (event) => {
    console.log("event", event);
    console.log("event type: ", event.type);
}

button.addEventListener("Click", handleClick);