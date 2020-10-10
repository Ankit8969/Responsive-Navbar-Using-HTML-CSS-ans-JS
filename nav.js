
var togglerButton = document.getElementsByClassName('toggler-button')[0];

var toogleLinks = document.getElementsByClassName('links')[0];

function removeclass(){
    toogleLinks.classList.toggle('active');
}

togglerButton.addEventListener("click", removeclass);

