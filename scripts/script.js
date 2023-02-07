function intro() {
    document.getElementById("welcome").style.transform = "translateY(0%)";
    setTimeout(() => {
      writeLogoText("Welcome to my website!");
    }, 500)
  }
function setBackgroundImage(){
    var loginForm = document.getElementById("loginForm");
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((response) => {
        response.json();
    })
    .then((data) => {
        document.body.style.backgroundImage = "url(" + data.hdurl + ")"; 
    });
}
  
setTimeout(intro, 500)
setBackgroundImage();

function writeLogoText(slogan) {
    for (let i = 0; i < slogan.length; i++) {
      setTimeout(() => {
        if (slogan[i] == slogan[i].toUpperCase()) {
          document.getElementById("welcome").innerHTML += "<b>" + slogan[i] + "</b>";
        }
        else {
          document.getElementById("welcome").innerHTML += slogan[i];
        }
      }, 100 * i)
    }
  }

var pic = "";

function pushButton(){
    var buttonHTML = document.getElementById('button1');
    if ( buttonHTML.innerHTML == "UNCLICKED"){
        buttonHTML.innerHTML = "CLICKED";
    } else {
        buttonHTML.innerHTML = "UNCLICKED";
    }
}

var previousDogPics = [];
var previousDogPic = "";
function dogPicButton(){
    var dogImage = document.getElementById('dogImage');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
        response.json();
    })
    .then((data) => {
        previousDogPic = dogImage.src;
        dogImage.src = data.message; 
    });
    if (document.getElementById('button3').style.display == "none"){
        document.getElementById('button3').style.display = "block";
    }
    previousDogPics.push(previousDogPic);
    console.log(previousDogPics);
    }
    
    function previousPic(){
        var button3 = document.getElementById('button3');
        var dogImage = document.getElementById('dogImage');
        console.log(previousDogPics);
        if(previousDogPics.length === 1){
            button3.style.display = "none";
        }
        if (previousDogPics.length > 1){
            dogImage.src = previousDogPics.at(-1);
            previousDogPics.pop();
        }
        if (previousDogPics.length === 1){
            dogImage.src = "";
            previousDogPics = [];
            console.log("YEYE");
        }

        console.log(dogImage.src);
}

function updateLocation(location){
    var query = 'http://api.positionstack.com/v1/forward?access_key=36e12d054e48ff0c9cef6ff5e9448480&query=';
    query += location;
    console.log(query);
    query += '&limit=1';
    fetch(query)
    .then((response) => response.json())
    .then((data) => {
        target = L.latLng(data.data[0].latitude, data.data[0].longitude);
        map.panTo(target);
        marker.setLatLng(target);
    
    });
}

function submitForm(){
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var location = document.getElementById('location').value;
    var fnameNode = document.createTextNode("Det här är du: " + fname.value + " ");
    var lnameNode = document.createTextNode(lname.value);
    var parent = document.getElementById('youText');
    parent.appendChild(fnameNode);
    parent.appendChild(lnameNode);
    dogPicButton();
    updateLocation(location);
}

function whoPaysWho(){
    window.location.href = "https://github.com/elfcharlie/whopayswho";
}
function sheepherder(){
    window.location.href = "https://github.com/elfcharlie/sheepherder";
}
function spacemania(){
    window.location.href = "https://github.com/elfcharlie/spaceman-ia";
}

var element = document.getElementById('osm-map');
var map = L.map(element);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
var target = L.latLng('58.4108', '15.6214');
map.setView(target, 10);
var marker = L.marker(target).addTo(map);

