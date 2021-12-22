$("document").ready(() => {
    $("header .header_top .nav .menu:nth-child(1)").click(() => {
        $("header .header_bottom > .container").removeClass("about gallery projects contact");
        $("header .header_bottom > .container").toggleClass("home");
    });

    $("header .header_top .nav .menu:nth-child(2)").click(() => {
        $("header .header_bottom > .container").removeClass("home projects contact gallery");
        $("header .header_bottom > .container").toggleClass("about");
    });

    $("header .header_top .nav .menu:nth-child(3)").click(() => {
        $("header .header_bottom > .container").removeClass("home about projects contact gallery");
        $("header .header_bottom > .container").toggleClass("gallery");
    });

    $("header .header_top .nav .menu:nth-child(4)").click(() => {
        $("header .header_bottom > .container").removeClass("home about contact gallery");
        $("header .header_bottom > .container").toggleClass("projects");
    });


    $("header .header_top .nav .menu:nth-child(5)").click(() => {
        $("header .header_bottom > .container").removeClass("home projects about gallery");
        $("header .header_bottom > .container").toggleClass("contact");
    });

})