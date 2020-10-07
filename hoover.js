jQuery(function($){
    $('path').hover(function(){
        let info = $('.info-aside');
        console.log(info);
        $(".info-aside").css("background-image", "url(src/londre.jpg)");
    });
});
