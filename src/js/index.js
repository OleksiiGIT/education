import * as $ from 'jquery'
import fullpage from 'fullpage.js'
import "owl.carousel"

$(function() {

  if ($(window).width() < 767) {
    destroyFullpage()
  }

  if ($("main").hasClass("fullpageInit")) {

new fullpage('.fullpageInit', {
    autoScrolling:true,
    scrollHorizontally: true,
      navigation: true,
      anchors:['01','02','03','04','05','06'],
      showActiveTooltip: true,
      navigationTooltips: ['Главная', 'Почему Украина', 'Стоимость', 'Мы берем на себя', 'Отзывы', 'Контакты'],

      afterLoad: function () {
         if (fullpage_api.getActiveSection().anchor === '05') {
           $(".logo a").append('<svg class="greenLogoImg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" width="78" height="40" viewBox="0 0 78 40">\n' +
             '  <image xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAoCAMAAABn2TxoAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABKVBMVEUAAAAAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAzJkAAAAy9MrxAAAAYXRSTlMAMFAVcKbKI69goD9AHIMDvRbcE6P+Ina00N8O2y73WPw1wGJ8gPj1i5o4qfEEHzphVbBvTMiEMvJI+SHV1w8BpOuJ2FwkR7grQbLH+2n9geXtVAzm7IcRQoi74OPBjUkHEN06nQAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAGJSURBVEjH7dXXVsJAEAbgMUaRGjpI76Fjwd4VsGHvXd7/JUzEbCKZHNgNF17432XI/53sIQwAaCZ62nAGo5Hzz/0ZbpKfIs1p3jI4mumPKGIlXZt+xBvW7A4szmGcE63ZwdXDwg/jeLTmAsE9Ps4tAHi84+K8Hvkunz8wDi7g9/3cFwyFZ6VE2LiI3A2HgoNfMsfG6d7oaMz8YWNR1YsnzHKJuPb5kilzXCr5+7zpjBkuk9b92izZXD6fL9BxBamSy2L7wMHJEek48bvkQDhO+/R0h0WXX5GVK6KrSiixcSUB8JQrVVquWimDcWr1hm59+pUP5zRcf3026jUYLfOku6CM1AMujoioaZLukjJaJiMrNbdCuqvKgcJktEbNRdWd2uxPfOtkskHNwSYpb23L1zu7ZLBHr8G++mYdtNrOzqF6bWPgjnqGOWbg4MRIO2XRoC3iWjfNxEEL53g2DeDsHNEuWDWAzuUgdnXNrgHc5G612N39gxlNSu3x6fmlK/1Xvb69f3wOu/sLF3fgboW8mcMAAAAASUVORK5CYII=" width="78" height="40"/>\n' +
             '</svg>')
           $("header").addClass("greenZona")
           $("#fp-nav").addClass("greenZona")
         } else {
           $("header").removeClass("greenZona")
           $("#fp-nav").removeClass("greenZona")
           $(".greenLogoImg").remove()
         }
         if ($(window).width() < 860) {
          if (fullpage_api.getActiveSection().anchor === '06' || fullpage_api.getActiveSection().anchor === '01') {
            $(".footerMainConsultBtn").hide();
          } else {
            $(".footerMainConsultBtn").show();
          }
         }
      }
  });

   fullpage_api.setAllowScrolling(true)
   fullpage_api.setLockAnchors(true)

  }

   $('.scrollDownWrapper').click(e => {
      e.preventDefault()
      fullpage_api.moveSectionDown()
   })

  $(".menu").click(()=>{
    $(".menuOpenWrapper").show()
    $(".menuOpen").css("right", "0")
  })

  $(".closeMenuBtn").click(()=>{
    closeMenu()
  })

  $(".menuOpenWrapper").click(()=>{
    closeMenu()
  })

  $(".plansHeader").on("click", "a", function(e){
    e.preventDefault()

    $(this).parent(".plansHeader").children("a").removeClass("active")
    $(this).addClass("active")

    const attr = $(this).attr("datatype")

    if (attr === 'pricesStudy') {
      $(".pricesStudy").show()
      $(".pricesLiving").hide()
    } else {
      $(".pricesLiving").show()
      $(".pricesStudy").hide()
    }
  })

  $("#reviewSliderInit").owlCarousel({
    items: 1,
    margin: 30,
    dots: true,
    nav: true,
    responsive : {
      768 : {
          items: 3
      }
    }
  })

});

$(window).resize(function () {
  if ($(window).width() < 767) {
    destroyFullpage()
  }
})

function setRightHeight() {
  let h = $(".menuOpenList").height()
  $(".menuOpenListRight").width(h)
}

function closeMenu() {
  $(".menuOpenWrapper").hide()
  $(".menuOpen").css("right", "-100%")
}

function destroyFullpage() {
  //fullpage_api.destroy();
}
