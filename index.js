const daysLeft = document.getElementById("days")
const hoursLeft = document.getElementById("hours")
const minutesLeft = document.getElementById("min")
const secLeft = document.getElementById("sec")

const newYear = "1 jan 2024"

function countdown() {
    const newYearsDate = new Date(newYear)

    const currentDate = new Date()

    const totalSeconds = Math.floor(newYearsDate - currentDate) / 1000

    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const minutes = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60;

    console.log(days, hours, minutes, seconds)

    daysLeft.textContent = days
    hoursLeft.textContent = hours
    minutesLeft.textContent = minutes
    secLeft.textContent = seconds
}
countdown()
setInterval(countdown, 1000)