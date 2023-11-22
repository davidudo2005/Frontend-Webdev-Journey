function displayText(){
    let inputText= document.getElementById("input").value;
    console.log(inputText)

    let outputDiv= document.getElementById("taskbox");

    let addedTask= document.createElement("addedtask");
    addedTask.classList.add("taskadded");

    addedTask.textContent = inputText;

    let deleteButton=document.createElement("deletebutton")
    deleteButton.textContent="X";
    deleteButton.classList.add("deletetask")

    deleteButton.addEventListener("click", function() {
        outputDiv.removeChild(addedTask);
      });
 
    addedTask.appendChild(deleteButton)  

    outputDiv.appendChild(addedTask);
}