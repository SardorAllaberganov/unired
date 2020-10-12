$(document).ready(function () {
    //ajax request to get current location
    $.ajax({
        url: "https://geolocation-db.com/jsonp",
        jsonpCallback: "callback",
        dataType: "jsonp",
        success: function (location) {
            $("#city").html(location.city);
            $("#city1").html(location.city);
        },
    });

    //function to toggle menu
    $("#city, #city1").on("click", function (e) {
        e.stopPropagation();
        $(".city-list").fadeToggle(100);
        $(".mobile-menu").fadeOut(500);
    });

    //function to close menu from window click
    $(window).on("click", function (e) {
        $(".city-list").fadeOut(100);
    });

    //function to close menu from close button
    $(".close-city-btn").on("click", function (e) {
        $(".city-list").fadeOut(100);
    });

    //function to toggle menu in responsive mode
    $(".menu-btn").on("click", function () {
        // $(".responsive-menu").
    });

    //function to close menu from close button
    $(".close-menu").on("click", function (e) {
        $(".mobile-menu").fadeOut(100);
    });

    //function to close menu from close button
    $(".menu-btn").on("click", function (e) {
        $(".mobile-menu").fadeIn(100);
    });

    $("#about-unired").owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1,
            },
        },
    });

    $("#partners-list").owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        center: true,
        smartSpeed: 5000,
        autoplay: true,
        autoplayTimeout: 5000,
        slideTransition: "linear",
        nav: false,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 5,
            },
            1000: {
                items: 7,
            },
        },
    });
});

$(document).ready(function () {
    $(".thumbnails img").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".mainImg img").hide().attr("src", $(this).attr("src")).fadeIn(300);
    });

    $(".mainImg img").click(function (event) {
        event.stopPropagation();
        $(".modal-img").attr("src", $(this).attr("src"));
        $(".image-modal").fadeIn(300);
    });

    $(window).on("click", function () {
        $(".image-modal").fadeOut(300);
    });
});

// $(document).ready(function () {
//     $(window).scroll(function () {
//         var position = $(window).scrollTop();
//         var bottom = $(document).height() - $(window).height();

//         if (position == bottom) {
//             var row = Number($("#row").val());
//             var allcount = Number($("#all").val());
//             var rowperpage = 3;
//             row = row + rowperpage;

//             if (row <= allcount) {
//                 $("#row").val(row);
//                 var page = 1;
//                 $.ajax({
//                     url:
//                         "https://api.themoviedb.org/3/movie/upcoming?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=" +
//                         page,
//                     type: "get",
//                     data: { row: row },
//                     success: function (response) {
//                         for (var i = 0; i < response.results.length; i++) {
//                             var title = response.results[i].title;
//                             console.log(i + 1, response.results[i].title);
//                             $("#postTitle:last")
//                                 .after(`<li>${title}</li>`)
//                                 .show()
//                                 .fadeIn("slow");
//                             page++;
//                         }
//                     },
//                 });
//             }
//         }
//     });
// });

$(document).ready(function () {
    var pageIs = 1;

    if($('#load_text_temp').html() === ''){
        $.ajax({
            url:
                "https://api.themoviedb.org/3/movie/upcoming?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=" +
                1,
            type: "GET",
            // data: JSON.stringify({ page: page }),
            // contentType: "application/json; charset=UTF-8",
            dataType: "json",
            success: function (response) {
                for (var i = 0; i < response.results.length; i++) {
                    var title = response.results[i].title;
                    console.log("page ", pageIs);
                    $(`<li>${title}</li>`).hide()
                        .appendTo($('#load_text_temp'))
                        .show().fadeIn('slow');
                }
                pageIs++;
                console.log("page ", pageIs);
            },
        });
    }
    $(window).scroll(function () {
        var position = $(window).scrollTop();
        var bottom = $(document).height() - $(window).height();
        
        if (position == bottom) {
            $.ajax({
                url:
                    "https://api.themoviedb.org/3/movie/upcoming?api_key=a4942ba2bb35ba2f7205bedb5a8989bc&page=" +
                    pageIs,
                type: "GET",
                contentType: "application/json; charset=UTF-8",
                dataType: "json",
                success: function (response) {
                    for (var i = 0; i < response.results.length; i++) {
                        // var title = response.results[i].title;
                        // console.log("page ", pageIs);
                        $(`<li>${response.results[i].title}</li>`).hide().appendTo($('#load_text_temp')).fadeIn(300);
                    }
                    pageIs++;
                    console.log("page ", pageIs);
                },
            });
            return false;
        }
    });

});
