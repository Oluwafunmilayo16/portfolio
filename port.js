// Function to update UTC time and day of the week
function updateTime() {
    const now = new Date();
    const utcTimeElement = document.getElementById('utc-time');
    const dayOfWeekElement = document.getElementById('day-of-week');

    utcTimeElement.textContent = now.toUTCString();
    dayOfWeekElement.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
}

// Call updateTime initially and set interval to update every minute (if needed)
updateTime();
setInterval(updateTime, 60000); // Update every minute

