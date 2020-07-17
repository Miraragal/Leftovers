$("#eye").click(function() {
    var password = document.getElementById("enterPW");
    if (password.type === "password") {
        password.type = "text";
        $('#eye').toggleClass("fa-eye fa-eye-slash");
    } else {
        password.type = "password";
        $('#eye').toggleClass("fa-eye-slash fa-eye");
    }
});