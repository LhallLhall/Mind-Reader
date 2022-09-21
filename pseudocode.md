## questions for Logan
- how to call upon an array or even what to do with it <!-- maybe look back at previous projects>
- need to figure out how many variables i will need
- need to understand what state is more clearly
- 

## Variables
- resetBtn
- nextBtn
- goBtn
- symbols

## state
- symbols: [](9)
- randomized sum: [](100)
- answer sum : integer
- current page:

## objects
- mainPages []
  - instructionText: " " <!-- "pick a number", "add both digits together to get a new number", "subtract your new number with the original number" would also maybe turn into the main display for all the symbols-->
  - ExampleText: " " <!-- I.E the "ex. 14 is 1 - 4 = 5" -->
  - pageNum: 0 <!-- page num would be updated//+1 on the "next" btn click. if the reset button on click it would -1-->
  - btnText: " "
  - headerText: " "
-

## functions
- updatePage()
  - 
- RandomizeSymbols()
- reset()
- nextPage()
- init()

<!-- first thing the js would check is the what page it was on (figure out how to do that using the mainPages obj) -->
<!-- second thing would be to display all items for that page -->
<!-- thirdly once "next" or "go" if on page 1 is clicked it resets page and checks what the next page is and applies said elements (could be a logic error with the reset and the +1 page num on click) -->
<!-- going deeper into the third. things that would be reset are [example text (would not be on pages )] -->