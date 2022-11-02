let api_key = "e6e7ef52ec18d2afe37a92ac955c3d47"
function add(){
    let city_name = document.getElementById("input_feld").value
    let temperature
    fetch(`http://api.openweathermap.org/data/2.5/find?q=${city_name}&type=like&APPID=${api_key}`, {
        method: 'GET'
    } ).then((Response) => Response.json()).
    then((data) => {
        console.log(data.list[0])
        $("#table").append(`<tr><td>${data.list[0].name}</td><td>${Math.round(data.list[0].main.temp - 273)}°C</td><td>${data.list[0].main.pressure} hPa</td><td><input type="button" class="DeleteButton" value="Удалить"></td></tr>`)
    })
        



    
    document.getElementById("input_feld").value = ""
}

$("#table").on("click", "input", function () {
    $(this).closest("tr").remove();
});