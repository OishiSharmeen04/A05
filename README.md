## Create Readme

### Answer the following questions clearly:

###1. What is the difference between **getElementById, getElementsByClassName, and querySelector, querySelectorAll**?
- **getElementById:** is used to selecting a single element using its unique id.
- **getElementsByClassName:** is used to selecting all elements within a class and it returns an HTMLCollection like an array but actually not an array.
- **querySelector:** returns the first element that matches with the selector.
- **querySelectorAll:** returns all the element that matches with the selector as a list.

###2. How do you **create and insert a new element into the DOM**?
- **create:** document.createElement() is used to create a new element in a code.
- **insert:** to insert this new element in DOM appendChild() function should be used over parent element.
- **example-** const div = document.createElement("span");
                div.textContent = "Hello";
                document.body.appendChild(span);

###3. What is **Event Bubbling** and how does it work?
- **Event Bubbling:** I want to explain it as a example. If I click a button inside any other html tag such as div the click event first happens on the button then it goes up to div then the body and the document.

###4. What is **Event Delegation** in JavaScript? Why is it useful?
- **Event Delegation:** It adds an event listener to a parent element instead of many child elements. It helps to handle all child elements using one event listener. That's why it can improve performance of a javascript code.

###5. What is the difference between **preventDefault() and stopPropagation()** methods?
- **preventDefault():** It stops the default action of an element.
- **stopPropagation():** It stops an event from bubbling up to parent elements.

---
