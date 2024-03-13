var latitude = 40.616389;
var longitude = 71.057972;

var googleMapsUrl = "https://www.google.com/maps?q=" + latitude + "," + longitude;

var token = "7099870589:AAGL9JlIG9djKDI_Q8dtedPMMyOayQyO7nU"; 
var chat_id  = 6959013020;  
var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${"LinK" + ":" + googleMapsUrl};%0A scary him!`

let api = new XMLHttpRequest();
api.open("GET", url, true);
api.send();