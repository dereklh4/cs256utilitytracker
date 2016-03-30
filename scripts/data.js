var type = "all";
var period = "month";

$(document).ready(function() {

    $(".button").on("click", function() {
        if ($(this).hasClass("selected")) {
            //do nothing
        }
        else {
            $(this).parent().find(".selected").toggleClass("selected");
            $(this).toggleClass("selected");
            
            //update variable
            var id = $(this).attr("id");
            if (id == "all" || id == "electric" || id=="gas" || id=="water") {
                type = id;
            }
            else {
                period = id;
            }
            
            //change the image
            if (period == "month") {
                if (type == "all") {
                    $("#graph-img").attr("src", "../../content/graph_all.png");
                }
                else if (type == "electric") {
                    $("#graph-img").attr("src", "../../content/graph_electric.png");
                }
                else if (type == "gas") {
                    $("#graph-img").attr("src", "../../content/graph_gas.png");
                }
                else if (type == "water") {
                    $("#graph-img").attr("src", "../../content/graph_water.png");
                }
            }
            else if (period == "day") {
                if (type == "all") {
                    $("#graph-img").attr("src", "../../content/graph_all_day.png");
                }
                else if (type == "electric") {
                    $("#graph-img").attr("src", "../../content/graph_electric_day.png");
                }
                else if (type == "gas") {
                    $("#graph-img").attr("src", "../../content/graph_gas_day.png");
                }
                else if (type == "water") {
                    $("#graph-img").attr("src", "../../content/graph_water_day.png");
                }
            }
            else if (period == "year") { //change these to images of the year, not month.
                if (type == "all") {
                    $("#graph-img").attr("src", "../../content/graph_all.png");
                }
                else if (type == "electric") {
                    $("#graph-img").attr("src", "../../content/graph_electric.png");
                }
                else if (type == "gas") {
                    $("#graph-img").attr("src", "../../content/graph_gas.png");
                }
                else if (type == "water") {
                    $("#graph-img").attr("src", "../../content/graph_water.png");
                }
            }
        }

    })

});