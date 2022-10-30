 $(function(){

   
   $('.slider__inner').slick({
     prevArrow: '<button type="button" class="slick-prev"><img src="images/slider/arrow-left.svg" alt="arrow-left"></button>',
     nextArrow: '<button type="button" class="slick-next"><img src="images/slider/arrow-right.svg" alt="arrow-right"></button>',
     infinite: true,
     centerMode: true,
     centerPadding: '10px',
     variableWidth: true,
     slidesToShow: 3,
     dots: true,
     responsive: [
       {
         breakpoint: 600,
         settings: {
           infinite: false,
         }
       },
       {
         breakpoint: 360,
         settings: {
           arrows: false
         }
       },
     ]
   });

 });