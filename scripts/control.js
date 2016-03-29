

//click events
$(".caret").add(".item-title").click(function() {
        var parent = $(this).parent();
        $(parent).find("span").toggleClass("right");
        $(parent).find("span").toggleClass("down");
        
        var visibility = $(parent).find(".item-details").toggle();
        
})