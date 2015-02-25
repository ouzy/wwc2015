Template.maps.rendered = function () {

      // Create an array of styles.
      var styles = [
        {
          stylers: [
            { hue: "#8f1215" },
            { saturation: 50 }
          ]
        },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: -100 },
            { visibility: "simplified" }
          ]
        },{
          featureType: "road",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
              { visibility: "off" }
            ]
          }
      ];

      // Create a new StyledMapType object, passing it the array of styles,
      // as well as the name to be displayed on the map type control.
      var styledMap = new google.maps.StyledMapType(styles,
        {name: "Styled Map"});

      var loc_edmonton = new google.maps.LatLng(53.559984,-113.476397);
      var loc_ottawa = new google.maps.LatLng(45.398143,-75.683608);
      var loc_winnipeg = new google.maps.LatLng(49.887901,-97.198779);
      var loc_vancouver = new google.maps.LatLng(49.27675,-123.111999);

      var loc_moncton = new google.maps.LatLng(46.108605,-64.781909);
      var loc_montreal = new google.maps.LatLng(45.557996,-73.551882);
      
      
      

      // Create a map object, and include the MapTypeId to add
      // to the map type control.
      var mapOptions = {
        zoom: 11,
        center: { lat: 55.2204541, lng: -94.4782615},
        zoom: 4,
        panControl: false,
        zoomControl: false,
        streetViewControl: false,
        scaleControl: false,
        overviewMapControl: false,
        mapTypeControl: false
      };
      var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

      // overlay content
      var contentString_vancouver = 
        '<div id="map_content">'+
          '<div id="bodyContent">'+
            '<h3>Stadium Name:</h3> <p>B.C. Place Stadium</p>' + 
            '<h3>City:</h3> <p>Vancouver</p>' +
            '<h3>Year constructed:</h3> <p>1983</p>' +
            '<h3>Capacity:</h3> <p>59,841</p>' +
            '<p><a href="http://www.fifa.com/womensworldcup/destination/cities/city=3634/index.html" target="_blank">'+
            'More info</a></p>'+
          '</div>'+
        '</div>';

      var contentString_edmonton = 
        '<div id="map_content">'+
          '<div id="bodyContent">'+
            '<h3>Stadium Name:</h3> <p>Commonwealth Stadium</p>' + 
            '<h3>City:</h3> <p>Edmonton</p>' +
            '<h3>Year constructed:</h3> <p>1978</p>' +
            '<h3>Capacity:</h3> <p>60,081</p>' +
            '<p><a href="http://www.fifa.com/womensworldcup/destination/cities/city=30938/index.html" target="_blank">'+
            'More info</a></p>'+
          '</div>'+
        '</div>';

      var contentString_winnipeg = 
        '<div id="map_content">'+
          '<div id="bodyContent">'+
            '<h3>Stadium Name:</h3> <p>Winnipeg Stadium</p>' + 
            '<h3>City:</h3> <p>Winnipeg</p>' +
            '<h3>Year constructed:</h3> <p>1953</p>' +
            '<h3>Capacity:</h3> <p>33,500</p>' +
            '<p><a href="http://www.fifa.com/womensworldcup/destination/cities/city=18908/index.html" target="_blank">'+
            'More info</a></p>'+
          '</div>'+
        '</div>';

      var contentString_ottawa = 
        '<div id="map_content">'+
          '<div id="bodyContent">'+
            '<h3>Stadium Name:</h3> <p>Lansdowne Stadium</p>' + 
            '<h3>City:</h3> <p>Ottawa</p>' +
            '<h3>Year constructed:</h3> <p>1908</p>' +
            '<h3>Capacity:</h3> <p>24,000</p>' +
            '<p><a href="http://www.fifa.com/womensworldcup/destination/cities/city=3401/index.html" target="_blank">'+
            'More info</a></p>'+
          '</div>'+
        '</div>';

      var contentString_montreal = 
        '<div id="map_content">'+
          '<div id="bodyContent">'+
            '<h3>Stadium Name:</h3> <p>Olympic Stadium</p>' + 
            '<h3>City:</h3> <p>Montreal</p>' +
            '<h3>Year constructed:</h3> <p>1976</p>' +
            '<h3>Capacity:</h3> <p>66,308</p>' +
            '<p><a href="http://www.fifa.com/womensworldcup/destination/cities/city=3638/index.html" target="_blank">'+
            'More info</a></p>'+
          '</div>'+
        '</div>';

      var contentString_moncton = 
        '<div id="map_content">'+
          '<div id="bodyContent">'+
            '<h3>Stadium Name:</h3> <p>Moncton Stadium</p>' + 
            '<h3>City:</h3> <p>Moncton</p>' +
            '<h3>Year constructed:</h3> <p>2010</p>' +
            '<h3>Capacity:</h3> <p>10,000</p>' +
            '<p><a href="http://www.fifa.com/womensworldcup/destination/cities/city=1000000209/index.html" target="_blank">'+
            'More info</a></p>'+
          '</div>'+
        '</div>';

      var infowindow = new google.maps.InfoWindow({
          content: contentString_vancouver
      });  
      var infowindow2 = new google.maps.InfoWindow({
          content: contentString_edmonton
      });  
      var infowindow3 = new google.maps.InfoWindow({
          content: contentString_winnipeg
      });  
      var infowindow4 = new google.maps.InfoWindow({
          content: contentString_ottawa
      });  
      var infowindow5 = new google.maps.InfoWindow({
          content: contentString_montreal
      });
      var infowindow6 = new google.maps.InfoWindow({
          content: contentString_moncton
      });

      // add markers
      var marker_edmonton = new google.maps.Marker({
          position: loc_edmonton,
          map: map,
          title:"Commonwealth Stadium, Edmonton"
      });
      var marker_ottawa = new google.maps.Marker({
          position: loc_ottawa,
          map: map,
          title:"Lansdowne Stadium, Ottawa"
      });
      var marker_winnipeg = new google.maps.Marker({
          position: loc_winnipeg,
          map: map,
          title:"Winnipeg Stadium, Winnipeg"
      });
      var marker_vancouver = new google.maps.Marker({
          position: loc_vancouver,
          map: map,
          title:"BC Place Stadium, Vancouver",
          labelContent: "BC Place Stadium, Vancouver",
          labelAnchor: new google.maps.Point(22, 0),
          labelClass: "labels", // the CSS class for the label
          labelStyle: {opacity: 0.75}
      });
      var marker_moncton = new google.maps.Marker({
          position: loc_moncton,
          map: map,
          title:"Moncton Stadium, Moncton"
      });
      var marker_montreal = new google.maps.Marker({
          position: loc_montreal,
          map: map,
          title:"Olympic Stadium, Montreal"
      });

      infowindow2.open(map,marker_edmonton);

      google.maps.event.addListener(marker_vancouver, 'click', function() {
        infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow.open(map,marker_vancouver);
      });
      google.maps.event.addListener(marker_edmonton, 'click', function() {
        infowindow.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow2.open(map,marker_edmonton);
      });
      google.maps.event.addListener(marker_winnipeg, 'click', function() {
        infowindow2.close();
        infowindow.close();
        infowindow4.close();
        infowindow5.close();
        infowindow6.close();
        infowindow3.open(map,marker_winnipeg);
      });
      google.maps.event.addListener(marker_ottawa, 'click', function() {
        infowindow2.close();
        infowindow3.close();
        infowindow.close();
        infowindow5.close();
        infowindow6.close();
        infowindow4.open(map,marker_ottawa);
      });
      google.maps.event.addListener(marker_montreal, 'click', function() {
        infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow.close();
        infowindow6.close();
        infowindow5.open(map,marker_montreal);
      });
      google.maps.event.addListener(marker_moncton, 'click', function() {
        infowindow2.close();
        infowindow3.close();
        infowindow4.close();
        infowindow5.close();
        infowindow.close();
        infowindow6.open(map,marker_moncton);
      });

      //Associate the styled map with the MapTypeId and set it to display.
      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');
}