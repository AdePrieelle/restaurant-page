import {renderNavbar} from "./navbar.js";
import {renderHomepage} from "./homepage";

// initial homepage
renderNavbar();
renderHomepage();

// selectors
const logotext = document.querySelector(".logotext");
const home = document.querySelector(".home");

// clear out content when switching tabs
function cleanTab() {
  const content = document.querySelector("#content");
  content.removeChild(content.lastChild);
}

// display tab content
logotext.addEventListener("click", function() {
  cleanTab();
  renderHomepage();
});

home.addEventListener("click", function() {
  cleanTab();
  renderHomepage();
});



/*
1.  Remove elements from HTML (only leave <html> <body> and <div id="content">)
2.  Create elements with Javascript only, 
    append each element to div#content once the page is first loaded
3.  Write initial page-load function inside it's own module
    Then import and call it inside of index.js
4.  Put the contents of each tab inside it's own module
    Each module will export a function that creates a div element
    and adds the appropriate content and styles to that element
    and appends it to the dom
5.  Write the tab-switching logic inside of index.js
    Should have event listeners for each tab that wipres out current contents
    and then runs the correct 'tab module' to populate it again

*/

/* 
npx webpack --watch
To run webpack each time a change will be made
*/

/*
Start watching for compiling scss to css
sass --watch main.scss:main.css
*/