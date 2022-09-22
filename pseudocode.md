## questions for Logan
- 

## Variables
- resetBtn
- nextBtn
- goBtnText <!-- will probaby end up taking this off when trimming-->
- instructionText <!-- the text that is underneath the next btn. Grabs the id of the h1-->
- exampleText <!-- grabs the p element that is right below the next button-->
- subExampleText
- symbols

## state
- symbols: [](9)
- current page: integer

## objects
1 mainPages []
  - instructionText: " " <!-- "pick a number", "add both digits together to get a new number", "subtract your new number with the original number" would also maybe turn into the main display for all the symbols-->
  - ExampleText: " " <!-- I.E the "ex. 14 is 1 - 4 = 5" -->
  - nextBtn: " "
  - subExampleText


## functions
- updatePage()
  ~~~
  if target id == id of btn
    add +1 to the PageNumber
    and check hideElements()

  If target id == id of reset btn
    subtract 1 to the pageNumber
      and check hideElements()
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


have a funciton run on the next btn and reset btn click event listeners that does
if pagenumber === 0 
  make style.display = none <!-- to make the btn ivisible-->
  else pagenumber > whatever page the element doesnt need to be shown
   display the reset btn

### Random Symblos
the first thing that would need to happen is the the numbers and the random symbols would display on page 5 out of 6.
secondly the numbers need to be random (thinking about doing a math.random function) and the "& " symbol has to always apply to a multiple of 9 but be random for every other number.
thirdly we need to go deeper. Firstly: how do we shuffle an array of strings. Secondly: how do we take that symbol and pair it with a number? (possibly for loop???)
How do I concat the symbols and the array of number together so they can attach like 1 - #, 2 - ! etc...
