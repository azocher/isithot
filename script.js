document.addEventListener('DOMContentLoaded', () => {
  console.log("made it to event listener");
  // create a new XMLHTTPRequest object
  var request = new XMLHttpRequest();

  // Call Dark Sky API for Seattle lat/lang
  request.open('GET', "https://api.darksky.net/forecast/ee8f877731ced7705e034b0cf24330dd/19.54289,155.6659", true);

  request.onload = () => {
    console.log("made it past API call");
    // gather data from API call
    var data = JSON.parse(request.responseText);
    var contents = data['currently']['temperature'];

    // edit id temp span  to include data responseText
    document.querySelector('#temp').innerHTML = contents;
  };

  // send request
  request.send();
});
