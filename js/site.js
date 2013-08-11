var map;
var maphash = null;

$(document).ready(function() {
    $('#more-map-selector').html('<a href="#" class="rotate">Mehr Karte</a>');
    $('#map').text('');
    map = L.map('map').setView([47, 8.5], 9);
    L.tileLayer('http://tile.osm.ch/switzerland/{z}/{x}/{y}.png', {
        maxZoom: 21,
        attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    $('.view-selector').click(function() { 
        $("body").toggleClass('map-only'); 
        if ($("body").hasClass('map-only')) {
            if (maphash)
                maphash.startListening();
            else
                maphash = new L.Hash(map);
        } else {
            maphash.stopListening();
        }
        map.invalidateSize();
    });

    if (/#[0-9]+\//.test(location.hash)) {
        $("body").addClass('map-only');
        maphash = new L.Hash(map);
        map.invalidateSize();
    }

});
