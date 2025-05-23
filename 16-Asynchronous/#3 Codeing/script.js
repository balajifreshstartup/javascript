'use strict';

const imgContainer = document.querySelector('.images');

const wait = seconds =>
  new Promise(resolve => setTimeout(resolve, seconds * 1000));

const createImage = async function (imgPath) {
  return await new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener('error', function () {
      reject(new Error(`Image ${imgPath} not loader !`));
    });
  });
};

let currentImage;
// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     console.log('Image 2 loaded');
//     currentImage = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err.message));

const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    currentImage = img;
    console.log('image 1 loaded');
    await wait(2);
    currentImage.style.display = 'none';

    img = await createImage('./img/img-2.jpg');
    console.log('Image 2 loaded');
    currentImage = img;
    await wait(2);
    currentImage.style.display = 'none';
  } catch (err) {
    console.error(`${err.message} 💥`);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => {
      return await createImage(img);
    });
    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (err) {
    console.error(`${err.message} 💥`);
  }
};

loadAll(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg']);
