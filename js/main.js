
 // this is the init phase
 // create variables and access html elements in global scope
let nextBtn = document.getElementById("nextBtn");
let goBtnText = document.getElementById("nextBtn")
// let prevBtn = document.getElementById("prevBtn");
let resetBtn = document.getElementById("resetBtn");
// let resetBtnText = document.getElementById("resetBtn");
let instructionText = document.getElementById("instructionText");
let exampleText = document.getElementById("exampleText");

// this is the state
// the state keeps the "current page" as an integer
// the mainPages array holds all of the page objects which can be called back to
let pageNumber = 0;

let mainPages = [
    { // page 1
        "instructionText": "first page Header", 
        // "exampleText": "this is the first page Example text"
        "nextBtn": "GO",
    },
    { //page 2
        "instructionText": "second page Header",
        "nextBtn": "Next",
        "exampleText": "this is the second page Example text"
    },
    { //page 3
        "instructionText": "third page Header",
        "nextBtn": "Next",
        "exampleText": "this is the third page Example text"
    },
    { //page 4
        "instructionText": "fourth page Header",
        "nextBtn": "Next", 
        "exampleText": "this is the fourth page Example text"
    },
    { //page 5
        "instructionText": "fifth page Header", //will need the randomized symbols pushed into it (MAYBE (along with a stirng of numbers))
        "nextBtn": "Reveal", 
        "exampleText": "this is the fifth page Example text"
    },
    { //page 6
        "instructionText": "sixth page Header",
        "nextBtn": "blah", 
        "exampleText": "this is the sixth page Example text"
    }
];

// create the event listeners for the "on click" buttons
// call the updatePage method when any button is clicked
nextBtn.addEventListener("click", updatePage);
resetBtn.addEventListener("click", updatePage);
// prevBtn.addEventListener("click", updatePage);

// this is the return for the listener
function updatePage (e) {
    // console.log(e.target.id)
    // assume we are on page 0
    // mainPages[0]
    
    // adjust the pageNumber we are on by +1, -1, or reset to 0
    // if e.target.id == "nextBtn"
    if(e.target.id == "nextBtn"){
        pageNumber++;
        
    }
    
    // if e.target.id == "prevBtn"
    // if(e.target.id == "prevBtn"){
        //     pageNumber--;
        // }
        
        // if e.target.id == "resetBtn"
        if(e.target.id == "resetBtn"){
            pageNumber = 0;
            // document.getElementById("resetBtn").style.display = "none";
        }
        
        // use the property values from the current page based on the mainPages index set by the pageNumber
        instructionText.textContent = mainPages[pageNumber].instructionText;
        exampleText.textContent = mainPages[pageNumber].exampleText;
        nextBtn.textContent = mainPages[pageNumber].nextBtn;
        
    };
    // figure out how to hide elements with a function
    // defintely could be a simplier way to do this with the object
    function hideElements () {
        // console.log(pageNumber)
        if(pageNumber === 0 ) {
            console.log(pageNumber)
            // let resetBtnTest = document.createElement("button")
            // resetBtnTest.setAttribute("id", "resetBtn1");
            document.getElementById("resetBtn").style.visibility = "none"
        }// if (pageNumber > 0) {
        //     document.getElementById("resetBtn").classList.remove("hidden")
        // }
    }
    hideElements()
    
    