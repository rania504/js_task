typeof "42" //string
typeof 42 //number

//Exercise
//Which data type is each of these values? 
false //boolean
"true" //string
document.title //string
"some string".length //number
null //object

"supercalifragilisticexpialidocious".length //characters in this string=34
"super".length //characters in this string=5

"ALOHA"[0] //A
"ALOHA"[2] //O

//What's the index of a specific character?
"ALOHA".indexOf("L") //1
"ALOHA".indexOf("A") //0
"ALOHA".indexOf("Q") //-1 dosen't exist

//contain?
"ALOHA".includes("HA") //true
"ALOHA".includes("LOL") //false

//starts with?
"ALOHA".startsWith("AL") //true
"ALOHA".startsWith("HA") //false

"ALOHA".indexOf("HA") //3
"ALOHA".indexOf("LOL") //-1

//Connecting strings together
"ALOHA" + "!" //ALOHA!

"ALOHA".toLowerCase() //lowercase 

//Exercise
document.querySelector("#p1-name").textContent = "rania" +" "+"khalifa"

document.title.indexOf("T")

document.title.includes("JavaScript") //false

document.querySelector("header h1").style.textTransform = "uppercase"
document.querySelector("header h1").textContent=document.querySelector("header h1").textContent.toUpperCase()