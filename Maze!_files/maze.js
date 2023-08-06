$(document).ready(function () {
    function showLostMessage() {
        if (!boundary.hasClass("youlose")) {
            boundary.addClass("youlose");
            if (boundary.hasClass("started")) {
                boundary.removeClass("started");
            }
            updateStatusBox("Sorry, you lost. :[");
        }
    }
    function updateStatusBox(msg) {
        statusBox.text(msg);
    }
    var boundary = $(".boundary");
    var maze = $("#maze");
    var statusBox = $("#status");
    var start = $("#start");
    var end = $("#end");

    boundary.mouseenter(function () {
        showLostMessage();
    });


    maze.mouseleave(function () {
        showLostMessage();
    });



    end.mouseenter(function () {
        if (!boundary.hasClass("youlose")) {
            if (boundary.hasClass("started")) {
                updateStatusBox("You win! :]");
            }
        }
    });

    start.click(function () {
        if (boundary.hasClass("youlose")) {
            boundary.removeClass("youlose");
            if (!boundary.hasClass("started")) {
                boundary.addClass("started");
            }
            updateStatusBox("You are playing now.");
        }
    });

});