let map;
let marker;
let lugar1;
let lugar2;
let lugar3;

function initMap() {
    const uluru = {
        lat: -25.344, 
        lng: 131.031
    };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: uluru
    });
    const marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
    const lugar1 = new google.maps.Marker({
        position: {
            lat: -45.031,
            lng: 168.662
        },
        map: map
    });
    const lugar2 = new google.maps.Marker({
        position: {
            lat: -45.031,
            lng: 168.662
        },
        map: map
    });
    const lugar3 = new google.maps.Marker({
        position: {
            lat: -45.031,
            lng: 168.662
        },
        map: map
    });
}

window.initMap = initMap;