/*  
Here is the exercise on working on the remaining bom method 

Location , Navigator , screen , Window 


Follow the Instruction on the comments 

1. Declare the UI Variables for selecting on the elements 
2. Use the innerHTML property to display the result on each element 
3. The Text  of the elements will lead you what bom information is required 

Adding Extra is Possible if you want to explore more ...

Good Luck !!! 
*/



// Define UI Variables  here 


const windoww = window.location
const pro = window.location.protocol
const host = window.location.host
const port = window.location.port
const hostn = window.location.hostname
const appname = window.navigator.appName
const appver = window.navigator.appVersion
const platfo = window.navigator.platform
const lang = window.navigator.language
const cookie = window.navigator.cookieEnabled
const height = window.screen.height
const width = window.screen.width
const depth = window.screen.pixelDepth
const hisle = window.history.length
const hisst = window.history.state



// Display the BOM Information on the innerHTML of the elements



document.getElementsByClassName("badge")[0].innerHTML = windoww;
document.getElementsByClassName("badge")[1].innerHTML = pro
document.getElementsByClassName("badge")[2].innerHTML = host
document.getElementsByClassName("badge")[3].innerHTML = port
document.getElementsByClassName("badge")[4].innerHTML = hostn
document.getElementsByClassName("badge")[5].innerHTML = appname
document.getElementsByClassName("badge")[6].innerHTML = appver
document.getElementsByClassName("badge")[7].innerHTML = platfo
document.getElementsByClassName("badge")[8].innerHTML = lang
document.getElementsByClassName("badge")[9].innerHTML = cookie
document.getElementsByClassName("badge")[10].innerHTML = height
document.getElementsByClassName("badge")[11].innerHTML = width
document.getElementsByClassName("badge")[12].innerHTML = depth
document.getElementsByClassName("badge")[13].innerHTML = hisle
document.getElementsByClassName("badge")[14].innerHTML = hisst









