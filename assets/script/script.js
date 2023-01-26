const url = new URL("https://weatherapi-com.p.rapidapi.com/current.json?lang=es");
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cee425682emsh692fac3f271e3ffp13a8cdjsnecf7b9b517ee',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const iconButton = document.querySelector("#icon-button");

const checkInput = () => {
	const inputCountry = document.querySelector("#input-country");
	const inputValue = inputCountry.value.trim();

	if (inputValue !== "") {
		inputCountry.value = "";
		return inputValue;
	}

	alert("ERROR: Debes colocar un país.");
}


const getWeather = async (country) => {
	url.searchParams.set("q", country);

	try {
		const response = await fetch(url, options);
		const data = await response.json();
		console.log(data);

		const containerInformation = document.querySelector("#information-container");
		containerInformation.innerHTML = `
			<div class="information__text information__text--l information__text--country">${data.location.country}, ${data.location.name}</div>
			<div class="information__text information__text--xl information__text--temperature">${data.current.temp_c}°C</div>
			<div class="information__container information__container--condition">
				<img src="${data.current.condition.icon}" alt="Time condition icon" loading="lazy" class="information__icon">
				<div class="information__text information__text--l">${data.current.condition.text}</div>
			</div>
			<div class="information__text information__text--sensation">Sensación: ${data.current.feelslike_c}°C</div>
			<div class="information__text information__text--wind">Viento: ${data.current.wind_kph} / kph</div>
			<div class="information__text information__text--humidity">Humedad: ${data.current.humidity}%</div>`;

	} catch (error) {
		alert("ERROR: Ha ocurrido un error al obtener la información.");
		console.error(error);
	}
}

const placeData = async () => {
	const country = checkInput();

	if (country !== undefined) {
		getWeather(country);
	}
}

iconButton.addEventListener('click', placeData);
