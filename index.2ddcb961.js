const e=document.querySelectorAll(".nav-icon"),o=document.querySelectorAll(".nav__link, .logo, .button__link--type--up"),t=document.querySelector(".page__menu"),l=document.querySelector("body");function s(o){o.preventDefault();let s=this.getAttribute("href"),n=document.querySelector(s).offsetTop;for(let o of(t.classList.remove("page__menu__open"),l.classList.remove("body--no-scroll"),e))o.classList.remove("open");scroll({top:n,behavior:"smooth"})}e.forEach(o=>{o.addEventListener("click",o=>{for(let o of e)o.classList.toggle("open");t.classList.toggle("page__menu__open"),l.classList.toggle("body--no-scroll")})}),o.forEach(o=>{o.addEventListener("click",s,o=>{for(let o of e)o.classList.remove("open")})}),new Swiper(".swiper",{direction:"horizontal",loop:!0,breakpoints:{0:{slidesPerView:"auto",spaceBetween:0},320:{slidesPerView:1,spaceBetween:16},640:{slidesPerView:2,spaceBetween:20}},pagination:{el:".swiper-pagination",clickable:!0}});
//# sourceMappingURL=index.2ddcb961.js.map