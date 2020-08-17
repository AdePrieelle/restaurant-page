import {renderNavbar} from "./navbar.js";
import {renderHomepage} from "./homepage.js";
import {renderMenu} from "./menu.js";
import {renderContact} from "./contact.js";

// initial homepage render
renderNavbar();
renderHomepage();
addClickOurMenuButtonRender();
addClickMainLocationContactRender();

// selectors
const home = document.querySelector(".home");
const logotext = document.querySelector(".logotext");
const menu = document.querySelector(".menu");
const contact = document.querySelector(".contact");

// display homepage content
home.addEventListener("click", function() {
  cleanTab();
  renderHomepage();
  addClickOurMenuButtonRender();
  addClickMainLocationContactRender();
});

logotext.addEventListener("click", function() {
  cleanTab();
  renderHomepage();
  addClickOurMenuButtonRender();
  addClickMainLocationContactRender();
});

// display menu content
menu.addEventListener("click", function() {
  cleanTab();
  renderMenu();
});

// display contact content
contact.addEventListener("click", function() {
  cleanTab();
  renderContact();
});

// clear out content when switching tabs
function cleanTab() {
  const content = document.querySelector("#content");
  content.removeChild(content.lastChild);
}

// display Menu tab when clicking on Our Menu at the homepage
function addClickOurMenuButtonRender() {
  const mainButtonMenu = document.querySelector(".main-button-menu");
  mainButtonMenu.addEventListener("click", function() {
    cleanTab();
    renderMenu();
  });
}

// display Contact tab when clicking on the location at the homepage
function addClickMainLocationContactRender() {
  const mainLocation = document.querySelector(".main-location");
  mainLocation.addEventListener("click", function() {
    cleanTab();
    renderContact();
  });
}



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