$(document).ready(function() {

    // Switch toggle
    $('.Switch').click(function() {
        $(this).toggleClass('On').toggleClass('Off');
        
        var item_value = Number(( $(this).attr('id') ));
        var item_cost_element = ( $(this).parent().parent().parent().find(".item-cost"));
        var total_value = Number(item_cost_element.attr("id"));
        var control_total_value = Number( $(".total-cost").attr("id"));
        
        if ($(this).hasClass("On")) {
            total_value += item_value;
            control_total_value += item_value;
            item_cost_element.attr("id", total_value.toString());
            item_cost_element.html("-$" + total_value.toLocaleString());
            $(".total-cost").attr("id", control_total_value.toPrecision(3));
            $(".total-cost").html("Total: -$" + control_total_value.toPrecision(3) + " per hour");
        }
        else {
            total_value -= item_value;
            control_total_value -= item_value;
            item_cost_element.attr("id", total_value.toString());
            item_cost_element.html("-$" + total_value.toLocaleString());
            $(".total-cost").attr("id", control_total_value.toPrecision(3));
            $(".total-cost").html("Total: -$" + control_total_value.toPrecision(3) + " per hour");
        }
        console.log(total_value);
    });


    //click events to expand items
    $(".caret").add(".item-title").add(".item-cost").click(function() {
        var parent = $(this).parent();
        $(parent).find("span").toggleClass("right");
        $(parent).find("span").toggleClass("down");

        var visibility = $(parent).find(".item-details").toggle();
        
        $(parent).find(".item-details").toggleClass("padding-bottom-5px");
    })
    
    $("#arrow-up").on("click", function() {
        var temp_value = Number($(".temp-degree").attr("id"));
        var control_total_value = Number( $(".total-cost").attr("id"));
        if (temp_value < 80) {
            //change temp display
            temp_value++;
            $(".temp-degree").attr("id", temp_value.toLocaleString());
            $(".temp-degree").html(temp_value.toLocaleString() + "&#176;");

            //change cost
            var cost = Number($(".temp-item-cost").attr("id"));
            cost += 0.24;
            $(".temp-item-cost").attr("id", cost.toLocaleString());
            $(".temp-item-cost").html("-$" + cost.toLocaleString());
            
            control_total_value += 0.24;
            $(".total-cost").attr("id", control_total_value.toPrecision(3));
            $(".total-cost").html("Total: -$" + control_total_value.toPrecision(3) + " per hour");
        }
    })
    
    $("#arrow-down").on("click", function() {
        var temp_value = Number($(".temp-degree").attr("id"));
        var control_total_value = Number( $(".total-cost").attr("id"));
        if (temp_value > 60) {
            //change temp display
            temp_value--;
            $(".temp-degree").attr("id", temp_value.toLocaleString());
            $(".temp-degree").html(temp_value.toLocaleString() + "&#176;");

            //change cost
            var cost = Number($(".temp-item-cost").attr("id"));
            cost -= 0.24;
            $(".temp-item-cost").attr("id", cost.toLocaleString());
            $(".temp-item-cost").html("-$" + cost.toLocaleString());
            
            control_total_value -= 0.24;
            $(".total-cost").attr("id", control_total_value.toPrecision(3));
            $(".total-cost").html("Total: -$" + control_total_value.toPrecision(3) + " per hour");
        }
    })
    
});