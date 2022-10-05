const prompt = require('prompt-sync')({sigint: true})

console.log("Welcome to the To Do List Manger Application!");
console.log("\n~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~");
console.log("\n~ Select an action ~");
console.log("\n[1] Create a to-do item");
console.log("[2] Complete a to-do item");
console.log("[3] Exit To-Do List Application")

let action = Number(prompt("> "));
let toDoList = [];
let statusArray = [];

while(action !== 3){
    if(action === 1){
        console.log("~ Creating a new to-do item ~");
        console.log(" What is this to-do item called?");
    
        let addItem = prompt("> ");
            while(addItem.length === 0){
                console.log("Invalid: Input cannot be empty. Try again.")
                addItem = prompt("> ")
            }
    
        toDoList.push(addItem);
        statusArray.push(false);
    
        displayList();
    
        selectOption();

    } else if(action === 2){
        if (toDoList.length !== 0){

            console.log ("~ Completing a to-do item ~")
            console.log("Which to-do item would you like to complete?")
    
            displayList();
    
            let newStatus = Number(prompt("> "));

                while(isNaN(newStatus) || newStatus > statusArray.length || newStatus < 1){

                    console.log("Please input a valid number: ")
                    newStatus = Number(prompt("> "))
                }
    
            statusArray[newStatus -1] = true;
        } else {
            console.log("Please add sometjing to your to-do list before trying to complete an item.")
        }
    displayList();

    selectOption();

    }  else {
        console.log("Invalid operation")
    
        displayList();
    
        selectOption();
    }
}

console.log("~ Exiting To-Do List Application ~")

function selectOption(){
    console.log("\n~ Select an action ~");
    console.log("\n[1] Create a to-do item");
    console.log("[2] Complete a to-do item");
    console.log("[3] Exit To-Do List Application")  
    action = Number(prompt("> "));
}

function displayList(){
    console.log("*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*")
    if(toDoList.length === 0){
        console.log("Your to-do list is empty.")
    } else {
        console.log(`You have ${toDoList.length} to-do item(s).`)
    }

    for(let i = 0; i < toDoList.length; i++){
        let status = "";

        if(statusArray[i] === false){
            status = "[incomplete]";
        } else if (statusArray[i] === true){
            status = "[complete]"
       }
        
       console.log(`${i+1}. ${status} ${toDoList[i]}`)
    }
}

/*
1. Figure out the UI
-console.log()
    -Welcome Message
    -different options(add task, complete task, exit)
    -error messages for invalid options
    -spacing/separators to make it look nice
-prompts
    -number to decide which option using ifs
    - 1 adding a task/ create an item - prompt user for item to create
    - 2 mark task as complete - prompt user for which task is complete
    - 3 exit

-while loop
    -program has no known ending, so we want to be able to prompt them indefinitely/until they decide to exit

-display the to-do list to the user
    -completion status (complete or incomplete)
    -the name of the item 
    -the number associated with the item
    -loop to display each item in the toDo List


2. Add To-Do Items (choice === 1)
    -prompt for the to-do item
    -save the item by storing it in an array - .push()
    -an array to keep track of toDo items - global variable
    
2.5 - How do we set items to be incomplete
        -Any item on the list is [incomplete] until we mark it [complete]
        -whenever we add an item to the toDo List it is [incomplete] by default

        -array of booleans
        
        true = [complete]
        false = [incomplete]

        [true,      false,     true] status array
        [Walk dog,  get food,  run mile] toDoList array
        0           1           2       shared index

        let status = [];
        by default, when we add a new item, we want to add a false boolean to our status array.

3. Complete To-Do Items (choice === 2)
    -display current items in the toDo list with their current status
    -pick which toDO item to mark as complete - sway it's status from false to true
    -make sure we display the updated list right after

*/