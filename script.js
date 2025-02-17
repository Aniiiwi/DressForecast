// Weather API Functionality
document.getElementById('city-select').addEventListener('click', async () => {
    const city = document.getElementById('city-select').value;

    try {
        const response = await fetch('/weather', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                city: city,
            }),
        });

        const data = await response.json();

        if (data.error) {
            outputText.value = `Error: ${data.error}`;
        } else {
        // Show dress forecast
    	showDressForecast(data.main.temp);
    	
    	if (data.rain.3h > 3){
    		showUmbrella();
    	}
        
	    // Show weather animation 
	    switch (data.weather.main) {
	      case "clear sky":
	        showSun();
	        break;
	      case "few clouds":
	        showCloud(0.3);
	        break;
	      case "scattered clouds":
	        showCloud(0.5);
	        break;
	      case "broken clouds":
	        showCloud(0.8);
	        break;
	      case "shower rain":
	        showRain(0.3);
	        break;
	      case "rain":
	        showRain(0.6);
	        break;
	      case "thunder storm":
	        showThunder();
	        break;
	      case "snow":
	        showSnow;
	        break;
	      case "Mist":
	        showMist();
	        break;
	      default:
	        break;
    		}
        }
    } catch (error) {
        outputText.value = "An error occurred. Please try again.";
        console.error(error);
    }
});

// Dress forecast by  temperature
function showDressForecast(temperature) {

	const img = document.getElementById('dress');
	if (temperature > 35) {
      // Randomly choose between "Short-sleeve Top" and "Short Skirt"
      let t = Math.random();
      if (t > 0.5)
	  img.src = 'short-sleeve.png';
	  else 
	  img.src = 'short-skirt.png';
	  
    } else if (feelsLike > 20 && feelsLike <= 35) {
	  img.src = 'long-skirt.png';
      // outfit = "Long Skirt";
    } else if (feelsLike > 10 && feelsLike <= 20) {
	  img.src = 'long-paints.png';
      // outfit = "Long-sleeved Top, Long Pants, and a Coat";
    } else {
	  img.src = 'long-Jacket.png';
      // outfit = "Long-sleeved Top, Long Pants, and a Down Jacket";
    }
}

// Show umbrella
function showUmbrella(rain) {
		var img = document.getElementById('umbrella');
 		img.src = 'umbrella.png'
}

// Show sun weather
function showSun(){

    const sunshade = document.createElement('div');
    comet.classList.add('sunshade');

    comet.style.top = `${Math.random() * 100}%`; // Random starting position
    comet.style.left = `${Math.random() * 100}%`;

    comet.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
    document.querySelector('.starfield').appendChild(comet);
    
    // Remove comet after animation completes
    setTimeout(() => {
        comet.remove();
    }, 5000);

}

// Show cloud weather
function showCloud(x){

    const sunshade = document.createElement('div');
    comet.classList.add('sunshade');

    comet.style.top = `${Math.random() * 100}%`; // Random starting position
    comet.style.left = `${Math.random() * 100}%`;

    comet.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation duration
    document.querySelector('.starfield').appendChild(comet);
    
    // Remove comet after animation completes
    setTimeout(() => {
        comet.remove();
    }, 5000);
}

// Show rain weather
function showRain(x){

}

// Show thunder weather
function showTunder(){

}

// Show snow weather
function showSnow(){

}

// Show mist weather
function showMist(){

}