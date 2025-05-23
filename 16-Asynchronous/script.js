'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
}
function getJsonData(url, msg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${msg} ${response.status}`);
    return response.json();
  });
}
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
function getCountryData(country) {
  getJsonData(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(data => {
      renderContry(data[0]);
      const borders = data[0].borders;
      if (!borders || borders.length === 0)
        throw new Error(`No neighbour found!`);

      const neighbour = borders[0];

      return getJsonData(
        `https://restcountries.com/v3.1/alpha/${neighbour}?fullText=true`
      );
    })
    .then(data => renderContry(data[0], 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong ${err.message}. Try again later`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

// function getCountry(country) {
// const request = new XMLHttpRequest();
// request.open(
//   'GET',
//   `https://restcountries.com/v3.1/name/${country}?fullText=true`
// );
// request.send();
// request.addEventListener('load', function () {
//   const [data] = JSON.parse(this.responseText);
//   renderContry(data);
//   console.log(data.borders);
//   if (!data.borders || !data.borders[0]) return;
//   const request2 = new XMLHttpRequest();
//   request2.open(
//     'Get',
//     `https://restcountries.com/v3.1/alpha/${data.borders[0]}?fullText=true`
//   );
//   request2.send();
//   request2.addEventListener('load', function () {
//     const [data2] = JSON.parse(this.responseText);
//     renderContry(data2, 'neighbour');
//   });
// });
// }
btn.addEventListener('click', function () {
  getCountryData('india');
});

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🎫');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve('You WIN 💰');
    } else {
      reject(new Error('You loss your money 💩'));
    }
  }, 2000);
});
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Combinators
const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJsonData(
    //   `https://restcountries.com/v3.1/name/${c1}?fullText=true`
    // );
    // const [data2] = await getJsonData(
    //   `https://restcountries.com/v3.1/name/${c2}?fullText=true`
    // );
    // const [data3] = await getJsonData(
    //   `https://restcountries.com/v3.1/name/${c3}?fullText=true`
    // );
    // console.log([data1.capital[0], data2.capital[0], data3.capital[0]]);

    const data = await Promise.all([
      getJsonData(`https://restcountries.com/v3.1/name/${c1}?fullText=true`),
      getJsonData(`https://restcountries.com/v3.1/name/${c2}?fullText=true`),
      getJsonData(`https://restcountries.com/v3.1/name/${c3}?fullText=true`),
    ]);
    console.log(data.map(d => d[0].capital[0]));
  } catch (err) {
    console.error(err.message);
  }
};

get3Countries('India', 'China', 'Japan');

// Using Promise.race to fetch data from multiple APIs concurrently.
// The first promise to settle (resolve or reject) determines the outcome of Promise.race.
// If a fetch request resolves first, its data is logged to the console.
// If a fetch request rejects first, the error message is logged to the console.
(async function () {
  await Promise.race([
    getJsonData(`https://restcountries.com/v3.1/name/India?fullText=true`),
    getJsonData(`https://restcountries.com/v3.1/name/Sri lanka?fullText=true`),
    getJsonData(`https://restcountries.com/v3.1/name/Japan?fullText=true`),
  ])
    .then(res => console.log(res[0]))
    .catch(err => console.log(err.message));
})();

/**
 * Demonstrates the use of `Promise.any` to handle multiple promises.
 *
 * - `Promise.any` takes an array of promises and resolves as soon as any one of the promises resolves.
 * - If at least one promise resolves, the resolved value of the first fulfilled promise is returned.
 * - If all promises reject, `Promise.any` rejects with an `AggregateError`, which contains all the rejection reasons.
 *
 * Example:
 * - In this example, the first resolved promise (`Promise.resolve('Again Success')`) determines the outcome.
 * - If all promises were to reject, an `AggregateError` would be thrown.
 */
(async function () {
  await Promise.any([
    Promise.reject('Promise Rejected'),
    Promise.resolve('Again Success'),
    Promise.resolve('Success'),
  ])
    .then(res => console.log(res))
    .catch(err => console.log(err.message));
})();

/**
 * Demonstrates the use of `Promise.allSettled` to handle multiple promises.
 *
 * - `Promise.allSettled` takes an array of promises and returns a promise that resolves
 *   after all the input promises have settled (either resolved or rejected).
 * - The result is an array of objects, each describing the outcome of each promise.
 * - Each object has a `status` property (`fulfilled` or `rejected`) and either a `value` (for fulfilled promises)
 *   or a `reason` (for rejected promises).
 *
 * Example:
 * - In this example, all promises are settled, and their results are logged.
 * - This method is useful when you want to know the outcome of all promises, regardless of their success or failure.
 */
(async function () {
  await Promise.allSettled([
    Promise.reject('Promise Rejected'),
    Promise.resolve('Again Success'),
    Promise.resolve('Success'),
  ]).then(res => console.log(res));
})();
