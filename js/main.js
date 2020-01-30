'use strict';

document.addEventListener('DOMContentLoaded', () =>{

  const sendBtn = document.querySelector('.form-button'),
        inputName = document.querySelector('.input-name'),
        inputPhone = document.querySelector('.input-phone');


  new WOW().init();

  var mySwiper = new Swiper('.swiper-container', {
      speed: 400,
      spaceBetween: 100,
      pagination: {
          el: '.projects-pagination',
          bulletClass: 'projects-bullet',
          bulletActiveClass: 'projects-bullet-active',
          clickable: true,
        }, 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
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

  sendBtn.addEventListener('click', sendEmail);
});