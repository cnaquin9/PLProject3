$(document).ready(function () {
    $("a").click(function () {
        $(this).prev().toggleClass("hide");
        // show text
        if ($(this).prev().attr("class") == "hide") {
            $(this).text("Show more");
        }
        // hide text
        else {
            $(this).text("Show less");
        }
    });
});

