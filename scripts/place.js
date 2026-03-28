document.getElementById("currentyear").textContent = new Date().getUTCFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const temperature = 20;
const windSpeed = 10;
function calculateWindchill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}
let windChill;

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindchill(temperature, windSpeed) + " °C";
} else {
    windChill = "N/A";
}
document.getElementById("windchill").textContent = windchill;