$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        console.log("teste")
        $("nav ul").toggleClass("showing")
    })
})