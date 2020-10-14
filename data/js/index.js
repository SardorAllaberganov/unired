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
    
    
    $('#search').keyup(function() {
        var searchField = $('#search').val();
        console.log(searchField)
        if(searchField !== ""){
            var myExp = new RegExp(searchField, "i");
            $.getJSON('https://unired.uz/mobile/get_partners', function(data) {
                var output = '<ul class="searchresults">';
                $.each(data.data, function(key, val) {
                    
                    if ((val.name.search(myExp) != -1)) {
                        output += `<li><a href="branch/${val.partner_id}">`;
                        if(val.logo.startsWith('https://unired.uz')){
                            output += `<img src="${val.logo}" alt="Partner image"/>` + val.name;
                        }
                        else{
                            output += `<img src="https://unired.uz/${val.logo}" alt="Partner image"/>` + val.name;
                        }
                        output += '</a></li>';
                    }
                });
                output += '</ul>';
                $('#searchResults').html(output);
                $("#listOfPartners").hide(100);
            }); //get JSON
        }
        else{
            $('#searchResults').html(' ');
            $("#listOfPartners").show(100);
        }
    });

    // $.getJSON('https://unired.uz/mobile/get_partners', function(data) {
    //     var output = '<ul>';
    //     $.each(data.data, function(key, val) {

    //         output += `<li><a href="branch/${val.partner_id}">`;
    //         if(val.logo.startsWith('https://unired.uz')){
    //             output += `<img src="${val.logo}" alt="Partner image"/>` + `<p>${val.name}</p>`;
    //         }
    //         else{
    //             output += `<img src="https://unired.uz/${val.logo}" alt="Partner image"/>` + `<p>${val.name}</p>`;
    //         }
    //         output += '</a></li>';
    //     });
    //     output += '</ul>';
    //     $('#listOfPartners').html(output);
    // });


});


