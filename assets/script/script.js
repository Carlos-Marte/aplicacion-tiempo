const url = new URL("https://weatherapi-com.p.rapidapi.com/current.json?");
url.searchParams.append("q", "República Dominicana");
url.searchParams.append("lang", "es");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cee425682emsh692fac3f271e3ffp13a8cdjsnecf7b9b517ee',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));