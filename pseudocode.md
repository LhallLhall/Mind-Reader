## questions for Logan
- 

## Variables
- resetBtn
- nextBtn
- goBtn
- goBtnText <!-- will probaby end up taking this off when trimming-->
- symbols
- instructionText <!-- the text that is underneath the next btn. Grabs the id of the h1-->
- exampleText <!-- grabs the p element-->

## state
- symbols: [](9)
- randomized sum: [](100)
- answer sum : integer
- current page: integer

## objects
1 mainPages []
  - instructionText: " " <!-- "pick a number", "add both digits together to get a new number", "subtract your new number with the original number" would also maybe turn into the main display for all the symbols-->
  - ExampleText: " " <!-- I.E the "ex. 14 is 1 - 4 = 5" -->
  - pageNum: 0 <!-- page num would be updated//+1 on the "next" btn click. if the reset button on click it would -1-->
  - btnText: " "
  - headerText: " "
-

## functions
- updatePage()
  ~~~
  if target id == id of btn
    add +1 to the PageNumber

  If target id == id of reset btn
    subtract 1 to the pageNumber
  ~~~
- RandomizeSymbols()
  ~~~

  ~~~
- reset() <!-- tbd -->
- nextPage()<!-- tbd -->
- init()

- First: the first thing the js would check is the what page it was on (figure out how to do that using the mainPages obj) 
- Second: next thing would be to display all items for that page 
- Third: once "next" if on page "2" is clicked it resets page and checks what the next page is and applies said elements (could be a logic error with the reset and the +1 page num on click) 
  - Going deeper into the third. things that would be reset are [instructionText, exampleText, and the symbols for page 5.(would not be on pages)]
   - Going even deeper 
- Fourth: when 


when on page "1" run a function that 
if pagenumber === 0 
  make style.display = none <!-- to make the btn ivisible-->
  else pagenumber > 0
   display the btn


<!-- If page == 1 
  make a variable that hides html elements when called
  or get element by id  -->