const renderContact = (() => {
  const content = document.querySelector("#content");

  // main-wrapper-contact
  let mainWrapperContact = document.createElement("div");
  mainWrapperContact.classList = "main-wrapper-contact";
  content.appendChild(mainWrapperContact);

  // main-contact
  let mainContact = document.createElement("div");
  mainContact.classList = "main-contact";
  mainWrapperContact.appendChild(mainContact);

  // main-contact-title
  let mainContactTitle = document.createElement("div");
  mainContactTitle.classList = "main-contact-title";
  mainContact.appendChild(mainContactTitle);

  let mainContactTitleText = document.createTextNode("Contact");
  mainContactTitle.appendChild(mainContactTitleText);

  // main-contact-information-wrapper
  let mainContactInformationWrapper = document.createElement("div");
  mainContactInformationWrapper.classList = "main-contact-information-wrapper";
  mainContact.appendChild(mainContactInformationWrapper);

  // main-contact-location
  let mainContactLocation = document.createElement("div");
  mainContactLocation.classList = "main-contact-location";
  mainContactInformationWrapper.appendChild(mainContactLocation);

  // main-contact-location-icon
  let mainContactLocationIcon = document.createElement("i");
  mainContactLocationIcon.classList = "main-contact-location-icon fas fa-map-marker-alt";
  mainContactLocation.appendChild(mainContactLocationIcon);

  // main-contact-location-address
  let mainContactLocationAddress = document.createElement("div");
  mainContactLocationAddress.classList = "main-contact-location-address";
  mainContactLocation.appendChild(mainContactLocationAddress);

  // main-contact-location-address-street
  let mainContactLocationAddressStreet = document.createElement("div");
  mainContactLocationAddressStreet.classList = "main-contact-location-address-street";
  mainContactLocationAddress.appendChild(mainContactLocationAddressStreet);

  let mainContactLocationAdressStreetText = document.createTextNode("Test Street 11");
  mainContactLocationAddressStreet.appendChild(mainContactLocationAdressStreetText);

  // main-contact-location-address-city
  let mainContactLocationAddressCity = document.createElement("div");
  mainContactLocationAddressCity.classList = "main-contact-location-address-city";
  mainContactLocationAddress.appendChild(mainContactLocationAddressCity);

  let mainContactLocationAdressCityText = document.createTextNode("Examplecity");
  mainContactLocationAddressCity.appendChild(mainContactLocationAdressCityText);

  // main-contact-location-address-zipcode
  let mainContactLocationAddressZipcode = document.createElement("div");
  mainContactLocationAddressZipcode.classList = "main-contact-location-address-zipcode";
  mainContactLocationAddress.appendChild(mainContactLocationAddressZipcode);

  let mainContactLocationAdressZipcodeText = document.createTextNode("1234 AB");
  mainContactLocationAddressZipcode.appendChild(mainContactLocationAdressZipcodeText);

  // main-contact-opening-hours
  let mainContactOpeningHours = document.createElement("div");
  mainContactOpeningHours.classList = "main-contact-opening-hours";
  mainContactInformationWrapper.appendChild(mainContactOpeningHours);

  // main-contact-opening-hours-icon
  let mainContactOpeningHoursIcon = document.createElement("i");
  mainContactOpeningHoursIcon.classList = "main-contact-opening-hours-icon fas fa-clock";
  mainContactOpeningHours.appendChild(mainContactOpeningHoursIcon);

  // main-contact-opening-hours-days
  let mainContactOpeningHoursDays = document.createElement("div");
  mainContactOpeningHoursDays.classList = "main-contact-opening-hours-days";
  mainContactOpeningHours.appendChild(mainContactOpeningHoursDays);

  // main-contact-opening-hours-day1
  let mainContactOpeningHoursDay1 = document.createElement("div");
  mainContactOpeningHoursDay1.classList = "main-contact-opening-hours-day";
  mainContactOpeningHoursDays.appendChild(mainContactOpeningHoursDay1);

  // main-contact-opening-hours-day-mon-thu
  let mainContactOpeningHoursDayMonThu = document.createElement("span");
  mainContactOpeningHoursDayMonThu.classList = "main-contact-opening-hours-day-mon-thu";
  mainContactOpeningHoursDay1.appendChild(mainContactOpeningHoursDayMonThu);

  let mainContactOpeningHoursDayMonThuText = document.createTextNode("Mon-Thu:");
  mainContactOpeningHoursDayMonThu.appendChild(mainContactOpeningHoursDayMonThuText);

  // main-contact-opening-hours-day-mon-thu-time
  let mainContactOpeningHoursDayMonThuTime = document.createElement("div");
  mainContactOpeningHoursDayMonThuTime.classList = "main-contact-opening-hours-day-mon-thu-time";
  mainContactOpeningHoursDay1.appendChild(mainContactOpeningHoursDayMonThuTime);

  let mainContactOpeningHoursDayMonThuTimeText = document.createTextNode("09:00 - 00:00");
  mainContactOpeningHoursDayMonThuTime.appendChild(mainContactOpeningHoursDayMonThuTimeText);

  // main-contact-opening-hours-day2
  let mainContactOpeningHoursDay2 = document.createElement("div");
  mainContactOpeningHoursDay2.classList = "main-contact-opening-hours-day";
  mainContactOpeningHoursDays.appendChild(mainContactOpeningHoursDay2);

  // main-contact-opening-hours-day-fri-sun
  let mainContactOpeningHoursDayFriSun = document.createElement("span");
  mainContactOpeningHoursDayFriSun.classList = "main-contact-opening-hours-day-fri-sun";
  mainContactOpeningHoursDay2.appendChild(mainContactOpeningHoursDayFriSun);

  let mainContactOpeningHoursDayFriSunText = document.createTextNode("Fri-Sun:");
  mainContactOpeningHoursDayFriSun.appendChild(mainContactOpeningHoursDayFriSunText);

  // main-contact-opening-hours-day-fri-sun-time
  let mainContactOpeningHoursDayFriSunTime = document.createElement("div");
  mainContactOpeningHoursDayFriSunTime.classList = "main-contact-opening-hours-day-fri-sun-time";
  mainContactOpeningHoursDay2.appendChild(mainContactOpeningHoursDayFriSunTime);

  let mainContactOpeningHoursDayFriSunTimeText = document.createTextNode("10:00 - 01:00");
  mainContactOpeningHoursDayFriSunTime.appendChild(mainContactOpeningHoursDayFriSunTimeText);

  // main-contact-telephone
  let mainContactTelephone = document.createElement("div");
  mainContactTelephone.classList = "main-contact-telephone";
  mainContactInformationWrapper.appendChild(mainContactTelephone);

  // main-contact-telephone-icon
  let mainContactTelephoneIcon = document.createElement("i");
  mainContactTelephoneIcon.classList = "main-contact-telephone-icon fas fa-phone-alt";
  mainContactTelephone.appendChild(mainContactTelephoneIcon);

  // main-contact-telephone-number
  let mainContactTelephoneNumber = document.createElement("div");
  mainContactTelephoneNumber.classList = "main-contact-telephone-number";
  mainContactTelephone.appendChild(mainContactTelephoneNumber);

  let mainContactTelephoneNumberText = document.createTextNode("012 345 67 89");
  mainContactTelephoneNumber.appendChild(mainContactTelephoneNumberText);

  // main-contact-mail
  let mainContactMail = document.createElement("div");
  mainContactMail.classList = "main-contact-mail";
  mainContactInformationWrapper.appendChild(mainContactMail);

  // main-contact-mail-icon
  let mainContactMailIcon = document.createElement("i");
  mainContactMailIcon.classList = "main-contact-mail-icon far fa-envelope";
  mainContactMail.appendChild(mainContactMailIcon);

  // main-contact-mail-mailaddress
  let mainContactMailMailaddress = document.createElement("div");
  mainContactMailMailaddress.classList = "main-contact-mail-mailaddress";
  mainContactMail.appendChild(mainContactMailMailaddress);

  let mainContactMailMailaddressText = document.createTextNode("examplemail@testdomain.com");
  mainContactMailMailaddress.appendChild(mainContactMailMailaddressText);


});

export {renderContact};


// Contact

/*
<div class="main-wrapper-contact">

  <div class="main-contact">

    <div class="main-contact-title">Contact</div>
    <div class="main-contact-information-wrapper">

      <div class="main-contact-location">
        <i class="main-contact-location-icon fas fa-map-marker-alt"></i>
        <div class="main-contact-location-address">
          <div class="main-contact-location-address-street">Test Street 11</div>
          <div class="main-contact-location-address-city">Examplecity</div>
          <div class="main-contact-location-address-zipcode">1234 AB</div>
        </div>
      </div>
      <div class="main-contact-opening-hours">
        <i class="main-contact-opening-hours-icon fas fa-clock"></i>
        <div class="main-contact-opening-hours-days">
          <div class="main-contact-opening-hours-day">
            <span class="main-contact-opening-hours-day-mon-thu">Mon-Thu:</span>
            <div class="main-contact-opening-hours-day-mon-thu-time">09:00 - 00:00</div>
          </div>
          <div class="main-contact-opening-hours-day">
            <span class="main-contact-opening-hours-day-fri-sun">Fri-Sun:</span>
            <div class="main-contact-opening-hours-day-fri-sun-time">10:00 - 01:00</div>
          </div>
        </div>
      </div>
      <div class="main-contact-telephone">
        <i class="main-contact-telephone-icon fas fa-phone-alt"></i>
        <div class="main-contact-telephone-number">012 345 67 89</div>
      </div>
      <div class="main-contact-mail">
        <i class="main-contact-mail-icon far fa-envelope"></i>
        <div class="main-contact-mail-mailaddress">examplemail@testdomain.com</div>
      </div>

    </div>

  </div>

</div>
*/