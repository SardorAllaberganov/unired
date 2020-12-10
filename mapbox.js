window.mapbox_api = "/core";
window.mapbox_tileApi = "https://api.mapbox.com";
window.mapbox_accessToken =
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA" ||
    "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA";
if (
    typeof L !== "undefined" &&
    (L.mapbox.VERSION[0] === "2" || L.mapbox.VERSION[0] === "3")
) {
    L.mapbox.accessToken = window.mapbox_accessToken;
    L.mapbox.config.FORCE_HTTPS = true;
    L.mapbox.config.HTTPS_URL = window.mapbox_tileApi + "/v4";
}
