1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById selects one element using its ID.
getElementsByClassName  selects elements using a class name and can return many elements.
querySelector  selects the first element that matches a CSS selector.
querySelectorAll  selects all elements that match a CSS selector
2. How do you create and insert a new element into the DOM?

First  create an element using createElement().
Then add text using textContent.
Then insert it into the page using appendChild().
Example:
const p = document.createElement("p");
p.textContent = "Hello";
document.body.appendChild(p);

3. What is Event Bubbling?

Event Bubbling means when we click a child element, the event also goes to its parent element.
The event moves from inside to outside.

4. What is Event Delegation?

Event Delegation means adding one event listener to a parent instead of adding many listeners to child elements.
It makes the code faster and cleaner.

5. Difference between preventDefault() and stopPropagation()?

preventDefault() stops the browser’s default action (like form submit).
stopPropagation() stops the event from going to parent elements.

