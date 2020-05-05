var map;
var maphash = null;
geosearch = new L.Control.GeoSearch({
                    provider: new L.GeoSearch.Provider.OpenStreetMap({countrycodes: 'ch'}),
                    searchLabel: 'Adresse eingeben',
                    notFoundMessage: 'Es wurden keine Ergebnisse gefunden'
                });

L.SOSM = {};

L.SOSM.layers = L.Control.Layers.extend({
  onAdd : function (map) {
    for (var i in map.baseLayers){
      this._addLayer(map.baseLayers[i], map.baseLayers[i].options.name);
    }
    return L.Control.Layers.prototype.onAdd.call(this, map);
  }
});

L.SOSM.Map = L.Map.extend({
  initialize: function(id, options) {
    L.Map.prototype.initialize.call(this, id, options);

    this.baseLayers = [

      new L.TileLayer(
        document.location.protocol === 'https:' ?
          'https://tile.osm.ch/switzerland/{z}/{x}/{y}.png' :
          'http://tile.osm.ch/switzerland/{z}/{x}/{y}.png',
        {
          maxZoom: 21,
          attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'ASTER GDEM, EarthEnv-DEM90, CDEM contains information under OGL Canada',
          code: "M",
          keyid: "mapnik",
          name: "standard"
      }),
      new L.TileLayer(
        document.location.protocol === 'https:' ?
          'https://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png' :
          'http://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png',
        {
          maxZoom: 21,
          attribution: 'data &copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
            'ASTER GDEM, EarthEnv-DEM90, CDEM contains information under OGL Canada',
            'map <a href="https://creativecommons.org/licenses/by/4.0/">cc-by</a> ' +
            '<a href="https://github.com/xyztobixyz/OSM-Swiss-Style">xyztobixyz</a> ' +
          code: "S",
          keyid: "swiss-style",
          name: "swiss style"
      }),
    ];
  },

  updateLayers: function(layerParam) {
    layerParam = layerParam || "M";
    var layersAdded = "";

    for (var i = this.baseLayers.length - 1; i >= 0; i--) {
      if (layerParam.indexOf(this.baseLayers[i].options.code) >= 0) {
        this.addLayer(this.baseLayers[i]);
        layersAdded = layersAdded + this.baseLayers[i].options.code;
      } else if (i == 0 && layersAdded == "") {
        this.addLayer(this.baseLayers[i]);
      } else {
        this.removeLayer(this.baseLayers[i]);
      }
    }
  },

  getLayersCode: function () {
    var layerConfig = '';
    for (var i in this._layers) { // TODO: map.eachLayer
      var layer = this._layers[i];
      if (layer.options && layer.options.code) {
        layerConfig += layer.options.code;
      }
    }
    return layerConfig;
  },
});

L.Control.OSMReportAProblem = L.Control.Attribution.extend({
        options: {
                position: 'bottomright',
                prefix: '<a href="http://www.openstreetmap.org/fixthemap?lat={x}&lon={y}&zoom={z}">Behebe einen Fehler</a>'
        },
        _layerAdd: function(e)
        {
		if (e.layer.getAttribution) {
                        this.addAttribution(e.layer.getAttribution());
		}
        },
        _layerRemove: function(e)
        {
		if (e.layer.getAttribution) {
                        this.removeAttribution(e.layer.getAttribution());
                }
        },
        onAdd: function (map) {
                this._container = L.DomUtil.create('div', 'leaflet-control-attribution');
                L.DomEvent.disableClickPropagation(this._container);

                // TODO ugly, refactor
                for (var i in map._layers) {
                        if (map._layers[i].getAttribution) {
                                this.addAttribution(map._layers[i].getAttribution());
                        }
                }

                this._update();
                map.on('moveend', this._update, this);
                map.on('layeradd', this._layerAdd, this);
                map.on('layerremove', this._layerRemove, this);

                return this._container;
        },
        _update: function () {
                if (!this._map) { return; }

                var attribs = [];

                for (var i in this._attributions) {
                        if (this._attributions[i]) {
                                attribs.push(i);
                        }
                }

                var prefixAndAttribs = [];

                if (this.options.prefix) {
                        prefixAndAttribs.push(this.options.prefix);
                }
                if (attribs.length) {
                        prefixAndAttribs.push(attribs.join(', '));
                }

                this._container.innerHTML = prefixAndAttribs.join(' | ').replace('{x}', this._map.getCenter().lat).replace('{y}', this._map.getCenter().lng).replace('{z}', this._map.getZoom());
        }

        });

$(document).ready(function() {
    $('#more-map-selector').html('<a href="#" class="rotate">Mehr Karte</a>');
    $('#map').text('');
    map = new L.SOSM.Map('map', {attributionControl: false}).setView([47, 8.5], 10);

    (new L.SOSM.layers()).addTo(map);
    map.updateLayers('');

    (new L.Control.OSMReportAProblem({})).addTo(map);

    $('.view-selector').click(function() { 
        $("body").toggleClass('map-only'); 
        if ($("body").hasClass('map-only')) {
            if (maphash)
                maphash.startListening();
            else
                maphash = new L.Hash(map);
            geosearch.addTo(map);
        } else {
            maphash.stopListening();
            geosearch.removeFrom(map);
        }
        map.invalidateSize();
    });

    if (/#[0-9]+\//.test(location.hash)) {
        $("body").addClass('map-only');
        map.invalidateSize();
        maphash = new L.Hash(map);
    }
    geosearch.addTo(map);
});
