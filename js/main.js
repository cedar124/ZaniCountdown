// Set the timestamp we're counting down to
var countDownDate = new Date("2025-04-29T10:15:00+08:00").getTime();
//var countDownDate = new Date("2025-04-28T15:30:00+08:00").getTime();
var daysElement = document.getElementById('days');
var hoursElement = document.getElementById('hours');
var minutesElement = document.getElementById('minutes');
var secondsElement = document.getElementById('seconds');
var countdownContainer = document.querySelector('.countdown');

// Update the count down every 1 second
var cdInterval = setInterval(function() {
    // Get current date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;
	if (distance <= 0) {
		clearInterval(cdInterval);
		daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";
		countdownContainer.innerHTML = "<span>It's the time!</span>";
	}
	else {    
	// Time calculations for days, hours, minutes and seconds
    daysElement.innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
    hoursElement.innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutesElement.innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    secondsElement.innerText = Math.floor((distance % (1000 * 60)) / 1000);
	
	daysElement.innerText = String(daysElement.innerText).padStart(2, '0');
	hoursElement.innerText = String(hoursElement.innerText).padStart(2, '0');
	minutesElement.innerText = String(minutesElement.innerText).padStart(2, '0');
	secondsElement.innerText = String(secondsElement.innerText).padStart(2, '0');
	}

}, 1000);
