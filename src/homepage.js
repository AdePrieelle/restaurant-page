const renderHomepage = (() => {
  const content = document.querySelector("#content");

  // main-wrapper
  let mainWrapper = document.createElement("div");
  mainWrapper.classList = "main-wrapper";
  content.appendChild(mainWrapper);

  // main
  let main = document.createElement("div");
  main.classList = "main";
  mainWrapper.appendChild(main);

  // main-title
  let mainTitle = document.createElement("div");
  mainTitle.classList = "main-title";
  main.appendChild(mainTitle);
  
  let mainTitleText = document.createTextNode("FreshFoody serves food with passion");
  mainTitle.appendChild(mainTitleText);

  // main-button-menu
  let mainButtonMenu = document.createElement("div");
  mainButtonMenu.classList = "main-button-menu";
  main.appendChild(mainButtonMenu);

  let mainButtonMenuText = document.createTextNode("Our Menu");
  mainButtonMenu.appendChild(mainButtonMenuText);

  // main-intro
  let mainIntro = document.createElement("div");
  mainIntro.classList = "main-intro";
  main.appendChild(mainIntro);

  let mainIntroText = document.createTextNode("Here at FreshFoody we are making use of organic ingredients homegrown in our own garden to deliver you the purest taste!");
  mainIntro.appendChild(mainIntroText);

  // main-location
  let mainLocation = document.createElement("div");
  mainLocation.classList = "main-location";
  main.appendChild(mainLocation);

  // main-location-icon
  let mainLocationIcon = document.createElement("i");
  mainLocationIcon.classList = "main-location-icon fas fa-map-marker-alt";
  mainLocation.appendChild(mainLocationIcon);

  // main-location-address
  let mainLocationAddress = document.createElement("div");
  mainLocationAddress.classList = "main-location-address";
  mainLocation.appendChild(mainLocationAddress);

  let mainLocationAddressText = document.createTextNode("Test Street 11, Examplecity, 1234 AB");
  mainLocationAddress.appendChild(mainLocationAddressText)

});

export {renderHomepage};

/* 
<div class="main-wrapper">
        
  <div class="main">
    
    <div class="main-title">FreshFoody serves food with passion</div>
    <div class="main-button-menu">Our Menu</div>
    <div class="main-intro">Here at FreshFoody we are making use of organic ingredients homegrown in our own garden to deliver you the purest taste!</div>
    <div class="main-location">
      <i class="main-location-icon fas fa-map-marker-alt"></i>
      <div class="main-location-address">Test Street 11, Examplecity, 1234 AB</div>
    </div>

  </div>

</div> 
*/