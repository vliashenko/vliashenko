
//---Accordion----------------------------------------------------
const accordion__items = [...document.querySelectorAll('.accordion__item')]; // Получаю элементы .accordion__item

accordion__items.forEach((item) => { // прохожусь по ним в цикле
  const btn = item.querySelector('.accordion__header__img'); //Нахожу у элемента кружок, в котором будет плюс или минус
  const text = item.querySelector('.accordion__text__wrapper'); // Нахожу обертку у элемента, которую буду уменьшать
  let height; // Высота обертки элемента
  resize(); // Вызываем просчёт высоты и задаём CSS стили для обёртки

  if (!item.classList.contains('active')) { // если у текущего элемента аккордеона нету класс .active
    text.style.height = '0px';  // задать обертке нулевую высоту
  }

  function addOrRemoveHeight(height) {
    if (item.classList.contains('active')) { // если у текущего элемента аккордеона есть класс .active
      text.style.height = height + 'px'; // задать высоту, которую мы просчитали перед этим в переменной height
    } else {
      text.style.height = '0px'; // Иначе задать нулевую высоту
    }
  }

  function resize() {
    text.style.height = 'auto'; // Задать элементу высоту auto, чтобы мы могли её посчитать, потому что мы её могли обнулить в CSS стилях
    height = text.scrollHeight; // Запоминаем высоту элемента в переменную
    addOrRemoveHeight(height); // Вызываем функцию, которая добавляет в CSS высоту элементу
  }

  window.addEventListener('resize', resize); // ставим слушатель события resize на функцию resize

  btn.addEventListener('click', () => { // при клике на кружок, выполнять анонимную функцию
    item.classList.toggle('active'); // удаляем класс .active если он есть, иначе добавляем
    addOrRemoveHeight(height); // Вызываем функцию, которая добавляет в CSS высоту элементу
  });
});

//-------MODAL----------------------------------------------------------------------------------- 

const modalTrigger = document.querySelector('.main-block__button_blue'),
modal = document.querySelector('.modal'),
modalCloseBtnSubmit = document.querySelector('.btn_min'),
formSubmit = document.querySelector("#formSubmit"),
modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.addEventListener('click', openModal);


// modalCloseBtnSubmit.addEventListener('click', closeModal)



function closeModal() {
modal.classList.add('hide');
modal.classList.remove('show');
document.body.style.overflow = '';
}

function openModal() {
modal.classList.add('show');
modal.classList.remove('hide');
document.body.style.overflow = 'hidden';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
if (e.target === modal) {
    closeModal();
}
});

document.addEventListener('keydown', (e) => {
if (e.code === "Escape" && modal.classList.contains('show')) { 
    closeModal();
}
});


//-----QUOTE-SLIDER----------------------------------------------------------------------------------------------------------------------

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activated", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activated";
}