var captchaResponse = "";

function onCaptchaSuccess(token) {
    captchaResponse = token;
}

$("#subscribe-form").submit(function(event) {
    event.preventDefault(); 

    if (!captchaResponse) {
        showMessage("Please complete the CAPTCHA to verify you are not a robot.", "red");
        return;
    }

    $("#submit-button").prop('disabled', true);
    $("#spinner").show();
    $("#button-text").hide();

    var email = $("#email").val();
    var userAgent = navigator.userAgent;
    var data = { email: email, token: captchaResponse, userAgent: userAgent };

    if (!email) {
        showMessage("You must enter an email to receive the newsletter.", "red");
        return;
    }

    $.ajax({
        type: "POST",
        url: "/api/subscribe",
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: "json",
        success: function(data, textStatus, jqXHR) {
            showMessage("Thank you for subscribing!", "green");
            $("#submit-button").prop('disabled', false);
            $("#spinner").hide();
            $("#button-text").show();
            hcaptcha.reset(); // Reset the captcha
            captchaResponse = ""; // Clear the captcha response
        },
        error: function(jqXHR, textStatus, errorThrown) {
            showMessage("An error occurred. Please try again.", "red");
            $("#submit-button").prop('disabled', false);
            $("#spinner").hide();
            $("#button-text").show();
            hcaptcha.reset(); // Reset the captcha
            captchaResponse = ""; // Clear the captcha response
        }
    });
});

function showMessage(message, color) {
    $("#message").text(message).css("color", color);
    $("#message").fadeIn().delay(3000).fadeOut();
}
