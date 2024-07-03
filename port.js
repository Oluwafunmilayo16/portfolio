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

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the element to animate
    var slackTrackElement = document.getElementById("slackTrackElement");
  
    // Add a class to start the animation
    setTimeout(function() {
      slackTrackElement.classList.add("active");
    }, 100); // Delay to start the animation, adjust as needed
  });

