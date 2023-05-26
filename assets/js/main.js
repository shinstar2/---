$(function(){

    /**스크롤이벤트*/ 
    $(window).scroll(function(){
        curr = $(this).scrollTop();
        if(curr > 0){
            $('header').addClass('fixed')

        }else{
            $('header').removeClass('fixed')
        }
   });
   $(window).trigger('scroll'); //스크롤 강제실행



    const visualSlide1 = new Swiper(".visual-slide1", {
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",



          
        },
        speed:1000,
        pagination: {
          el: ".swiper-pagination",
          type: "progressbar",
        },
      });

    // const recommSlide = new Swiper(".recomm-slide", {
    //     navigation: {
    //       nextEl: ".next",
    //       prevEl: ".prev",
    //     },
    //     pagination: {
    //       el: ".swiper-pagination",
         
    //     },
    //   });


/**
* @intro
* 
*/
gsap.from('.sc-visual .title .parent span',1,{ /**1초동안 0.1초 간격으로 실행 */
   yPercent:100,
   stagger:0.1 /**0.1.초 간격으로 실행 */
    })





















})//지우지말것 