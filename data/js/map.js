// function getCurrentCity() {
//     return $.ajax({
//         url: "https://geolocation-db.com/jsonp",
//         jsonpCallback: "callback",
//         dataType: "jsonp",
//     });
// }

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}
var x;
function showPosition(position) {
    x = [position.coords.longitude, position.coords.latitude];
    console.log(x)

    mapboxgl.accessToken = "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
    // $.when(getCurrentCity()).done(function (response) {
    var curLocation = x;
    var map = new mapboxgl.Map({
        style: "mapbox://styles/mapbox/streets-v11",
        center: curLocation,
        zoom: 12,
        pitch: 45,
        bearing: -17.6,
        container: "map",
        antialias: true,
    });

    // map.addControl(
    //     new MapboxGeocoder({
    //         accessToken: mapboxgl.accessToken,
    //         mapboxgl: mapboxgl
    //     })
    // );

    map.addControl(new mapboxgl.NavigationControl());

    map.on("load", function () {
        // Add an image to use as a custom marker
        map.loadImage("data/image/map-pin.png", function (error, image) {
            if (error) throw error;
            map.addImage("custom-marker", image);

            function getRequest() {
                return $.ajax({
                    url: "https://unired.uz/mobile/get_partner_branchs",
                    type: "get",
                    dataType: "json",
                    data: {
                        partner_id: "2",
                        lang: "2",
                    },
                });
            }

            $.when(getRequest()).done(function (response, status, jqXHR) {
                streetGEOJSON = response.data;
                var feat = [];
                for (var i = 0; i < streetGEOJSON.length; i++) {
                    var location = [
                        parseFloat(streetGEOJSON[i].lat),
                        parseFloat(streetGEOJSON[i].long),
                    ];
                    var title = streetGEOJSON[i].name;
                    feat[i] = {
                        type: "Feature",
                        geometry: {
                            type: "Point",
                            coordinates: location,
                        },
                        properties: {
                            title: title,
                        },
                    };
                }
                var lines = {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: feat,
                    },
                };

                map.addSource("points", lines);

                map.addLayer({
                    id: "points",
                    type: "symbol",
                    source: "points",
                    layout: {
                        "icon-image": "custom-marker",
                        // get the title name from the source's "title" property
                        "text-field": ["get", "title"],
                        "text-font": [
                            "Open Sans Semibold",
                            "Arial Unicode MS Bold",
                        ],
                        "text-offset": [0, 1.25],
                        "text-anchor": "top",
                    },
                });

            });
        map.on("load", function () {
            // Insert the layer beneath any symbol layer.
            var layers = map.getStyle().layers;

            var labelLayerId;
            for (var i = 0; i < layers.length; i++) {
                if (
                    layers[i].type === "symbol" &&
                    layers[i].layout["text-field"]
                ) {
                    labelLayerId = layers[i].id;
                    break;
                }
            }

            map.addLayer(
                {
                    id: "3d-buildings",
                    source: "composite",
                    "source-layer": "building",
                    filter: ["==", "extrude", "true"],
                    type: "fill-extrusion",
                    minzoom: 15,
                    paint: {
                        "fill-extrusion-color": "#aaa",

                        // use an 'interpolate' expression to add a smooth transition effect to the
                        // buildings as the user zooms in
                        "fill-extrusion-height": [
                            "interpolate",
                            ["linear"],
                            ["zoom"],
                            15,
                            0,
                            15.05,
                            ["get", "height"],
                        ],
                        "fill-extrusion-base": [
                            "interpolate",
                            ["linear"],
                            ["zoom"],
                            15,
                            0,
                            15.05,
                            ["get", "min_height"],
                        ],
                        "fill-extrusion-opacity": 0.6,
                    },
                },
                labelLayerId
            );
        });
            // map.scrollZoom.disable();
        });
    });
}
