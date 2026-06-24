const search = document.getElementById("weatherButton");
const input = document.getElementById("cityInput");

search.addEventListener("click", async () => {
    const city = input.value.trim();

    if (!city) return;

    try {
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${YOUR_API_KEY}&q=${city}&aqi=no`
        );
        const data = await response.json();

        const p = document.querySelector(".condition");

        p.textContent =
            `Temperature of ${data.location.name} is ${data.current.temp_c}°C and weather forecast is ${data.current.condition.text}`;

    } catch (error) {
        console.log(error);
    }
});