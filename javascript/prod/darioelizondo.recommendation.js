function sliderRecommendation(){const e=document.querySelector(".recommendation__slider");let t=!1,n;function d(){window.innerWidth<=1024?t||(t=!0,n=new Swiper(e,{slidesPerView:2.2,spaceBetween:13,loop:!0,breakpoints:{768:{slidesPerView:3.2}}})):t&&(n.destroy(!0,!0),t=!1)}window.addEventListener("resize",d),d()}function openPlant(){var e=document.querySelectorAll(".recommendation__link");let t=document.getElementById("modalPlant"),n=document.getElementById("linkBack"),d=document.getElementById("profile");e.forEach(e=>{e.addEventListener("click",()=>(t.classList.add("active"),d.classList.remove("active"),n.classList.add("active"),!1))})}function closePlant(){let e=document.getElementById("linkBack"),t=document.getElementById("modalPlant"),n=document.getElementById("profile"),d=document.getElementById("message");e.addEventListener("click",()=>(e.classList.remove("active"),t.classList.remove("active"),d.classList.remove("active"),n.classList.add("active"),!1))}function successMessage(){var e=document.getElementById("addPlant");let t=document.getElementById("message");e.addEventListener("click",()=>(t.classList.add("active"),!1))}document.addEventListener("DOMContentLoaded",sliderRecommendation(),!1),document.addEventListener("DOMContentLoaded",openPlant(),!1),document.addEventListener("DOMContentLoaded",closePlant(),!1),document.addEventListener("DOMContentLoaded",successMessage(),!1);