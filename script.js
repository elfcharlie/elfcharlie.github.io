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

function loginButton(){
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