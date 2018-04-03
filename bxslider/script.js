$(document).ready(function(){
    $('.slides').bxSlider({
        auto: true,
        mode:'fade',
        pagerCustom:'.images',
        nextText:[ '<span class="fa fa-caret-right"></span>' ],
	    prevText:[ '<span class="fa fa-caret-left"></span>' ]
    });
});