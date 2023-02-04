function intro() {
    document.getElementById("welcome").style.transform = "translateY(0%)";
    setTimeout(() => {
      writeLogoText("Welcome to my website!");
    }, 500)
  }
function setBackgroundImage(){
    var loginForm = document.getElementById("loginForm");
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((response) => response.json())
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
var previousPicture ="";

function pushButton(){
    var buttonHTML = document.getElementById('button1');
    if ( buttonHTML.innerHTML == "UNCLICKED"){
        buttonHTML.innerHTML = "CLICKED";
    } else {
        buttonHTML.innerHTML = "UNCLICKED";
    }
}

function dogPicButton(){
    //location.href = 'https://google.com';
    var dogImage = document.getElementById('dogImage');
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        previousPicture = dogImage.src;
        dogImage.src = data.message; 
    });
}

function previousPic(){
    var button3 = document.getElementById('button3');

    var dogImage = document.getElementById('dogImage');
    dogImage.src = previousPicture;
    button3.remove();
}

function submitForm(){
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    console.log(fname.value);
    console.log(lname.value);
    var fnameNode = document.createTextNode("Det här är du: " + fname.value + " ");
    var lnameNode = document.createTextNode(lname.value);
    var parent = document.getElementById('youText');
    parent.appendChild(fnameNode);
    parent.appendChild(lnameNode);
    loginButton();
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