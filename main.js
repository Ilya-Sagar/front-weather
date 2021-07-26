function makeHoursWeather() {
    let hours_weather = document.querySelector('.next-hours')
    let hour_weather = document.querySelector('.hour')

    let date = new Date()


    for (let hour = date.getHours()+1, count = 0; count < 24; hour++, count++) {
        let clone = hour_weather.cloneNode(true)

        let time = ''
        if (hour > 24) hour = '0'
        if (hour < 10) time = '0' + hour + ':00'
        else time = hour + ':00'

        clone.children[0].children[0].innerHTML = time
        hours_weather.appendChild(clone)
    }
}

makeHoursWeather()