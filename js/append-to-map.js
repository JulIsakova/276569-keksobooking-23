import {generateAds} from './ads.js';
import {createAds} from './create-ads.js';

const mapCanvas = document.querySelector('#map-canvas');

const appendToMap = function() {
  mapCanvas.appendChild(createAds(generateAds()));
};

export{appendToMap};
