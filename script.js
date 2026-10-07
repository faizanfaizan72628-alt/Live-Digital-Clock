function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    const time = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("clock").textContent = time;
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    const date = now.toLocaleDateString("en-US", options);
    document.getElementById("date").textContent = date;
}
updateClock();
setInterval(updateClock, 1000);
