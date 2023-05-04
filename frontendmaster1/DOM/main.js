document //the current document that we're looing at
document.title //this represent the title of the document
document.body //this represent the body element in html
document.body.children //it gives us all the elements within the body

document.getElementById("board") //it gets the (first) element with id="board"
document.querySelector("#board") //the same

document.getElementsByTagName("h1") //gets all h1 elements
document.querySelectorAll("h1")

document.getElementsByClassName("player") //gets all elements with class="player"
document.querySelectorAll(".player")

document.getElementsByClassName("player").length //gets the number of elements with class="player"
document.querySelectorAll(".player").length

document.getElementById("p1-name").textContent //gets the text inside the element with class="p1-name"

//Exercise
document.getElementsByTagName("p")
document.getElementById("p1-symbol").textContent
document.getElementsByClassName("square").length
document.querySelector("h2").textContent

//editing DOM
document.title = "My Page" //changes the page title
document.getElementById("p1-name").textContent = "Sofia" //replace the text of the #p1-name element
document.getElementById("p1-name").append(" & friends") //add to the end of the current element text

//Exercise
document.getElementById("p1-name").textContent="rania"
document.querySelector("#p2-name").textContent="neighbor"

document.getElementById("p1-symbol").textContent="O"
document.getElementById("p2-symbol").textContent="X"

document.querySelector("h2").textContent="A game you know and love"
//or
document.querySelector("header h2").append(" and love")
