$(document).ready(function(){
    $(".fa-search-plus").click(function(){
        $(".overlay-pop").css("visibility","visible");
    })

    $().fancybox({
        selector : '[data-fancybox="images"]',
        loop     : true
      });
      $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
      $('[data-fancybox]').fancybox({
        protect: true,
        buttons : [
          'zoom',
          'thumbs',
          'close'
        ]
      });
      
      
      $('[data-fancybox="watermark"]').fancybox({
        protect    : true,
        slideClass : 'watermark',
        toolbar    : true,
        smallBtn   : true
      });
      
      // Preload watermark image
      // Please, use your own image
      (new Image()).src = "http://fancyapps.com/GJbkSPU.png";
      
})
