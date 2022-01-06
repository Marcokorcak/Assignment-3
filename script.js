//1) Select the section with an id of container without using querySelector.
const idContainer = (document.getElementById("container"));
console.log(idContainer); //logs the id container

// 2) Select the section with an id of container using querySelector.
const selectContainer = (document.querySelector("#container"));
console.log(selectContainer); //logs the slected conatiner

//3) Select all of the list items with a class of "second".
const classSecond = (document.getElementsByClassName("second"));
console.log(classSecond); //logs the class called second

// 4) Select a list item with a class of third, but only the list item inside of the ol tag.
const classOlThird = (document.querySelector("ol .third"));
console.log(classOlThird); //

// 5) Give the section with an id of container the text "Hello!".
//This code goes conflicts with question 10 so it is commented out 

 //document.getElementById("container").innerText = "Hello"; 

// 6) Add the class main to the div with a class of footer.
const footer = document.querySelector(".footer"); //sets the query selector to a vairable
footer.classList.add("main"); //adds the main class to the div with a class of footer
console.log(footer); //logs the variable

// 7) Remove the class main on the div with a class of footer.
footer.classList.remove("main"); //removes the class main on the div with a class of footer
console.log(footer); //logs the footer

// 8) Create a new li element.
const newLi = document.createElement("li"); //creates a new li element
console.log(newLi); //logs the variable


// 9) Give the li the text "four".
console.log(newLi.innerText = "four"); //logs the li text "four"


// 10) Append the li to the ul element.
let codeAppend = document.querySelector("ul"); //created a variable that appends li to the ul element
console.log(codeAppend.appendChild(newLi)); 


// 12) Loop over all of the lis inside the ol tag and give them a background color of "green".
const listLoop = document.querySelectorAll("ol li");
for(let i = 0 ; i < listLoop.length; i++) { //used to loop over
    listLoop[i].style.backgroundColor = "green"; //gives background color of green
}

// 13) Remove the div with a class of footer.
const divRemote = document.querySelector(".footer"); //removes the div with a class of footer
console.log(divRemote.remove()); 