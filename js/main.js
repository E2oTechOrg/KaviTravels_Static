(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      const spinnerEl = document.getElementById("spinner");
      if (spinnerEl) {
        spinnerEl.classList.remove("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Dropdown on mouse hover
  const $dropdown = $(".dropdown");
  const $dropdownToggle = $(".dropdown-toggle");
  const $dropdownMenu = $(".dropdown-menu");
  const showClass = "show";

  $(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 992px)").matches) {
      $dropdown.hover(
        function () {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        },
        function () {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        }
      );
    } else {
      $dropdown.off("mouseenter mouseleave");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });




  // model popup for lead form


  


 const carCards = [
     
      // {
      //   name: "Innova Crysta",
      //   price: "$134,100*",
      //   image: "img/KaviAssets/cars/InnovaCrista-best-madurai-travels.png",
      //   range: "420 KM",
      //   power: "7+1 hp",
      //   speed: "3.7 s"
      // },
      // {
      //   name: "Innova",
      //   price: "$106,500*",
      //   image: "img/KaviAssets/cars/innova.png",
      //   range: "6+1 KM",
      //   power: "522 hp",
      //   speed: "4.0 s"
      // },
      {
        name: "Sedan",
        // price: "$187,400*",
        image: "img/KaviAssets/cars/Ertica-best-madurai-travels.png",
        range: "300 KM/ day",
        power: "4+1 Seats",
        // speed: "2.6 s"
      },
       {
        name: "SUV",
        // price: "$187,400*",
        image: "img/innova-hycrosss.png",
        range: "300 KM/ day",
        power: "7+1 Seats",
        // speed: "2.6 s"
      },
      // {
      //   name: "KiaCarens",
      //   price: "$134,100*",
      //   image: "img/KaviAssets/cars/KiaCarens-best-madurai-travels.png",
      //   range: "420 KM",
      //   power: "598 hp",
      //   speed: "3.7 s"
      // },
      // {
      //   name: "Urban Cruiser Taisor",
      //   price: "$106,500*",
      //   image: "img/KaviAssets/cars/Urban-Cruiser-Taisor.png",
      //   range: "365 KM",
      //   power: "4+1 hp",
      //   speed: "4.0 s"
      // },
      // {
      //   name: "Etios",
      //   price: "$187,400*",
      //   image: "img/KaviAssets/cars/Etiosbest-madurai-travels.png",
      //   range: "357 KM",
      //   power: "4+1 hp",
      //   speed: "2.6 s"
      // },
      // {
      //   name: "Glanza",
      //   price: "$134,100*",
      //   image: "img/KaviAssets/cars/Glanzabest-madurai-travels.png",
      //   range: "420 KM",
      //   power: "4+1 hp",
      //   speed: "3.7 s"
      // },
      // {
      //   name: "Ciaz",
      //   price: "$106,500*",
      //   image: "img/KaviAssets/cars/Ciazbest-madurai-travels.png",
      //   range: "365 KM",
      //   power: "4+1 hp",
      //   speed: "4.0 s"
      // },
      // {
      //   name: "Swift Dzire Tours",
      //   price: "$187,400*",
      //   image: "img/KaviAssets/cars/Swift-Dzire-Toursbest-madurai-travels.png",
      //   range: "357 KM",
      //   power: "4+1 hp",
      //   speed: "2.6 s"
      // },
      // {
      //   name: "Tata Zest",
      //   price: "$134,100*",
      //   image: "img/KaviAssets/cars/Tata-Zestbest-madurai-travels.png",
      //   range: "420 KM",
      //   power: "4+1 hp",
      //   speed: "3.7 s"
      // },
      {
        name: "Tempo",
        // price: "$106,500*",
        image: "img/KaviAssets/cars/force-car-bestmaduraitravel.png",
        range: "250 KM/ day",
        power: "18, 14, 12+1 Seats",
        // speed: "4.0 s"
      },
      {
        name: "Coach Van",
        // price: "$187,400*",
        image: "img/KaviAssets/cars/Tourister-best-madurai-travels.png",
        range: "250 KM/ day",
        power: "24+1 Seats",
        // speed: "2.6 s"
      },
      {
        name: "Mini Bus",
        // price: "$134,100*",
        image: "img/KaviAssets/cars/Mini-Bus-best-madurai-travels.png",
        range: "250 KM/ day",
        power: "34+1 Seats",
        // speed: "3.7 s"
      },
      // {
      //   name: "Bus",
      //   price: "$106,500*",
      //   image: "img/KaviAssets/cars/Bus-36+1-best-madurai-travels.png",
      //   range: "365 KM",
      //   power: "36+1 hp",
      //   speed: "4.0 s"
      // },
      {
        name: "Bus",
        // price: "$106,500*",
        image: "img/KaviAssets/cars/Bus-54+1-best-madurai-travels.png",
        range: "250 KM/ day",
        power: "56+1 Seats",
        // speed: "4.0 s"
      }
    ];

    let currentIndex = 0;

    function renderCard(index) {
      const car = carCards[index];
      const cardHTML = `
        <div class="car-card">
          <div class="car-title">
            <h1 class="text-white">${car.name}</h1>
         
          </div>
          <img class="car-image" src="${car.image}" alt="${car.name}">
          <div class="car-metrics">
            <div class="metric">
              <h4 class="text-dark">${car.range}</h4>
              <p>Driving Range</p>
            </div>
            <div class="metric">
              <h4 class="text-dark">${car.power}</h4>
              <p>Passenger Seats</p>
            </div>
           
          </div>
        </div>`;
      document.getElementById("carCardContainer").innerHTML = cardHTML;
    }

   window.scrollCars = function(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = carCards.length - 1;
  if (currentIndex >= carCards.length) currentIndex = 0;
  renderCard(currentIndex);
};

    // Run after DOM is loaded
    window.onload = function () {
      renderCard(currentIndex);
      setInterval(() => scrollCars(1), 5000); // Scroll every 5 seconds
    };
 document.addEventListener("DOMContentLoaded", () => {
    // Slider
    const row = document.getElementById("cardSlider");
    const leftBtn = document.getElementById("leftBtn");
    const rightBtn = document.getElementById("rightBtn");

    let currentScroll = 0;

    function getCardScrollDistance() {
      if (!row) return 0;
      const card = row.querySelector(".destination-item");
      if (!card) return 0;
      const style = window.getComputedStyle(card);
      const marginRight = parseInt(style.marginRight) || 20;
      return card.offsetWidth + marginRight;
    }

    if (rightBtn && row) {
      rightBtn.addEventListener("click", () => {
        const distance = getCardScrollDistance();
        const maxScroll = row.scrollWidth - row.clientWidth;
        currentScroll = Math.min(currentScroll + distance, maxScroll);
        row.style.transform = `translateX(-${currentScroll}px)`;
      });
    }

    if (leftBtn && row) {
      leftBtn.addEventListener("click", () => {
        const distance = getCardScrollDistance();
        currentScroll = Math.max(currentScroll - distance, 0);
        row.style.transform = `translateX(-${currentScroll}px)`;
      });
    }

    // Show modal after delay
    const offerPopup = document.getElementById("offerPopup");
    if (offerPopup) {
      setTimeout(() => {
        const offerModal = new bootstrap.Modal(offerPopup);
        offerModal.show();
      }, 7000);
    }
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);