var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
  var countryName = document.getElementById('country-name').value;
  if(!countryName.length) { //czy moglbym tu wstawic warunek !countryName i to tez by poprawnie dzialalo? Wydaje mi sie ze tak.
    countryName = 'Poland';
  }
  fetch(url + countryName)
    .then(function(response) {
      return response.json();
    })
    .then(showCountriesList);
}

function showCountriesList(response) {
  response.forEach(function(item) {
    var listElement = document.createElement('li');
    listElement.innerText = item.name + ', capital city: ' + item.capital;
    countriesList.append(listElement);
  });
}
