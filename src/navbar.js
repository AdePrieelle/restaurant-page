const renderNavbar = (() => {
  const content = document.querySelector("#content");

  // Navbar
  let nav = document.createElement("nav");
  nav.classList = "navbar";
  content.appendChild(nav);

  // Logo
  let logotext = document.createElement("div");
  logotext.classList = "logotext";
  nav.appendChild(logotext);

  let spanLogotextFirst = document.createElement("span");
  spanLogotextFirst.classList = "logotext-first";
  logotext.appendChild(spanLogotextFirst);

  let spanLogotextFirstText = document.createTextNode("Fresh");
  spanLogotextFirst.appendChild(spanLogotextFirstText);

  let spanLogotextSecond = document.createElement("span");
  spanLogotextSecond.classList = "logotext-second";
  logotext.appendChild(spanLogotextSecond);

  let spanLogotextSecondText = document.createTextNode("Foody");
  spanLogotextSecond.appendChild(spanLogotextSecondText);

  // Links
  let ul = document.createElement("ul");
  ul.classList = "nav-links";
  nav.appendChild(ul);

  // Home link
  let liHome = document.createElement("li");
  liHome.classList = "home";
  ul.appendChild(liHome);

  let homeLink = document.createElement("a");
  liHome.appendChild(homeLink);

  let homeLinkText = document.createTextNode("Home");
  homeLink.appendChild(homeLinkText);

  // Menu link
  let liMenu = document.createElement("li");
  liMenu.classList = "menu";
  ul.appendChild(liMenu);

  let menuLink = document.createElement("a");
  menuLink.classList = "menu";
  liMenu.appendChild(menuLink);

  let menuLinkText = document.createTextNode("Menu");
  menuLink.appendChild(menuLinkText);

  // Contact link
  let liContact = document.createElement("li");
  liContact.classList = "contact";
  ul.appendChild(liContact);

  let contactLink = document.createElement("a");
  contactLink.classList = "contact";
  liContact.appendChild(contactLink);

  let contactLinkText = document.createTextNode("Contact");
  contactLink.appendChild(contactLinkText);

});

export {renderNavbar};

/*
<nav class="navbar">
  <div class="logotext">
    <span class="logotext-first">Fresh</span>
    <span class="logotext-second">Foody</span>
  </div>
  <ul class="nav-links">
    <li class="home"><a href="">Home</a></li>
    <li class="menu"><a href="">Menu</a></li>
    <li class="contact"><a href="">Contact</a></li>
  </div>
</nav>
*/