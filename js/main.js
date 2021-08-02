const burger = document.querySelector('.icon-right-menu-bars_1')
const menu = document.querySelector('.header-navbar__menu')
const close = document.querySelector('.header-navbar__close')
const toggleMenu = () => {
    menu.classList.toggle('open')
    console.log(this);
}

burger.addEventListener('click', toggleMenu)
close.addEventListener('click', toggleMenu)


// swiper
new Swiper('.services-swiper', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 'auto',
    grabCursor: true,
});

new Swiper('.portfolio-swiper__navbar', {
    slidesPerView: 'auto',
    grabCursor: true,
});

new Swiper('.portfolio-navbar__mob', {
    slidesPerView: 'auto',
    grabCursor: true,
});

// 
new Swiper('.portfolio-swiper__1', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 100,
    pagination:{
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

new Swiper('.portfolio-swiper__2', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 100,
    pagination:{
        el: '.swiper-pagination',
        type: 'fraction',
    },
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

new Swiper('.portfolio-swiper__3', {
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 100,
    pagination:{
        el: '.swiper-pagination',
        type: 'fraction',
    },
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

new Swiper('.swiper--mobail__1', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 1.5,
    grabCursor: true,
    spaceBetween: 20,
    autoHeight:false,
});

new Swiper('.swiper--mobail__2', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 1.5,
    observer: true,
    observeParents: true,
    grabCursor: true,
    spaceBetween: 20,
    autoHeight:false,
});
new Swiper('.swiper--mobail__3', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 1.5,
    observer: true,
    observeParents: true,
    grabCursor: true,
    spaceBetween: 20,
    autoHeight:false,
});

new Swiper('.reviews-swiper--1', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 'auto',
    grabCursor: true,
    spaceBetween: 30,
    
});

new Swiper('.reviews-swiper--2', {
    pagination:{
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    grabCursor: true,
    spaceBetween: 30,
    
});
// 


//select

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();

//



// tabs portfolio
const tabNavs = document.querySelectorAll('.portfolio-swiper__navbar .tabs-nav__item')
const tabContents = document.querySelectorAll('.portfolio-swiper__content')

tabNavs.forEach((nav, i) => {
    
    nav.onclick = function(event) {
        event.preventDefault()
        if(!this.classList.contains('active')) {
            document.querySelector('.portfolio-swiper__navbar .tabs-nav__item.active').classList.remove('active')
            this.classList.add('active')
            document.querySelector('.portfolio-swiper__content.active').classList.remove('active')
            tabContents[i].classList.add('active')
        }
    }

})



// mob tabs portfolio
const portMobTabNavs = document.querySelectorAll('.portfolio-navbar__mob .tabs-nav__item')
const portMobTabContents = document.querySelectorAll('.portfolio-swiper--mobail')

portMobTabNavs.forEach((nav, i) => {
    
    nav.onclick = function(event) {
        event.preventDefault()
        if(!this.classList.contains('active')) {
            document.querySelector('.portfolio-navbar__mob .tabs-nav__item.active').classList.remove('active')
            this.classList.add('active')
            document.querySelector('.portfolio-swiper--mobail.active').classList.remove('active')
            portMobTabContents[i].classList.add('active')
        }
    }

})

// 

// tabs reviews
const reviewsNavstab = document.querySelectorAll('.reviews-heading .reviews-heading__container .tabs-nav_item')
const reviewsContstab = document.querySelectorAll('.reviews-swiper')

reviewsNavstab.forEach((nav, i) => {
    
    nav.onclick = function(event) {
        event.preventDefault()
        if(!this.classList.contains('active')) {
            document.querySelector('.reviews-heading .reviews-heading__container .tabs-nav_item.active').classList.remove('active')
            this.classList.add('active')
            document.querySelector('.reviews-swiper.active').classList.remove('active')
            reviewsContstab[i].classList.add('active')
        }
    }

})
// 