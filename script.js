/* script.js */
function showTimes(movie) {
    const showtimeList = document.getElementById("showtime-list");
    showtimeList.innerHTML = `<p>Showtimes for ${movie}: 12:00 PM, 3:00 PM, 6:00 PM, 9:00 PM</p>`;
}

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const movie = document.getElementById("movie").value;
    const time = document.getElementById("time").value;
    document.getElementById("confirmation").innerHTML = `<p>Thank you, ${name}! Your ticket for ${movie} at ${time} has been booked.</p>`;
});
