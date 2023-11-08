/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-box")
const btnEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass") 

btnEl.addEventListener("click", function() {
    const inputVal = inputEl.value
    renderLengthStr(inputVal)
    renderVolumeStr(inputVal)
    renderMassStr(inputVal)
})

function renderLengthStr(inputVal) {
    lengthEl.textContent = `${inputVal} meters = ${(inputVal * 3.281).toFixed(3)} feet | ${inputVal}                        feet = ${(inputVal / 3.281).toFixed(3)} meters`
}

function renderVolumeStr(inputVal) {
    volumeEl.textContent = `${inputVal} liters = ${(inputVal * .264).toFixed(3)} gallons | 
                            ${inputVal} gallons = ${(inputVal / .264).toFixed(3)} liters`
}

function renderMassStr(inputVal) {
    massEl.textContent = `${inputVal} killograms = ${(inputVal * 2.204).toFixed(3)} pounds | 
                            ${inputVal} pounds = ${(inputVal / 2.204).toFixed(3)} killograms`
}