// const data = {
//   '0817': 'globe',
//   '0869': 'globe',
//   '0904': 'globe',
//   '0905': 'globe',
//   '0906': 'globe',
//   '0915': 'globe',
//   '0916': 'globe',
//   '0917': 'globe',
//   '0926': 'globe',
//   '0927': 'globe',
//   '0935': 'globe',
//   '0936': 'globe',
//   '0937': 'globe',
//   '0945': 'globe',
//   '0954': 'globe',
//   '0955': 'globe',
//   '0956': 'globe',
//   '0965': 'globe',
//   '0966': 'globe',
//   '0967': 'globe',
//   '0975': 'globe',
//   '0976': 'globe',
//   '0977': 'globe',
//   '0978': 'globe',
//   '0979': 'globe',
//   '0995': 'globe',
//   '0996': 'globe',
//   '0997': 'globe',
//   '0813': 'smart',
//   '0908': 'smart',
//   '0911': 'smart',
//   '0913': 'smart',
//   '0914': 'smart',
//   '0919': 'smart',
//   '0920': 'smart',
//   '0921': 'smart',
//   '0928': 'smart',
//   '0929': 'smart',
//   '0939': 'smart',
//   '0946': 'smart',
//   '0947': 'smart',
//   '0949': 'smart',
//   '0951': 'smart',
//   '0961': 'smart',
//   '0963': 'smart',
//   '0968': 'smart',
//   '0969': 'smart',
//   '0970': 'smart',
//   '0981': 'smart',
//   '0998': 'smart',
//   '0999': 'smart',
//   '0895': 'dito',
//   '0896': 'dito',
//   '0897': 'dito',
//   '0898': 'dito',
//   '0991': 'dito',
//   '0992': 'dito',
//   '0993': 'dito',
//   '0994': 'dito',
// };

const data = {
  '0817': 'globe',
  '0904': 'globe',
  '0905': 'globe',
  '0906': 'globe',
  '0915': 'globe',
  '0916': 'globe',
  '0917': 'globe',
  '0926': 'globe',
  '0927': 'globe',
  '0935': 'globe',
  '0936': 'globe',
  '0937': 'globe',
  '0945': 'globe',
  '0953': 'globe',
  '0954': 'globe',
  '0955': 'globe',
  '0956': 'globe',
  '0965': 'globe',
  '0966': 'globe',
  '0967': 'globe',
  '0975': 'globe',
  '0977': 'globe',
  '0978': 'globe',
  '0979': 'globe',
  '0980': 'globe',
  '0994': 'globe',
  '0995': 'globe',
  '0996': 'globe',
  '0997': 'globe',
  '0813': 'smart',
  '0907': 'smart',
  '0908': 'smart',
  '0909': 'smart',
  '0910': 'smart',
  '0911': 'smart',
  '0912': 'smart',
  '0913': 'smart',
  '0914': 'smart',
  '0918': 'smart',
  '0919': 'smart',
  '0920': 'smart',
  '0921': 'smart',
  '0928': 'smart',
  '0929': 'smart',
  '0930': 'smart',
  '0938': 'smart',
  '0939': 'smart',
  '0940': 'smart',
  '0946': 'smart',
  '0947': 'smart',
  '0948': 'smart',
  '0949': 'smart',
  '0950': 'smart',
  '0951': 'smart',
  '0961': 'smart',
  '0963': 'smart',
  '0968': 'smart',
  '0969': 'smart',
  '0970': 'smart',
  '0981': 'smart',
  '0989': 'smart',
  '0992': 'smart',
  '0998': 'smart',
  '0999': 'smart',
  '0922': 'sun',
  '0923': 'sun',
  '0924': 'sun',
  '0925': 'sun',
  '0931': 'sun',
  '0932': 'sun',
  '0933': 'sun',
  '0934': 'sun',
  '0940': 'sun',
  '0941': 'sun',
  '0942': 'sun',
  '0943': 'sun',
  '0944': 'sun',
  '0973': 'sun',
  '0974': 'sun',
  '0895': 'dito',
  '0896': 'dito',
  '0897': 'dito',
  '0898': 'dito',
  '0991': 'dito',
  '0992': 'dito',
  '0993': 'dito',
  '0994': 'dito',
  '0996': 'cherry',
  '0976': 'GOMO',
};

const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByTagName('button')[0];
const form = document.querySelector('form');
const result = document.getElementsByClassName('result')[0];
const image = document.querySelector('img');
const audio = document.querySelector('audio');
input.focus();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  audio.play();
  const value = input.value;
  if (value.length < 4) {
    result.innerHTML = 'Invalid input';
    return;
  }
  const prefix = value.substring(0, 4);
  const network = data[prefix];
  // const imageSrc = `./assets/${network}.png`;

  // image.src = imageSrc;
  result.innerHTML = network ? network : 'Unknown';
});
