/* main.js succesfully linked*/

$(document).ready(function () {

    /*
            $(".layer").backgroundSlideshow({
                delay: 3000,
                transitionDuration: 3000,
                images: [
                    "./img/enter-01.png",
                    "./img/enter-02.png",
                    "./img/enter-03.png"
                ]
            })
    */
    $("body").backgroundSlideshow({
        onBeforeTransition: function (index) {
            console.log("before transition", index)
        },
        onAfterTransition: function (index) {
            console.log("after transition", index)
        },
        transitionDuration: 1000,
        fixed: true,
        images: [
            "./img/enter-01.png",
            "./img/enter-02.png",
            "./img/enter-03.png",
        ]
    })




})