
jQuery('.slider-da').slick({
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 1,
    nextArrow: '<button class="flickity-button flickity-prev-next-button next" type="button" aria-label="Next"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>',
    prevArrow: '<button class="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg></button>',
    responsive: [
        {
            breakpoint: 556,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});

jQuery('.slider-more-da').slick({
    slidesToShow: 3,
    nextArrow: '<button class="flickity-button flickity-prev-next-button next" type="button" aria-label="Next"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow" transform="translate(100, 100) rotate(180) "></path></svg></button>',
    prevArrow: '<button class="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous"><svg class="flickity-button-icon" viewBox="0 0 100 100"><path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" class="arrow"></path></svg></button>',
    responsive: [
        {
            breakpoint: 556,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
