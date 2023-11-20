let MostrarFlight = document.querySelector('#form-flight')
let MostrarHotel = document.querySelector('#form-hotel')
let MostrarRental = document.querySelector('#form-rental')

let ColorFlight = document.querySelector('#div-flight')
let ColorHotel = document.querySelector('#div-hotel')
let ColorRental = document.querySelector('#div-rental')

//Flight
ColorFlight.addEventListener("mouseover", function() {
    ColorFlight.style.backgroundColor = '#E64C3C'
})
ColorFlight.addEventListener("mouseout", function() {
    ColorFlight.style.backgroundColor = 'black'
})
MostrarFlight.addEventListener("mouseover", function() {
    ColorFlight.style.backgroundColor = '#E64C3C'
})
MostrarFlight.addEventListener("mouseout", function() {
    ColorFlight.style.backgroundColor = 'black'
})
//Hotel
ColorHotel.addEventListener("mouseover", function() {
    ColorHotel.style.backgroundColor = '#E64C3C'
})
ColorHotel.addEventListener("mouseout", function() {
    ColorHotel.style.backgroundColor = 'black'
})
MostrarHotel.addEventListener("mouseover", function() {
    ColorHotel.style.backgroundColor = '#E64C3C'
})
MostrarHotel.addEventListener("mouseout", function() {
    ColorHotel.style.backgroundColor = 'black'
})
//Rental
ColorRental.addEventListener("mouseover", function() {
    ColorRental.style.backgroundColor = '#E64C3C'
})
ColorRental.addEventListener("mouseout", function() {
    ColorRental.style.backgroundColor = 'black'
})
MostrarRental.addEventListener("mouseover", function() {
    ColorRental.style.backgroundColor = '#E64C3C'
})
MostrarRental.addEventListener("mouseout", function() {
    ColorRental.style.backgroundColor = 'black'
})

function ClickFlight() {
    MostrarFlight.style.display = 'block'
    MostrarHotel.style.display = 'none'
    MostrarRental.style.display = 'none'
}

function ClickHotel() {
    MostrarFlight.style.display = 'none'
    MostrarHotel.style.display = 'block'
    MostrarRental.style.display = 'none'
}

function ClickRental() {
    MostrarFlight.style.display = 'none'
    MostrarHotel.style.display = 'none'
    MostrarRental.style.display = 'block'
}

function Calcular() {
    let num = document.querySelector('.num')
    let display = document.querySelector('#inputFalseRental')
    let res = num * 79.90
    display.innerHTML = res
}