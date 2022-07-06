function displayTime() {
    // Phase 1: Get the current time
    const currentDate = new Date()
    // 1. retrieve the hour from current date
    let hour = currentDate.getHours() // this is given in military time (0 - 23)

    // 2. retrieve the minutes from current date
    let minute = currentDate.getMinutes() // this is given in military time (0 - 59)

    // 3. retrieve the seconds from current date
    let seconds = currentDate.getSeconds() // this is given in military time (0 - 59)

    // let milliseconds = currentDate.getMilliseconds()

    // Phase 2: Convert military time to 12-hour style time; (e.g. 6:33:10 pm or 9:20:12 am)
    let timeOfDay = 'am'

    if (hour === 0) {
        hour = 12
    } else if (hour > 11) {
        timeOfDay = 'pm'
        hour = hour === 12 ? 12 : hour - 12
    }

    // Display it in 00:00:00 string format
    let hourString = hour < 10 ? `0${hour}` : `${hour}`
    let minuteString = minute < 10 ? `0${minute}` : `${minute}`
    let secondString = seconds < 10 ? `0${seconds}` : `${seconds}`

    const timeString = `${hourString} : ${minuteString} : ${secondString} ${timeOfDay}`
    console.log(timeString)

    // Phase 3: Use DOM to update the HTML element
    const myClock = document.getElementById('DigitalClock')
    myClock.innerHTML = timeString

    // Phase 4: Run the function every 1 second
    // this is in milliseconds; 1 second = 1000 milliseconds (ms)
    setTimeout(displayTime, 1000)
}

displayTime()







