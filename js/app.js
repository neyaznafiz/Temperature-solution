const API_KEY = `28dbbb2da2408990e0ca8bd6e44242a6`

const searchTemperature = () => {
    const cityInput = document.getElementById('city')
    const city = cityInput.value
    cityInput.value = ''
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => disolayTemperature(data))
}

const setInnerText = (id, Text) => {
    document.getElementById(id).innerText = Text
}

const disolayTemperature = Temperature => {
    setInnerText('city-name', Temperature.name)
    setInnerText('temp', Temperature.main.temp)
    setInnerText('condition', Temperature.weather[0].main)
     console.log(Temperature)

    // set weather icon

const url =`http://openweathermap.org/img/wn/${Temperature.weather[0].icon}@2x.png`

const imgIcon = document.getElementById('weather-icon')
imgIcon.setAttribute('src', url)
}