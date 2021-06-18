// for displaying time
let time = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  // let t = d.toUTCString()
  d = d.toString()
  let t = d.replace('GMT+0530 (India Standard Time)','')
  document.getElementById("date").innerHTML = t;
}

// for hamburger menu
// let topnav = document.getElementById("topnav");
// let hamburger = document.getElementById("icon");
// hamburger.addEventListener("click", () => {
//   topnav.classList.toggle("responsive");
// });
// for image carousel
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 5000,
  }
});
// for side menu
const body = document.querySelector("body");
    const navbar = document.querySelector(".nav-content");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const topnav = document.querySelector('.topnav')
    menuBtn.onclick = ()=>{
      navbar.classList.add("show");
      menuBtn.classList.add("hide");
      body.classList.add("disabled");
      topnav.classList.remove("color");
    }
    cancelBtn.onclick = ()=>{
      body.classList.remove("disabled");
      navbar.classList.remove("show");
      menuBtn.classList.remove("hide");
      topnav.classList.add("color");
    }
    window.onscroll = ()=>{
      this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
    }
