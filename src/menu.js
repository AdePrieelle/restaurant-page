const renderMenu = (() => {
  const content = document.querySelector("#content");

  // main-wrapper-menu
  let mainWrapperMenu = document.createElement("div");
  mainWrapperMenu.classList = "main-wrapper-menu";
  content.appendChild(mainWrapperMenu);

  // main-menu
  let mainMenu = document.createElement("div");
  mainMenu.classList = "main-menu";
  mainWrapperMenu.appendChild(mainMenu);

  // main-menu-title
  let mainMenuTitle = document.createElement("div");
  mainMenuTitle.classList = "main-menu-title";
  mainMenu.appendChild(mainMenuTitle);

  let mainMenuTitleText = document.createTextNode("Our Menu");
  mainMenuTitle.appendChild(mainMenuTitleText);

  // main-menu-food-grid
  let mainMenuFoodGrid = document.createElement("div");
  mainMenuFoodGrid.classList = "main-menu-food-grid";
  mainMenu.appendChild(mainMenuFoodGrid);

  // main-menu-food-grid-item1
  let mainMenuFoodGridItem1 = document.createElement("div");
  mainMenuFoodGridItem1.classList = "main-menu-food-grid-item main-menu-food-grid-item1";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem1);

  // main-menu-food-grid-item-pic food-1
  let mainMenuFoodGridItemPic1 = document.createElement("div");
  mainMenuFoodGridItemPic1.classList = "main-menu-food-grid-item-pic food-1";
  mainMenuFoodGridItem1.appendChild(mainMenuFoodGridItemPic1);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice1 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice1.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem1.appendChild(mainMenuFoodGridItemDescriptionPrice1);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription1 = document.createElement("div");
  mainMenuFoodGridItemDescription1.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice1.appendChild(mainMenuFoodGridItemDescription1);

  let mainMenuFoodGridItemDescription1Text = document.createTextNode("Oatmeal");
  mainMenuFoodGridItemDescription1.appendChild(mainMenuFoodGridItemDescription1Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice1 = document.createElement("div");
  mainMenuFoodGridItemPrice1.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice1.appendChild(mainMenuFoodGridItemPrice1);

  let mainMenuFoodGridItemPrice1Text = document.createTextNode("€8,99");
  mainMenuFoodGridItemPrice1.appendChild(mainMenuFoodGridItemPrice1Text);


  // main-menu-food-grid-item2
  let mainMenuFoodGridItem2 = document.createElement("div");
  mainMenuFoodGridItem2.classList = "main-menu-food-grid-item main-menu-food-grid-item2";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem2);

  // main-menu-food-grid-item-pic food-2
  let mainMenuFoodGridItemPic2 = document.createElement("div");
  mainMenuFoodGridItemPic2.classList = "main-menu-food-grid-item-pic food-2";
  mainMenuFoodGridItem2.appendChild(mainMenuFoodGridItemPic2);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice2 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice2.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem2.appendChild(mainMenuFoodGridItemDescriptionPrice2);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription2 = document.createElement("div");
  mainMenuFoodGridItemDescription2.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice2.appendChild(mainMenuFoodGridItemDescription2);

  let mainMenuFoodGridItemDescription2Text = document.createTextNode("Pasta salad");
  mainMenuFoodGridItemDescription2.appendChild(mainMenuFoodGridItemDescription2Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice2 = document.createElement("div");
  mainMenuFoodGridItemPrice2.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice2.appendChild(mainMenuFoodGridItemPrice2);

  let mainMenuFoodGridItemPrice2Text = document.createTextNode("€11,99");
  mainMenuFoodGridItemPrice2.appendChild(mainMenuFoodGridItemPrice2Text);


  // main-menu-food-grid-item3
  let mainMenuFoodGridItem3 = document.createElement("div");
  mainMenuFoodGridItem3.classList = "main-menu-food-grid-item main-menu-food-grid-item3";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem3);

  // main-menu-food-grid-item-pic food-3
  let mainMenuFoodGridItemPic3 = document.createElement("div");
  mainMenuFoodGridItemPic3.classList = "main-menu-food-grid-item-pic food-3";
  mainMenuFoodGridItem3.appendChild(mainMenuFoodGridItemPic3);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice3 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice3.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem3.appendChild(mainMenuFoodGridItemDescriptionPrice3);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription3 = document.createElement("div");
  mainMenuFoodGridItemDescription3.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice3.appendChild(mainMenuFoodGridItemDescription3);

  let mainMenuFoodGridItemDescription3Text = document.createTextNode("Soup & Bread");
  mainMenuFoodGridItemDescription3.appendChild(mainMenuFoodGridItemDescription3Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice3 = document.createElement("div");
  mainMenuFoodGridItemPrice3.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice3.appendChild(mainMenuFoodGridItemPrice3);

  let mainMenuFoodGridItemPrice3Text = document.createTextNode("€8,99");
  mainMenuFoodGridItemPrice3.appendChild(mainMenuFoodGridItemPrice3Text);


  // main-menu-food-grid-item4
  let mainMenuFoodGridItem4 = document.createElement("div");
  mainMenuFoodGridItem4.classList = "main-menu-food-grid-item main-menu-food-grid-item4";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem4);

  // main-menu-food-grid-item-pic food-4
  let mainMenuFoodGridItemPic4 = document.createElement("div");
  mainMenuFoodGridItemPic4.classList = "main-menu-food-grid-item-pic food-4";
  mainMenuFoodGridItem4.appendChild(mainMenuFoodGridItemPic4);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice4 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice4.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem4.appendChild(mainMenuFoodGridItemDescriptionPrice4);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription4 = document.createElement("div");
  mainMenuFoodGridItemDescription4.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice4.appendChild(mainMenuFoodGridItemDescription4);

  let mainMenuFoodGridItemDescription4Text = document.createTextNode("Pancake Raspberries");
  mainMenuFoodGridItemDescription4.appendChild(mainMenuFoodGridItemDescription4Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice4 = document.createElement("div");
  mainMenuFoodGridItemPrice4.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice4.appendChild(mainMenuFoodGridItemPrice4);

  let mainMenuFoodGridItemPrice4Text = document.createTextNode("€10,99");
  mainMenuFoodGridItemPrice4.appendChild(mainMenuFoodGridItemPrice4Text);

  
  // main-menu-food-grid-item5
  let mainMenuFoodGridItem5 = document.createElement("div");
  mainMenuFoodGridItem5.classList = "main-menu-food-grid-item main-menu-food-grid-item5";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem5);

  // main-menu-food-grid-item-pic food-5
  let mainMenuFoodGridItemPic5 = document.createElement("div");
  mainMenuFoodGridItemPic5.classList = "main-menu-food-grid-item-pic food-5";
  mainMenuFoodGridItem5.appendChild(mainMenuFoodGridItemPic5);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice5 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice5.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem5.appendChild(mainMenuFoodGridItemDescriptionPrice5);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription5 = document.createElement("div");
  mainMenuFoodGridItemDescription5.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice5.appendChild(mainMenuFoodGridItemDescription5);

  let mainMenuFoodGridItemDescription5Text = document.createTextNode("Sandwich");
  mainMenuFoodGridItemDescription5.appendChild(mainMenuFoodGridItemDescription5Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice5 = document.createElement("div");
  mainMenuFoodGridItemPrice5.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice5.appendChild(mainMenuFoodGridItemPrice5);

  let mainMenuFoodGridItemPrice5Text = document.createTextNode("€7,99");
  mainMenuFoodGridItemPrice5.appendChild(mainMenuFoodGridItemPrice5Text);


  // main-menu-food-grid-item6
  let mainMenuFoodGridItem6 = document.createElement("div");
  mainMenuFoodGridItem6.classList = "main-menu-food-grid-item main-menu-food-grid-item6";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem6);

  // main-menu-food-grid-item-pic food-6
  let mainMenuFoodGridItemPic6 = document.createElement("div");
  mainMenuFoodGridItemPic6.classList = "main-menu-food-grid-item-pic food-6";
  mainMenuFoodGridItem6.appendChild(mainMenuFoodGridItemPic6);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice6 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice6.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem6.appendChild(mainMenuFoodGridItemDescriptionPrice6);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription6 = document.createElement("div");
  mainMenuFoodGridItemDescription6.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice6.appendChild(mainMenuFoodGridItemDescription6);

  let mainMenuFoodGridItemDescription6Text = document.createTextNode("Pancake Banana Blueberries");
  mainMenuFoodGridItemDescription6.appendChild(mainMenuFoodGridItemDescription6Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice6 = document.createElement("div");
  mainMenuFoodGridItemPrice6.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice6.appendChild(mainMenuFoodGridItemPrice6);

  let mainMenuFoodGridItemPrice6Text = document.createTextNode("€8,99");
  mainMenuFoodGridItemPrice6.appendChild(mainMenuFoodGridItemPrice6Text);


  // main-menu-food-grid-item7
  let mainMenuFoodGridItem7 = document.createElement("div");
  mainMenuFoodGridItem7.classList = "main-menu-food-grid-item main-menu-food-grid-item7";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem7);

  // main-menu-food-grid-item-pic food-7
  let mainMenuFoodGridItemPic7 = document.createElement("div");
  mainMenuFoodGridItemPic7.classList = "main-menu-food-grid-item-pic food-7";
  mainMenuFoodGridItem7.appendChild(mainMenuFoodGridItemPic7);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice7 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice7.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem7.appendChild(mainMenuFoodGridItemDescriptionPrice7);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription7 = document.createElement("div");
  mainMenuFoodGridItemDescription7.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice7.appendChild(mainMenuFoodGridItemDescription7);

  let mainMenuFoodGridItemDescription7Text = document.createTextNode("Burger & Fries");
  mainMenuFoodGridItemDescription7.appendChild(mainMenuFoodGridItemDescription7Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice7 = document.createElement("div");
  mainMenuFoodGridItemPrice7.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice7.appendChild(mainMenuFoodGridItemPrice7);

  let mainMenuFoodGridItemPrice7Text = document.createTextNode("€10,99");
  mainMenuFoodGridItemPrice7.appendChild(mainMenuFoodGridItemPrice7Text);


  // main-menu-food-grid-item8
  let mainMenuFoodGridItem8 = document.createElement("div");
  mainMenuFoodGridItem8.classList = "main-menu-food-grid-item main-menu-food-grid-item8";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem8);

  // main-menu-food-grid-item-pic food-8
  let mainMenuFoodGridItemPic8 = document.createElement("div");
  mainMenuFoodGridItemPic8.classList = "main-menu-food-grid-item-pic food-8";
  mainMenuFoodGridItem8.appendChild(mainMenuFoodGridItemPic8);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice8 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice8.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem8.appendChild(mainMenuFoodGridItemDescriptionPrice8);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription8 = document.createElement("div");
  mainMenuFoodGridItemDescription8.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice8.appendChild(mainMenuFoodGridItemDescription8);

  let mainMenuFoodGridItemDescription8Text = document.createTextNode("Coffee");
  mainMenuFoodGridItemDescription8.appendChild(mainMenuFoodGridItemDescription8Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice8 = document.createElement("div");
  mainMenuFoodGridItemPrice8.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice8.appendChild(mainMenuFoodGridItemPrice8);

  let mainMenuFoodGridItemPrice8Text = document.createTextNode("€3,99");
  mainMenuFoodGridItemPrice8.appendChild(mainMenuFoodGridItemPrice8Text);


  // main-menu-food-grid-item9
  let mainMenuFoodGridItem9 = document.createElement("div");
  mainMenuFoodGridItem9.classList = "main-menu-food-grid-item main-menu-food-grid-item9";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem9);

  // main-menu-food-grid-item-pic food-9
  let mainMenuFoodGridItemPic9 = document.createElement("div");
  mainMenuFoodGridItemPic9.classList = "main-menu-food-grid-item-pic food-9";
  mainMenuFoodGridItem9.appendChild(mainMenuFoodGridItemPic9);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice9 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice9.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem9.appendChild(mainMenuFoodGridItemDescriptionPrice9);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription9 = document.createElement("div");
  mainMenuFoodGridItemDescription9.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice9.appendChild(mainMenuFoodGridItemDescription9);

  let mainMenuFoodGridItemDescription9Text = document.createTextNode("Tea");
  mainMenuFoodGridItemDescription9.appendChild(mainMenuFoodGridItemDescription9Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice9 = document.createElement("div");
  mainMenuFoodGridItemPrice9.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice9.appendChild(mainMenuFoodGridItemPrice9);

  let mainMenuFoodGridItemPrice9Text = document.createTextNode("€2,99");
  mainMenuFoodGridItemPrice9.appendChild(mainMenuFoodGridItemPrice9Text);


  // main-menu-food-grid-item10
  let mainMenuFoodGridItem10 = document.createElement("div");
  mainMenuFoodGridItem10.classList = "main-menu-food-grid-item main-menu-food-grid-item10";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem10);

  // main-menu-food-grid-item-pic food-10
  let mainMenuFoodGridItemPic10 = document.createElement("div");
  mainMenuFoodGridItemPic10.classList = "main-menu-food-grid-item-pic food-10";
  mainMenuFoodGridItem10.appendChild(mainMenuFoodGridItemPic10);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice10 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice10.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem10.appendChild(mainMenuFoodGridItemDescriptionPrice10);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription10 = document.createElement("div");
  mainMenuFoodGridItemDescription10.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice10.appendChild(mainMenuFoodGridItemDescription10);

  let mainMenuFoodGridItemDescription10Text = document.createTextNode("Red Wine");
  mainMenuFoodGridItemDescription10.appendChild(mainMenuFoodGridItemDescription10Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice10 = document.createElement("div");
  mainMenuFoodGridItemPrice10.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice10.appendChild(mainMenuFoodGridItemPrice10);

  let mainMenuFoodGridItemPrice10Text = document.createTextNode("€4,99");
  mainMenuFoodGridItemPrice10.appendChild(mainMenuFoodGridItemPrice10Text);


  // main-menu-food-grid-item11
  let mainMenuFoodGridItem11 = document.createElement("div");
  mainMenuFoodGridItem11.classList = "main-menu-food-grid-item main-menu-food-grid-item11";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem11);

  // main-menu-food-grid-item-pic food-11
  let mainMenuFoodGridItemPic11 = document.createElement("div");
  mainMenuFoodGridItemPic11.classList = "main-menu-food-grid-item-pic food-11";
  mainMenuFoodGridItem11.appendChild(mainMenuFoodGridItemPic11);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice11 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice11.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem11.appendChild(mainMenuFoodGridItemDescriptionPrice11);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription11 = document.createElement("div");
  mainMenuFoodGridItemDescription11.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice11.appendChild(mainMenuFoodGridItemDescription11);

  let mainMenuFoodGridItemDescription11Text = document.createTextNode("White Wine");
  mainMenuFoodGridItemDescription11.appendChild(mainMenuFoodGridItemDescription11Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice11 = document.createElement("div");
  mainMenuFoodGridItemPrice11.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice11.appendChild(mainMenuFoodGridItemPrice11);

  let mainMenuFoodGridItemPrice11Text = document.createTextNode("€4,99");
  mainMenuFoodGridItemPrice11.appendChild(mainMenuFoodGridItemPrice11Text);


  // main-menu-food-grid-item12
  let mainMenuFoodGridItem12 = document.createElement("div");
  mainMenuFoodGridItem12.classList = "main-menu-food-grid-item main-menu-food-grid-item12";
  mainMenuFoodGrid.appendChild(mainMenuFoodGridItem12);

  // main-menu-food-grid-item-pic food-12
  let mainMenuFoodGridItemPic12 = document.createElement("div");
  mainMenuFoodGridItemPic12.classList = "main-menu-food-grid-item-pic food-12";
  mainMenuFoodGridItem12.appendChild(mainMenuFoodGridItemPic12);

  // main-menu-food-grid-item-description-price
  let mainMenuFoodGridItemDescriptionPrice12 = document.createElement("div");
  mainMenuFoodGridItemDescriptionPrice12.classList = "main-menu-food-grid-item-description-price";
  mainMenuFoodGridItem12.appendChild(mainMenuFoodGridItemDescriptionPrice12);

  // main-menu-food-grid-item-description
  let mainMenuFoodGridItemDescription12 = document.createElement("div");
  mainMenuFoodGridItemDescription12.classList = "main-menu-food-grid-item-description";
  mainMenuFoodGridItemDescriptionPrice12.appendChild(mainMenuFoodGridItemDescription12);

  let mainMenuFoodGridItemDescription12Text = document.createTextNode("Chocolate Cookie");
  mainMenuFoodGridItemDescription12.appendChild(mainMenuFoodGridItemDescription12Text);

  // main-menu-food-grid-item-price
  let mainMenuFoodGridItemPrice12 = document.createElement("div");
  mainMenuFoodGridItemPrice12.classList = "main-menu-food-grid-item-price";
  mainMenuFoodGridItemDescriptionPrice12.appendChild(mainMenuFoodGridItemPrice12);

  let mainMenuFoodGridItemPrice12Text = document.createTextNode("€5,99");
  mainMenuFoodGridItemPrice12.appendChild(mainMenuFoodGridItemPrice12Text);




});

export {renderMenu};

// Menu

/*
<div class="main-wrapper-menu">

  <div class="main-menu">
    <div class="main-menu-title">Our Menu</div>
    <div class="main-menu-food-grid">
      <div class="main-menu-food-grid-item main-menu-food-grid-item1">
        <div class="main-menu-food-grid-item-pic food-1"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Oatmeal</div>
          <div class="main-menu-food-grid-item-price">€8,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item2">
        <div class="main-menu-food-grid-item-pic food-2"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Pasta salad</div>
          <div class="main-menu-food-grid-item-price">€11,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item3">
        <div class="main-menu-food-grid-item-pic food-3"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Soup & Bread</div>
          <div class="main-menu-food-grid-item-price">€8,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item4">
        <div class="main-menu-food-grid-item-pic food-4"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Pancake Raspberries</div>
          <div class="main-menu-food-grid-item-price">€10,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item5">
        <div class="main-menu-food-grid-item-pic food-5"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Sandwich</div>
          <div class="main-menu-food-grid-item-price">€7,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item6">
        <div class="main-menu-food-grid-item-pic food-6"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Pancake Banana Blueberries</div>
          <div class="main-menu-food-grid-item-price">€8,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item7">
        <div class="main-menu-food-grid-item-pic food-7"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Burger & Fries</div>
          <div class="main-menu-food-grid-item-price">€10,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item8">
        <div class="main-menu-food-grid-item-pic food-8"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Coffee</div>
          <div class="main-menu-food-grid-item-price">€3,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item9">
        <div class="main-menu-food-grid-item-pic food-9"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Tea</div>
          <div class="main-menu-food-grid-item-price">€2,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item10">
        <div class="main-menu-food-grid-item-pic food-10"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Red Wine</div>
          <div class="main-menu-food-grid-item-price">€4,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item11">
        <div class="main-menu-food-grid-item-pic food-11"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">White Wine</div>
          <div class="main-menu-food-grid-item-price">€4,99</div>
        </div>
      </div>
      <div class="main-menu-food-grid-item main-menu-food-grid-item12">
        <div class="main-menu-food-grid-item-pic food-12"></div>
        <div class="main-menu-food-grid-item-description-price">
          <div class="main-menu-food-grid-item-description">Chocolate Cookie</div>
          <div class="main-menu-food-grid-item-price">€5,99</div>
        </div>
      </div>
    </div>
  </div>

</div>
*/