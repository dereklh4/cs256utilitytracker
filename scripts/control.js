$(document).ready(function() {

    // Switch toggle
    $('.Switch').click(function() {
        $(this).toggleClass('On').toggleClass('Off');
        
        var item_value = Number(( $(this).attr('id') ));
        var item_cost_element = ( $(this).parent().parent().parent().find(".item-cost"));
        var total_value = Number(item_cost_element.attr("id"));
        
        if ($(this).hasClass("On")) {
            total_value += item_value;
            item_cost_element.attr("id", total_value.toString());
            item_cost_element.html("-$" + total_value.toLocaleString());
        }
        else {
            total_value -= item_value;
            item_cost_element.attr("id", total_value.toString());
            item_cost_element.html("-$" + total_value.toLocaleString());
        }
        console.log(total_value);
    });


    //click events
    $(".caret").add(".item-title").add(".item-cost").click(function() {
        var parent = $(this).parent();
        $(parent).find("span").toggleClass("right");
        $(parent).find("span").toggleClass("down");

        var visibility = $(parent).find(".item-details").toggle();
    })

});