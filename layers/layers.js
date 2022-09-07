var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 0.395000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_Municipios_1 = new ol.format.GeoJSON();
var features_Municipios_1 = format_Municipios_1.readFeatures(json_Municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_1.addFeatures(features_Municipios_1);
var lyr_Municipios_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Municipios_1, 
                style: style_Municipios_1,
                interactive: true,
                title: '<img src="styles/legend/Municipios_1.png" /> Municipios'
            });
var format_28042022VigProac_2 = new ol.format.GeoJSON();
var features_28042022VigProac_2 = format_28042022VigProac_2.readFeatures(json_28042022VigProac_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28042022VigProac_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28042022VigProac_2.addFeatures(features_28042022VigProac_2);
var lyr_28042022VigProac_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_28042022VigProac_2, 
                style: style_28042022VigProac_2,
                interactive: true,
                title: '28-04-2022-VigProac'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_Municipios_1.setVisible(true);lyr_28042022VigProac_2.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_Municipios_1,lyr_28042022VigProac_2];
lyr_Municipios_1.set('fieldAliases', {'ID_MUN': 'ID_MUN', 'NOM_MUN': 'NOM_MUN', });
lyr_28042022VigProac_2.set('fieldAliases', {'DENOMINACIÓN DEL ESTABLECIMIENTO': 'DENOMINACIÓN DEL ESTABLECIMIENTO', 'MUNICIPIO': 'MUNICIPIO', 'LOCALIDAD': 'LOCALIDAD', 'JURISDICCIÓN SANITARIA': 'JURISDICCIÓN SANITARIA', 'TIPO DE ESTABLECIMIENTO': 'TIPO DE ESTABLECIMIENTO', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_Municipios_1.set('fieldImages', {'ID_MUN': '', 'NOM_MUN': '', });
lyr_28042022VigProac_2.set('fieldImages', {'DENOMINACIÓN DEL ESTABLECIMIENTO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'JURISDICCIÓN SANITARIA': 'TextEdit', 'TIPO DE ESTABLECIMIENTO': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_Municipios_1.set('fieldLabels', {'ID_MUN': 'no label', 'NOM_MUN': 'no label', });
lyr_28042022VigProac_2.set('fieldLabels', {'DENOMINACIÓN DEL ESTABLECIMIENTO': 'no label', 'MUNICIPIO': 'no label', 'LOCALIDAD': 'no label', 'JURISDICCIÓN SANITARIA': 'no label', 'TIPO DE ESTABLECIMIENTO': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_28042022VigProac_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});