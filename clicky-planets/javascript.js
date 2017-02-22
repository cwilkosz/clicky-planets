
var getPlanets = document.getElementById('showPlanets');
var planetHolderDiv = document.getElementById('planetHolder');
//var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

var planets = [
    {
        name:"Mercury",
        url: "https://www.nasa.gov/sites/default/files/mercury_1.jpg"
    },
    {
        name:"Venus",
        url: "https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/ancient-venus-new.jpg?itok=4jxFznMD"
    },
    {
        name:"Earth",
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/EpicEarth-Globespin(2016May29).gif/220px-EpicEarth-Globespin(2016May29).gif"
    },
    {
        name:"Mars",
        url: "https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_mars.jpg"
    },
    {
        name:"Jupiter",
        url: "https://www.nasa.gov/sites/default/files/styles/side_image/public/jupiter_3.jpg?itok=SGPmKtRZ"
    },
    {
        name:"Saturn",
        url: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia20521-1041.jpg?itok=ru_sv1Q3"
    },
    {
        name:"Uranus",
        url: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/9464656357_dcd9554a40_o.jpg?itok=Q0wFBb0E"
    },
    {
        name:"Neptune",
        url: "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hs-2016-22-b-full.jpg?itok=q-rzgujR"
    }
];

function writeToDom(){
	planetHolderDiv.innerHTML = "";
	for (var i=0; i <planets.length; i++) {
		var newPlanet=""
		newPlanet+=`<div class="planetBox", id="planetBox-${i}">`
		newPlanet+=`<div class="planetName">' ${planets[i].name} </div>`
		newPlanet+=`</div>`
	planetHolderDiv.innerHTML += newPlanet;
	}
}	



 getPlanets.addEventListener("click", writeToDom);

//console.log("Clicky-Planets", planetHolderDiv)
