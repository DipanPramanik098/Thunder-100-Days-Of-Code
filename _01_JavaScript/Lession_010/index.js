/*
=========================================
DOM MASTERCLASS
=========================================
*/

/*
=========================================
1. WINDOW OBJECT
=========================================

window is the global object.

Everything lives inside window.

window
 └── document
      └── html
           └── body
                └── elements
*/

console.log(window);
console.log(document);



/*
=========================================
2. SELECTING ELEMENTS
=========================================
*/


/*
-----------------------------------------
A. getElementById()
-----------------------------------------

Returns ONE element.

Best when ID is unique.
*/

const title =
document.getElementById("main-title");

console.log(title);


/*
-----------------------------------------
B. getElementsByClassName()
-----------------------------------------

Returns HTMLCollection.

HTMLCollection is array-like.
*/

const techItems =
document.getElementsByClassName(
    "tech-item"
);

console.log(techItems);


/*
-----------------------------------------
C. getElementsByTagName()
-----------------------------------------

Returns HTMLCollection.
*/

const allLi =
document.getElementsByTagName("li");

console.log(allLi);


/*
-----------------------------------------
D. querySelector()
-----------------------------------------

Returns FIRST matching element.
Uses CSS selectors.
*/

const firstTech =
document.querySelector(".tech-item");

console.log(firstTech);


/*
-----------------------------------------
E. querySelectorAll()
-----------------------------------------

Returns ALL matching elements.

Returns NodeList.
*/

const allTechs =
document.querySelectorAll(".tech-item");

console.log(allTechs);


/*
-----------------------------------------
F. getElementsByName()
-----------------------------------------
*/

const usernameInput =
document.getElementsByName(
    "username"
);

console.log(usernameInput);



/*
=========================================
3. CONTENT PROPERTIES
=========================================
*/


/*
-----------------------------------------
textContent
-----------------------------------------

Gets ONLY text.

Ignores HTML.
*/

const description =
document.getElementById("description");

console.log(
    description.textContent
);


/*
Change Text
*/

title.textContent =
"DOM Manipulation Tutorial";


/*
-----------------------------------------
innerHTML
-----------------------------------------

Returns HTML + Text.
*/

console.log(
    description.innerHTML
);


/*
Add HTML Dynamically
*/

description.innerHTML =
"This paragraph now has <strong>NEW HTML</strong>";



/*
-----------------------------------------
innerText
-----------------------------------------

Returns visible text.

CSS aware.
*/

console.log(
    description.innerText
);



/*
=========================================
4. ATTRIBUTE MANIPULATION
=========================================
*/


const container =
document.getElementById(
    "main-container"
);


/*
Read ID
*/

console.log(container.id);


/*
Change ID
*/

container.id =
"updated-container";


/*
Read Class
*/

console.log(
    container.className
);



/*
=========================================
5. classList
=========================================

Modern way to handle classes.
*/


/*
Add Class
*/

container.classList.add(
    "dark-mode"
);


/*
Remove Class
*/

container.classList.remove(
    "container"
);


/*
Toggle Class
*/

container.classList.toggle(
    "active"
);


/*
Check Class
*/

console.log(
    container.classList.contains(
        "active"
    )
);



/*
=========================================
6. getAttribute()
=========================================
*/


/*
Create Custom Attribute
*/

container.setAttribute(
    "data-course",
    "javascript"
);


/*
Read Attribute
*/

console.log(
    container.getAttribute(
        "data-course"
    )
);


/*
Remove Attribute
*/

container.removeAttribute(
    "data-course"
);



/*
=========================================
7. STYLE MANIPULATION
=========================================
*/

title.style.color = "yellow";

title.style.fontSize = "50px";

title.style.backgroundColor =
"black";

title.style.padding = "10px";


/*
Important:

background-color

becomes

backgroundColor

font-size

becomes

fontSize
*/



/*
=========================================
8. DOM TRAVERSAL
=========================================
*/


const techList =
document.getElementById(
    "tech-list"
);


/*
Parent
*/

console.log(
    techList.parentElement
);


/*
Children
*/

console.log(
    techList.children
);


/*
First Child
*/

console.log(
    techList.firstElementChild
);


/*
Last Child
*/

console.log(
    techList.lastElementChild
);



/*
=========================================
9. SIBLINGS
=========================================
*/


const specialItem =
document.querySelector(
    ".special"
);


/*
Next Sibling
*/

console.log(
    specialItem.nextElementSibling
);


/*
Previous Sibling
*/

console.log(
    specialItem.previousElementSibling
);



/*
=========================================
10. LOOPING THROUGH NODELIST
=========================================
*/


document
.querySelectorAll(".tech-item")
.forEach((item,index)=>{

    console.log(
        index,
        item.textContent
    );

});



/*
=========================================
11. LOOPING THROUGH HTMLCOLLECTION
=========================================
*/


for(
    let i=0;
    i<allLi.length;
    i++
){

    console.log(
        allLi[i].textContent
    );

}



/*
=========================================
12. CREATE NEW ELEMENT
=========================================
*/


const newLi =
document.createElement("li");

newLi.textContent =
"☁️ Cloud Computing";

newLi.classList.add(
    "tech-item"
);

techList.appendChild(
    newLi
);



/*
=========================================
13. REMOVE ELEMENT
=========================================
*/

// Uncomment to test

// newLi.remove();



/*
=========================================
14. EVENT LISTENER
=========================================
*/


title.addEventListener(
    "click",
    function(){

        alert(
            "Title Clicked!"
        );

    }
);



/*
=========================================
15. SUMMARY
=========================================

getElementById()

getElementsByClassName()

getElementsByTagName()

getElementsByName()

querySelector()

querySelectorAll()

textContent

innerHTML

innerText

id

className

classList

getAttribute()

setAttribute()

removeAttribute()

style

parentElement

children

firstElementChild

lastElementChild

nextElementSibling

previousElementSibling

createElement()

appendChild()

remove()

addEventListener()

=========================================
*/