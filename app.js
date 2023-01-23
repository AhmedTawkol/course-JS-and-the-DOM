const nanodegreeCard = document.querySelector('.card');
nanodegreeCard.textContent = "I will be the updated text for the nanodegreeCard element!";


myElement.innerHTML = 'The <strong>Greatest</strong> Ice Cream Flavors';  // works as expected


<h1 id="pick-me">Greetings To <span>All</span>!</h1>

const innerResults = document.querySelector('#pick-me').innerHTML;
console.log(innerResults); // logs the string: "Greetings To <span>All</span>!"

const outerResults = document.querySelector('#pick-me').outerHTML;
console.log(outerResults); // logs the string: "<h1 id="pick-me">Greetings To <span>All</span>!</h1>"


// create a brand new <span> element
const newSpan = document.createElement('span');

// select the first (main) heading of the page
const mainHeading = document.querySelector('h1');

// add the <span> element as the last child element of the main heading
mainHeading.appendChild(newSpan);


//Creating Text Nodes
const myPara = document.createElement('p');
const textOfParagraph = document.createTextNode('I am the text for the paragraph!');

myPara.appendChild(textOfParagraph);
document.body.appendChild(myPara);

//However, since you already know about the .textContent property, the code below will provide the exact same result:
const myPara = document.createElement('p');

myPara.textContent = 'I am the text for the paragraph!';
document.body.appendChild(myPara);

/*
//Inserting HTML In Other Locations
//Enter the .insertAdjacentHTML() method! The .insertAdjacentHTML() method has to be called with two arguments:

the location of the HTML
the HTML text that is going to be inserted
The first argument to this method will let us insert the new HTML in one of four different locations

beforebegin – inserts the HTML text as a previous sibling
afterbegin – inserts the HTML text as the first child
beforeend – inserts the HTML text as the last child
afterend – inserts the HTML text as a following sibling

A visual example works best, and MDN's documentation has a fantastic example that I'll modify slightly:

<!-- beforebegin -->
<p>
    <!-- afterbegin -->
    Existing text/HTML content
    <!-- beforeend -->
</p>
<!-- afterend -->

*/
/*
Here's how we'd call .insertAdjacentHTML():

const mainHeading = document.querySelector('#main-heading');
const htmlTextToAdd = '<h2>Skydiving is fun!</h2>';

mainHeading.insertAdjacentHTML('afterend', htmlTextToAdd);

*/
//At 0:22 seconds, the instructor says "... this has to be text, not HTML. If you pass HTML, then that HTML will actually be displayed". There is a correction:

//The second argument text of insertAdjacentHTML() method parses the specified text as HTML and inserts the resulting nodes into the DOM tree at a specified position.

//*remove page content :
/*
Removing a Child Element
We can use the .removeChild() method to...wait for it...remove a child element. Basically, this is exactly the opposite of the .appendChild() method. So just like the .appendChild() method, the .removeChild() method requires:

a parent element
the child element that will be removed
<parent-element>.removeChild(<child-to-remove>);
Here's the .removeChild() documentation page on MDN: removeChild docs
*/
//Let's walk through this code.

const mainHeading = document.querySelector('h1');
//The preceding code will select the first <h1> on the page and stores it in the mainHeading variable. Now to the next line:

mainHeading.parentElement.removeChild(mainHeading);
//This starts with the mainHeading variable. It calls .parentElement, so the focus of the next code is directed at the parent element. Then .removeChild() is called on the parent element. Finally, mainHeading itself is passed as the element that needs to be removed from its parent.
//So an element uses itself to remove itself from its parent. Pretty cool, huh?

//Removing a Child Element (Part 2!) :
//Now, you might be glad (or frustrated! haha) to find out there's an easier way to do all this! We can remove the child element directly with the .remove() method:
const mainHeading = document.querySelector('h1');

mainHeading.remove();
/*
Remove Page Content Recap : 
Remove Page Content Recap
In this short section, we learned two ways to remove an element from the page. You learned about:

.removeChild()
.remove()
The difference is that with .removeChild() must be called on the parent of the element being removed and must be passed the child to be removed, while .remove() can be called directly on the element to delete.

We also learned about the following helpful properties:

.firstChild
.firstElementChild
.parentElement
The difference between .firstChild and .firstElementChild, is that .firstElementChild will always return the first element, while .firstChild might return whitespace (if there is any) to preserve the formatting of the underlying HTML source code.

Further Research
removeChild on MDN
remove on MDN
firstChild on MDN
firstElementChild on MDN
parentElement on MDN
Creating Content with JavaScript
*/
/styling page content :
//we can access an element's style attribute using the .style property!
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'red';

//Write the JavaScript code to set the width of element to 50%;
const MyE = document.queryselector("p");
MyE.style.width = 50% ;
//Adding Multiple Styles At Once
const mainHeading = document.querySelector('h1');

mainHeading.style.color = 'blue';
mainHeading.style.backgroundColor = 'orange';
mainHeading.style.fontSize = '3.5em';

//or this better :
const mainHeading = document.querySelector('h1');

mainHeading.style.cssText = 'color: blue; background-color: orange; font-size: 3.5em';

//Another way to set styles for an element is to bypass the .style.<property> and .style.cssText properties altogether and use the .setAttribute() method:

const mainHeading = document.querySelector('h1');

mainHeading.setAttribute('style', 'color: blue; background-color: orange; font-size: 3.5em;');

//The setAttribute() method is not just for styling page elements. You can use this method to set any attribute for an element. If you want to give an element an ID, you can do that!:

const mainHeading = document.querySelector('h1');

// add an ID to the heading's sibling element
mainHeading.nextElementSibling.setAttribute('id', 'heading-sibling');

// use the newly added ID to access that element
document.querySelector('#heading-sibling').style.backgroundColor = 'red';

//The last two lines could've been combined into one to bypass setting an ID and just styling the element directly:

mainHeading.nextElementSibling.style.backgroundColor = 'red';

//Accessing an Element's Classes :
<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>

//We could use .className to access the list of classes:

const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.className;

// logs out the string "ank-student jpk-modal"
console.log(listOfClasses);

//The .className property returns a space-separated string of the classes. This isn't the most ideal format, unfortunately. We can, however, convert this space-separated string into an array using the JavaScript string method, .split():

const arrayOfClasses = listOfClasses.split(' ');

// logs out the array of strings ["ank-student", "jpk-modal"]
console.log(arrayOfClasses);

//.className is a property, so we can set its value just by assigning a string to the property:

mainHeading.className = "im-the-new-class";

//The .classList property is newer than the .className property, but is much nicer, check it out:

<h1 id="main-heading" class="ank-student jpk-modal">Learn Web Development at Udacity</h1>
/
const mainHeading = document.querySelector('#main-heading');

// store the list of classes in a variable
const listOfClasses = mainHeading.classList;

// logs out ["ank-student", "jpk-modal"]
console.log(listOfClasses);

/*
The .classList property has a number of properties of its own. Some of the most popularly used ones are:

.add() - to add a class to the list
.remove() - to remove a class from the list
.toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
.contains() - returns a boolean based on if the class exists in the list or not
*/

/*
Style Page Content Recap
We learned a ton of content in this section! We looked at:

modifying individual styles with .style.<prop>
updating multiple styles at once with .style.cssText
getting/setting a list of classes with .className
getting/setting/toggling CSS classes with .classList
My recommendation to you is that, out of the list of techniques you learned in this section, to use the .classList property more than any other. .classList is by far the most helpful property of the bunch, and it helps to keep your CSS styling out of your JavaScript code.

Further Research
style on MDN
Article: Using dynamic styling information
DOM methods to control styling
nextElementSibling on MDN
className on MDN
classList on MDN
Specificity on MDN
Creating Content with JavaScript
*/


//Working with Browser Events :
/*
In this video, you saw the following events:

click
dblclick
scroll
resize
*/
//if you want to see events of any page on google chrome, type this in the console :
monitorEvents(document);
//see this too
// start displaying all events on the document object
monitorEvents(document);

// turn off the displaying of all events on the document object.
unmonitorEvents(document);

//One last little bit of info on monitorEvents is that this is for development/testing purposes only. It's not supposed to be used for production code.

//Respond to events :
// The Node Interface inherits from the EventTarget Interface.
/*
the EventTarget is at the top of the chain. This means that it does not inherit any properties or methods from any other interfaces. However, every other interface inherits from it and therefore contain its properties and methods. This means that each of the following is an "event target";

the document object
a paragraph element
a video element
etc.
*/
/*
If you take a look at the EventTarget Interface, you'll notice that it doesn't have any properties and only three methods! These methods are:

.addEventListener()
.removeEventListener()
.dispatchEvent()

Adding An Event Listener
We've taken a brief look at this hidden world of events. Using the .addEventListener() method will let us listen for events and respond to them! I just said "listen for events". There are several ways to "phrase" this, ...all of these mean the same thing and are interchangeable with one another.
*/

/*
So an event listener needs three things:

The <event-target> (i.e. the target) goes right back to what we just looked at: everything on the web is an event target (e.g. the document object, a <p> element, etc.).

The <event-to-listen-for> (i.e. the type) is the event we want to respond to. It could be a click, a double click, the pressing of a key on the keyboard, the scrolling of the mouse wheel, the submitting of a form...the list goes on!

The <function-to-run-when-an-event-happens> (i.e. the listener) is a function to run when the event actually occurs.
*/
//Let's transform the pseudo-code to a real example of an event listener:

const mainHeading = document.querySelector('h1');

mainHeading.addEventListener('click', function () {
  console.log('The heading was clicked!');
});

//This code will successfully add and then remove an event listener:

function myEventListeningFunction() {
    console.log('howdy');
}

// adds a listener for clicks, to run the `myEventListeningFunction` function
document.addEventListener('click', myEventListeningFunction);

// immediately removes the click listener that should run the `myEventListeningFunction` function
document.removeEventListener('click', myEventListeningFunction);

//the phases of an event! : 
/*
There are three different phases during the lifecycle of an event. They are:

the capturing phase
the at target phase
and the bubbling phase
*/
//The code below uses .addEventListener() with only two arguments, so it will invoke the listener during the bubbling phase:
document.addEventListener('click', function () {
   console.log('The document was clicked');
});

//However, in this code, .addEventListener() is called with three arguments with the third argument being true (meaning it should invoke the listener earlier, during the capturing phase!).

document.addEventListener('click', function () {
   console.log('The document was clicked');
}, true);

//The Event Object
document.addEventListener('click', function (event) {  // ← the `event` parameter is new!
   console.log('The document was clicked');
//💡 An "event" is an "evt" is an "e" 💡
const items = document.querySelectorAll('.quizzing-quizzes');
const el = items[1];

el.addEventListener('keypress', function (event) {
    console.log('You clicked on the 2nd quizzing-quizzes item!');
});

//Without the event object, we're stuck with the default actions. However, the event object has a .preventDefault() method on it that a handler can call to prevent the default action from occurring!

const links = document.querySelectorAll('a');
const thirdLink = links[2];

thirdLink.addEventListener('click', function (event) {
    event.preventDefault();
    console.log("Look, ma! We didn't navigate to a new page!");
});

//Working with Browser Events
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', function respondToTheClick(evt) {
        console.log('A paragraph was clicked.');
    });

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
//it will create 200 eventListeners because of the for loop

//Refactoring The Number of Event Listeners

//For example, as of right now, we're creating two hundred different respondToTheClick functions (that all actually do the exact same thing!). We could extract this function and just reference the function instead of creating two hundred different functions:
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    newElement.addEventListener('click', respondToTheClick);

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

//What if we moved all of the listeners to the <div> instead? , let's do it :
const myCustomDiv = document.createElement('div');

function respondToTheClick() {
    console.log('A paragraph was clicked.');
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

myCustomDiv.addEventListener('click', respondToTheClick);

document.body.appendChild(myCustomDiv);

//Event Delegation
//So event.target gives us direct access to the paragraph element that was clicked. Because we have access to the element directly, we can access its .textContent, modify its styles, update the classes it has - we can do anything we want to it!

const myCustomDiv = document.createElement('div');

function respondToTheClick(evt) {
    console.log('A paragraph was clicked: ' + evt.target.textContent);
}

for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);

myCustomDiv.addEventListener('click', respondToTheClick);

//In this filler text, notice that there are some <span> tags. If we want to listen to the <article> for a click on a <span>, this would work well:
document.querySelector('#content').addEventListener('click', function (evt) {
    if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
        console.log('A span was clicked with text ' + evt.target.textContent);
    }
});
/*
//The .nodeName property will return an uppercase string, not a lowercase one. So when you perform your check make sure to either:

//check for capital letters
//convert the .nodeName to lowercase
*/
// check using capital letters
//Add this :
if (evt.target.nodeName === 'SPAN') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

> // convert nodeName to lowercase
if (evt.target.nodeName.toLowerCase() === 'span') {
    console.log('A span was clicked with text ' + evt.target.textContent);
}

// Know when The DOM is ready :
//The Content Is Loaded Event
document.addEventListener('DOMContentLoaded', function () {
    console.log('the DOM is ready to be interacted with!');
});
/*
//Using the DOMContentLoaded Event
//Because we now know about the DOMContentLoaded event, we can use it to keep our JS code in the <head>.
*/
//Let's update the previous HTML code to include this event:
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="/css/styles.css" />
    <script>
      document.addEventListener('DOMContentLoaded', function () {
          document.querySelector('footer').style.backgroundColor = 'purple';
      });
    </script>

//Add Page Content Efficiently:
//Using A Loop To Add Content :
//Let's take another look at the for loop, but this time without all of the event listener stuff:
for (let i = 1; i <= 200; i++) {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is paragraph number ' + i;

    document.body.appendChild(newElement);
}

//We can do it in the right way as this : 
const myCustomDiv = document.createElement('div');

for (let i = 1; i <= 200; i++) {
  const newElement = document.createElement('p');
  newElement.innerText = 'This is paragraph number ' + i;

  myCustomDiv.appendChild(newElement);
}

document.body.appendChild(myCustomDiv);
/*
//fragment
Changes made to a DocumentFragment happen off-screen; there's no reflow and repaint cost while you build this. So this is exactly what we need!

We can use the .createDocumentFragment() method to create an empty DocumentFragment object. This code should be very familiar to you, because it looks so very similar to document.createElement().
*/
//Let's rewrite our code to use a DocumentFragment instead of the <div>.

const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

for (let i = 0; i < 200; i++) {
    const newElement = document.createElement('p');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment); // reflow and repaint here -- once!

//new example : we could hide #comments, delete the spam, and show it again -- that's surprisingly fast, to the cost of one reflow and two repaints (and little else). It's fast because hiding doesn't change the layout, it just erases that section of the screen (1 repaint). When you make the changed section visible again, that's a reflow and a repaint. as this : 
// hide #comments
document.getElementById("comments").style.display = "none";

// delete spam comments

// show #comments
document.getElementById("comments").style.display = "block";

//The Call Stack
//Ok, so JavaScript can "process" one command at a time. The opposite of single-threading, is multithreading. There are numerous pros and cons to both which we won't be getting into (feel free to check out the Wikipedia article on Threading for more info about the pros and cons). We're going to take a look at JavaScript's single-threaded model and how/why we should write our code to take advantage of it.

//Let's look at some code:
function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');
    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();
appendNewMessage();

//What if we changed this code slightly to create nested functions:

function addParagraph() {
    const para = document.createElement('p');
    para.textContent = 'JavaScript is single threaded!';

    appendNewMessage();
    document.body.appendChild(para);
}

function appendNewMessage() {
    const para = document.createElement('p');

    para.textContent = "Isn't that cool?";
    document.body.appendChild(para);
}

addParagraph();

//Notice that the call to appendNewMessage() is located inside the addParagraph() function. First, addParagraph() is invoked. Then appendNewMessage() is invoked on line 5. Once appendNewMessage() has finished running, execution returns and finishes running the last line of code in the addParagraph() function...but how does it know how to do that? How does the JavaScript engine know where it left off and how to get back to it?

//The Call Stack
//The JavaScript engine keeps a call stack (basically a list) of the functions that are running. When a function is invoked, it is added to the list. When all of the code inside a function has been run, then the function is removed from the call stack. The cool part about a call stack is that a function doesn't have to complete before another function is added to the call stack.


//The Event loop
//Code Synchronicity
//All of the code we've been looking at runs in order, at the same time. Functions are added to the call stack, and then removed from the call stack when they've completed. However, there is some code that is not synchronous - meaning that the code is written just like any other code, but it is executed at some later point in time. Does this sound familiar at all? You've just been working with it:

const links = document.querySelectorAll('input');
const thirdField = links[2];

thirdField.addEventListener('keypress', function handleKeyPresses(event) {
    console.log('a key was pressed');
});

//















