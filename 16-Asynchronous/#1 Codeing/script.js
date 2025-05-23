'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const authToken = '741137725793460600432x25813';
function renderContry(data, className = '') {
  const languages = Object.entries(data.languages)
    .map(([key, value]) => value)
    .join(', ');
  const [currrencies] = Object.entries(data.currencies);
  const [_, currrence] = currrencies;

  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${currrence.name}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
}

function renderError(err) {
  countriesContainer.insertAdjacentHTML('beforeend', err);
}
/**
 * function whereAmI() {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      console.log(res);
      if (!res.ok) throw new Error(`Fetch error ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data.country}?fullText=true`
      );
    })
    .then(res => {
      console.log(res);
      if (!res.ok)
        throw new Error(`Having error on get Country API ${res.status}`);
      return res.json();
    })
    .then(cdata => {
      renderContry(cdata[0]);
      console.log(cdata);
    })
    .catch(err => {
      console.error(err.message);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}
*/
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const WhereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;
    // Reverse geolocation
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error(`Problem getting location data`);
    const dataGeo = await resGeo.json();
    // Country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}?fullText=true`
    );
    if (!res.ok) throw new Error(`Problem getting contry`);
    const data = await res.json();
    renderContry(data[0]);
    return `You are in ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err.message} 💥`);
    renderError(`${err.message} 💥`);
    throw err;
  }
};
console.log('1: Will get location');

// const cName = WhereAmI()
//   .then(data => console.log(`2: ${data}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

// IIF
(async function () {
  try {
    const city = await WhereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}`);
  }
  console.log('3: Finished getting location');
})();
