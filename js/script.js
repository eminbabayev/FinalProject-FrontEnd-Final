$(document).ready(function () {

  $(".navbar-toggler").click(function(){
    $(".mycollap").slideToggle("slow");
  })

  //********************************    
//********************************
// LOADER-SECTION
//********************************
//********************************
	function loader() {
		if($(".loader").length){
			$(".loader").delay(500).fadeOut("500");
		}
  }

loader();

  if ($(window).scrollTop() > 20) {
    $(".scroll-btn").css("animation-name", "scroll-btn-show");
  }
  else {
    $(".scroll-btn").css("animation-name", "scroll-btn-hidden");
  }

  $(".scroll-btn").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;
  });


  function agency_items() {
    $(".agency-item").css("animation-name", "fadeDown");
    $(".agency-item:eq(0)").css("animation-name", "fadeLeft");
    $(".agency-item:eq(1)").css("animation-name", "fadeUp");
  }
 


  //********************************
  //******************************** 
  // WINDOW-SCROLL
  //********************************
  //********************************

  $(window).scroll(function () {
    // console.log($(this).scrollTop())

    if ($(this).scrollTop() > 20) {
      $(".scroll-btn").css("animation-name", "scroll-btn-show");
    }
    else {
      $(".scroll-btn").css("animation-name", "scroll-btn-hidden");
    }

   

  
    
  })
  //********************************  
  //********************************
  //NAV_SECTION
  //********************************
  //********************************

  $(".navbar-toggler").click(function(){
    console.log("Fdsfds")
  })
  $(".search-icon").click(function () {
    $(".form-container").toggle();
  })
  navbg();
  $(window).resize(function () {
    navbg();
  })
  function navbg(e) {
    if ($(window).width() > 1140) { 
      $("nav").css("margin-top", "30px").removeClass("bg-dark");
      $(window).scroll(function () {
        // console.log(e)  
        if ($(window).scrollTop() > 0) {
          $("nav").css("margin-top", "0").addClass("bg-dark");
        }
        else {
          $("nav").css("margin-top", "30px").removeClass("bg-dark");
        }
      })
    }
    else {
      $("nav").css("margin-top", "0").addClass("bg-dark");

    }
  }
  if ($(window).scrollTop() > 0) {
    $("nav").css("margin-top", "0").addClass("bg-dark");
  }
  $(".mydropdown-toggle").mouseover(function () {
    // $("nav").css("overflo")
  })

  
  $(".dropdown-btn").click(function () {
    console.log($(this).prev().css("height"))
    $(this).prev().slideToggle("slow")
  })

    //********************************    
    //********************************
    // OWL-SECTION
    //********************************
    //********************************

  var owl = $(".owl-slide");
  owl.owlCarousel({
    
      loop: true,
      // margin: 100,
      center: false,
      autoplay:true,
      autoplayTimeout:2500,
      autoplayHoverPause:true,
      items:1,
      nav: true,
      responsive:{

      616:{
          items:2
      },
      816:{
          items:3
      }
      }
      
  });

//********************************    
//********************************
// ACCORDION-SECTION
//********************************
//********************************
$(".accordion-btn").click(function(){
  console.log($(this).parents().eq(1).next())
  if($(this).parents().eq(1).next().hasClass("show")){
    console.log("bgvgv")
    $("#accordion").find(".my-accordion-active").removeClass("my-accordion-active");
  }
  else{
    console.log("Fdf");
  $("#accordion").find(".my-accordion-active").removeClass("my-accordion-active");
  $(this).addClass("my-accordion-active");
  }
})


//********************************    
//********************************
// LOADER-SECTION
//********************************
//********************************

 
 $(".blog-input").focusin(function(){
   $(".blog-f-btn").css("background","#2fc42b")
 })
 $(".blog-input").focusout(function(){
  $(".blog-f-btn").css("background","#282d38")
})
if($(".agency-count").length){
  $(".agency-count").appear(function(){
  $('.timer').countTo();
  console.log("nfff")
}) 
}


})
  

