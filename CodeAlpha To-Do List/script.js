function displayText(){
    let inputText= document.getElementById("input").value;

    let outputDiv= document.getElementById("taskbox");

    let addedTask= document.createElement("p");

    addedTask.textContent = inputText;

    outputDiv.appendChild(addedTask);
}