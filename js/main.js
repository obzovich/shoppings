$(function() {
$('.lessons-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ['<img src="img/right-arrow.svg">', '<img src="img/right-arrow.svg">'],
    dots:false,
    startPosition:0,
    responsive:{
        1:{
            items:1
        },
        200:{
            items:1
        },
        600:{
            items:2.4
        }
    }
});

$('.popular-carousel').owlCarousel({
    center:true,
    loop:true,
    margin:20,
    nav:true,
    navText: ['<img src="img/left_arrow.svg">', '<img src="img/right-arrow.svg">'],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});

$('.feedback-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    navText: ['<img src="img/right-arrow.svg">', '<img src="img/right-arrow.svg">'],
    dots:false,
    startPosition:0,
    responsive:{
        1:{
            items:1
        },
        200:{
            items:1
        },
        600:{
            items:2.4
        }
    }
});

	});

	

