$(document).ready(function() {

    $('.Switch').click(function() {
        $(this).toggleClass('On').toggleClass('Off');
    })
    
    $("#submit-password-button").click(function() {
        if ($("#new-password").val() == $("#confirm").val() && $("#new-password").val() != "") {
            alert("Password successfully changed!");
            $("#new-password").val("");
            $("#confirm").val("");
            $("#old-password").val("");
        }
        else {
            alert("Error. Please try again.");
            $("#new-password").val("");
            $("#confirm").val("");
            $("#old-password").val("");
        }
    })

});