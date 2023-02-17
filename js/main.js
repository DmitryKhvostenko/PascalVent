// SLIDER-------------

var swiper = new Swiper(".mySwiper", {
    direction: 'vertical',
    allowTouchMove: false,
    simulateTouch: false,
    noSwiping: true,
    noSwipingClass: 'mySwiper-slide',
    navigation: {
        nextEl: '.mySwiper__button_next',
        prevEl: '.mySwiper__button_prev',
    },

});
const btn = document.querySelectorAll('.swiper__button');

for (let i = 0; i < btn.length; i++) {
    let currentBtn = btn[i];
    btn[i].addEventListener('click', function () {
        for (let j = 0; j < btn.length; j++) {
            btn[j].classList.remove('active')
        }
        currentBtn.classList.add('active');
    })
}

// -------------SLIDER

// PHONE---------------
var element = document.getElementById('phone');
var element2 = document.getElementById('footer-phone');
var element3 = document.getElementById('popup-phone')
const elements = document.getElementsByClassName("phone-mask");
for (var i = 0; i < elements.length; i++) {
    new IMask(elements[i], {
        mask: '+{38}(000)000-00-00',
        placeholder: {
            show: 'always'
        }
    });
}
element.addEventListener('input', function () {
    if (element.value.length >= 17) {
        document.querySelector('.contacts__button').classList.add('active')
        document.querySelector('.contacts__error').classList.remove('active')
    }
    else {
        document.querySelector('.contacts__button').classList.remove('active')
    }
})
element2.addEventListener('input', function () {
    if (element2.value.length >= 17) {
        document.querySelector('.footer__button').classList.add('active')
        document.querySelector('.footer__error').classList.remove('active')
    }
    else {
        document.querySelector('.footer__button').classList.remove('active')
    }
})
element3.addEventListener('input', function () {
    if (element3.value.length >= 17) {
        document.querySelector('.popup__button').classList.add('active')
        document.querySelector('.popup__error').classList.remove('active')
    }
    else {
        document.querySelector('.popup__button').classList.remove('active')
    }
})
// -------------------PHONE

// FORM----------------------

const buttons = document.querySelectorAll('.form-button')
const forms = document.querySelectorAll('.form')
const errors = document.querySelectorAll('.form__error')
for (i = 0; i < forms.length; i++) {
    const currentForm = forms[i];
    const currentButton = buttons[i];
    const currentError = errors[i]
    forms[i].addEventListener('submit', e => {
        if (!currentButton.classList.contains('active')) {
            e.preventDefault();
            currentError.classList.add('active');
        } else currentError.classList.remove('active')
    })
}

// ---------------FORM

// CUSTOM SLIDER 1-----------------

const slides = document.querySelectorAll('.portfolio__item')
const nextBtn = document.querySelector('.portfolio__button_next')
const prevBtn = document.querySelector('.portfolio__button_prev')
function CheckBtn() {
    if (currentCounter == 3) {
        nextBtn.classList.add('blocked')
    } else nextBtn.classList.remove('blocked')
    if (currentCounter == 0) {
        prevBtn.classList.add('blocked')
    } else prevBtn.classList.remove('blocked')
}
let currentCounter = 0;
for (i = 0; i < slides.length; i++) {
    const currentSlide = slides[i];
    slides[i].addEventListener('click', () => {
        for (j = 0; j < slides.length; j++) {
            slides[j].classList.remove('active')
        }
        currentSlide.classList.add('active');
        currentCounter = currentSlide.id
        CheckBtn()
    })
}
nextBtn.addEventListener('click', function () {
    if (!nextBtn.classList.contains('blocked')) {
        currentCounter++;
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active')
        }
        for (i = 0; i < slides.length; i++) {
            slides[currentCounter].classList.add('active')
        }
        CheckBtn()
    }
})

prevBtn.addEventListener('click', function () {
    if (!prevBtn.classList.contains('blocked')) {
        currentCounter--;
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active')
        }
        for (i = 0; i < slides.length; i++) {
            slides[currentCounter].classList.add('active')
        }
        CheckBtn()
    }
})

// -------------CUSTOM SLIDER 1

// CUSTOM SLIDER 2-------------

const ClientsNextBtn = document.querySelector('.clients__button_next')
const ClientsPrevBtn = document.querySelector('.clients__button_prev')
const ClientsItems = document.querySelectorAll('.clients__item')
let ClientsCounter = 0;

function ClientsCheck() {
    if (ClientsCounter == 0) {
        ClientsPrevBtn.classList.add('blocked')
    } else {
        ClientsPrevBtn.classList.remove('blocked')
    }
    if (ClientsCounter == 3) {
        ClientsNextBtn.classList.add('blocked')
    } else {
        ClientsNextBtn.classList.remove('blocked')
    }
}

ClientsNextBtn.addEventListener('click', function () {
    if (!ClientsNextBtn.classList.contains('blocked')) {
        ClientsCounter++
        for (let i = 0; i < ClientsItems.length; i++) {
            if (!ClientsItems[i].classList.contains('hidden')) {
                ClientsItems[i].classList.add('hidden');
                break;
            }
            else {
            }
        }
        ClientsCheck()
    }
})

ClientsPrevBtn.addEventListener('click', function () {
    if (!ClientsPrevBtn.classList.contains('blocked')) {
        ClientsCounter--
        for (let i = 3; i >= 0; i--) {
            if (ClientsItems[i].classList.contains('hidden')) {
                ClientsItems[i].classList.remove('hidden');
                break;
            }
        }
        ClientsCheck()
    }
})

// ----------CUSTOM SLIDER 2

// FIXED HEADER---------------

const header = document.querySelector('.header__wrapper');
const headerHeight = header.offsetHeight;
window.addEventListener('scroll', function () {
    let scrollDistance = this.window.scrollY;
    if (scrollDistance >= 900) {
        header.classList.add('active')
        document.body.style.marginTop = `${headerHeight}px`;
    } else {
        header.classList.remove('active')
        document.body.style.marginTop = '0px';
    }
})

// ---------------FIXED HEADER

// POPUPS---------------------

const headerBtn = document.querySelector('.header__button');
const popupContact = document.querySelector('.popup-contact');
const popupContactClose = document.querySelector('.popup-contact__close');
const shadow = document.querySelector('.popup__shadow');
const formBtn = document.querySelector('.pascal__button');
const formBtn2 = document.querySelector('.comfort__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');

popupContact.addEventListener('click', (e) => {
    if (!e.target.closest('.popup-contact__body')) {
        closePopup()
    }
})
popup.addEventListener('click', (e) => {
    if (!e.target.closest('.popup__body')) {
        closePopup()
    }
})

headerBtn.addEventListener('click', () => {
    popupContact.classList.add('active')
    document.body.classList.add('stopped')
    document.querySelector('.popup__shadow').classList.add('active')
})
popupContactClose.addEventListener('click', () => {
    closePopup()
})

function closePopup() {
    popup.classList.remove('active')
    popupContact.classList.remove('active')
    document.body.classList.remove('stopped')
    document.querySelector('.popup__shadow').classList.remove('active')
}

formBtn.addEventListener('click', () => {
    popup.classList.add('active')
    document.querySelector('.popup__shadow').classList.add('active')
    document.body.classList.add('stopped')
})
formBtn2.addEventListener('click', () => {
    popup.classList.add('active')
    document.querySelector('.popup__shadow').classList.add('active')
    document.body.classList.add('stopped')
})
popupClose.addEventListener('click', () => {
    closePopup()
})

// -----------------POPUPS

// BURGER--------------- 

const burgerButton = document.querySelector('.header__burger')
const burger = document.querySelector('.burger-menu')
const burgerClose = document.querySelector('.burger-menu__close')
const burgerPopup = document.querySelector('.burger-menu__button')
burgerButton.addEventListener('click', () => {
    burger.classList.add('active')
    document.body.classList.add('stopped')
})
burgerClose.addEventListener('click', () => {
    burger.classList.remove('active')
    document.body.classList.remove('stopped')
})

burgerPopup.addEventListener('click', () => {
    popupContact.classList.add('active')
    document.querySelector('.popup__shadow').classList.add('active')
})

// --------------BURGER