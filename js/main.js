
 // this is the init phase
 // create variables and access html elements in global scope
let resetBtn = document.getElementById("resetBtn");
let nextBtn = document.getElementById("nextBtn");
let goBtnText = document.getElementById("nextBtn");
let instructionText = document.getElementById("instructionText");
let exampleText = document.getElementById("exampleText");
let subExampleText = document.getElementById("subExampleText");
let symbols = ["🤥", "😂", "🤩", "🤯" , "😳", "🫠", "🥴", "🤤","🥸", "👩‍💻", "😎", "🧑‍💻"]
// this is the state
// the state keeps the "current page" as an integer
// the mainPages array holds all of the page objects which can be called back to
let pageNumber = 0;
let num = []
let symbolNum = 0

let mainPages = [
    { // page 1
        "instructionTextObj": "I can read your mind!", 
        "nextBtnObj": "GO",
        "exampleText": "",
        "subExampleText": ""
        
    },
    { //page 2
        "instructionTextObj": "Pick a number from 01 - 99",
        "nextBtnObj": "Next",
        "exampleText": "when you have your number click next",
        "subExampleText": ""
        
    },
    { //page 3
        "instructionTextObj": "Add both digits together to get a new number",
        "nextBtnObj": "Next",
        "exampleText": "Ex: 14 is 1 + 4 = 5",
        "subExampleText": "click next to proceed",
    },
    { //page 4
        "instructionTextObj": "Subtract your new number from the original number",
        "nextBtnObj": "Next", 
        "exampleText": "Ex: 14 - 5 = 9",
        "subExampleText": "click next to proceed",
    },
    { //page 5
        "instructionTextObj": "",
        "nextBtnObj": "Reveal", 
        "exampleText": "Find your new number",
        "subExampleText": "Note the symbol beside the number",
    },
    { //page 6
        "instructionTextObj": "",
        "exampleText": "Your symbol is:",
        "subExampleText": ""
    }
];

// create the event listeners for the "on click" buttons
// call the updatePage method when selected button is clicked
nextBtn.addEventListener("click", updatePage);
resetBtn.addEventListener("click", updatePage);

// this is the return for the listener
function updatePage (e) {
    console.log(e.target.id)
    // assume we are on page 0
    // mainPages[0]
    // adjust the pageNumber we are on by +1, -1, or reset to 0
    if(e.target.id == "nextBtn"){
        pageNumber++;
        hideElements()
        // showNumber
        console.log(pageNumber)
    }
    
    if(e.target.id == "resetBtn"){
        pageNumber = 0;
        console.log(pageNumber)
        hideElements()
    }
    
    
    mainPages[4].instructionTextObj = num.toString().replaceAll(",","")
    mainPages[5].instructionTextObj = symbols[1]
    mainPages[5].subExampleText = symbols[1]
    // use the property values from the current page based on the mainPages index set by the pageNumber
    instructionText.innerHTML = mainPages[pageNumber].instructionTextObj;
    exampleText.innerHTML = mainPages[pageNumber].exampleText;
    nextBtn.innerHTML = mainPages[pageNumber].nextBtnObj;
    subExampleText.innerHTML = mainPages[pageNumber].subExampleText;
};
// figure out how to hide elements with a function
function hideElements () {
        // console.log(pageNumber)
        if(pageNumber === 0 ) {
            document.getElementById("resetBtn").classList.add("hidden")
        } 

        if (pageNumber > 0) {
            document.getElementById("resetBtn").classList.remove("hidden")
        } 
        
        if (pageNumber === 5) {
            document.getElementById("nextBtn").classList.add("hidden")
        } 
        
        if (pageNumber < 5) {
            document.getElementById("nextBtn").classList.remove("hidden")
        }

        if (pageNumber === 4) {
            document.getElementById("instructionText").classList.add("borderAlt")
        } 
        
        if(pageNumber !== 4) {
            document.getElementById("instructionText").classList.remove("borderAlt")
        }
}
hideElements()

//Found this array randomizer online (I DID NOT CREATE THIS!!!!!!)
function randomArrayShuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
randomArrayShuffle(symbols); 
console.log(randomArrayShuffle(symbols))


for(let i = 1; i <= 99; i++) {   
    if(i % 9 == 0){
        num.push(symbols[1] +  ' = ' + i +"<br/>" )
    } else {
        num.push(symbols[symbolNum] + ' = ' + i + "<br/>" )
        if(symbolNum > 9){
            symbolNum = 0
        }
    }
    symbolNum++
}
console.log(num)
