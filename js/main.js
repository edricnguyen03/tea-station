import { partnerLogoBasePath, partnerLogos, productList } from "./data.js";

// Navbar hide on scroll
  $(function (){
    $('.navbar').hidescroll({
      offset: 100,
      interval: 250
    });

    // mobke nav toggle
    const toggleBtn = $('#toggle_btn');
    const dropDownMenu = $('.dropdown-menu');

    toggleBtn.click(function (){
      dropDownMenu.toggleClass('open');
    });
  });


// Parter logo rendering
  $(function (){
    const container = document.getElementById("partner-logo-list");
    partnerLogos.forEach(logo => {
      const img = document.createElement("img");
      img.src = partnerLogoBasePath + logo.fileName;
      img.alt = logo.alt;
      img.classList.add("logo-ticker-image");
      container.appendChild(img);
    })
  })

// Products
  $(function (){
    // add active tab class to first tab
    $("li:first").addClass("activeTab");

    // change active tab on click
    $("li").click(function (){
      $("li").removeClass("activeTab");
      $('div[id="products-tabs"] ul .r-tabs-state-active').addClass("activeTab");
    });

    $('#products-tabs').responsiveTabs({
      animation: 'slide'
    });
  });