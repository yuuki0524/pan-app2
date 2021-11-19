$(function () {
    $(".menu_button").click(function () {
        $(".menu_close").addClass("menu_open");

    });
    $(".close_button").click(function () {

        $(".menu_open").removeClass("menu_open");
    });
});
