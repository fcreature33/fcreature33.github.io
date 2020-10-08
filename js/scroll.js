$('body').bind('mousewheel', function (e) {
    if (!(e.originalEvent.wheelDelta == 120)) {
        var top = parseInt($("#content").css("top"));
        $("#content").css("top", (top - 100) + "px");
        top = parseInt($("#content").css("top"));
        if (top <= -500) {
            setTimeout(function () {
                $("#content").css("top", "-500px");
            }, 100);
        }
    } else {
        var top = parseInt($("#content").css("top"));

        $("#content").css("top", (top + 100) + "px");
        top = parseInt($("#content").css("top"));
        if (top >= 0) {
            setTimeout(function () {
                $("#content").css("top", "0");
            }, 100);
        }
    }
});