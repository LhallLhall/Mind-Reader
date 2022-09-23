

## Variables
- resetBtn
- nextBtn
- goBtnText <!-- will probaby end up taking this off when trimming-->
- instructionText <!-- the text that is underneath the next btn. Grabs the id of the h1-->
- exampleText <!-- grabs the p element that is right below the next button-->
- subExampleText
- symbols

## state
- current page: integer 0
- symbolNum: integer 0
- num: empty array

## objects
1 mainPages []
  - instructionTextObj: " " <!-- "pick a number", "add both digits together to get a new number", "subtract your new number with the original number" would also maybe turn into the main display for all the symbols-->
  - ExampleText: " " <!-- I.E the "ex. 14 is 1 - 4 = 5" -->
  - nextBtnObj: " "
  - subExampleText


## functions
- updatePage()
  ~~~
  grab the target event
  If event target id == id of next btn
    add +1 to the PageNumber
    and check hideElements()

  If event target id == id of reset btn
    subtract 1 of the pageNumber
      and check hideElements()
  
  mainPages[pageNumber using an Index number] target obj string = num or symbol

  instructionText.innerHtml = mainPages[the index number of what pagenumber is currently on].instructionText (asks for the key in the obj to access the string attached)
  ~~~
- randomArrayShuffle <!--got this from online. no credit to me!-->

- randomizeSymbols()
  ~~~
  for loop that gets 01 - 99
    If its divisible by 9
      push out the 1st symbol
    
    Else
      push out the symbol with the index of symbolNum
      
      (to reset symbolNum so I get more than 9 number with symbols)
      If symbolNum > 9
        symbolNum = 9 
    symbolNum +1
  ~~~

- hideElements
  ~~~
  For reset Button
  IF pagenumber === 0
    classList.add hidden

  IF pageNumber > 0
    classList.remove hidden

  For next Button
  IF pagenumber === 5
    classList.add hidden
  
  If pagenumber < 5
    calsslist.remove hidden
  ~~~


### Procedures
- First: the first thing the js would check is the what page it was on (figure out how to do that using the mainPages obj) 
- Second: next thing would be to display all items for that page 
- Third: once "next" if on page "2" is clicked it resets page and checks what the next page is and applies said elements (could be a logic error with the reset and the +1 page num on click) 
  - Going deeper into the third. things that would be reset are [instructionText, exampleText, and the symbols for page 5.(would not be on pages)]
   - Going even deeper (ADD ON THIS)


- Have a function run on the next btn and reset btn click event listeners.
  - if pagenumber === 0 
    make style.display = none <!-- to make the btn invisible-->
    else pagenumber > whatever page the element doesnt need to be shown
    display the reset btn

### Random Symblos
- The first thing that would need to happen is the the numbers and the random symbols would display on page 5 out of 6.
- Secondly the numbers need to be random (thinking about doing a math.random function) and the "& " symbol has to always apply to a multiple of 9 but be random for every other number.
- Thirdly we need to go deeper. Firstly: how do we shuffle an array of strings. Secondly: how do we take that symbol and pair it with a number? (possibly for loop???)
- How do I concat the symbols and the array of number together so they can attach like 1 - #, 2 - ! etc...
