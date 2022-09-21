
 // this is the init phase
 // create variables and access html elements in global scope
let resetBtn = document.getElementById("resetBtn");
let resetBtnLogo = document.getElementById("resetBtnLogo");
let nextBtn = document.getElementById("nextBtn");
let goBtnText = document.getElementById("nextBtn");
// let resetBtn = document.getElementById("resetBtn");
let instructionText = document.getElementById("instructionText");
let exampleText = document.getElementById("exampleText");
let subExampleText = document.getElementById("exampleText");

// this is the state
// the state keeps the "current page" as an integer
// the mainPages array holds all of the page objects which can be called back to
let pageNumber = 0;

let mainPages = [
    { // page 1
        "instructionText": "I can read your mind!", 
        "nextBtn": "GO",
        
    },
    { //page 2
        "instructionText": "Pick a number from 01 - 99",
        "nextBtn": "Next",
        "exampleText": "when you have your number click next",
        
    },
    { //page 3
        "instructionText": "Add both digits together to get a new number",
        "nextBtn": "Next",
        "exampleText": "Ex: 14 is 1 + 4 = 5",
        "subExampleText": "click next to proceed",
    },
    { //page 4
        "instructionText": "Subtract your new number from the original number",
        "nextBtn": "Next", 
        "exampleText": "Ex: 14 - 5 = 9",
        "subExampleText": "click next to proceed",
    },
    { //page 5
        "instructionText": "0 - & 1 - @ 2 - $ 3 - B", //will need the randomized symbols pushed into it (MAYBE (along with a stirng of numbers))
        "nextBtn": "Reveal", 
        "exampleText": "Find your new number",
        "subExampleText": "Note the symbol beside the number",
    },
    { //page 6
        "instructionText": "&",
        // "nextBtn": "blah", 
        "exampleText": "Your symbol is:",
        "subExampleText": "&"
    }
];

// create the event listeners for the "on click" buttons
// call the updatePage method when any button is clicked
nextBtn.addEventListener("click", updatePage);
resetBtn.addEventListener("click", updatePage);
// prevBtn.addEventListener("click", updatePage);

// this is the return for the listener
function updatePage (e) {
    console.log(e.target.id)
    // assume we are on page 0
    // mainPages[0]
    
    // adjust the pageNumber we are on by +1, -1, or reset to 0
    // if e.target.id == "nextBtn"
    if(e.target.id == "nextBtn"){
        pageNumber++;
        hideElements()
        console.log(pageNumber)
    }
    
        
        // if e.target.id == "resetBtn"
    if(e.target.id == "resetBtn"){
        pageNumber = 0;
        console.log(pageNumber)
        hideElements()
    }

    if(e.target.id == "resetBtnLogo"){
        pageNumber = 0;
        console.log(pageNumber)
        hideElements()
    }
        
        // use the property values from the current page based on the mainPages index set by the pageNumber
    instructionText.textContent = mainPages[pageNumber].instructionText;
    exampleText.textContent = mainPages[pageNumber].exampleText;
    nextBtn.textContent = mainPages[pageNumber].nextBtn;
    subExampleText.textContent = mainPages[pageNumber].subExampleText;
        
    };
    // figure out how to hide elements with a function
    // maybe a simplier way to do this with the object???
    function hideElements () {
        // console.log(pageNumber)
        if(pageNumber === 0 ) {
            console.log(pageNumber)
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
    }
    hideElements()
    
    