$(document).ready(function() {

    //click events to expand items
    $(".caret").add(".item-title").add(".item-cost").click(function() {
        var parent = $(this).parent();
        $(parent).find("span").toggleClass("right");
        $(parent).find("span").toggleClass("down");

        var visibility = $(parent).find(".item-details").toggle();
        
        $(parent).find(".item-details").toggleClass("padding-bottom-5px");
    })
    
});