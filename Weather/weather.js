const api = "https://api.openweathermap.org/data/2.5/forecast?";
const id = "    //api id    ";
let cityNameInput = document.getElementById("input");
let errElement = document.getElementById("err");
let noWeatherRight = document.getElementById("noWeatherRight");
let lastWeather = document.getElementsByClassName("lastWeather");
var now = new Date();  

async function currentCure() {
    try{
        let respon = await fetch(`${api}q=${cityNameInput.value}&appid=${id}&lang=tr&units=metric`)
        let data = await respon.json();
        dataPrinting(data)
    }
    catch{
        errElement.style.display = "block"
    }
    finally{
        cityNameInput.value = "";
    }
}

function dataPrinting(data){
    lastWeather[0].innerHTML = "";
    errElement.style.display = "none";
    (function(){
        noWeatherRight.innerHTML = `
                    <p>${(now.getDate())+" / "+(now.getMonth() + 1)+" / "+now.getFullYear()}</p>
                    <h2>${data.city.name.toUpperCase()}</h2>
                    <img style="display:block;"src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}.png">
                    <p>${data.list[0].weather[0].description.toUpperCase()}</p>
                    <p style="color = "white";">${Math.round(data.list[0].main.temp.toFixed(0)) + " ℃"}</p>
                `;
    })();
    for (let i = 1; i < 6; i++){
        lastWeather[0].innerHTML += `
                <div>
                    <p>${(now.getDate()+i)+" / "+(now.getMonth()+1)+" / "+now.getFullYear()}</p>
                    <img style="display:block;"src="https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png">
                    <p>${data.list[i].weather[0].description.toUpperCase()}</p>
                    <p style="color = "white";">${Math.round(data.list[i].main.temp.toFixed(0)) + " ℃"}</p>
                </div>
                `;
    }
}

cityNameInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        currentCure();
    }
});

async function    allowed(position){
    const lon = position.coords.longitude;
    const lat = position.coords.latitude;

    let respon = await fetch(`${api}lat=${lat}&lon=${lon}&appid=${id}&lang=tr&units=metric`);
    let data = await respon.json();
    dataPrinting(data);
}

function automaticLocation(){
    navigator.geolocation.getCurrentPosition(allowed);
}

automaticLocation();