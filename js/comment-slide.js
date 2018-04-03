$(document).ready(function(){

var img_data=$(".comment-prof-boxes").find(".show").attr("href");

$(".comment-prof-boxes li").click(function(){
    var prof_data=$(this).attr("id");
    $(".profiles").find(".prof-show").removeClass("prof-show");
    $(this).addClass("prof-show");
    $(".comment-text").find(".showing").removeClass("showing");
    console.log($("[data-comment="+prof_data+"]"));
    $("[data-comment="+prof_data+"]").addClass("showing")
    
})

$(".next-comment").click(function(){
    var next_prof=$(".profiles").find(".prof-show").next();
    var prof_data=next_prof.attr("id");
        $(".profiles").find(".prof-show").removeClass("prof-show"); 
    $(".comment-text").find(".showing").removeClass("showing");
    if(prof_data!=undefined){
        $("[data-comment="+prof_data+"]").addClass("showing")
        next_prof.addClass("prof-show");
        
    }
    else{
        $(".comment-prof-text").eq(0).addClass("showing")
        $(".prof-box").eq(0).addClass("prof-show");
    }
})

$(".prev-comment").click(function(){
    var prev_prof=$(".profiles").find(".prof-show").prev();
    var prof_data=prev_prof.attr("id");
        $(".profiles").find(".prof-show").removeClass("prof-show"); 
    $(".comment-text").find(".showing").removeClass("showing");
    if(prof_data!=undefined){
        $("[data-comment="+prof_data+"]").addClass("showing")
        prev_prof.addClass("prof-show");
        
    }
    else{
        $(".comment-prof-text").eq($(".comment-prof-text").length-1).addClass("showing")
        $(".prof-box").eq($(".prof-box").length-1).addClass("prof-show");
    }
})


// if($(window).width()<600){
//     $("#comment-slider").find(".d-flex").removeClass("d-flex")

// }

})