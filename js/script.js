

searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

// script for the login popup start here
let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
	loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
	loginForm.classList.remove('active');
}

// script for the login popup end here

window.onscroll = () =>{

  searchForm.classList.remove('active');

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }

}

window.onload = () =>{

  if(window.scrollY > 80){
    document.querySelector('.header .header-2').classList.add('active');
  }else{
    document.querySelector('.header .header-2').classList.remove('active');
  }
  	fadeOut();
}

// loader of imgage fuction 
function loader(){
		document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
	setTimeout(loader, 3000);
}

// loader of imgage fuction stop

// copy from script code swiperjs for home book slide
var swiper = new Swiper(".books-slider", {
      loop:true,
      centeredSlides:true,
      autoplay:{
      	delay:9500,
      	disableOnInteraction:false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




// copy from script code swiperjs for home book slide

var swiper = new Swiper(".featured-slider", {
			spaceBetween:10,
      loop:true,
      centeredSlides: true,
      autoplay:{
      	delay:9500,
      	disableOnInteraction:false,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

//////for the arrival section  ???????????????????


var swiper = new Swiper(".arrivals-slider", {
			spaceBetween:10,
      loop:true,
      centeredSlides: true,
      autoplay:{
      	delay:5500,
      	disableOnInteraction:false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


//////for the arrival section  ???????????????????


var swiper = new Swiper(".reviews-slider", {
			spaceBetween:50,
			grabCursor:true,
      loop:true,
      centeredSlides: true,
      autoplay:{
      	delay:5500,
      	disableOnInteraction:false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


var swiper = new Swiper(".blogs-slider", {
			spaceBetween:50,
			grabCursor:true,
      loop:true,
      centeredSlides: true,
      autoplay:{
      	delay:5500,
      	disableOnInteraction:false,
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });






