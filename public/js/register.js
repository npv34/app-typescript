// code jquery check conftrm password
$(document).ready(function() {
    $('#confirmPassword').on('input', () => {
        const confirmPass = $('#confirmPassword').val();
        const password = $("#password").val();
        if (password !== confirmPass) {
            $("#error-confirmPassword").html("The confirmation password does not match the password")
        } else {
            $("#error-confirmPassword").html("")
        }
    })

    //  viet jquery check password: 1-8, bao gom ca so ca chu
    // viet jquery check email address

})