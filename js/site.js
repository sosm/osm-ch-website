var map;

$(document).ready(function() {
    $('#map').text('');
    map = L.map('map').setView([47, 8.5], 9);
    L.tileLayer('http://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
        maxZoom: 21,
        attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    $('.view-selector').click(function() { 
        $("body").toggleClass('map-only'); 
        map.invalidateSize();
    });

    if (location.hash === "#map") {
        $("body").addClass('map-only');
    }
});
