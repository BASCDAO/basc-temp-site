document.addEventListener('DOMContentLoaded', function() {
  // Get references to the elements
  const fetchButton = document.getElementById('fetchButton');
  const mergeButton = document.getElementById('mergeButton');

  // Add click event listener to the fetch button
  fetchButton.addEventListener('click', fetchNFT);

  // Add click event listener to the merge button
  mergeButton.addEventListener('click', mergeAndDownload);

  // Add change event listener to the Layer dropdown
  const layerDropdown = document.getElementById('layer-dropdown');
  layerDropdown.addEventListener('change', function() {
    const selectedLayerUrl = layerDropdown.value;
    selectLayer(selectedLayerUrl);
  });
});

const selectedLayerImages = [];
const layerImageUrls = [
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_GOLD.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Gold.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_NOISE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Noise.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_CORAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Cheetah.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_ROBO.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Robo.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_TRIPPY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Trippy.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_ILLUMINATI.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/DMT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM%20_DEATH_BOT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Deathbot.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_ZOMBIE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Zombie.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_WHITE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/White.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_BROWN.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Brown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_RED.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Red.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_BLACK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Black.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_PINK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Pink.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_CREAM.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Cream.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_BLUE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Blue.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_GREY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Grey.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_DARK_BROWN.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Darkbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_GOLDEN_BROWN.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Goldenbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_TAN.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shots/Tan.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Gold.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Noise.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Cheetah.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Robo.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Trippy.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/DMT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Deathbot.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Zombie.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/White.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Brown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Red.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Black.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Pink.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Cream.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Blue.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Grey.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Darkbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Goldenbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottle/Tan.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Gold.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Noise.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Cheetah.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Robo.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Trippy.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/DMT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Deathbot.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Zombie.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/White.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Brown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Red.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Black.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Pink.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Cream.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Blue.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Grey.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Darkbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Goldenbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beer/Tan.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/pizza/pizza.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Gold.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Noise.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Cheetah.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Robo.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Trippy.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/DMT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Deathbot.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Zombie.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/White.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Brown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Red.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Black.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Pink.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Cream.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Blue.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Grey.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Darkbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Goldenbrown.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/ledger/Tan.png',

  // Add more layer image URLs here
];
let adjustedNftId;
function fetchNFT() {
  const nftIdInput = document.getElementById('nftIdInput');
  const nftId = nftIdInput.value.trim();

  if (nftId === '') {
    alert('Please enter an NFT ID');
    return;
  }

  adjustedNftId = parseInt(nftId, 10);

  // Check if adjustedNftId is within the range of 1 to 10,000 and not already -1
  if (!isNaN(adjustedNftId) && adjustedNftId >= 1 && adjustedNftId <= 10000 && adjustedNftId !== -1) {
    adjustedNftId--; // Subtract 1
  }

  const nftImageUrl = `https://raw.githubusercontent.com/akh1lsol/Bascdao.net/main/v2/${adjustedNftId}.png`;

  const img = new Image();
  img.onload = function() {
    displayImage(nftImageUrl);
    addButton(layerImageUrls);
  };
  img.onerror = function() {
    displayNotFoundModal();
  };
  img.src = nftImageUrl;
}


function displayNotFoundModal() {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modalMessage');
  const closeModal = document.getElementById('closeModal');

  modalMessage.textContent = 'ID NOT FOUND';
  modal.style.display = 'block';

  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });
}

function displayImage(imageUrl) {
  const nftContainer = document.getElementById('nftContainer');
  nftContainer.innerHTML = `<img src="${imageUrl}" alt="NFT Image">`;
}

const customLayerNames = [
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'GM Cup',
  'Shot',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Bottle',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Beer',
  'Pizza',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger',
  'Ledger'
  // Add more custom layer names here
];

function addButton(layerImageUrls) {
  const dropdownContainer = document.createElement('div');
  dropdownContainer.classList.add('dropdown-container');
  const layerDropdown = document.createElement('select');
  layerDropdown.id = 'layer-dropdown';

  // Add the default option "CHOOSE YOUR LAYER"
  const defaultLayerOption = document.createElement('option');
  defaultLayerOption.value = '';
  defaultLayerOption.textContent = 'CHOOSE YOUR LAYER';
  layerDropdown.appendChild(defaultLayerOption);

  // Check if the NFT ID is 1, 3004, 5437, 722, or ....
  const nftIdInput = document.getElementById('nftIdInput');
  const nftId = nftIdInput.value.trim();
  
 if (nftId === '589' || nftId === '2002' || nftId === '4226' || nftId === '949' || nftId === '2100' || nftId === '2254' || nftId === '7216' || nftId === '2747' || nftId === '7938' || nftId === '613' || nftId === '5634' || nftId === '2188' || nftId === '3031' || nftId === '1721' || nftId === '6079' || nftId === '1928' || nftId === '1965' || nftId === '4222' || nftId === '1531' || nftId === '2260' || nftId === '4356' || nftId === '1484' || nftId === '1486' || nftId === '6587' || nftId === '7736' || nftId === '3270' || nftId === '3127' || nftId === '1903' || nftId === '8631' || nftId === '2635' || nftId === '2086' || nftId === '4983' || nftId === '4897' || nftId === '6238' || nftId === '9612' || nftId === '2478' || nftId === '7474' || nftId === '5818' || nftId === '7877' || nftId === '9316' || nftId === '1816' || nftId === '8882' || nftId === '8103' || nftId === '1360' || nftId === '6548' || nftId === '3464' || nftId === '7929' || nftId === '2183' || nftId === '4087' || nftId === '6103' || nftId === '9069' || nftId === '7685' || nftId === '5244' || nftId === '9831' || nftId === '4219' || nftId === '1005' || nftId === '1881' || nftId === '3279' || nftId === '5301' || nftId === '3594' || nftId === '4706' || nftId === '2434' || nftId === '5583' || nftId === '8847' || nftId === '1052' || nftId === '814' || nftId === '552' || nftId === '5537' || nftId === '440' || nftId === '9967' || nftId === '1223' || nftId === '5038' || nftId === '6129' || nftId === '1145' || nftId === '5854' || nftId === '2198' || nftId === '3722' || nftId === '9503' || nftId === '7348' || nftId === '7992' || nftId === '9566' || nftId === '8467' || nftId === '5793' || nftId === '8206' || nftId === '1412' || nftId === '6289' || nftId === '5774' || nftId === '1784' || nftId === '5752' || nftId === '6203' || nftId === '3061' || nftId === '6489' || nftId === '3596' || nftId === '8098' || nftId === '4418' || nftId === '2338' || nftId === '1804' || nftId === '2972' || nftId === '2205' || nftId === '5722' || nftId === '891' || nftId === '6200' || nftId === '8907' || nftId === '2526' || nftId === '6082' || nftId === '5133' || nftId === '1216' || nftId === '5532' || nftId === '7811' || nftId === '9890' || nftId === '3852' || nftId === '3549' || nftId === '3225' || nftId === '4710' || nftId === '9213' || nftId === '9188' || nftId === '7060' || nftId === '187' || nftId === '4980' || nftId === '6557' || nftId === '2693' || nftId === '5456' || nftId === '9991' || nftId === '1355') {
      // Add Gold and Shot layer options
    const goldOption = document.createElement('option');
    goldOption.value = layerImageUrls[0]; // Assuming Gold layer URL is the first in the array
    goldOption.textContent = customLayerNames[0]; // Assuming Gold layer name is the first in the array
    layerDropdown.appendChild(goldOption);

    const shotOption = document.createElement('option');
    shotOption.value = layerImageUrls[1]; // Assuming Shot layer URL is the second in the array
    shotOption.textContent = customLayerNames[1]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(shotOption);

    const bottleOption = document.createElement('option');
    bottleOption.value = layerImageUrls[38]; // Assuming Shot layer URL is the second in the array
    bottleOption.textContent = customLayerNames[38]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(bottleOption);

    const beerOption = document.createElement('option');
    beerOption.value = layerImageUrls[57]; // Assuming Shot layer URL is the second in the array
    beerOption.textContent = customLayerNames[57]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(beerOption);

    const pizzaOption = document.createElement('option');
    pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
    pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(pizzaOption);

    const ledgerOption = document.createElement('option');
    ledgerOption.value = layerImageUrls[77]; // Assuming Shot layer URL is the second in the array
    ledgerOption.textContent = customLayerNames[77]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(ledgerOption);
  }

  if (nftId === '1136' || nftId === '9990' || nftId === '3440' || nftId === '4147' || nftId === '8153' || nftId === '7891' || nftId === '7090' || nftId === '2800' || nftId === '8980' || nftId === '5541' || nftId === '6854' || nftId === '7898' ||nftId === '4839' || nftId === '2362' || nftId === '6480' || nftId === '5659' ||nftId === '1882' || nftId === '3146' || nftId === '3880' || nftId === '2934' || nftId === '2893' || nftId === '5390' || nftId === '7253' || nftId === '2671' || nftId === '7913' || nftId === '1159' || nftId === '3231' || nftId === '4029' ||  nftId === '8535' || nftId === '2933' || nftId === '5695' || nftId === '6031' || nftId === '8314' || nftId === '8138' || nftId === '9319' || nftId === '435' || nftId === '3975' || nftId === '4515' || nftId === '4586' || nftId === '9344' || nftId === '1268' || nftId === '4815' || nftId === '2910' || nftId === '3514' || nftId === '1879' || nftId === '1070' || nftId === '4619' || nftId === '7254' || nftId === '6701' || nftId === '2019' || nftId === '6440' || nftId === '2913' || nftId === '7395' || nftId === '5194' || nftId === '664' || nftId === '1418' || nftId === '4925' || nftId === '1438' || nftId === '463' || nftId === '6091' ) {
    // Add Noise layer options
    const noiseGmCupOption = document.createElement('option');
    noiseGmCupOption.value = layerImageUrls[2]; // Assuming Noise GM Cup layer URL is the third in the array
    noiseGmCupOption.textContent = customLayerNames[2]; // Assuming Noise GM Cup layer name is the third in the array
    layerDropdown.appendChild(noiseGmCupOption);

    const noiseShotOption = document.createElement('option');
    noiseShotOption.value = layerImageUrls[3]; // Assuming Noise Shot layer URL is the fourth in the array
    noiseShotOption.textContent = customLayerNames[3]; // Assuming Noise Shot layer name is the fourth in the array
    layerDropdown.appendChild(noiseShotOption);

    const noiseBottleOption = document.createElement('option');
    noiseBottleOption.value = layerImageUrls[39]; // Assuming Shot layer URL is the second in the array
    noiseBottleOption.textContent = customLayerNames[39]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(noiseBottleOption);

    const noiseBeerOption = document.createElement('option');
    noiseBeerOption.value = layerImageUrls[58]; // Assuming Shot layer URL is the second in the array
    noiseBeerOption.textContent = customLayerNames[58]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(noiseBeerOption);

    const pizzaOption = document.createElement('option');
    pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
    pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(pizzaOption);

    const ledgerOption = document.createElement('option');
    ledgerOption.value = layerImageUrls[78]; // Assuming Shot layer URL is the second in the array
    ledgerOption.textContent = customLayerNames[78]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(ledgerOption);
  }
 
if (
  nftId === '8271' || nftId === '3392' || nftId === '369' || nftId === '8921' ||
  nftId === '7643' || nftId === '3030' || nftId === '9284' || nftId === '7189' ||
  nftId === '5318' || nftId === '7024' || nftId === '3196' || nftId === '7098' ||
  nftId === '1707' || nftId === '1789' || nftId === '6327' || nftId === '4594' ||
  nftId === '5988' || nftId === '6799' || nftId === '8428' || nftId === '6379' ||
  nftId === '7178' || nftId === '2657' || nftId === '6796' || nftId === '7911' ||
  nftId === '9836' || nftId === '2631' || nftId === '5943' || nftId === '973' ||
  nftId === '3901' || nftId === '9382' || nftId === '2599' || nftId === '2728' ||
  nftId === '1496' || nftId === '9936' || nftId === '7783' || nftId === '2073' ||
  nftId === '8346' || nftId === '893' || nftId === '2547' || nftId === '5919' ||
  nftId === '8026' || nftId === '8922' || nftId === '4021' || nftId === '1794' ||
  nftId === '4803' || nftId === '546' || nftId === '7140' || nftId === '4739' ||
  nftId === '9978' || nftId === '9157'
){
    
    
    const cheetahGmCupOption = document.createElement('option');
    cheetahGmCupOption.value = layerImageUrls[4]; // Assuming Noise GM Cup layer URL is the third in the array
    cheetahGmCupOption.textContent = customLayerNames[4]; // Assuming Noise GM Cup layer name is the third in the array
    layerDropdown.appendChild(cheetahGmCupOption);

    const cheetahShotOption = document.createElement('option');
    cheetahShotOption.value = layerImageUrls[5]; // Assuming Noise Shot layer URL is the fourth in the array
    cheetahShotOption.textContent = customLayerNames[5]; // Assuming Noise Shot layer name is the fourth in the array
    layerDropdown.appendChild(cheetahShotOption);

    const cheetahBottleOption = document.createElement('option');
    cheetahBottleOption.value = layerImageUrls[40]; // Assuming Noise Shot layer URL is the fourth in the array
    cheetahBottleOption.textContent = customLayerNames[40]; // Assuming Noise Shot layer name is the fourth in the array
    layerDropdown.appendChild(cheetahBottleOption);
    
    const cheetahBeerOption = document.createElement('option');
    cheetahBeerOption.value = layerImageUrls[59]; // Assuming Noise Shot layer URL is the fourth in the array
    cheetahBeerOption.textContent = customLayerNames[59]; // Assuming Noise Shot layer name is the fourth in the array
    layerDropdown.appendChild(cheetahBeerOption);

     const pizzaOption = document.createElement('option');
    pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
    pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(pizzaOption);

    const ledgerOption = document.createElement('option');
    ledgerOption.value = layerImageUrls[79]; // Assuming Shot layer URL is the second in the array
    ledgerOption.textContent = customLayerNames[79]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(ledgerOption);
  }
  if (nftId === '8784' || nftId === '6386' || nftId === '3846' || nftId === '6264' ||
  nftId === '9043' || nftId === '8360' || nftId === '6154' || nftId === '3459' ||
  nftId === '5479' || nftId === '3244' || nftId === '2149' || nftId === '5465' ||
  nftId === '1817' || nftId === '6169' || nftId === '8990' || nftId === '7961' ||
  nftId === '6932' || nftId === '6126' || nftId === '5741' || nftId === '1515' ||
  nftId === '6918' || nftId === '174' || nftId === '779' || nftId === '6013' ||
  nftId === '6352' || nftId === '5297' || nftId === '260' || nftId === '5438' ||
  nftId === '8119' || nftId === '8312' || nftId === '8160' || nftId === '4732' ||
  nftId === '3977' || nftId === '5809' || nftId === '9034' || nftId === '503' ||
  nftId === '1468' || nftId === '5160' || nftId === '3887' || nftId === '6403' ||
  nftId === '9872' || nftId === '1642' || nftId === '2588' || nftId === '6537' ||
  nftId === '2954' || nftId === '3872' || nftId === '8375' || nftId === '8577' ||
  nftId === '5570' || nftId === '7458' || nftId === '8305' || nftId === '6291' ||
  nftId === '1766' || nftId === '6226' || nftId === '2439' || nftId === '4496' ||
  nftId === '275' || nftId === '2138' || nftId === '414' || nftId === '2994' ||
  nftId === '6891' || nftId === '8844' || nftId === '8329' || nftId === '5079' ||
  nftId === '3248' || nftId === '798' || nftId === '5201' || nftId === '9421' ||
  nftId === '4584' || nftId === '6529' || nftId === '2047' || nftId === '8764' ||
  nftId === '4604' || nftId === '6124' || nftId === '2074' || nftId === '2719' ||
  nftId === '5157' || nftId === '7154' || nftId === '5672' || nftId === '8787' ||
  nftId === '4006' || nftId === '5996' || nftId === '2874' || nftId === '9229' ||
  nftId === '4390' || nftId === '5365' || nftId === '6955' || nftId === '6671' ||
  nftId === '3607' || nftId === '277' || nftId === '5984' || nftId === '570' ||
  nftId === '5187' || nftId === '5071' || nftId === '509' || nftId === '964' ||
  nftId === '8629' || nftId === '1156' || nftId === '2894' || nftId === '3292' ||
  nftId === '1370' || nftId === '8151' || nftId === '1576' || nftId === '1410' ||
  nftId === '8856' || nftId === '6257' || nftId === '4000' || nftId === '6987' ||
  nftId === '9917' || nftId === '9355' || nftId === '9532' || nftId === '8707' ||
  nftId === '636' || nftId === '6885' || nftId === '6648' || nftId === '3007' ||
  nftId === '5346' || nftId === '117' || nftId === '7989' || nftId === '5125' ||
  nftId === '9784' || nftId === '8350' || nftId === '6881' || nftId === '9367' ||
  nftId === '1255' || nftId === '3469' || nftId === '5789' || nftId === '1478' ||
  nftId === '4634' || nftId === '5967' || nftId === '7985' || nftId === '3408' ||
  nftId === '3224' || nftId === '4615' || nftId === '1537' || nftId === '840' ||
  nftId === '1844' || nftId === '9909' || nftId === '3632' || nftId === '3684' ||
  nftId === '9476' || nftId === '6418' || nftId === '9294' || nftId === '178' ||
  nftId === '3478' || nftId === '6427' || nftId === '1975' || nftId === '7218' ||
  nftId === '7668' || nftId === '4378' || nftId === '4575' || nftId === '1065' ||
  nftId === '4889' || nftId === '4284' || nftId === '3568' || nftId === '8320' ||
  nftId === '4129' || nftId === '9521' || nftId === '5343' || nftId === '3319' ||
  nftId === '1862' || nftId === '6391' || nftId === '4965' || nftId === '2961' ||
  nftId === '6956' || nftId === '5696' || nftId === '5234' || nftId === '5597' ||
  nftId === '9635' || nftId === '7145' || nftId === '2500' || nftId === '7256' ||
  nftId === '2309' || nftId === '1899' || nftId === '4149' || nftId === '6178' ||
  nftId === '2979' || nftId === '9989' || nftId === '8165' || nftId === '4297' ||
  nftId === '3612' || nftId === '1350' || nftId === '634' || nftId === '9423' ||
  nftId === '4610' || nftId === '978' || nftId === '7847' || nftId === '3791' ||
  nftId === '7856' || nftId === '606' || nftId === '6476' || nftId === '3865' ||
  nftId === '7013' || nftId === '8572' || nftId === '8411' || nftId === '3797' ||
  nftId === '2055' || nftId === '7964' || nftId === '4570' || nftId === '5501' ||
  nftId === '7353' || nftId === '9313' || nftId === '896' || nftId === '6874' ||
  nftId === '9662' || nftId === '2300' || nftId === '2221' || nftId === '2151' ||
  nftId === '7334' || nftId === '3190' || nftId === '2216' || nftId === '4892' ||
  nftId === '3737' || nftId === '7928' || nftId === '4510' || nftId === '6549' ||
  nftId === '7766' || nftId === '1469' || nftId === '2320' || nftId === '6967' ||
  nftId === '9691' || nftId === '2745' || nftId === '661' || nftId === '7470' ||
  nftId === '8680' || nftId === '6189' || nftId === '50' || nftId === '6637' ||
  nftId === '6045' || nftId === '9427' || nftId === '7454' || nftId === '8502' ||
  nftId === '2448' || nftId === '7291' || nftId === '5533' || nftId === '8221' ||
  nftId === '7941' || nftId === '5348' || nftId === '7529' || nftId === '1106' ||
  nftId === '9226' || nftId === '2718' || nftId === '1439' || nftId === '8004' ||
  nftId === '8290' || nftId === '3271' || nftId === '8141' || nftId === '6452' ||
  nftId === '7314' || nftId === '2647' || nftId === '4738' || nftId === '342' ||
  nftId === '4754' || nftId === '718' || nftId === '7094' || nftId === '4389' ||
  nftId === '3389' || nftId === '8188' || nftId === '6368' || nftId === '3159' ||
  nftId === '7550' || nftId === '9168' || nftId === '5043' || nftId === '7860' ||
  nftId === '454' || nftId === '373' || nftId === '1248' || nftId === '6850' ||
  nftId === '5671' || nftId === '7026' || nftId === '5684' || nftId === '3161' ||
  nftId === '561' || nftId === '833' || nftId === '8182' || nftId === '6664' ||
  nftId === '7169' || nftId === '9495' || nftId === '4493' || nftId === '6554' ||
  nftId === '6840' || nftId === '8785' || nftId === '7416' || nftId === '5134' ||
  nftId === '5395' || nftId === '1638' || nftId === '28' || nftId === '24' ||
  nftId === '5341' || nftId === '9926' || nftId === '3985' || nftId === '1551' ||
  nftId === '4973' || nftId === '3882' || nftId === '6596' || nftId === '1384' ||
  nftId === '4901' || nftId === '5175' || nftId === '9172' || nftId === '1507' ||
  nftId === '9135' || nftId === '400' || nftId === '5347' || nftId === '3489' ||
  nftId === '6170' || nftId === '6350' || nftId === '873' || nftId === '2435' ||
  nftId === '2784' || nftId === '1543' || nftId === '3421' || nftId === '2565' ||
  nftId === '1448' || nftId === '1164' || nftId === '3237' || nftId === '3786' ||
  nftId === '2600' || nftId === '8417' || nftId === '9824' || nftId === '3999' ||
  nftId === '4373' || nftId === '3073' || nftId === '2173' || nftId === '9721' ||
  nftId === '5565' || nftId === '2468' || nftId === '48' || nftId === '5833' ||
  nftId === '220' || nftId === '7048' || nftId === '2051' || nftId === '8448' || nftId === '1827' || nftId === '3488' || nftId === '7005' ||
  nftId === '9630' || nftId === '5459' || nftId === '195' || nftId === '356' ||
  nftId === '1679' || nftId === '1381' || nftId === '4309' || nftId === '9277' ||
  nftId === '1796' || nftId === '357' || nftId === '5417' || nftId === '5368' ||
  nftId === '2344' || nftId === '6769' || nftId === '1141' || nftId === '5344' ||
  nftId === '4759' || nftId === '129' || nftId === '9628' || nftId === '2365' ||
  nftId === '7365' || nftId === '631' || nftId === '8570' || nftId === '2383' ||
  nftId === '8815' || nftId === '2521' || nftId === '1218' || nftId === '3509' ||
  nftId === '1979' || nftId === '1331' || nftId === '250' || nftId === '5679' ||
  nftId === '1552' || nftId === '1538' || nftId === '8464' || nftId === '1114' ||
  nftId === '8255' || nftId === '4800' || nftId === '4514' || nftId === '4480' ||
  nftId === '2663' || nftId === '7085' || nftId === '1713' || nftId === '3646' ||
  nftId === '6484' || nftId === '7331' || nftId === '7039' || nftId === '6949' ||
  nftId === '4426' || nftId === '7002' || nftId === '2353' || nftId === '3288' ||
  nftId === '844' || nftId === '3425' || nftId === '3351' || nftId === '5705' ||
  nftId === '5676' || nftId === '2885' || nftId === '2780' || nftId === '1338' ||
  nftId === '6185' || nftId === '7599' || nftId === '8752' || nftId === '6735' ||
  nftId === '2428' || nftId === '9965' || nftId === '6235' || nftId === '6217' ||
  nftId === '7872' || nftId === '1930' || nftId === '2218' || nftId === '5816' ||
  nftId === '836' || nftId === '9767' || nftId === '1506' || nftId === '1414' ||
  nftId === '1633') {// Add Robot layer
  // 
  const robotGmCupOption = document.createElement('option');
  robotGmCupOption.value = layerImageUrls[6]; // Assuming Gold layer URL is the first in the array
  robotGmCupOption.textContent = customLayerNames[6]; // Assuming Gold layer name is the first in the array
  layerDropdown.appendChild(robotGmCupOption);

  const robotShotOption = document.createElement('option');
  robotShotOption.value = layerImageUrls[7]; // Assuming Shot layer URL is the second in the array
  robotShotOption.textContent = customLayerNames[7]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(robotShotOption);

  const robotBottleOption = document.createElement('option');
  robotBottleOption.value = layerImageUrls[41]; // Assuming Shot layer URL is the second in the array
  robotBottleOption.textContent = customLayerNames[41]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(robotBottleOption);

  const robotBeerOption = document.createElement('option');
  robotBeerOption.value = layerImageUrls[60]; // Assuming Shot layer URL is the second in the array
  robotBeerOption.textContent = customLayerNames[60]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(robotBeerOption);
  
  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[80]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[80]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

}
if (nftId === '4909'|| nftId === '5011'|| nftId === '250'|| nftId === '836'|| nftId === '4101'|| nftId === '4576'|| nftId === '77'
|| nftId === '3628'|| nftId === '4878'|| nftId === '2201'|| nftId === '4317'|| nftId === '3306'|| nftId === '340'|| nftId === '2721'
|| nftId === '4212'|| nftId === '4791'|| nftId === '4283'|| nftId === '3997'|| nftId === '4171'|| nftId === '3282'|| nftId === '4425'
|| nftId === '2585'|| nftId === '3382'|| nftId === '1266'|| nftId === '3753'|| nftId === '1517'|| nftId === '1968'|| nftId === '5017'
|| nftId === '2089'|| nftId === '4579'|| nftId === '4024'|| nftId === '3785'|| nftId === '3691'|| nftId === '338'|| nftId === '1958'
|| nftId === '2271'|| nftId === '3460'|| nftId === '818'|| nftId === '2057'|| nftId === '3625'|| nftId === '956'|| nftId === '3705'
|| nftId === '831'|| nftId === '4486'|| nftId === '5229'|| nftId === '3802'|| nftId === '2018'|| nftId === '1729'|| nftId === '3126'
|| nftId === '1826'|| nftId === '1319'|| nftId === '2603'|| nftId === '76'|| nftId === '856'|| nftId === '5571'|| nftId === '5997'
|| nftId === '1390'|| nftId === '4346'|| nftId === '5444'|| nftId === '4800'|| nftId === '4354'|| nftId === '5128'|| nftId === '1507'
|| nftId === '5748'|| nftId === '5036'|| nftId === '3389'|| nftId === '1824'|| nftId === '1382'|| nftId === '4451'|| nftId === '1196') {// Add Trippy layer
  // 
  const trippyGmCupOption = document.createElement('option');
  trippyGmCupOption.value = layerImageUrls[8]; // Assuming Gold layer URL is the first in the array
  trippyGmCupOption.textContent = customLayerNames[8]; // Assuming Gold layer name is the first in the array
  layerDropdown.appendChild(trippyGmCupOption);

  const trippyShotOption = document.createElement('option');
  trippyShotOption.value = layerImageUrls[9]; // Assuming Shot layer URL is the second in the array
  trippyShotOption.textContent = customLayerNames[9]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(trippyShotOption);

  const trippyBottleOption = document.createElement('option');
  trippyBottleOption.value = layerImageUrls[42]; // Assuming Shot layer URL is the second in the array
  trippyBottleOption.textContent = customLayerNames[42]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(trippyBottleOption);

  const trippyBeerOption = document.createElement('option');
  trippyBeerOption.value = layerImageUrls[61]; // Assuming Shot layer URL is the second in the array
  trippyBeerOption.textContent = customLayerNames[61]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(trippyBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[81]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[81]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

}
if (nftId === '1604' || nftId === '8544' || nftId === '4593' || nftId === '2811' ||
nftId === '364' || nftId === '7307' || nftId === '8963' || nftId === '5512' ||
nftId === '2392' || nftId === '9586' || nftId === '2453' || nftId === '2250' ||
nftId === '9018' || nftId === '4398' || nftId === '218' || nftId === '4506' ||
nftId === '4414' || nftId === '2121' || nftId === '5858' || nftId === '9255' ||
nftId === '5100' || nftId === '5039' || nftId === '9535' || nftId === '9544' ||
nftId === '7996' || nftId === '3932' || nftId === '9913' || nftId === '5847' ||
nftId === '46' || nftId === '5278' || nftId === '4516' || nftId === '3377' ||
nftId === '7759' || nftId === '7083' || nftId === '4792' || nftId === '6634' ||
nftId === '8669' || nftId === '308' || nftId === '3067' || nftId === '9859' ||
nftId === '8122' || nftId === '7519' || nftId === '9696' || nftId === '1177' ||
nftId === '776' || nftId === '9282' || nftId === '4034' || nftId === '66' ||
nftId === '9362' || nftId === '141' || nftId === '8937' || nftId === '621' ||
nftId === '3699' || nftId === '6749' || nftId === '6635' || nftId === '1175' ||
nftId === '1455' || nftId === '8790' || nftId === '5629' || nftId === '4712' ||
nftId === '2139' || nftId === '1434' || nftId === '3951' || nftId === '9484' ||
nftId === '9941' || nftId === '6282' || nftId === '8781' || nftId === '2758' ||
nftId === '8878' || nftId === '136' || nftId === '2308' || nftId === '2513' ||
nftId === '2733' || nftId === '9007' || nftId === '1624' || nftId === '8325' ||
nftId === '317' || nftId === '6371' || nftId === '8281' || nftId === '3165' ||
nftId === '7109' || nftId === '9404' || nftId === '5594' || nftId === '4151' ||
nftId === '4093' || nftId === '2279' || nftId === '2773' || nftId === '3511' ||
nftId === '4003' || nftId === '9887' || nftId === '7239' || nftId === '3236' ||
nftId === '7781' || nftId === '8466' || nftId === '9847' || nftId === '6450' ||
nftId === '3316' || nftId === '1511' || nftId === '4823' || nftId === '9883' ||
nftId === '8429' || nftId === '8690' || nftId === '5514' || nftId === '7767' ||
nftId === '7246' || nftId === '7092' || nftId === '6698' || nftId === '4264' ||
nftId === '1140' || nftId === '597' || nftId === '650' || nftId === '8019' ||
nftId === '5861' || nftId === '8867' || nftId === '7438' || nftId === '7496' ||
nftId === '4165' || nftId === '8383' || nftId === '5012' || nftId === '801' ||
nftId === '8036' || nftId === '6674' || nftId === '7483' || nftId === '736' ||
nftId === '5916' || nftId === '3681' || nftId === '8864' || nftId === '6116' ||
nftId === '9959' || nftId === '7641' || nftId === '7379' || nftId === '660' ||
nftId === '6500' || nftId === '4013' || nftId === '7031' || nftId === '7180' ||
nftId === '9863' || nftId === '999' || nftId === '8209' || nftId === '1475' ||
nftId === '6666' || nftId === '5015' || nftId === '5062' || nftId === '7774' ||
nftId === '5648' || nftId === '2774' || nftId === '915' || nftId === '690' ||
nftId === '1450' || nftId === '8679' || nftId === '7036' || nftId === '3833' ||
nftId === '7757' || nftId === '790' || nftId === '5090' || nftId === '4010' ||
nftId === '6923' || nftId === '7044' || nftId === '4868' || nftId === '3910' ||
nftId === '2044' || nftId === '3025' || nftId === '5063' || nftId === '5940' ||
nftId === '3884' || nftId === '2110' || nftId === '7490' || nftId === '6545' ||
nftId === '2062' || nftId === '4402' || nftId === '8293' || nftId === '6270' ||
nftId === '4954' || nftId === '4160' || nftId === '6776' || nftId === '1945' ||
nftId === '6570' || nftId === '5237' || nftId === '8870' || nftId === '7669' ||
nftId === '307' || nftId === '3035' || nftId === '4081' || nftId === '64' ||
nftId === '6845' || nftId === '6996' || nftId === '6513' || nftId === '3726' ||
nftId === '6284' || nftId === '4359' || nftId === '767' || nftId === '6546' ||
nftId === '6377' || nftId === '6255' || nftId === '9491' || nftId === '3679' ||
nftId === '1477' || nftId === '5314' || nftId === '2366' || nftId === '1152' ||
nftId === '1908' || nftId === '3871' || nftId === '1041' || nftId === '3551' ||
nftId === '2287' || nftId === '2652' || nftId === '2499' || nftId === '16' ||
nftId === '1867' || nftId === '8556' || nftId === '8308' || nftId === '8100' ||
nftId === '7530' || nftId === '5289' || nftId === '8009' || nftId === '2942' ||
nftId === '902' || nftId === '6365' || nftId === '8324' || nftId === '8091' ||
nftId === '5558' || nftId === '5400' || nftId === '2731' || nftId === '6505' ||
nftId === '611' || nftId === '8089' || nftId === '5600' || nftId === '132' ||
nftId === '3760' || nftId === '2830' || nftId === '6704' || nftId === '9480' ||
nftId === '1278' || nftId === '9666' || nftId === '1561' || nftId === '2286' ||
nftId === '6717' || nftId === '3963' || nftId === '6076' || nftId === '5339' ||
nftId === '2123' || nftId === '7805' || nftId === '7357' || nftId === '2690' ||
nftId === '3155' || nftId === '2644' || nftId === '1666' || nftId === '6947' ||
nftId === '81' || nftId === '3909' || nftId === '9310' || nftId === '7453' ||
nftId === '7838' || nftId === '1493' || nftId === '3172' || nftId === '1596'
) {  // Add DMT
  
    const dmtGmCupOption = document.createElement('option');
    dmtGmCupOption.value = layerImageUrls[10]; // Assuming Gold layer URL is the first in the array
    dmtGmCupOption.textContent = customLayerNames[10]; // Assuming Gold layer name is the first in the array
    layerDropdown.appendChild(dmtGmCupOption);

    const dmtShotOption = document.createElement('option');
    dmtShotOption.value = layerImageUrls[11]; // Assuming Shot layer URL is the second in the array
    dmtShotOption.textContent = customLayerNames[11]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(dmtShotOption);

    const dmtBottleOption = document.createElement('option');
    dmtBottleOption.value = layerImageUrls[43]; // Assuming Shot layer URL is the second in the array
    dmtBottleOption.textContent = customLayerNames[43]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(dmtBottleOption);

    const dmtBeerOption = document.createElement('option');
    dmtBeerOption.value = layerImageUrls[62]; // Assuming Shot layer URL is the second in the array
    dmtBeerOption.textContent = customLayerNames[62]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(dmtBeerOption);

    const pizzaOption = document.createElement('option');
    pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
    pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(pizzaOption);

    const ledgerOption = document.createElement('option');
    ledgerOption.value = layerImageUrls[82]; // Assuming Shot layer URL is the second in the array
    ledgerOption.textContent = customLayerNames[82]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(ledgerOption);
  }
if (
  nftId === '9279' || nftId === '6683' || nftId === '4730' || nftId === '1976' ||
  nftId === '4097' || nftId === '2924' || nftId === '9501' || nftId === '4470' ||
  nftId === '6619' || nftId === '2354' || nftId === '3702' || nftId === '2231' ||
  nftId === '3501' || nftId === '1814' || nftId === '5018' || nftId === '9697' ||
  nftId === '203' || nftId === '225' || nftId === '406' || nftId === '9181' ||
  nftId === '3703' || nftId === '7159' || nftId === '1857' || nftId === '5500' ||
  nftId === '3471' || nftId === '6651' || nftId === '6459' || nftId === '3211' ||
  nftId === '4849' || nftId === '25' || nftId === '515' || nftId === '3536' ||
  nftId === '4067' || nftId === '8873' || nftId === '8113' || nftId === '9964' ||
  nftId === '465' || nftId === '4367' || nftId === '6693' || nftId === '158' ||
  nftId === '5717' || nftId === '8904' || nftId === '1573' || nftId === '2133' ||
  nftId === '1541' || nftId === '1300' || nftId === '8345' || nftId === '2394' ||
  nftId === '9446' || nftId === '3899' || nftId === '6349' || nftId === '6515' ||
  nftId === '6679' || nftId === '311' || nftId === '2768' || nftId === '3221' ||
  nftId === '3713' || nftId === '6096' || nftId === '4960' || nftId === '8205' ||
  nftId === '4085' || nftId === '9906' || nftId === '7843' || nftId === '318' ||
  nftId === '8337' || nftId === '6341' || nftId === '7747' || nftId === '5746' ||
  nftId === '8313' || nftId === '4170' || nftId === '5525' || nftId === '5591' ||
  nftId === '7734' || nftId === '2997' || nftId === '5926' || nftId === '6218' ||
  nftId === '1228' || nftId === '9642' || nftId === '480' || nftId === '2646' ||
  nftId === '8006' || nftId === '1941' || nftId === '9242' || nftId === '9339' ||
  nftId === '4790' || nftId === '6832' || nftId === '8230' || nftId === '7609' ||
  nftId === '1209' || nftId === '1406' || nftId === '9149' || nftId === '804' ||
  nftId === '9888' || nftId === '3071' || nftId === '3122' || nftId === '7105' ||
  nftId === '9211' || nftId === '2975' || nftId === '2078' || nftId === '8207' ||
  nftId === '9388' || nftId === '450' || nftId === '5670' || nftId === '3954' ||
  nftId === '1093' || nftId === '1800' || nftId === '7136' || nftId === '3915' ||
  nftId === '5938' || nftId === '7676' || nftId === '1969' || nftId === '9215' ||
  nftId === '5936' || nftId === '8366' || nftId === '3387' || nftId === '1017' ||
  nftId === '6158' || nftId === '6193' || nftId === '1327' || nftId === '4441' ||
  nftId === '1985' || nftId === '6524' || nftId === '4713' || nftId === '8812' ||
  nftId === '5604' || nftId === '3874' || nftId === '8197' || nftId === '5611' ||
  nftId === '4819' || nftId === '4907' || nftId === '9047' || nftId === '1866' ||
  nftId === '2028' || nftId === '8627' || nftId === '5378' || nftId === '8250' ||
  nftId === '2289' || nftId === '7814' || nftId === '1113' || nftId === '5205' ||
  nftId === '7009' || nftId === '1297' || nftId === '7878' || nftId === '247' ||
  nftId === '3922' || nftId === '5614' || nftId === '7735' || nftId === '9055' ||
  nftId === '1589' || nftId === '9807' || nftId === '8899' || nftId === '2562' ||
  nftId === '3195' || nftId === '3946' || nftId === '618' || nftId === '7940' ||
  nftId === '2514' || nftId === '56' || nftId === '1738' || nftId === '1185' ||
  nftId === '5710' || nftId === '9488' || nftId === '8353' || nftId === '7844' ||
  nftId === '5477' || nftId === '6373' || nftId === '6044' || nftId === '6390' ||
  nftId === '1775' || nftId === '2730' || nftId === '4773' || nftId === '9763' ||
  nftId === '5120' || nftId === '4358' || nftId === '9730' || nftId === '9051' ||
  nftId === '7799' || nftId === '1852' || nftId === '9874' || nftId === '1746' ||
  nftId === '162' || nftId === '5202' || nftId === '8768' || nftId === '7040' ||
  nftId === '2739' || nftId === '5072' || nftId === '3638' || nftId === '3323' ||
  nftId === '906' || nftId === '8180' || nftId === '3275' || nftId === '5263' ||
  nftId === '2215' || nftId === '8238' || nftId === '3654' || nftId === '8198' ||
  nftId === '502' || nftId === '6738' || nftId === '9415' || nftId === '118' ||
  nftId === '8903' || nftId === '3580' || nftId === '1790' || nftId === '1315' ||
  nftId === '1283' || nftId === '8260' || nftId === '350' || nftId === '6022' ||
  nftId === '2248' || nftId === '6590' || nftId === '7749' || nftId === '3562' ||
  nftId === '2223' || nftId === '7110' || nftId === '4743' || nftId === '5309' ||
  nftId === '3128' || nftId === '649' || nftId === '5418' || nftId === '8538' ||
  nftId === '633' || nftId === '5987' || nftId === '5480' || nftId === '4060' ||
  nftId === '9197' || nftId === '3570' || nftId === '7586' || nftId === '1098' ||
  nftId === '3905'
) {   // Add Death bot
    //\
    const deathGmCupOption = document.createElement('option');
    deathGmCupOption.value = layerImageUrls[12]; // Assuming Gold layer URL is the first in the array
    deathGmCupOption.textContent = customLayerNames[12]; // Assuming Gold layer name is the first in the array
    layerDropdown.appendChild(deathGmCupOption);

    const deathShotOption = document.createElement('option');
    deathShotOption.value = layerImageUrls[13]; // Assuming Shot layer URL is the second in the array
    deathShotOption.textContent = customLayerNames[13]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(deathShotOption);

    const deathBottleOption = document.createElement('option');
    deathBottleOption.value = layerImageUrls[44]; // Assuming Shot layer URL is the second in the array
    deathBottleOption.textContent = customLayerNames[44]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(deathBottleOption);

    const deathBeerOption = document.createElement('option');
    deathBeerOption.value = layerImageUrls[63]; // Assuming Shot layer URL is the second in the array
    deathBeerOption.textContent = customLayerNames[63]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(deathBeerOption);

    const pizzaOption = document.createElement('option');
    pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
    pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(pizzaOption);

    const ledgerOption = document.createElement('option');
    ledgerOption.value = layerImageUrls[83]; // Assuming Shot layer URL is the second in the array
    ledgerOption.textContent = customLayerNames[83]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(ledgerOption);
  }
  if (nftId === '3525' || nftId === '1781' || nftId === '2871' || nftId === '5559' ||
  nftId === '4282' || nftId === '1958' || nftId === '4788' || nftId === '8445' ||
  nftId === '4697' || nftId === '8251' || nftId === '9295' || nftId === '3174' ||
  nftId === '4578' || nftId === '858' || nftId === '363' || nftId === '98' ||
  nftId === '5067' || nftId === '8647' || nftId === '5562' || nftId === '5044' ||
  nftId === '343' || nftId === '762' || nftId === '2079' || nftId === '4341' ||
  nftId === '9244' || nftId === '5692' || nftId === '7388' || nftId === '4420' ||
  nftId === '4848' || nftId === '6855' || nftId === '1810' || nftId === '5825' ||
  nftId === '738' || nftId === '8506' || nftId === '1895' || nftId === '484' ||
  nftId === '2119' || nftId === '5644' || nftId === '6626' || nftId === '7670' ||
  nftId === '920' || nftId === '8402' || nftId === '4895' || nftId === '1422' ||
  nftId === '7171' || nftId === '1474' || nftId === '3990' || nftId === '4163' ||
  nftId === '1849' || nftId === '8336' || nftId === '5894' || nftId === '9400' ||
  nftId === '8447' || nftId === '5810' || nftId === '7276' || nftId === '7064' ||
  nftId === '2705' || nftId === '1664' || nftId === '5118' || nftId === '3233' ||
  nftId === '5939' || nftId === '5771' || nftId === '3724' || nftId === '9723' ||
  nftId === '2622' || nftId === '6011' || nftId === '9221' || nftId === '3686' ||
  nftId === '2523' || nftId === '581' || nftId === '641' || nftId === '2601' ||
  nftId === '9971' || nftId === '4658' || nftId === '6823' || nftId === '6348' ||
  nftId === '7565' || nftId === '8562' || nftId === '2919' || nftId === '7946' ||
  nftId === '1635' || nftId === '963' || nftId === '2302' || nftId === '6020' ||
  nftId === '2127' || nftId === '5599' || nftId === '3983' || nftId === '607' ||
  nftId === '6757' || nftId === '5398' || nftId === '9490' || nftId === '8971' ||
  nftId === '1365' || nftId === '1733' || nftId === '6432' || nftId === '5581' ||
  nftId === '2679' || nftId === '7340' || nftId === '3634' || nftId === '6449' ||
  nftId === '7947' || nftId === '900' || nftId === '1356' || nftId === '1451' ||
  nftId === '7035' || nftId === '6535' || nftId === '3790' || nftId === '6088' ||
  nftId === '6181' || nftId === '5251' || nftId === '4812' || nftId === '7537' ||
  nftId === '6455' || nftId === '6408' || nftId === '2559' || nftId === '1060' ||
  nftId === '9170' || nftId === '8520' || nftId === '2687' || nftId === '1080' ||
  nftId === '4290' || nftId === '7366' || nftId === '1888' || nftId === '3822' ||
  nftId === '2882' || nftId === '7712' || nftId === '90' || nftId === '4997' ||
  nftId === '970' || nftId === '8896' || nftId === '3404' || nftId === '4885' ||
  nftId === '330' || nftId === '1897' || nftId === '3184' || nftId === '2993' ||
  nftId === '5229' || nftId === '6267' || nftId === '9396' || nftId === '4771' ||
  nftId === '6009' || nftId === '2285' || nftId === '9614' || nftId === '4982' ||
  nftId === '2240' || nftId === '7862' || nftId === '4551' || nftId === '577' ||
  nftId === '4388' || nftId === '3055' || nftId === '5867' || nftId === '1568' ||
  nftId === '7086' || nftId === '1204' || nftId === '9522' || nftId === '2603' ||
  nftId === '3661' || nftId === '1090' || nftId === '7828' || nftId === '6520' ||
  nftId === '1126' || nftId === '5668' || nftId === '5881' || nftId === '1466' ||
  nftId === '4289' || nftId === '2916' || nftId === '131' || nftId === '6387' ||
  nftId === '8612' || nftId === '598' || nftId === '1042' || nftId === '7322' ||
  nftId === '5978' || nftId === '1008' || nftId === '4589' || nftId === '9039' ||
  nftId === '3295' || nftId === '3635' || nftId === '931' || nftId === '5108' ||
  nftId === '4734' || nftId === '4330' || nftId === '5575' || nftId === '1485' ||
  nftId === '3460' || nftId === '1631' || nftId === '2861' || nftId === '9057' ||
  nftId === '1608' || nftId === '4824' || nftId === '5615' || nftId === '9618' ||
  nftId === '2241' || nftId === '6576' || nftId === '3759' || nftId === '5025' ||
  nftId === '434' || nftId === '4718' || nftId === '7772' || nftId === '1963' ||
  nftId === '1807' || nftId === '3755' || nftId === '7446' || nftId === '8386' ||
  nftId === '8655' || nftId === '4705' || nftId === '40' || nftId === '4475' ||
  nftId === '8643' || nftId === '8133' || nftId === '6993' || nftId === '8736' ||
  nftId === '1885' || nftId === '3472' || nftId === '9854' || nftId === '7051' ||
  nftId === '1489' || nftId === '7614' || nftId === '928' || nftId === '1795' ||
  nftId === '5805' || nftId === '3026' || nftId === '6486' || nftId === '3081' ||
  nftId === '9147' || nftId === '76' || nftId === '6443' || nftId === '4227' ||
  nftId === '752' || nftId === '2891' || nftId === '6677' || nftId === '3521' ||
  nftId === '1818' || nftId === '1103' || nftId === '5719' || nftId === '9006' ||
  nftId === '4682' || nftId === '9084' || nftId === '7488' || nftId === '3197' ||
  nftId === '2147' || nftId === '1082' || nftId === '453' || nftId === '3036' ||
  nftId === '933' || nftId === '3480' || nftId === '1264' || nftId === '3504' ||
  nftId === '1681' || nftId === '2880' || nftId === '7228' || nftId === '3033' ||
  nftId === '8809' || nftId === '5779' || nftId === '34' || nftId === '6032' ||
  nftId === '5873' || nftId === '3496' || nftId === '9604' || nftId === '2265' ||
  nftId === '6058' || nftId === '9734' || nftId === '9108' || nftId === '5051' ||
  nftId === '9720' || nftId === '9534' || nftId === '6775' || nftId === '7859' ||
  nftId === '2990' || nftId === '3593' || nftId === '3077' || nftId === '823' ||
  nftId === '124' || nftId === '6263' || nftId === '4945' || nftId === '1724' ||
  nftId === '4059' || nftId === '2217' || nftId === '9307' || nftId === '8564' ||
  nftId === '7663' || nftId === '7097' || nftId === '8645' || nftId === '1873' ||
  nftId === '7509' || nftId === '295' || nftId === '6756' || nftId === '413' ||
  nftId === '2699' || nftId === '5691' || nftId === '8671' || nftId === '841' ||
  nftId === '8287' || nftId === '415' || nftId === '2691' || nftId === '6023' ||
  nftId === '1217' || nftId === '9272' || nftId === '7512' || nftId === '7722' ||
  nftId === '2632' || nftId === '9076' || nftId === '3264' || nftId === '5807' ||
  nftId === '9506' || nftId === '2427' || nftId === '4338' || nftId === '609' ||
  nftId === '7525' || nftId === '8828' || nftId === '765' || nftId === '7406' ||
  nftId === '9886' || nftId === '8443' || nftId === '6323' || nftId === '6824' ||
  nftId === '9601' || nftId === '5270' || nftId === '19' || nftId === '6898' ||
  nftId === '7602' || nftId === '7415' || nftId === '472' || nftId === '1171' ||
  nftId === '9715' || nftId === '820' || nftId === '5905' || nftId === '8716' ||
  nftId === '9877' || nftId === '4992' || nftId === '4856' || nftId === '6136'|| nftId === '4601' || nftId === '3671' || nftId === '4944' || nftId === '9592' ||
  nftId === '5091' || nftId === '3037' || nftId === '1399' || nftId === '5172' ||
  nftId === '9166' || nftId === '5607' || nftId === '2915' || nftId === '9973' ||
  nftId === '8421' || nftId === '216' || nftId === '310' || nftId === '7067' ||
  nftId === '3916' || nftId === '501' || nftId === '6029' || nftId === '5163' ||
  nftId === '2982' || nftId === '3590' || nftId === '919' || nftId === '9041' ||
  nftId === '7651' || nftId === '5536' || nftId === '1273' || nftId === '3433' ||
  nftId === '4626' || nftId === '142' || nftId === '9695' || nftId === '7242' ||
  nftId === '6382' || nftId === '3603' || nftId === '8387' || nftId === '9331'
)  { // Add Zombie
  
  const zombieGmCupOption = document.createElement('option');
  zombieGmCupOption.value = layerImageUrls[14]; // Assuming Gold layer URL is the first in the array
  zombieGmCupOption.textContent = customLayerNames[14]; // Assuming Gold layer name is the first in the array
  layerDropdown.appendChild(zombieGmCupOption);

  const zombieShotOption = document.createElement('option');
  zombieShotOption.value = layerImageUrls[15]; // Assuming Shot layer URL is the second in the array
  zombieShotOption.textContent = customLayerNames[15]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(zombieShotOption);

  const zombieBottleOption = document.createElement('option');
  zombieBottleOption.value = layerImageUrls[45]; // Assuming Shot layer URL is the second in the array
  zombieBottleOption.textContent = customLayerNames[45]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(zombieBottleOption);

  const zombieBeerOption = document.createElement('option');
  zombieBeerOption.value = layerImageUrls[64]; // Assuming Shot layer URL is the second in the array
  zombieBeerOption.textContent = customLayerNames[64]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(zombieBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[84]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[84]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
if (nftId === '1111'|| nftId === '5112'|| nftId === '1354'|| nftId === '2109'|| nftId === '1248'|| nftId === '2892'|| nftId === '348'
|| nftId === '1891'|| nftId === '3283'|| nftId === '4095'|| nftId === '442'|| nftId === '3250'|| nftId === '5843'|| nftId === '1249'
|| nftId === '2253'|| nftId === '569'|| nftId === '1322'|| nftId === '3473'|| nftId === '1323'|| nftId === '1605'|| nftId === '3308'
|| nftId === '1920'|| nftId === '391'|| nftId === '534'|| nftId === '763'|| nftId === '1793'|| nftId === '4180'|| nftId === '669'
|| nftId === '560'|| nftId === '4675'|| nftId === '3064'|| nftId === '5365'|| nftId === '2054'|| nftId === '436'|| nftId === '4664'
|| nftId === '4735'|| nftId === '2554'|| nftId === '1812'|| nftId === '1775'|| nftId === '2882'|| nftId === '1140'|| nftId === '2008'
|| nftId === '4759'|| nftId === '1066'|| nftId === '3103'|| nftId === '1701'|| nftId === '1471'|| nftId === '2949'|| nftId === '3904'
|| nftId === '2987'|| nftId === '954'|| nftId === '4016'|| nftId === '3920'|| nftId === '4873'|| nftId === '5512'|| nftId === '1114'
|| nftId === '3870'|| nftId === '4925'|| nftId === '5475'|| nftId === '301'|| nftId === '1719'|| nftId === '387'|| nftId === '2309'
|| nftId === '5086'|| nftId === '3360'|| nftId === '1298'|| nftId === '1171'|| nftId === '543'|| nftId === '4415'|| nftId === '1474'
|| nftId === '812'|| nftId === '753'|| nftId === '4093'|| nftId === '696'|| nftId === '4598'|| nftId === '5435'|| nftId === '5849'
|| nftId === '5633'|| nftId === '5376'|| nftId === '1361'|| nftId === '617'|| nftId === '1762'|| nftId === '4229'|| nftId === '5759'
|| nftId === '4895'|| nftId === '48'|| nftId === '4152'|| nftId === '5151'|| nftId === '2672'|| nftId === '5817'|| nftId === '2208'
|| nftId === '5678'|| nftId === '1828'|| nftId === '120'|| nftId === '2266'|| nftId === '5774'|| nftId === '5246'|| nftId === '5335'
|| nftId === '4821'|| nftId === '4617'|| nftId === '1089'|| nftId === '3118'|| nftId === '1064'|| nftId === '701'|| nftId === '326'
|| nftId === '3212'|| nftId === '453'|| nftId === '1700'|| nftId === '1401'|| nftId === '1671'|| nftId === '1530'|| nftId === '5551'
|| nftId === '1551'|| nftId === '308'|| nftId === '5174'|| nftId === '2961'|| nftId === '1041'|| nftId === '3731'|| nftId === '1607'
|| nftId === '528'|| nftId === '1265'|| nftId === '2977'|| nftId === '2763'|| nftId === '1175'|| nftId === '4554'|| nftId === '1030'
|| nftId === '306'|| nftId === '1260'|| nftId === '2520'|| nftId === '2270'|| nftId === '5214'|| nftId === '3983'|| nftId === '1504'
|| nftId === '2534'|| nftId === '1252'|| nftId === '5920'|| nftId === '3172'|| nftId === '889'|| nftId === '1415'|| nftId === '893'
|| nftId === '1303'|| nftId === '3408'|| nftId === '5300'|| nftId === '4756'|| nftId === '3174'|| nftId === '5926'|| nftId === '4294'
|| nftId === '756'|| nftId === '1630'|| nftId === '209'|| nftId === '2382'|| nftId === '5440'|| nftId === '1247'|| nftId === '4079'
|| nftId === '1357'|| nftId === '3410'|| nftId === '3191'|| nftId === '1028'|| nftId === '5513'|| nftId === '5872'|| nftId === '1535'
|| nftId === '3632'|| nftId === '3483'|| nftId === '4018'|| nftId === '4592'|| nftId === '4845'|| nftId === '1139'|| nftId === '1810'
|| nftId === '1811'|| nftId === '5682'|| nftId === '244'|| nftId === '2446'|| nftId === '186'|| nftId === '1993'|| nftId === '4504'
|| nftId === '4888'|| nftId === '1563'|| nftId === '674'|| nftId === '3439'|| nftId === '4881'|| nftId === '3601'|| nftId === '5215'
|| nftId === '2617'|| nftId === '3240'|| nftId === '515'|| nftId === '1922'|| nftId === '459'|| nftId === '1307'|| nftId === '700'
|| nftId === '3597'|| nftId === '2832'|| nftId === '1084'|| nftId === '240'|| nftId === '656'|| nftId === '5548'|| nftId === '2458'
|| nftId === '118'|| nftId === '5754'|| nftId === '3651'|| nftId === '3194'|| nftId === '4704'|| nftId === '416'|| nftId === '4288'
|| nftId === '2206'|| nftId === '4505'|| nftId === '5908'|| nftId === '3844'|| nftId === '5605'|| nftId === '3969'|| nftId === '2199'
|| nftId === '5245'|| nftId === '2365'|| nftId === '3776'|| nftId === '2917'|| nftId === '3129'|| nftId === '3497'|| nftId === '4073'
|| nftId === '182'|| nftId === '4529'|| nftId === '1240'|| nftId === '987'|| nftId === '3779'|| nftId === '2965'|| nftId === '1930'
|| nftId === '1733'|| nftId === '101') { // Add White 

  const whiteGmCupOption = document.createElement('option');
whiteGmCupOption.value = layerImageUrls[16]; // Assuming Gold layer URL is the first in the array
whiteGmCupOption.textContent = customLayerNames[16]; // Assuming Gold layer name is the first in the array
layerDropdown.appendChild(whiteGmCupOption);

const whiteShotOption = document.createElement('option');
whiteShotOption.value = layerImageUrls[17]; // Assuming Shot layer URL is the second in the array
whiteShotOption.textContent = customLayerNames[17]; // Assuming Shot layer name is the second in the array
layerDropdown.appendChild(whiteShotOption);

const whiteBottleOption = document.createElement('option');
whiteBottleOption.value = layerImageUrls[46]; // Assuming Shot layer URL is the second in the array
whiteBottleOption.textContent = customLayerNames[46]; // Assuming Shot layer name is the second in the array
layerDropdown.appendChild(whiteBottleOption);

const whiteBeerOption = document.createElement('option');
whiteBeerOption.value = layerImageUrls[65]; // Assuming Shot layer URL is the second in the array
whiteBeerOption.textContent = customLayerNames[65]; // Assuming Shot layer name is the second in the array
layerDropdown.appendChild(whiteBeerOption);

const pizzaOption = document.createElement('option');
pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
layerDropdown.appendChild(pizzaOption);

const ledgerOption = document.createElement('option');
ledgerOption.value = layerImageUrls[85]; // Assuming Shot layer URL is the second in the array
ledgerOption.textContent = customLayerNames[85]; // Assuming Shot layer name is the second in the array
layerDropdown.appendChild(ledgerOption);
}
if ( nftId === '3966'|| nftId === '2172'|| nftId === '4959'|| nftId === '2248'|| nftId === '2284'|| nftId === '4315'|| nftId === '273'
|| nftId === '4441'|| nftId === '1545'|| nftId === '5563'|| nftId === '4125'|| nftId === '3105'|| nftId === '4641'|| nftId === '1025'|| nftId === '811'
|| nftId === '3831'|| nftId === '4349'|| nftId === '1164'|| nftId === '339'|| nftId === '4250'|| nftId === '353'|| nftId === '5688'|| nftId === '601'
|| nftId === '3063'|| nftId === '2404'|| nftId === '670'|| nftId === '355'|| nftId === '3741'|| nftId === '87'|| nftId === '1020'|| nftId === '1767'
|| nftId === '4491'|| nftId === '3255'|| nftId === '1121'|| nftId === '4104'|| nftId === '3098'|| nftId === '2421'|| nftId === '1816'|| nftId === '1523'
|| nftId === '3313'|| nftId === '4928'|| nftId === '3955'|| nftId === '4164'|| nftId === '3862'|| nftId === '5282'|| nftId === '3493'|| nftId === '2219'
|| nftId === '4023'|| nftId === '3074'|| nftId === '1076'|| nftId === '796'|| nftId === '219'|| nftId === '1177'|| nftId === '1510'|| nftId === '3533'
|| nftId === '2165'|| nftId === '826'|| nftId === '5277'|| nftId === '2234'|| nftId === '5964'|| nftId === '4724'|| nftId === '3794'|| nftId === '28'
|| nftId === '3564'|| nftId === '3937'|| nftId === '2000'|| nftId === '5898'|| nftId === '3780'|| nftId === '3940'|| nftId === '5488'|| nftId === '5369'
|| nftId === '2592'|| nftId === '3754'|| nftId === '4088'|| nftId === '481'|| nftId === '991'|| nftId === '5638'|| nftId === '1683'|| nftId === '1841'
|| nftId === '635'|| nftId === '631'|| nftId === '3663'|| nftId === '5791'|| nftId === '4300'|| nftId === '479'|| nftId === '2797'|| nftId === '1231'
|| nftId === '2591'|| nftId === '1803'|| nftId === '500'|| nftId === '3496'|| nftId === '1057'|| nftId === '5534'|| nftId === '3296'|| nftId === '5766'
|| nftId === '2220'|| nftId === '4891'|| nftId === '5549'|| nftId === '3881'|| nftId === '4770'|| nftId === '3622'|| nftId === '1344'|| nftId === '2888'
|| nftId === '3411'|| nftId === '374'|| nftId === '4692'|| nftId === '3504'|| nftId === '4819'|| nftId === '2376'|| nftId === '5387'|| nftId === '765'
|| nftId === '4084'|| nftId === '3165'|| nftId === '5382'|| nftId === '5516'|| nftId === '5981'|| nftId === '3357'|| nftId === '3941'|| nftId === '1742'
|| nftId === '5714'|| nftId === '1095'|| nftId === '2316'|| nftId === '5929'|| nftId === '4281'|| nftId === '3070'|| nftId === '1058'|| nftId === '1655'
|| nftId === '904'|| nftId === '4584'|| nftId === '4968'|| nftId === '1023'|| nftId === '1040'|| nftId === '4140'|| nftId === '789'|| nftId === '2748'
|| nftId === '469'|| nftId === '4509'|| nftId === '4443'|| nftId === '2064'|| nftId === '315'|| nftId === '3978'|| nftId === '3241'|| nftId === '5095'
|| nftId === '4559'|| nftId === '5487'|| nftId === '2394'|| nftId === '3436'|| nftId === '4074'|| nftId === '2120'|| nftId === '3732'|| nftId === '2891'
|| nftId === '1146'|| nftId === '4571'|| nftId === '5765'|| nftId === '511'|| nftId === '5463'|| nftId === '3156'|| nftId === '5962'|| nftId === '4521'
|| nftId === '5045'|| nftId === '2980'|| nftId === '2205'|| nftId === '5737'|| nftId === '4240'|| nftId === '4062'|| nftId === '2914'|| nftId === '1317'
|| nftId === '1246'|| nftId === '1117'|| nftId === '2694'|| nftId === '480'|| nftId === '5523'|| nftId === '4780'|| nftId === '4539'|| nftId === '165'
|| nftId === '3830'|| nftId === '4375'|| nftId === '771'|| nftId === '1685'|| nftId === '5888'|| nftId === '4179'|| nftId === '4520'|| nftId === '1351'
|| nftId === '4534'|| nftId === '4236'|| nftId === '2294'|| nftId === '5427'|| nftId === '2693'|| nftId === '2'|| nftId === '1191'|| nftId === '5370'
|| nftId === '2866'|| nftId === '4190'|| nftId === '5356'|| nftId === '190'|| nftId === '4779'|| nftId === '3083'|| nftId === '2542'|| nftId === '2656'
|| nftId === '2768'|| nftId === '2567'|| nftId === '783'|| nftId === '2086'|| nftId === '5196'|| nftId === '5579'|| nftId === '1672'|| nftId === '5653'
|| nftId === '613'|| nftId === '757'|| nftId === '2151'|| nftId === '5084'|| nftId === '3409'|| nftId === '5306'|| nftId === '5478'|| nftId === '4353'
|| nftId === '5863'|| nftId === '2671'|| nftId === '2066'|| nftId === '2259'|| nftId === '1709'|| nftId === '3819'|| nftId === '2336'|| nftId === '3924'
|| nftId === '1448'|| nftId === '84'|| nftId === '5927'|| nftId === '5263'|| nftId === '2019'|| nftId === '1528'|| nftId === '461'|| nftId === '5576'
|| nftId === '1425'|| nftId === '5948'|| nftId === '1575'|| nftId === '2911'|| nftId === '1616'|| nftId === '699'|| nftId === '3614'|| nftId === '4167'
|| nftId === '4916'|| nftId === '3471'|| nftId === '5136'|| nftId === '894'|| nftId === '3351'|| nftId === '337'|| nftId === '56'|| nftId === '3189'
|| nftId === '2360'|| nftId === '5495'|| nftId === '1659'|| nftId === '1022'|| nftId === '157'|| nftId === '4035'|| nftId === '64'|| nftId === '5359'
|| nftId === '3378'|| nftId === '1752'|| nftId === '3591'|| nftId === '3872'|| nftId === '5971'|| nftId === '5121'|| nftId === '82'|| nftId === '5050'
|| nftId === '4159'|| nftId === '5119'|| nftId === '5299'|| nftId === '1500'|| nftId === '3246'|| nftId === '5670'|| nftId === '5426'|| nftId === '4126'
|| nftId === '4741'|| nftId === '972'|| nftId === '1166'|| nftId === '3803'|| nftId === '815'|| nftId === '860'|| nftId === '5494'|| nftId === '3572'
|| nftId === '4360'|| nftId === '628'|| nftId === '4619'|| nftId === '3936'|| nftId === '3187'|| nftId === '3841'|| nftId === '3910'|| nftId === '92'
|| nftId === '1435'|| nftId === '1063'|| nftId === '46'|| nftId === '2887'|| nftId === '5627'|| nftId === '1730'|| nftId === '3555'|| nftId === '2678'
|| nftId === '5860'|| nftId === '1840'|| nftId === '3448'|| nftId === '2582'|| nftId === '2323'|| nftId === '1311'|| nftId === '241'|| nftId === '156'
|| nftId === '3847'|| nftId === '692'|| nftId === '5812'|| nftId === '5309'|| nftId === '3942'|| nftId === '3704'|| nftId === '2123'|| nftId === '661'
|| nftId === '5217'|| nftId === '2792'|| nftId === '2313'|| nftId === '592'|| nftId === '5416'|| nftId === '1321'|| nftId === '5395'|| nftId === '108'
|| nftId === '1259'|| nftId === '191'|| nftId === '4206'|| nftId === '352'|| nftId === '3285'|| nftId === '2046'|| nftId === '3521'|| nftId === '4646'
|| nftId === '5296'|| nftId === '898'|| nftId === '2164'|| nftId === '2710'|| nftId === '1562'|| nftId === '600'|| nftId === '3089'|| nftId === '4002'
|| nftId === '5507'|| nftId === '2809'|| nftId === '694'|| nftId === '1609'|| nftId === '4209'|| nftId === '1079'|| nftId === '4695'|| nftId === '1280'
|| nftId === '3417'|| nftId === '4437'|| nftId === '3833'|| nftId === '4661'|| nftId === '2396'|| nftId === '426'|| nftId === '114'|| nftId === '5410'
|| nftId === '4358'|| nftId === '3801'|| nftId === '2036'|| nftId === '3539'|| nftId === '5693'|| nftId === '3542'|| nftId === '5436'|| nftId === '2830'
|| nftId === '3340'|| nftId === '2516'|| nftId === '5958'|| nftId === '2833'|| nftId === '4904'|| nftId === '1936'|| nftId === '1954'|| nftId === '1713'
|| nftId === '5841'|| nftId === '4410'|| nftId === '5046'|| nftId === '720'|| nftId === '1027'|| nftId === '1923'|| nftId === '405'|| nftId === '2301'
|| nftId === '3152'|| nftId === '1044'|| nftId === '1150'|| nftId === '3236'|| nftId === '3033'|| nftId === '318'|| nftId === '2486'|| nftId === '5275'
|| nftId === '5289'|| nftId === '5068'|| nftId === '598'|| nftId === '5552'|| nftId === '3144'|| nftId === '1466'|| nftId === '5477'|| nftId === '4256'
|| nftId === '2246'|| nftId === '4545'|| nftId === '2504'|| nftId === '3949'|| nftId === '2102'|| nftId === '11'|| nftId === '829'|| nftId === '2148'
|| nftId === '4372'|| nftId === '3726'|| nftId === '466'|| nftId === '579'|| nftId === '247'|| nftId === '4784'|| nftId === '2574'|| nftId === '2346'
|| nftId === '4653'|| nftId === '574'|| nftId === '4263'|| nftId === '4577'|| nftId === '4635'|| nftId === '5789'|| nftId === '1572'|| nftId === '2308'
|| nftId === '385'|| nftId === '5626'|| nftId === '3510'|| nftId === '4004'|| nftId === '3834'|| nftId === '1118'|| nftId === '3413'|| nftId === '3012'
|| nftId === '2555'|| nftId === '3957'|| nftId === '1202'|| nftId === '546'|| nftId === '5216'|| nftId === '529'|| nftId === '188'|| nftId === '2401'
|| nftId === '4365'|| nftId === '2415'|| nftId === '1582'|| nftId === '2425'|| nftId === '1394'|| nftId === '181'|| nftId === '5976'|| nftId === '1381'
|| nftId === '457'|| nftId === '3923'|| nftId === '3193'|| nftId === '167'|| nftId === '4557'|| nftId === '2566'|| nftId === '440'|| nftId === '5071'
|| nftId === '711'|| nftId === '2362'|| nftId === '2742'|| nftId === '3709'|| nftId === '5247'|| nftId === '4009'|| nftId === '2261'|| nftId === '4285'
|| nftId === '5047'|| nftId === '5932'|| nftId === '4746'|| nftId === '325'|| nftId === '74'|| nftId === '2850'|| nftId === '2991'|| nftId === '4406'
|| nftId === '3115'|| nftId === '286'|| nftId === '3119'|| nftId === '5601'|| nftId === '430'|| nftId === '4930'|| nftId === '1613'|| nftId === '4564'
|| nftId === '840'|| nftId === '4889'|| nftId === '1170'|| nftId === '5381'|| nftId === '4846'|| nftId === '4211'|| nftId === '2196'|| nftId === '4105'
|| nftId === '1768'|| nftId === '4761'|| nftId === '5753'|| nftId === '5905'|| nftId === '3570'|| nftId === '1443'|| nftId === '2894'|| nftId === '1639'
|| nftId === '361'|| nftId === '3108'|| nftId === '3578'|| nftId === '2661'|| nftId === '4813'|| nftId === '5640'|| nftId === '3718'|| nftId === '1458'
|| nftId === '714'|| nftId === '2325'|| nftId === '1503'|| nftId === '4533'|| nftId === '2652'|| nftId === '2272'|| nftId === '3259'|| nftId === '5742'
|| nftId === '5230'|| nftId === '1649'|| nftId === '5896'|| nftId === '3548'|| nftId === '5347'|| nftId === '4286'|| nftId === '2819'|| nftId === '3371'
|| nftId === '3117'|| nftId === '3252'|| nftId === '4951'|| nftId === '5899'|| nftId === '4381'|| nftId === '3085'|| nftId === '1452'|| nftId === '1970'
|| nftId === '959'|| nftId === '759'|| nftId === '4107'|| nftId === '854'|| nftId === '4139'|| nftId === '3505'|| nftId === '4948'|| nftId === '3684'
|| nftId === '2631'|| nftId === '1823'|| nftId === '5983'|| nftId === '4654'|| nftId === '2837'|| nftId === '4921'|| nftId === '2198'|| nftId === '5116'
|| nftId === '4911'|| nftId === '1573'|| nftId === '1825'|| nftId === '3102'|| nftId === '5177'|| nftId === '1009'|| nftId === '1847'|| nftId === '4461'
|| nftId === '5833'|| nftId === '1520'|| nftId === '5859'|| nftId === '4987'|| nftId === '3600'|| nftId === '766'|| nftId === '187'|| nftId === '5550'
|| nftId === '3142'|| nftId === '5854'|| nftId === '3850'|| nftId === '2114'|| nftId === '1242'|| nftId === '3702'|| nftId === '5062'|| nftId === '2912'
|| nftId === '1591'|| nftId === '4532'|| nftId === '1113'|| nftId === '5459'|| nftId === '2056'|| nftId === '2773'|| nftId === '1646'|| nftId === '2714'
|| nftId === '201'|| nftId === '2193'|| nftId === '1566'|| nftId === '1796'|| nftId === '784'|| nftId === '3888'|| nftId === '2361'|| nftId === '3078'
|| nftId === '3052'|| nftId === '4184'|| nftId === '2556'|| nftId === '512'|| nftId === '330'|| nftId === '117'|| nftId === '3703'|| nftId === '4078'
|| nftId === '2174'|| nftId === '566'|| nftId === '1184'|| nftId === '1553'|| nftId === '2900'|| nftId === '5941'|| nftId === '2290'|| nftId === '283'
|| nftId === '1343'|| nftId === '663'|| nftId === '1388'|| nftId === '236'|| nftId === '4681'|| nftId === '1996'|| nftId === '5979'|| nftId === '2572'
|| nftId === '3297'|| nftId === '1977'|| nftId === '5937'|| nftId === '1283'|| nftId === '1143'|| nftId === '377'|| nftId === '3315'|| nftId === '5385'
|| nftId === '2338'|| nftId === '4647'|| nftId === '769'|| nftId === '485'|| nftId === '259'|| nftId === '4195'|| nftId === '4371'|| nftId === '3845'
|| nftId === '4115'|| nftId === '2583'|| nftId === '2077'|| nftId === '4563'|| nftId === '3547'|| nftId === '899'|| nftId === '3234'|| nftId === '5491'
|| nftId === '2880'|| nftId === '5619'|| nftId === '2786'|| nftId === '5455'|| nftId === '4124'|| nftId === '1667'|| nftId === '3140'|| nftId === '1632'
|| nftId === '953'|| nftId === '1697'|| nftId === '3179'|| nftId === '2055'|| nftId === '5284'|| nftId === '1592'|| nftId === '5871'|| nftId === '5893'
|| nftId === '2846'|| nftId === '4991'|| nftId === '5186'|| nftId === '307'|| nftId === '3757'|| nftId === '5314'|| nftId === '1291'|| nftId === '4046'
|| nftId === '5707'|| nftId === '5107'|| nftId === '5809'|| nftId === '4351'|| nftId === '5120'|| nftId === '4189'|| nftId === '4874'|| nftId === '5458'
|| nftId === '3274'|| nftId === '4939'|| nftId === '2947'|| nftId === '3188'|| nftId === '2161'|| nftId === '2770'|| nftId === '5953'|| nftId === '2037'
|| nftId === '1426'|| nftId === '3814'|| nftId === '142'|| nftId === '3892'|| nftId === '4751'|| nftId === '3810'|| nftId === '317'|| nftId === '4252'
|| nftId === '5248'|| nftId === '946'|| nftId === '1564'|| nftId === '5724'|| nftId === '3852'|| nftId === '3045'|| nftId === '432'|| nftId === '5069'
|| nftId === '1664'|| nftId === '1451'|| nftId === '5380'|| nftId === '2546'|| nftId === '4690'|| nftId === '271'|| nftId === '2669'|| nftId === '4830'
|| nftId === '1743'|| nftId === '3403'|| nftId === '1241'|| nftId === '2963'|| nftId === '5821'|| nftId === '5490'|| nftId === '3067'|| nftId === '1122'
|| nftId === '4335'|| nftId === '1965'|| nftId === '3185'|| nftId === '4880'|| nftId === '414'|| nftId === '1065'|| nftId === '4345'|| nftId === '5712'
|| nftId === '5320'|| nftId === '1475'|| nftId === '4370'|| nftId === '5618'|| nftId === '2602'|| nftId === '5051'|| nftId === '3804'|| nftId === '2076'
|| nftId === '658'|| nftId === '795'|| nftId === '3391'|| nftId === '5111'|| nftId === '23'|| nftId === '1159'|| nftId === '2475'|| nftId === '4227'
|| nftId === '3057'|| nftId === '595'|| nftId === '4249'|| nftId === '4458'|| nftId === '2129'|| nftId === '1512'|| nftId === '5461'|| nftId === '963'
|| nftId === '3956'|| nftId === '967'|| nftId === '2022'|| nftId === '3688'|| nftId === '1315'|| nftId === '4797'|| nftId === '4583'|| nftId === '78'
|| nftId === '5007'|| nftId === '847'|| nftId === '2143'|| nftId === '1524'|| nftId === '5175'|| nftId === '2755'|| nftId === '278'|| nftId === '5814'
|| nftId === '5517'|| nftId === '1428'|| nftId === '272'|| nftId === '1681'|| nftId === '3228'|| nftId === '4292'|| nftId === '1931'|| nftId === '2480'
|| nftId === '2118'|| nftId === '4728'|| nftId === '2483'|| nftId === '456'|| nftId === '3864'|| nftId === '3624'|| nftId === '4964'|| nftId === '1277'
|| nftId === '1295'|| nftId === '805'|| nftId === '1846'|| nftId === '684'|| nftId === '1182') { // Add Brown
    
  
  const brownGmCupOption = document.createElement('option');
    brownGmCupOption.value = layerImageUrls[18]; // Assuming Gold layer URL is the first in the array
    brownGmCupOption.textContent = customLayerNames[18]; // Assuming Gold layer name is the first in the array
    layerDropdown.appendChild(brownGmCupOption);

    const brownShotOption = document.createElement('option');
    brownShotOption.value = layerImageUrls[19]; // Assuming Shot layer URL is the second in the array
    brownShotOption.textContent = customLayerNames[19]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(brownShotOption);

    const brownBottletOption = document.createElement('option');
    brownBottletOption.value = layerImageUrls[47]; // Assuming Shot layer URL is the second in the array
    brownBottletOption.textContent = customLayerNames[47]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(brownBottletOption);

    const brownBeerOption = document.createElement('option');
    brownBeerOption.value = layerImageUrls[66]; // Assuming Shot layer URL is the second in the array
    brownBeerOption.textContent = customLayerNames[66]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(brownBeerOption);

    const pizzaOption = document.createElement('option');
    pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
    pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(pizzaOption);

    const ledgerOption = document.createElement('option');
    ledgerOption.value = layerImageUrls[86]; // Assuming Shot layer URL is the second in the array
    ledgerOption.textContent = customLayerNames[86]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(ledgerOption);
  }
  const redId = [7, 25, 35, 38, 49, 69, 132, 213, 226, 246, 254, 289, 316, 329, 331, 332, 333, 334, 372, 380, 403, 422, 460, 470, 475, 483, 498, 499, 520, 527, 568, 578, 636, 644, 680, 705, 721, 760, 801, 845, 849, 864, 881, 911, 943, 951, 957, 976, 983, 990, 1011, 1050, 1073, 1108, 1112, 1125, 1142, 1153, 1179, 1194, 1224, 1236, 1294, 1301, 1329, 1360, 1405, 1412, 1413, 1427, 1456, 1463, 1478, 1483, 1485, 1529, 1587, 1590, 1600, 1618, 1633, 1636, 1642, 1652, 1666, 1692, 1714, 1723, 1736, 1756, 1787, 1815, 1843, 1860, 1879, 1882, 1885, 1912, 1929, 2004, 2060, 2069, 2097, 2136, 2141, 2163, 2175, 2216, 2238, 2260, 2275, 2298, 2310, 2326, 2330, 2357, 2391, 2423, 2442, 2455, 2476, 2479, 2491, 2502, 2510, 2529, 2549, 2597, 2605, 2675, 2718, 2730, 2737, 2738, 2774, 2795, 2804, 2817, 2825, 2840, 2843, 2856, 2867, 2886, 2933, 2934, 2936, 2944, 2948, 2962, 2978, 3000, 3015, 3021, 3027, 3053, 3056, 3069, 3092, 3104, 3120, 3122, 3149, 3150, 3176, 3177, 3219, 3245, 3253, 3261, 3270, 3294, 3298, 3316, 3327, 3334, 3359, 3373, 3376, 3383, 3390, 3418, 3437, 3462, 3463, 3491, 3500, 3507, 3509, 3549, 3560, 3592, 3616, 3634, 3638, 3721, 3738, 3747, 3773, 3789, 3806, 3821, 3886, 3889, 3944, 3976, 3990, 4021, 4051, 4067, 4083, 4085, 4111, 4134, 4160, 4166, 4198, 4207, 4216, 4225, 4237, 4251, 4254, 4266, 4302, 4318, 4394, 4409, 4433, 4442, 4465, 4482, 4487, 4489, 4527, 4530, 4550, 4569, 4570, 4582, 4593, 4607, 4679, 4689, 4705, 4723, 4742, 4754, 4782, 4828, 4835, 4864, 4866, 4876, 4901, 4931, 4997, 5008, 5034, 5041, 5042, 5093, 5110, 5125, 5127, 5160, 5162, 5165, 5185, 5205, 5208, 5234, 5238, 5274, 5292, 5317, 5323, 5334, 5340, 5377, 5379, 5393, 5413, 5433, 5443, 5448, 5456, 5472, 5506, 5525, 5540, 5546, 5592, 5612, 5616, 5622, 5624, 5667, 5671, 5691, 5746, 5752, 5761, 5776, 5834, 5870, 5875, 5878, 5890, 5900, 5907, 5914, 5923, 5966, 5970];

  if (redId.includes(parseInt(nftId))) {
    const redOption = document.createElement('option');
    redOption.value = layerImageUrls[20];
    redOption.textContent = customLayerNames[20];
    layerDropdown.appendChild(redOption);
  
    const redShotOption = document.createElement('option');
    redShotOption.value = layerImageUrls[21];
    redShotOption.textContent = customLayerNames[21];
    layerDropdown.appendChild(redShotOption);

    const redBottleOption = document.createElement('option');
    redBottleOption.value = layerImageUrls[48];
    redBottleOption.textContent = customLayerNames[48];
    layerDropdown.appendChild(redBottleOption);

    const redBeerOption = document.createElement('option');
    redBeerOption.value = layerImageUrls[67];
    redBeerOption.textContent = customLayerNames[67];
    layerDropdown.appendChild(redBeerOption);

    const pizzaOption = document.createElement('option');
    pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
    pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(pizzaOption);

    const ledgerOption = document.createElement('option');
    ledgerOption.value = layerImageUrls[87]; // Assuming Shot layer URL is the second in the array
    ledgerOption.textContent = customLayerNames[87]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(ledgerOption);
  }
  const blackId = [3, 8, 12, 15, 36, 37, 51, 52, 53, 57, 59, 62, 63, 71, 72, 80, 91, 106, 123, 125, 127, 130, 147, 152, 158, 170, 189, 198, 211, 212, 224, 229, 235, 252, 265, 266, 267, 284, 303, 309, 335, 349, 351, 356, 359, 368, 371, 373, 383, 393, 408, 410, 452, 454, 463, 464, 473, 489, 490, 491, 495, 496, 508, 518, 544, 550, 563, 586, 593, 594, 608, 614, 616, 618, 624, 638, 672, 677, 681, 682, 685, 689, 702, 708, 709, 718, 726, 735, 761, 772, 793, 804, 810, 813, 816, 861, 882, 883, 884, 888, 892, 895, 900, 901, 908, 910, 914, 915, 934, 947, 949, 984, 993, 998, 1008, 1010, 1029, 1032, 1049, 1053, 1056, 1061, 1083, 1085, 1092, 1104, 1130, 1147, 1162, 1178, 1206, 1214, 1216, 1217, 1227, 1230, 1233, 1253, 1270, 1288, 1293, 1325, 1346, 1349, 1359, 1377, 1384, 1395, 1397, 1406, 1418, 1420, 1433, 1437, 1467, 1479, 1484, 1495, 1509, 1513, 1527, 1532, 1549, 1554, 1555, 1560, 1568, 1579, 1583, 1584, 1594, 1604, 1631, 1644, 1647, 1650, 1662, 1706, 1710, 1725, 1727, 1741, 1754, 1761, 1772, 1778, 1781, 1783, 1785, 1827, 1830, 1838, 1844, 1848, 1856, 1857, 1878, 1890, 1901, 1902, 1909, 1924, 1940, 1942, 1953, 1962, 1967, 1998, 2007, 2015, 2023, 2027, 2035, 2042, 2051, 2052, 2063, 2068, 2074, 2079, 2081, 2085, 2091, 2092, 2103, 2106, 2110, 2124, 2128, 2137, 2147, 2156, 2160, 2162, 2182, 2195, 2225, 2229, 2265, 2278, 2293, 2320, 2327, 2331, 2340, 2341, 2349, 2364, 2377, 2383, 2395, 2412, 2413, 2416, 2422, 2431, 2435, 2439, 2459, 2465, 2468, 2473, 2481, 2484, 2539, 2540, 2543, 2550, 2559, 2576, 2593, 2600, 2613, 2615, 2619, 2629, 2637, 2647, 2655, 2663, 2674, 2683, 2686, 2700, 2708, 2712, 2719, 2741, 2744, 2747, 2750, 2751, 2760, 2764, 2765, 2776, 2777, 2778, 2794, 2814, 2818, 2820, 2851, 2857, 2858, 2874, 2885, 2890, 2901, 2908, 2910, 2913, 2918, 2921, 2923, 2925, 2928, 2937, 2938, 2945, 2950, 2958, 2959, 2966, 2973, 2979, 2983, 2984, 3001, 3018, 3024, 3039, 3072, 3100, 3106, 3109, 3112, 3123, 3136, 3139, 3158, 3206, 3209, 3224, 3239, 3265, 3267, 3269, 3272, 3275, 3292, 3295, 3300, 3311, 3317, 3318, 3323, 3350, 3370, 3392, 3398, 3420, 3427, 3428, 3438, 3443, 3449, 3477, 3478, 3488, 3490, 3519, 3528, 3540, 3554, 3558, 3561, 3562, 3565, 3573, 3580, 3593, 3598, 3599, 3602, 3607, 3610, 3618, 3619, 3626, 3636, 3637, 3642, 3656, 3683, 3687, 3707, 3714, 3723, 3728, 3734, 3739, 3744, 3761, 3766, 3768, 3784, 3787, 3807, 3812, 3816, 3839, 3859, 3866, 3877, 3895, 3899, 3903, 3917, 3929, 3933, 3934, 3946, 3953, 3965, 3973, 3974, 3991, 4007, 4011, 4012, 4019, 4028, 4031, 4034, 4043, 4044, 4050, 4053, 4071, 4072, 4089, 4099, 4102, 4106, 4117, 4129, 4130, 4133, 4136, 4174, 4178, 4181, 4183, 4192, 4196, 4208, 4233, 4244, 4246, 4255, 4257, 4258, 4261, 4267, 4268, 4271, 4309, 4320, 4324, 4326, 4337, 4339, 4340, 4343, 4344, 4348, 4355, 4356, 4385, 4387, 4391, 4403, 4416, 4418, 4419, 4424, 4435, 4436, 4460, 4464, 4467, 4472, 4475, 4498, 4512, 4516, 4519, 4525, 4535, 4537, 4567, 4575, 4587, 4589, 4591, 4625, 4627, 4631, 4633, 4644, 4645, 4655, 4657, 4670, 4676, 4677, 4688, 4700, 4752, 4757, 4771, 4772, 4775, 4790, 4798, 4807, 4812, 4849, 4850, 4856, 4857, 4870, 4872, 4885, 4906, 4942, 4952, 4956, 4978, 4982, 4989, 4996, 5000, 5004, 5009, 5028, 5033, 5054, 5055, 5077, 5078, 5091, 5094, 5100, 5106, 5130, 5135, 5146, 5157, 5158, 5168, 5180, 5182, 5195, 5201, 5203, 5207, 5224, 5250, 5251, 5255, 5266, 5267, 5269, 5271, 5287, 5290, 5308, 5313, 5316, 5319, 5322, 5338, 5343, 5353, 5362, 5397, 5400, 5409, 5417, 5420, 5425, 5466, 5470, 5471, 5482, 5498, 5500, 5505, 5508, 5538, 5561, 5568, 5570, 5575, 5581, 5614, 5642, 5644, 5657, 5662, 5681, 5687, 5701, 5704, 5711, 5731, 5749, 5756, 5770, 5773, 5813, 5816, 5823, 5836, 5840, 5845, 5847, 5883, 5885, 5894, 5916, 5930, 5951, 5957, 5980, 5996];

if (blackId.includes(parseInt(nftId))) {
  const blackOption = document.createElement('option');
  blackOption.value = layerImageUrls[22];
  blackOption.textContent = customLayerNames[22];
  layerDropdown.appendChild(blackOption);

  const blackShotOption = document.createElement('option');
  blackShotOption.value = layerImageUrls[23];
  blackShotOption.textContent = customLayerNames[23];
  layerDropdown.appendChild(blackShotOption);
  
  const blackBottleOption = document.createElement('option');
  blackBottleOption.value = layerImageUrls[49];
  blackBottleOption.textContent = customLayerNames[49];
  layerDropdown.appendChild(blackBottleOption);

  const blackBeerOption = document.createElement('option');
  blackBeerOption.value = layerImageUrls[68];
  blackBeerOption.textContent = customLayerNames[68];
  layerDropdown.appendChild(blackBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[88]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[88]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
const pinkId = [ 7294, 1685, 3945, 6495, 7791, 6047, 2960, 5496, 7326, 105, 8342, 3631, 9970, 7045, 1954, 7581, 1325, 1918, 8471, 1403, 5383, 1764, 8762, 5228, 3575, 5377, 3394, 2274, 6965, 1426, 1430, 2715, 7117, 5248, 7449, 5912, 4244, 9225, 9776, 6715, 9705, 1974, 1924, 7807, 4311, 4850, 2902, 6941, 8887, 3835, 763, 8480, 8960, 58, 7299, 3369, 7213, 3045, 2454, 6366, 857, 3978, 8891, 5449, 1260, 2132, 2375, 5976, 6788, 4028, 8695, 3837, 5999, 313, 8806, 5963, 7949, 4484, 4208, 4270, 7101, 7688, 5208, 8056, 115, 7142, 8267, 9703, 7700, 8109, 6875, 988, 3820, 2771, 9844, 7151, 2373, 8130, 5711, 8857, 9914, 7882, 7301, 5432, 8372, 1783, 7815, 6708, 5351, 1739, 5773, 4784, 8497, 505, 669, 3384, 6242, 7412, 5402, 3423, 2436, 6880, 460, 9462, 1612, 1227, 5646, 9589, 1559, 4430, 6887, 2016, 5499, 4064, 1669, 2573, 2356, 2305, 1997, 2382, 2825, 1386, 184, 2586, 5846, 2598, 5220, 1290, 248, 1696, 197, 6135, 1955, 4294, 1948, 5064, 2057, 3203, 3339, 8622, 6404, 2211, 5406, 2786, 5068, 8603, 1049, 4751, 9599, 9487, 1894, 1026, 1257, 3185, 6402, 8829, 5013, 4012, 8968, 5829, 5958, 4720, 2037, 4750, 8349, 372, 2090, 2310, 8462, 280, 8951, 6571, 7585, 8016, 5126, 4780, 6656, 4860, 6707, 6929, 7202, 1062, 5995, 4099, 3431, 7387, 3022, 8998, 989, 9465, 7500, 8634, 6926, 1281, 4808, 2489, 5335, 4644, 1715, 2066, 5715, 980, 3907, 7008, 8068, 9475, 6772, 1670, 9996, 6773, 1896, 843, 3255, 5436, 4340, 3950, 2422, 1207, 1566, 4074, 7892, 7636, 684, 9124, 468, 601, 2606, 4567, 3479, 508, 6780, 829, 1851, 5028, 8846, 5566, 3325, 1396, 7480, 6453, 2818, 202, 2145, 4537, 5577, 2283, 8945, 4030, 854, 2627, 8906, 327, 6501, 3924, 7837, 6054, 1013, 3537, 1447, 2753, 233, 7683, 5093, 1547, 7143, 7797, 1122, 3287, 6049, 4757, 1528, 10, 3676, 4269, 1778, 6939, 5066, 9876, 4564, 6541, 3158, 7962, 1301, 7217, 9210, 9842, 5155, 2848, 7423, 9297, 367, 4103, 7356, 4645, 8750, 7689, 4213, 8021, 1019, 6944, 6002, 6601, 1, 9719, 366, 2424, 4233, 3733, 2967, 6638, 2466, 7093, 8235, 4513, 2403, 9878, 4603, 5531, 6825, 7666, 8818, 1071, 6820, 5116, 8552, 6283, 3897, 3858, 1491, 421, 8470, 4188, 6507, 9928, 3053, 5230, 6315, 1756, 3249, 8449, 7450, 4807, 8738, 5856, 2725, 4058, 6498, 9437, 8115, 945, 7690, 2545, 1132, 3038, 6145, 5070, 4031, 1533, 8859, 3991, 3099, 8702, 2204, 8954, 5325, 9639, 9123, 8779, 743, 6462, 2637, 8134, 4295, 7960, 6252, 4767, 1690, 5674, 6197, 4023, 7058, 6760, 5009, 1309, 6504, 3447, 3718, 8946, 5851, 5723, 5665, 4902, 3074, 9950, 6661, 3347, 2798, 1085, 524, 4465, 2698, 5683, 8370, 114, 8156, 8310, 1825, 3154, 2227, 4955, 1943, 1029, 1225, 8186, 3346, 3579, 9410, 1088, 339, 1454, 2426, 5872, 5493, 2269, 1299, 3015, 5223, 9365, 9901, 1158, 1831, 412, 640, 3577, 6488, 7801, 5, 5733, 130, 7982, 4509, 4835, 9551, 306, 739, 961, 9591, 6980, 8667, 6566, 9035, 4277, 3927, 9267, 6304, 1191, 1950, 3698, 6561, 210, 8266, 1718, 8500, 9981, 3948, 9750, 8279, 9373, 9515, 709, 8501, 4558, 4037]
if (pinkId.includes(parseInt(nftId))) {
  const pinkOption = document.createElement('option');
  pinkOption.value = layerImageUrls[24];
  pinkOption.textContent = customLayerNames[24];
  layerDropdown.appendChild(pinkOption);

  const pinkShotOption = document.createElement('option');
  pinkShotOption.value = layerImageUrls[25];
  pinkShotOption.textContent = customLayerNames[25];
  layerDropdown.appendChild(pinkShotOption);

  const pinkBottleOption = document.createElement('option');
  pinkBottleOption.value = layerImageUrls[50];
  pinkBottleOption.textContent = customLayerNames[50];
  layerDropdown.appendChild(pinkBottleOption);

  const pinkBeerOption = document.createElement('option');
  pinkBeerOption.value = layerImageUrls[69];
  pinkBeerOption.textContent = customLayerNames[69];
  layerDropdown.appendChild(pinkBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[89]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[89]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
const creamId = [761, 3961, 2529, 9879, 7222, 181, 2031, 127, 7694, 9747, 6036, 4342, 5410, 1889, 5827, 1838, 4017, 4693, 8855, 3709, 7383, 8066, 5864, 6686, 603, 6897, 9519, 550, 9577, 859, 967, 110, 2506, 7457, 6209, 726, 4467, 5632, 2980, 2922, 1522, 7132, 5098, 9288, 2812, 1691, 237, 4622, 9346, 4334, 1096, 7231, 4090, 926, 2351, 1007, 5623, 3707, 8895, 2077, 3613, 431, 6102, 882, 4938, 8344, 504, 4486, 3989, 4314, 9733, 5048, 8171, 3365, 4098, 5041, 5331, 2355, 2552, 4600, 35, 8756, 5262, 3875, 8473, 5484, 2440, 4301, 9674, 4691, 4777, 5642, 7884, 4238, 553, 1110, 8898, 5267, 6182, 361, 427, 2378, 9540, 6783, 1028, 1803, 8737, 5797, 5844, 5407, 418, 9811, 7034, 4302, 9572, 9209, 4641, 4396, 6502, 5569, 5287, 1289, 6942, 1482, 5865, 2838, 7429, 1123, 1860, 9768, 8088, 8755, 3625, 209, 1991, 8724, 3666, 9067, 8246, 5606, 8743, 299, 7806, 1880, 5781, 9661, 8144, 3130, 2083, 9304, 9238, 4588, 1465, 686, 565, 9633, 2023, 3167, 5803, 9380, 5678, 6815, 9972, 9442, 2230, 9596, 9765, 9774, 7654, 8997, 5313, 6086, 6834, 2701, 8516, 8776, 6808, 8794, 742, 7559, 1671, 1519, 3070, 3981, 6804, 2323, 9922, 4993, 8974, 2165, 6180, 166, 8983, 4253, 5274, 9629, 9199, 3532, 5306, 2792, 7320, 1180, 7896, 2912, 281, 9881, 2664, 9615, 441, 5758, 619, 4672, 5747, 6095, 4489, 3303, 4473, 1115, 2970, 6645, 2021, 6509, 2327, 5097, 4043, 1934, 9136, 5311, 5974, 5673, 3668, 6329, 1004, 9038, 2226, 7706, 6642, 4655, 8055, 9841, 6833, 8339, 9998, 7650, 9370, 837, 4447, 8685, 1966, 9340, 5117, 7628, 2315, 8609, 6175, 5020, 6105, 1354, 1782, 2405, 9632, 9372, 959, 234, 4131, 2120, 407, 5516, 3620, 6370, 5891, 3062, 9152, 6924, 927, 5640, 8323, 7906, 6330, 231, 1282, 8852, 9265, 2178, 2098, 4272, 5941, 8149, 7393, 1956, 6687, 3513, 1194, 1409, 9320, 5189, 7684, 1316, 7338, 1435, 4909, 7255, 7364, 1105, 6668, 4167, 9478, 4287, 853, 6033, 6953, 627, 2359, 2677, 4401, 6747, 7570, 8334, 8270, 803, 6709, 314, 956, 4079, 9029, 3219, 2948, 8704, 4255, 2386, 7266, 6559, 3039, 6911, 1345, 9754, 5788, 2645, 9345, 894, 87, 7420, 7624, 9781, 7501, 6492, 4550, 9309, 9655, 5892, 8081, 720, 2802, 7580, 8567, 730, 4774, 97, 8067, 3305, 1138, 5630, 4789, 7953, 892, 7923, 8335, 3859, 1585, 1743, 2372, 4199, 8152, 5269, 2116, 2032, 6979, 4908, 4477, 4186, 1595, 593, 4638, 4016, 6381, 5470, 1296, 483, 2775, 5580, 8988, 4560, 7055, 4379, 3742, 5959, 5989, 2087, 5017, 2295, 4242, 9923, 5714, 4132, 6556, 9798, 4197, 9027, 3941, 2712, 8033, 7660, 3013, 8653, 456, 9526, 8161, 303, 7756, 5127, 2944, 1421, 9583, 6448, 4888, 2658, 6837, 3199, 6669, 9597, 9379, 3396, 5231, 3670, 8924, 2391, 1272, 8504, 1135, 7261, 7634, 9049, 9237, 1801, 1761, 8697, 9103, 4770, 6846, 5413, 969, 7068, 430, 6819, 7667, 7411, 6915, 1508, 948, 3204, 5464, 4278, 6069, 8398, 1878, 3527, 6318, 4958, 7779, 3506, 4254, 4225, 4488, 5221, 2608, 2262, 6863, 8000, 95, 9162, 6806, 3906, 3214, 4953, 7610, 2807, 6442, 8798, 3142, 8127, 3290, 7887, 4261, 5036, 7430, 6774, 9140, 1306, 9756, 8002, 616, 2303, 4271, 5942, 8433, 5096, 1564, 9178, 8507, 7147, 7428, 643, 768, 1656, 8034, 2207, 4069, 1077, 8984, 9100, 478, 8147, 9011, 481, 6438, 5617, 3572, 2643, 2374, 9949, 8834, 7391, 5138, 9582, 9976, 5081, 4727, 8481, 8183, 5857, 4660, 3614, 255, 2726, 6326, 1673, 2417, 4723, 232, 9192, 3779, 6081]
  if (creamId.includes(parseInt(nftId))) {
  const creamOption = document.createElement('option');
  creamOption.value = layerImageUrls[26];
  creamOption.textContent = customLayerNames[26];
  layerDropdown.appendChild(creamOption);

  const creamShotOption = document.createElement('option');
  creamShotOption.value = layerImageUrls[27];
  creamShotOption.textContent = customLayerNames[27];
  layerDropdown.appendChild(creamShotOption);

  const creamBottleOption = document.createElement('option');
  creamBottleOption.value = layerImageUrls[51];
  creamBottleOption.textContent = customLayerNames[51];
  layerDropdown.appendChild(creamBottleOption);

  const creamBeerOption = document.createElement('option');
  creamBeerOption.value = layerImageUrls[70];
  creamBeerOption.textContent = customLayerNames[70];
  layerDropdown.appendChild(creamBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[90]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[90]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

}
const blueId = [6,13,60,96,100,104,151,166,199,204,206,227,262,280,296,304,438,444,455,486,487,504,559,562,590,599,621,641,691,695,698,706,736,768,788,820,823,827,833,865,916,940,995,996,1019,1086,1100,1219,1223,1229,1238,1244,1255,1264,1275,1276,1287,1334,1356,1398,1419,1432,1482,1502,1514,1525,1534,1556,1565,1569,1597,1603,1621,1640,1651,1654,1656,1660,1669,1698,1766,1837,1921,1927,1934,1957,2016,2031,2067,2071,2080,2111,2116,2183,2189,2200,2213,2221,2254,2256,2264,2288,2339,2407,2462,2489,2498,2530,2535,2541,2551,2552,2557,2584,2598,2621,2626,2639,2667,2673,2685,2695,2703,2731,2788,2821,2823,2829,2905,2924,2954,2970,2985,3002,3030,3046,3099,3153,3159,3175,3196,3213,3214,3226,3243,3247,3260,3281,3291,3302,3303,3320,3325,3328,3331,3385,3394,3421,3424,3430,3453,3466,3475,3498,3567,3568,3584,3587,3608,3613,3615,3645,3670,3706,3712,3720,3769,3781,3795,3799,3811,3835,3840,3848,3958,3994,4001,4013,4033,4092,4100,4135,4144,4186,4188,4213,4215,4230,4235,4269,4289,4301,4305,4310,4316,4323,4334,4363,4377,4388,4430,4459,4462,4506,4513,4580,4585,4590,4615,4652,4658,4663,4673,4765,4774,4884,4947,5006,5022,5023,5038,5060,5070,5080,5123,5141,5148,5163,5176,5268,5270,5280,5288,5363,5411,5447,5449,5503,5514,5528,5535,5537,5574,5589,5597,5615,5620,5621,5647,5655,5715,5717,5729,5772,5781,5783,5797,5852,5861,5879,5881,5904,5922,5934,5940,5942,5960,5973,5977,5993,5995]
  if (blueId.includes(parseInt(nftId))) {
  const blueOption = document.createElement('option');
  blueOption.value = layerImageUrls[28];
  blueOption.textContent = customLayerNames[28];
  layerDropdown.appendChild(blueOption);

  const blueShotOption = document.createElement('option');
  blueShotOption.value = layerImageUrls[29];
  blueShotOption.textContent = customLayerNames[29];
  layerDropdown.appendChild(blueShotOption);

  const blueBottleOption = document.createElement('option');
  blueBottleOption.value = layerImageUrls[52];
  blueBottleOption.textContent = customLayerNames[52];
  layerDropdown.appendChild(blueBottleOption);

  const blueBeerOption = document.createElement('option');
  blueBeerOption.value = layerImageUrls[71];
  blueBeerOption.textContent = customLayerNames[71];
  layerDropdown.appendChild(blueBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[91]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[91]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
const greyId = [4,16,43,44,54,70,83,121,146,161,164,176,178,185,203,221,222,243,245,248,255,268,295,300,312,357,358,363,365,417,488,502,510,513,539,547,551,576,584,619,629,734,745,800,807,819,857,878,880,885,923,938,980,986,1001,1042,1072,1106,1109,1158,1169,1243,1262,1274,1299,1304,1318,1342,1400,1441,1447,1469,1480,1557,1559,1576,1581,1718,1739,1769,1788,1829,1845,1855,1905,1941,1951,1959,1992,2013,2075,2084,2095,2098,2121,2125,2139,2168,2171,2177,2184,2212,2243,2268,2277,2286,2287,2319,2322,2333,2409,2414,2420,2430,2448,2466,2472,2506,2563,2570,2573,2581,2608,2610,2624,2668,2676,2687,2723,2733,2766,2779,2785,2805,2808,2824,2835,2853,2861,2878,2902,2926,2927,2930,2931,2957,2981,3047,3146,3162,3173,3186,3201,3203,3216,3217,3278,3289,3309,3337,3352,3362,3369,3399,3432,3446,3485,3486,3487,3506,3550,3605,3612,3617,3630,3655,3697,3755,3764,3788,3790,3808,3824,3860,3871,3875,3908,3913,3938,3952,3979,3980,3996,4005,4029,4070,4086,4147,4149,4154,4155,4165,4193,4220,4278,4282,4290,4357,4369,4374,4383,4420,4457,4501,4536,4549,4612,4640,4642,4685,4703,4706,4713,4733,4744,4820,4822,4838,4841,4853,4875,4905,4923,4938,4945,4953,4963,4967,4970,4995,5002,5012,5061,5066,5067,5073,5118,5126,5134,5149,5164,5169,5189,5225,5235,5237,5278,5326,5348,5390,5428,5453,5468,5526,5536,5543,5573,5584,5595,5641,5645,5656,5669,5673,5684,5698,5708,5709,5739,5784,5796,5825,5857,5874,5884,5949,5986]
  if (greyId.includes(parseInt(nftId))) {
  const greyOption = document.createElement('option');
  greyOption.value = layerImageUrls[30];
  greyOption.textContent = customLayerNames[30];
  layerDropdown.appendChild(greyOption);

  const greyShotOption = document.createElement('option');
  greyShotOption.value = layerImageUrls[31];
  greyShotOption.textContent = customLayerNames[31];
  layerDropdown.appendChild(greyShotOption);

  const greyBottleOption = document.createElement('option');
  greyBottleOption.value = layerImageUrls[53];
  greyBottleOption.textContent = customLayerNames[53];
  layerDropdown.appendChild(greyBottleOption);

  const greyBeerOption = document.createElement('option');
  greyBeerOption.value = layerImageUrls[72];
  greyBeerOption.textContent = customLayerNames[72];
  layerDropdown.appendChild(greyBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[92]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[92]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
const darkBrownId = [0,14,18,26,31,47,107,122,131,133,137,154,160,163,193,202,205,210,217,220,228,232,256,258,263,269,275,277,285,292,310,319,321,342,343,347,370,384,397,402,413,420,424,431,441,451,458,468,477,478,494,503,523,525,532,540,556,561,577,580,583,591,597,606,615,620,622,623,627,640,651,653,666,667,671,679,683,707,713,724,729,740,742,747,755,764,777,780,782,787,799,822,828,830,832,870,872,874,896,903,905,909,925,927,930,937,945,958,969,970,974,975,982,1002,1003,1004,1005,1007,1012,1016,1018,1024,1035,1037,1051,1070,1091,1093,1098,1101,1116,1132,1134,1137,1138,1151,1155,1161,1168,1174,1193,1195,1198,1201,1208,1212,1215,1226,1228,1251,1271,1279,1281,1282,1286,1296,1308,1312,1327,1330,1331,1333,1345,1348,1350,1366,1369,1389,1392,1393,1407,1409,1410,1411,1430,1431,1434,1436,1440,1455,1468,1470,1481,1487,1491,1516,1518,1519,1531,1538,1552,1558,1574,1578,1595,1598,1599,1606,1608,1610,1620,1623,1634,1635,1637,1643,1648,1665,1668,1674,1690,1693,1694,1696,1699,1702,1708,1731,1737,1738,1740,1744,1747,1760,1782,1784,1790,1792,1801,1805,1806,1807,1808,1814,1818,1831,1842,1851,1871,1875,1877,1886,1888,1893,1903,1908,1910,1915,1925,1933,1938,1939,1946,1948,1952,1956,1964,1966,1972,1978,1981,1982,1984,1991,2002,2006,2010,2017,2020,2021,2024,2034,2040,2041,2059,2065,2096,2100,2104,2105,2112,2115,2127,2145,2146,2149,2150,2153,2155,2204,2222,2223,2227,2240,2241,2245,2251,2252,2257,2283,2291,2292,2296,2303,2304,2307,2311,2314,2318,2337,2352,2354,2355,2358,2368,2374,2389,2392,2427,2438,2440,2441,2443,2482,2487,2496,2505,2507,2511,2519,2521,2522,2527,2537,2548,2553,2558,2589,2590,2595,2614,2623,2632,2658,2660,2670,2677,2680,2688,2691,2702,2705,2711,2716,2724,2725,2729,2736,2740,2754,2769,2771,2787,2800,2803,2811,2834,2842,2859,2876,2883,2898,2907,2916,2935,2942,2953,2976,2989,2992,2998,3005,3010,3014,3017,3028,3043,3044,3049,3060,3061,3066,3068,3079,3084,3086,3094,3107,3116,3131,3137,3147,3167,3182,3200,3210,3242,3251,3258,3262,3264,3284,3288,3314,3335,3344,3347,3353,3356,3363,3368,3372,3375,3380,3388,3405,3423,3442,3445,3450,3455,3464,3470,3479,3480,3494,3501,3508,3511,3513,3514,3518,3524,3537,3543,3552,3553,3574,3575,3581,3583,3603,3620,3621,3631,3633,3639,3657,3664,3665,3667,3668,3669,3671,3674,3685,3692,3693,3694,3695,3724,3730,3735,3737,3751,3759,3771,3772,3777,3782,3783,3791,3796,3797,3800,3817,3823,3826,3829,3832,3838,3842,3843,3855,3857,3861,3878,3887,3893,3901,3925,3935,3948,3960,3961,3962,3967,3968,3989,4008,4014,4015,4017,4027,4045,4049,4056,4069,4076,4082,4110,4112,4113,4118,4125,4131,4141,4151,4161,4162,4170,4177,4187,4202,4204,4223,4224,4242,4248,4259,4260,4264,4270,4272,4274,4275,4279,4297,4299,4307,4308,4313,4319,4322,4327,4329,4330,4332,4333,4341,4350,4352,4362,4376,4378,4380,4382,4396,4397,4399,4404,4405,4411,4421,4426,4427,4431,4439,4447,4448,4463,4477,4480,4484,4492,4493,4494,4496,4508,4510,4514,4517,4531,4538,4544,4552,4561,4574,4594,4595,4597,4605,4608,4610,4614,4624,4629,4637,4648,4651,4662,4667,4668,4686,4691,4714,4715,4716,4727,4750,4763,4764,4766,4781,4792,4815,4826,4833,4855,4859,4860,4861,4862,4865,4871,4882,4883,4899,4900,4907,4917,4919,4922,4940,4943,4958,4960,4969,4976,4981,4986,4988,4994,4998,5001,5005,5013,5019,5020,5030,5031,5053,5058,5063,5065,5083,5098,5099,5122,5131,5138,5140,5147,5153,5159,5167,5171,5181,5193,5199,5219,5233,5236,5239,5252,5253,5256,5259,5261,5264,5286,5293,5302,5321,5331,5336,5337,5341,5344,5345,5349,5350,5354,5364,5366,5386,5388,5394,5399,5423,5432,5438,5445,5469,5474,5481,5492,5493,5502,5504,5515,5524,5529,5530,5553,5554,5557,5560,5562,5577,5580,5582,5586,5587,5596,5598,5610,5628,5646,5666,5675,5676,5685,5690,5695,5710,5716,5722,5727,5736,5738,5747,5751,5763,5771,5792,5799,5800,5801,5805,5806,5810,5818,5820,5824,5826,5831,5832,5835,5837,5838,5844,5850,5855,5856,5858,5862,5864,5876,5877,5906,5913,5917,5935,5936,5963,5965,5967,5969,5989]
  if (darkBrownId.includes(parseInt(nftId))) {
  const darkBrownOption = document.createElement('option');
  darkBrownOption.value = layerImageUrls[32];
  darkBrownOption.textContent = customLayerNames[32];
  layerDropdown.appendChild(darkBrownOption);

  const darkBrownShotOption = document.createElement('option');
  darkBrownShotOption.value = layerImageUrls[33];
  darkBrownShotOption.textContent = customLayerNames[33];
  layerDropdown.appendChild(darkBrownShotOption);

  const darkBrownBottleOption = document.createElement('option');
  darkBrownBottleOption.value = layerImageUrls[54];
  darkBrownBottleOption.textContent = customLayerNames[54];
  layerDropdown.appendChild(darkBrownBottleOption);

  const darkBrownBeerOption = document.createElement('option');
  darkBrownBeerOption.value = layerImageUrls[73];
  darkBrownBeerOption.textContent = customLayerNames[73];
  layerDropdown.appendChild(darkBrownBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[93]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[93]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
const goldenkBrownId = [5,24,34,40,58,65,68,79,90,98,99,102,103,113,126,128,135,139,171,175,179,194,200,233,238,281,297,305,311,346,376,395,399,411,437,439,472,476,507,522,524,545,552,564,587,596,610,626,637,642,645,647,650,652,654,655,662,688,710,725,727,728,730,731,749,767,773,781,806,808,842,844,850,858,887,913,920,924,960,964,978,989,994,1000,1026,1046,1059,1067,1068,1069,1078,1090,1126,1129,1135,1144,1148,1163,1172,1183,1197,1207,1213,1234,1245,1268,1272,1284,1297,1309,1324,1328,1365,1368,1371,1380,1391,1403,1417,1438,1453,1454,1461,1477,1488,1489,1490,1505,1536,1537,1548,1561,1577,1596,1612,1614,1615,1624,1675,1679,1686,1691,1721,1732,1745,1755,1764,1794,1799,1821,1849,1854,1876,1887,1896,1914,1916,1935,1944,1945,1949,1961,1990,1999,2030,2032,2039,2045,2070,2072,2073,2088,2090,2107,2108,2117,2134,2179,2188,2197,2202,2209,2211,2228,2230,2231,2249,2274,2285,2312,2321,2342,2363,2369,2398,2403,2410,2411,2428,2429,2444,2457,2463,2464,2470,2474,2478,2490,2493,2501,2512,2528,2538,2544,2545,2575,2607,2609,2612,2618,2645,2664,2682,2699,2704,2707,2784,2790,2801,2806,2822,2844,2847,2854,2855,2860,2881,2896,2940,2951,2952,2956,2960,2964,2968,2974,2975,2990,2995,2996,3026,3034,3036,3051,3059,3075,3076,3080,3082,3135,3143,3148,3192,3204,3222,3225,3237,3254,3257,3273,3312,3336,3364,3377,3402,3412,3414,3435,3441,3447,3452,3459,3476,3481,3515,3546,3556,3559,3589,3629,3635,3676,3678,3680,3700,3711,3713,3717,3745,3746,3758,3763,3774,3778,3786,3792,3813,3827,3858,3868,3898,3905,3911,3914,3916,3926,3930,3950,3971,3972,3981,3984,3988,4020,4037,4042,4048,4055,4061,4065,4081,4087,4090,4116,4127,4145,4169,4182,4194,4197,4228,4238,4243,4291,4303,4304,4321,4373,4379,4390,4398,4407,4408,4412,4429,4445,4446,4452,4455,4469,4518,4542,4551,4553,4565,4581,4596,4601,4609,4611,4618,4623,4634,4636,4656,4674,4701,4719,4748,4758,4767,4777,4785,4793,4809,4811,4816,4824,4829,4832,4842,4847,4854,4877,4890,4897,4898,4903,4913,4929,4937,4946,4954,4957,4962,4972,5016,5026,5032,5049,5052,5056,5059,5079,5081,5089,5090,5102,5113,5117,5145,5152,5191,5197,5200,5202,5206,5209,5210,5213,5221,5265,5279,5305,5329,5330,5339,5352,5355,5368,5392,5418,5419,5434,5484,5486,5501,5509,5510,5518,5521,5522,5527,5539,5542,5545,5569,5578,5594,5608,5629,5637,5649,5652,5658,5660,5674,5677,5694,5720,5725,5741,5743,5755,5762,5767,5768,5782,5785,5815,5822,5828,5830,5867,5869,5892,5901,5919,5924,5931,5938,5945,5954,5972,5974,5984,5998]
  if (goldenkBrownId.includes(parseInt(nftId))) {
  const goldenBrownOption = document.createElement('option');
  goldenBrownOption.value = layerImageUrls[34];
  goldenBrownOption.textContent = customLayerNames[34];
  layerDropdown.appendChild(goldenBrownOption);

  const goldenBrownShotOption = document.createElement('option');
  goldenBrownShotOption.value = layerImageUrls[35];
  goldenBrownShotOption.textContent = customLayerNames[35];
  layerDropdown.appendChild(goldenBrownShotOption);

  const goldenBrownBottleOption = document.createElement('option');
  goldenBrownBottleOption.value = layerImageUrls[55];
  goldenBrownBottleOption.textContent = customLayerNames[55];
  layerDropdown.appendChild(goldenBrownBottleOption);

  const goldenBrownBeerOption = document.createElement('option');
  goldenBrownBeerOption.value = layerImageUrls[74];
  goldenBrownBeerOption.textContent = customLayerNames[74];
  layerDropdown.appendChild(goldenBrownBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[94]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[94]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
const tanId = [10,30,33,39,85,94,109,116,129,155,196,225,230,234,290,294,298,320,324,328,341,378,388,429,433,435,467,493,501,526,533,538,554,565,571,585,605,625,634,639,648,657,659,660,665,673,676,712,733,738,750,803,824,837,843,855,866,867,873,921,928,929,935,941,948,950,961,971,973,1021,1062,1074,1082,1094,1141,1152,1156,1165,1167,1186,1190,1199,1209,1218,1273,1289,1314,1326,1335,1336,1339,1408,1446,1450,1464,1486,1542,1547,1570,1602,1617,1661,1673,1677,1684,1695,1711,1717,1724,1759,1780,1789,1804,1817,1833,1835,1850,1861,1862,1863,1868,1874,1889,1892,1900,1904,1955,1979,1980,1985,1986,1988,1989,2005,2025,2043,2049,2062,2140,2142,2169,2181,2185,2210,2214,2273,2305,2317,2347,2350,2356,2367,2370,2378,2397,2406,2408,2447,2450,2517,2525,2547,2565,2596,2665,2689,2701,2726,2732,2749,2802,2807,2815,2831,2839,2869,2967,2969,2971,2999,3009,3016,3019,3023,3040,3054,3081,3090,3096,3101,3128,3132,3141,3183,3184,3190,3207,3223,3244,3248,3256,3263,3266,3287,3307,3310,3339,3346,3349,3354,3396,3407,3416,3422,3433,3451,3457,3489,3525,3526,3531,3534,3551,3576,3582,3650,3681,3690,3740,3743,3752,3775,3815,3837,3856,3873,3874,3897,3931,3951,3959,3970,4003,4022,4041,4058,4066,4068,4075,4080,4114,4121,4122,4123,4143,4185,4191,4200,4205,4214,4226,4262,4325,4393,4400,4454,4474,4479,4481,4499,4523,4616,4620,4628,4632,4638,4660,4678,4712,4717,4722,4736,4755,4778,4786,4788,4795,4805,4810,4858,4863,4867,4887,4893,4896,4932,4933,4935,4944,4966,5021,5039,5044,5064,5075,5088,5101,5103,5104,5129,5179,5183,5211,5222,5228,5254,5262,5272,5281,5291,5294,5295,5325,5332,5346,5372,5412,5415,5441,5450,5520,5558,5590,5593,5604,5630,5631,5650,5651,5689,5721,5728,5732,5777,5779,5808,5811,5839,5846,5848,5865,5866,5868,5880,5882,5895,5939,5956,5982,5988]
  if (tanId.includes(parseInt(nftId))) {
  const tanOption = document.createElement('option');
  tanOption.value = layerImageUrls[36];
  tanOption.textContent = customLayerNames[36];
  layerDropdown.appendChild(tanOption);

  const tanShotOption = document.createElement('option');
  tanShotOption.value = layerImageUrls[37];
  tanShotOption.textContent = customLayerNames[37];
  layerDropdown.appendChild(tanShotOption);

  const tanBottleOption = document.createElement('option');
  tanBottleOption.value = layerImageUrls[56];
  tanBottleOption.textContent = customLayerNames[56];
  layerDropdown.appendChild(tanBottleOption);

  const tanBeerOption = document.createElement('option');
  tanBeerOption.value = layerImageUrls[75];
  tanBeerOption.textContent = customLayerNames[75];
  layerDropdown.appendChild(tanBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[95]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[95]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);
}
  layerDropdown.addEventListener('change', function() {
    const selectedLayerImageUrl = layerDropdown.value;
    selectLayer(selectedLayerImageUrl);
  });

  // Clear the existing dropdown list
  const existingDropdown = document.getElementById('layer-dropdown');
  if (existingDropdown) {
    existingDropdown.parentNode.remove();
  }

  dropdownContainer.appendChild(layerDropdown);
  const imageContainer = document.querySelector('.image-container');
  imageContainer.appendChild(dropdownContainer);
}

function selectLayer(imageUrl) {
  const nftContainer = document.getElementById('nftContainer');

  // Remove any existing layer overlay
  const existingOverlay = document.querySelector('.layer-overlay');
  if (existingOverlay) {
    nftContainer.removeChild(existingOverlay);
  }

  // Create a new layer overlay and append it to the nftContainer
  const layerOverlay = document.createElement('img');
  layerOverlay.src = imageUrl;
  layerOverlay.alt = 'Layer Overlay';

  // Apply the appropriate CSS class based on the layer image URL
  if (imageUrl === layerImageUrls[0]) {
    layerOverlay.classList.add('gm-cup-layer');
  } else if (imageUrl === layerImageUrls[1]) {
    layerOverlay.classList.add('brown-shot-layer');
  } else if (imageUrl === layerImageUrls[2]) {
    layerOverlay.classList.add('gm-cup-layer');
  } else if (imageUrl === layerImageUrls[3]) {
    layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[4]) {
  layerOverlay.classList.add('gm-cup-layer');
} else if (imageUrl === layerImageUrls[5]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[6]) {
  layerOverlay.classList.add('gm-cup-layer');
} else if (imageUrl === layerImageUrls[7]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[8]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[9]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[10]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[11]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[12]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[13]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[14]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[15]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[16]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[17]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[18]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[19]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[20]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[21]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[22]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[23]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[24]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[25]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[26]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[27]) {
  layerOverlay.classList.add('brown-shot-layer');
} else if (imageUrl === layerImageUrls[28]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[29]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[30]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[31]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[32]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[33]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[34]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[35]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[36]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
} else if (imageUrl === layerImageUrls[37]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[38]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[39]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[40]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[41]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[42]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[43]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[44]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[45]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[46]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[47]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[48]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[49]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[50]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[51]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[52]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[53]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[54]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[55]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[56]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[57]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[58]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[59]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[60]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[61]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[62]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[63]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[64]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[65]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[66]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[67]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[68]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[69]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[70]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[71]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[72]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[73]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[74]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[75]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[76]) {
  layerOverlay.classList.add('pizza');
}else if (imageUrl === layerImageUrls[77]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[78]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[79]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[80]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[81]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[82]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[83]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[84]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[85]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[86]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[87]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[88]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[89]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[90]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[91]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[92]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[93]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[94]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[95]) {
  layerOverlay.classList.add('ledger');
}


  layerOverlay.classList.add('layer-overlay');
  nftContainer.appendChild(layerOverlay);

  // Store the selected layer image URL
  selectedLayerImages.push(imageUrl);
}

  function mergeAndDownload() {
    const selectedLayerCount = selectedLayerImages.length;

    if (selectedLayerCount === 0) {
      alert('Please select a layer image');
      return;
    }

    const nftContainer = document.getElementById('nftContainer');

    // Create a canvas element
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Load the NFT image
    const nftImage = new Image();
    nftImage.crossOrigin = 'anonymous';
    const nftIdInput = document.getElementById('nftIdInput');
    const nftId = nftIdInput.value.trim();

    if (nftId === '') {
      alert('Please enter an NFT ID');
      return;
    }

    const nftImageUrl = `https://raw.githubusercontent.com/akh1lsol/Bascdao.net/main/v2/${adjustedNftId}.png`;

    nftImage.onload = function() {
      // Set the canvas size based on the larger dimension of the images
      const canvasSize = Math.max(nftImage.width, nftImage.height);
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      // Draw the NFT image onto the canvas, centered horizontally and at the bottom
      const nftX = (canvas.width - nftImage.width) / 2;
      const nftY = canvas.height - nftImage.height;
      ctx.drawImage(nftImage, nftX, nftY);

      if (selectedLayerCount > 0) {
        // Load and draw the selected layer image onto the canvas
        const layerImageUrl = selectedLayerImages[selectedLayerCount - 1];
        const layerImage = new Image();
        layerImage.crossOrigin = 'anonymous';
        layerImage.onload = function() {
          if (layerImageUrl === layerImageUrls[0]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[1]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[38]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[2]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[3]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[39]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[4]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[5]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[40]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[6]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[7]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[41]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[8]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[9]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[42]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[10]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[11]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[43]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[12]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[13]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[44]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[14]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[15]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[45]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          } else if (layerImageUrl === layerImageUrls[16]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[17]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[46]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[18]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[19]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[47]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[20]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[21]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[48]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[22]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[23]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[49]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[24]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[25]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[50]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[26]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[27]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[51]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[28]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[29]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[52]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[30]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[31]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[53]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[32]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[33]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[54]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[34]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[35]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[55]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[36]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width) / 2;
            const gmCupY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, gmCupX, gmCupY);
          } else if (layerImageUrl === layerImageUrls[37]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          } else if (layerImageUrl === layerImageUrls[56]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width - 150;
            const bottleY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, bottleX, bottleY);
          }else if (layerImageUrl === layerImageUrls[57]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[58]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[59]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[60]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[61]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[62]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[63]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[64]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[65]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[66]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[67]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[68]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[69]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[70]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[71]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[72]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[73]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[74]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[75]) {
            // Beer Layer
            const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const beerY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, beerX, beerY);
          }else if (layerImageUrl === layerImageUrls[76]) {
            // Pizza
            const pizzaX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const pizzaY = canvas.height - layerImage.height; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            ctx.drawImage(layerImage, pizzaX, pizzaY);
          }else if (layerImageUrl === layerImageUrls[77]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[78]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[79]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[80]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[81]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[82]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[83]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[84]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[85]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[86]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[87]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[88]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[89]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[90]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[91]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[92]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[93]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[94]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }else if (layerImageUrl === layerImageUrls[95]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width - 150;
            const shotY = canvas.height - layerImage.height;
            ctx.drawImage(layerImage, shotX, shotY);
          }
          
          // Other layers can be added here
          
          
          // Create a link element for downloading the merged image
          const link = document.createElement('a');
          link.href = canvas.toDataURL(); // Convert the canvas to a data URL
          link.download = 'merged_image.png'; // Set the filename for the downloaded image
          link.click(); // Trigger the download

          // Clean up
          URL.revokeObjectURL(link.href);
        };
        layerImage.onerror = function() {
          // Image failed to load, display error message
          alert('Failed to load layer image.');
        };
        layerImage.src = layerImageUrl;
      }
    };
    nftImage.onerror = function() {
      // Image failed to load, display error message
      alert('Failed to load NFT image.');
    };
    nftImage.src = nftImageUrl;
  }
