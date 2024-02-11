
//бургер меню
const initBurgerMenu = () => {
    const burgerMenu = document.querySelector('.burger__menu');
        const menu = document.querySelector(".burger__menu__wrapper");
        burgerMenu.addEventListener('click', () => {
            document.body.classList.toggle('_lock')
            burgerMenu.classList.toggle('_active');
            menu.classList.toggle('_active');
        });
        menu.addEventListener('click', () => {
            console.log('КАТЯ Писька')
            burgerMenu.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.classList.remove('_lock')
        });
 
}

//прокрутка меню к разделам
const initBurgerMenuLinks = () => {
    const burgerMenuLinks = document.querySelectorAll('.burger__menu__link[data-goto]');
    // const burgerMenu = document.querySelector('.burger__menu');
    // const menu = document.querySelector(".burger__menu__wrapper");

    burgerMenuLinks.forEach(link => {
            // console.log(link);
        link.addEventListener('click', () => {
            link.removeAttribute('href');
            console.log(link);
            const goToBlockSelector = link.dataset.goto;
            console.log(goToBlockSelector)
            const goToBlock = document.querySelector(goToBlockSelector);
            console.log(goToBlock)
            const headerHeight = document.querySelector('header');
            const goToBlockTop = goToBlock.getBoundingClientRect().top + window.scrollY - headerHeight.clientHeight;
            // console.log(goToBlockTop);
            // console.log(goToBlock);
            // console.log(goToBlockTop);
            window.scrollTo({
                top: goToBlockTop,
                behavior: 'smooth'
            });
        });
    });
}





//слайдер портфолио
const initSliderPortfolio = () => {
    const imageList = document.querySelector('.portfolio__content__container'); 
    const sliderButtons = document.querySelectorAll('.slide__actions__portfolio');
    sliderButtons[1].style.display = 'block'
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


//слайдер
  
      
    sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
        const direction = button.id === 'left__slide' ? -1 : 1;

        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' }); 
        });
    })
//стрелка исчезает при крайнем положении
        const handelSlideButtons = () => {
        sliderButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
        sliderButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    };

    imageList.addEventListener('scroll', () => {
        handelSlideButtons();
    });
}

//слайдер новости
const initSliderReviews = () => {
    const imageList = document.querySelector('.reviews__content__container'); 
    const sliderButtons = document.querySelectorAll('.slide__actions__reviews');
    sliderButtons[1].style.display = 'block'
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


//слайдер
    sliderButtons.forEach(button => {
        button.addEventListener('click', () => {
        const direction = button.id === 'left__slide' ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });  
        });
    })
//стрелка исчезает при крайнем положении
    const handelSlideButtons = () => {
        sliderButtons[0].style.display = imageList.scrollLeft <= 0 ? 'none' : 'block';
        sliderButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? 'none' : 'block';
    };

    imageList.addEventListener('scroll', () => {
        handelSlideButtons();
    });
}





window.addEventListener('load', () => {
    initBurgerMenu(),
    initBurgerMenuLinks(),
    window.innerWidth > 480 && initSliderPortfolio();
    window.innerWidth > 480 && initSliderReviews();
});


