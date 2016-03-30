$(document).ready(function() {

    $(".category-button").on("click", function() {
        if ($(this).hasClass("selected")) {
            //do nothing
        }
        else {
            $(this).parent().find(".selected").toggleClass("selected");
            $(this).toggleClass("selected");
            
            //change the image
            if ($(this).attr("id") == "all") {
                $("#graph-img").attr("src", "../../content/graph_all.png");
            }
            else if ($(this).attr("id") == "electric") {
                $("#graph-img").attr("src", "../../content/graph_electric.png");
            }
            else if ($(this).attr("id") == "gas") {
                $("#graph-img").attr("src", "../../content/graph_gas.png");
            }
            else if ($(this).attr("id") == "water") {
                $("#graph-img").attr("src", "../../content/graph_water.png");
            }
        }

    })

});