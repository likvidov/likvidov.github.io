'use strict';

document.addEventListener('DOMContentLoaded', () =>{

  const sendBtn = document.querySelector('.form-button'),
        inputName = document.querySelector('.input-name'),
        inputPhone = document.querySelector('.input-phone');


  new WOW().init();

  var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  const sendEmail = (event) => {
    event.preventDefault();
    const inputNameValue = inputName.value;
    const inputPhoneValue = inputPhone.value;
    if (inputNameValue && inputPhoneValue){
      console.log(inputNameValue);
      console.log(inputPhoneValue);

    }
    //const inputValue = input.value.trim();
  }

  // sendBtn.addEventListener('click', sendEmail);
});
