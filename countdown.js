function countDown(dateString) {
    const eventDate = new Date(dateString);
    const timerElement = document.getElementById("timer");
    const timerDigits = timerElement.querySelectorAll("span");
  
    function updateCountdown() {
      const now = new Date();
      const distance = eventDate - now;
  
      // Time calculations for days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Apply color change animation to digits
      timerDigits.forEach((digit, index) => {
        if (digit.textContent !== digit.dataset.value) {
          digit.classList.add("changing");
          digit.dataset.value = digit.textContent;
  
          setTimeout(() => {
            digit.classList.remove("changing");
          }, 400);
        }
      });
  
      // Update the countdown display with formatted text
      if (window.innerWidth >= 980) {
        timerElement.innerHTML = `
          <span>${days} <span class="unit">${days === 1 ? "day" : "days"}</span></span>
          <span>${hours} <span class="unit">${hours === 1 ? "hour" : "hours"}</span></span>
          <span>${minutes} <span class="unit">${minutes === 1 ? "minute" : "minutes"}</span></span>
          <span>${seconds} <span class="unit">${seconds === 1 ? "second" : "seconds"}</span></span>
        `;
      } else if (window.innerWidth >= 768) {
        timerElement.innerHTML = `
          <span>${days} <span class="unit">${days === 1 ? "day" : "days"}</span></span><br>
          <span>${hours} <span class="unit">${hours === 1 ? "hour" : "hours"}</span></span><br>
          <span>${minutes} <span class="unit">${minutes === 1 ? "minute" : "minutes"}</span></span><br>
          <span>${seconds} <span class="unit">${seconds === 1 ? "second" : "seconds"}</span></span>
        `;
      } else {
        timerElement.innerHTML = `
          <span>${days} <span class="unit">${days === 1 ? "day" : "days"}</span></span><br>
          <span>${hours} <span class="unit">${hours === 1 ? "hour" : "hours"}</span></span><br>
          <span>${minutes} <span class="unit">${minutes === 1 ? "minute" : "minutes"}</span></span><br>
          <span>${seconds} <span class="unit">${seconds === 1 ? "second" : "seconds"}</span></span>
        `;
      }
    }
  
    // Initial update
    updateCountdown();
  
    // Update countdown on window resize
    window.addEventListener("resize", updateCountdown);
  
    // Update countdown every second
    setInterval(updateCountdown, 1000);
  }
  
  // Format: MM-DD-YYYY-HH-MM
  const eventDateTimeString = "12-01-2023-10-00";
  const eventDateTimeArray = eventDateTimeString.split("-");
  const formattedEventDate = `${eventDateTimeArray[2]}-${eventDateTimeArray[0]}-${eventDateTimeArray[1]}T${eventDateTimeArray[3]}:${eventDateTimeArray[4]}:00`;
  
  countDown(formattedEventDate);
  