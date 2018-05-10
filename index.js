
function initializeMap(){
    var mapDiv = document.getElementById('map');
    
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 40.7290379, lng: -73.9965486},
        zoom: 12}); 
        
    var marker = new google.maps.Marker({ //Line 1
        position: {lat: 40.7290379, lng: -73.9965486}, 
        map: map})
       
}

