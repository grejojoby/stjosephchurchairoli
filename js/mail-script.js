$(document).ready(function () {
    var form = $('#myForm');
    var submit = $('#SubmitBtn');
    var alert = $('#alertMsg');

    // form submit event
    form.on('submit', function (e) {
        e.preventDefault(); // prevent default form submit

        $.ajax({
            url: 'https://script.google.com/macros/s/AKfycbyWVUtdrc9t01SknYoiY95a0uYIRwf4H4v3fpl-7uXZNi8ICxYnaJtT4KaERRMMIG61/exec', // form action url
            type: 'POST', // form submit method get/post
            dataType: 'html', // request type html/json/xml
            data: form.serialize(), // serialize form data
            beforeSend: function () {
                alert.fadeOut();
                submit.html('Sending....'); // change submit button text
            },
            success: function (data) {
                alert.html("Successfully Sent.").fadeIn(); // fade in response data
                form.trigger('reset'); // reset form
                submit.attr("style", "display: none !important");; // reset submit button text
            },
            error: function (e) {
                console.log(e)
            }
        });
    });
});