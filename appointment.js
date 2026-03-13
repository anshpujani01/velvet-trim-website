document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let service = document.getElementById("service").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

document.getElementById("message").innerText =
"Thank you " + name + "! Your " + service + " appointment is booked on " + date + " at " + time + ".";

});