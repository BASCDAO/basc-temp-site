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
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Gold.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_NOISE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Noise.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_CORAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Corael.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_ROBO.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Robo.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_TRIPPY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Trippy.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_ILLUMINATI.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Illuminati.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM%20_DEATH_BOT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Death_bot.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_ZOMBIE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Zombie.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_WHITE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/White.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_COFFEE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Coffee.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_RED.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Red.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_BLACK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Black.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_PINK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Pink.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_CREAM.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Cream.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_CARAMEL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Caramel.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_GREY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Grey.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_CHARCOAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Charcoal.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_JUNGLE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Jungle.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_SAND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Sand.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/GOLD.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/NOISE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/CORAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/ROBO.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/TRIPPY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/ILLUMINATI.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/DEATHBOT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/ZOMBIE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/WHITE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/COFFEE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/RED.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/BLACK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/PINK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/CREAM.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/CARAMEL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/GREY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/CHARCOAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/JUNGLE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/SAND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Gold.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Noise.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Coral.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Robo.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Trippy.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Illuminati.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Deathbot.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Zombie.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/White.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Coffee.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Red.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Black.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Pink.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Cream.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Caramel.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Grey.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Charcoal.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Jungle.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Sand.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/pizza/pizza.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Gold.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Noise.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Coral.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Robo.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Trippy.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Illuminaty.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Deathbot.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Zombie.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/White.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Coffee.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Red.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Black.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Pink.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Sand.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Caramel.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Grey.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Charcoal.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Jungle.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Sand.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_DIAMOND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_SMIRF.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_SKELETON.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_YETY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_RADIOACTIVE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_LAVA.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcupv2/GM_WALNUT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Diamond.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Smirf.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Skeleton.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Yeti.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Radioactive.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Lava.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/shotsv2/Walnut.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/DIAMOND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/SMIRF.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/SKELETON.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/YETI.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/RADIOACTIVE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/LAVA.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/bottlev2/WALNUT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Diamond.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Smirf.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Skeleton.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Yeti.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Radioactive.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/LAva.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/beerv2/Walnut.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Diamond.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Smirf.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Skeleton.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Yeti.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Radioactive.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Lava.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/cigar/Walnut.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/taco/taco.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20GOLD.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20NOISE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20CORAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20ROBO.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20TRIPPI.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20ILLUMINATY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20DEATHBOT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20ZOMBIE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20WHITE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20COFFEE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20RED.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20BLACK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20PINK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20CREAM.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20CARAMEL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20GREY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20CHRACOAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20JUNGLE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20SAND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20DIAMOND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20SMIRF.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20SKELETON.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20YETTI.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20RADIOACTIVE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20LAVA.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2/HAND%20WALNUT.png',

  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20GOLD.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20NOISE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20CORAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20ROBO.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20TRIPPY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20ILLUMINATY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20DEATH%20BOT.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20ZOMBIE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20WHITE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20COFFEE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20RED.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20BLACK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20PINK.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20CREAM.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20CARAMEL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20GREY.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20CHROCOAL.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20JUNGLE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20SAND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20DIAMOND.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20SMIRF.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20SKELETON.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20YETI.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20RADIOACTIVE.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20LAVA.png',
  'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/handv2d/HAND2%20WALNUT.png',





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
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'GM Cup',
  'GM Cup',
  'GM Cup',
  'GM Cup',
  'GM Cup',
  'GM Cup',
  'GM Cup',
  'Shot',
  'Shot',
  'Shot',
  'Shot',
  'Shot',
  'Shot',
  'Shot',
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
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Cigar',
  'Taco',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Hand V2',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
  'Diamond Hands',
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

    const tacoOption = document.createElement('option');
    tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
    tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(tacoOption);

    const handv2Option = document.createElement('option');
    handv2Option.value = layerImageUrls[132]; // Assuming Shot layer URL is the second in the array
    handv2Option.textContent = customLayerNames[132]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(handv2Option);

    const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[158]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[158]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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

    const tacoOption = document.createElement('option');
    tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
    tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(tacoOption);

    const handv2Option = document.createElement('option');
    handv2Option.value = layerImageUrls[133]; // Assuming Shot layer URL is the second in the array
    handv2Option.textContent = customLayerNames[133]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(handv2Option);

    const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[159]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[159]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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
    //Coral v2
    
    const coralGmCupOption = document.createElement('option');
    coralGmCupOption.value = layerImageUrls[4]; // Assuming Noise GM Cup layer URL is the third in the array
    coralGmCupOption.textContent = customLayerNames[4]; // Assuming Noise GM Cup layer name is the third in the array
    layerDropdown.appendChild(coralGmCupOption);

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

    const tacoOption = document.createElement('option');
    tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
    tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(tacoOption);

    const handv2Option = document.createElement('option');
    handv2Option.value = layerImageUrls[134]; // Assuming Shot layer URL is the second in the array
    handv2Option.textContent = customLayerNames[134]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(handv2Option);

    const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[160]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[160]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
    handv2Option.value = layerImageUrls[135]; // Assuming Shot layer URL is the second in the array
    handv2Option.textContent = customLayerNames[135]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(handv2Option);

    const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[161]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[161]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const trippyId = [6539, 6745, 1192, 518, 6458, 9611, 8239, 5299, 1864, 8132, 1639, 7516, 4220, 4050, 3762, 8384, 148, 2557, 8826, 9771, 3060, 2574, 263, 9004, 3364, 7794, 6551, 2738, 1628, 4428, 5660, 862, 1094, 1730, 5415, 4990, 7087, 8588, 8486, 2772, 6522, 2311, 338, 7850, 4894, 2505, 5948, 7467, 6864, 1100, 7508, 1846, 6886, 8800, 5603, 8709, 3068, 6396, 2278, 9553, 3554, 3591, 3640, 1195, 9645, 2413, 5256, 7711, 365, 3750, 279, 3711, 3502, 1210, 3239, 5589, 323, 9801, 150, 5142, 462, 5983, 6616, 3042, 1069, 7227, 531, 3097, 3386, 5288, 5540, 7980, 4444, 3925, 5840, 7998, 2756, 3467, 5853, 8053, 5246, 523, 4632, 3468, 3783, 9198, 8682, 816, 5454, 9732, 6037, 4232, 9228, 1711, 3162, 1050, 5057, 336, 4581, 7644, 1213, 2666, 5300, 5180, 2141, 942, 8219, 5609, 9203, 9440, 4463, 9520, 1824];

  if (trippyId.includes(parseInt(nftId))) {
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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
    handv2Option.value = layerImageUrls[136]; // Assuming Shot layer URL is the second in the array
    handv2Option.textContent = customLayerNames[136]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(handv2Option);

    const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[162]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[162]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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

    const tacoOption = document.createElement('option');
    tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
    tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(tacoOption);

    const handv2Option = document.createElement('option');
    handv2Option.value = layerImageUrls[137]; // Assuming Shot layer URL is the second in the array
    handv2Option.textContent = customLayerNames[137]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(handv2Option);

    const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[163]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[163]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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

    const tacoOption = document.createElement('option');
    tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
    tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(tacoOption);

    const handv2Option = document.createElement('option');
    handv2Option.value = layerImageUrls[138]; // Assuming Shot layer URL is the second in the array
    handv2Option.textContent = customLayerNames[138]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(handv2Option);

    const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[164]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[164]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[139]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[139]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[165]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[165]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}

const whiteId = [8137, 6558, 3486, 7849, 3544, 9455, 8111, 7607, 3216, 9670, 3700, 7728, 2803, 590, 935, 674, 1580, 2026, 8931, 4882, 9375, 2009, 4763, 525, 9247, 3465, 2388, 5298, 4729, 5243, 2585, 3618, 5713, 9326, 9738, 9315, 6473, 9499, 5653, 3657, 8749, 8648, 3485, 6925, 6343, 422, 5901, 2834, 4624, 5555, 5329, 9975, 6230, 719, 7020, 2868, 8416, 5045, 1249, 3484, 4322, 3474, 2011, 8673, 7577, 9940, 2170, 4845, 377, 8159, 5249, 2724, 1549, 5359, 2879, 7466, 3095, 6983, 1593, 5494, 3263, 4772, 3689, 4100, 6219, 3800, 6290, 2642, 83, 2581, 9692, 6447, 2605, 4574, 8666, 4861, 2324, 5174, 4286, 9132, 6048, 793, 2692, 5975, 380, 1643, 4545, 1901, 866, 2805, 5027, 7955, 7386, 2343, 1752, 473, 5576, 4481, 1823, 217, 8810, 2407, 3757, 3410, 6353, 9473, 744, 3792, 9338, 6310, 8928, 7046, 2030, 2849, 1936, 2399, 4502, 7137, 5624, 4211, 1134, 9648, 3322, 5823, 3403, 2297, 5557, 126, 9686, 7659, 3801, 6794, 728, 9110, 7724, 2429, 2524, 3373, 2166, 2275, 3728, 9003, 9641, 1920, 3535, 4421, 2584, 4252, 3979, 370, 8135, 7825, 9134, 8874, 2817, 258, 3206, 7818, 1509, 2766, 6325, 3312, 7704, 1855, 3829, 7069, 489, 3458, 2347, 653, 1254, 4014, 830, 5355, 239, 9254, 3085, 9060, 4910, 3937, 4024, 7075, 9900, 947, 4179, 2181, 632, 4192, 6690, 9533, 1772, 5452, 2638, 3653, 7534, 9399, 4177, 773, 2179, 806, 3938, 1440, 3642, 1057, 3487, 4303, 6106, 6075, 190, 8811, 4462, 4737, 161, 9312, 554, 8621, 3879, 6210, 960, 8174, 8636, 9832, 1734, 8393, 4352, 4526, 7572, 3401, 4633, 7551, 246, 8262, 5374, 3518, 6716, 92, 1856, 4004, 3602, 7988, 6007, 1178, 813, 4602, 2542, 9044, 9079, 5401, 6866, 1424, 3390, 2415, 6957, 69, 6523, 224, 7883, 8365, 9101, 6588, 1906, 9729, 3843, 9371, 272, 5106, 3424, 2651, 3959, 6101, 9287, 8757, 8608, 912, 8576, 1830, 8558, 2624, 9880, 615, 5845, 9840, 9875, 3643, 6416, 8840, 4541, 1599, 9439, 8819, 7303, 7564, 628, 2224, 9980, 1611, 432, 9946, 749, 4595, 5444, 1197, 7038, 936, 9556, 7894, 9757, 5416, 522, 9330, 4836, 2045, 9548, 5836, 5875, 9793, 3032, 735, 7717, 2564, 5238, 9153, 1915, 9292, 9458, 1444, 4310, 7995, 3391, 9571, 5498, 62, 3475, 2150, 5389, 9568, 5924, 7558, 374, 9590, 1699, 1845, 2272, 4957, 7904, 7221, 4534, 1877, 691, 7116, 8589, 5029, 4703, 3995, 9194, 9638, 9019, 9927, 8126, 3569, 3968, 4814, 5050, 7631, 8949, 3050, 7230, 9492, 1590, 4203, 8640, 6374, 3378, 5323, 7880, 7817, 6591, 863, 1233, 1446, 7209, 5233, 2390, 778, 7900, 9443, 8040, 1072, 7536, 9096, 4046, 9956, 3705, 2750, 6533, 1558, 4148, 5923, 6446, 4511, 5425, 3376, 3987, 2808, 2881, 2076, 6778, 5190, 8157, 8367, 7439, 5469, 9713, 9580, 6977, 8241, 7696, 7023, 6394, 4101, 9561, 8626, 787, 7244, 1270, 6672, 3863, 9510, 3422, 7827, 6464, 5250, 9508, 2397, 1893, 6051, 2628, 2555, 7796, 7773, 1727, 4587, 9089, 6995, 2541, 2325, 7563, 9567, 4105, 6132, 4117, 8740, 3258, 8705, 4394, 7693, 6771, 383, 7921, 2549, 4113, 5011, 2206, 3748, 1546, 3029, 575, 2578, 7275, 3659, 346, 6835, 6021, 4468, 2482, 5102, 946, 6670, 6064, 1129, 4841, 170, 8710, 8909, 9894, 3876, 5887, 8606, 2930, 832]  // Add White 
if (whiteId.includes(parseInt(nftId))) {
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

const tacoOption = document.createElement('option');
tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
layerDropdown.appendChild(tacoOption);

const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[140]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[140]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[166]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[166]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const coffeeId = [7478, 1423, 6909, 9893, 1379, 7899, 1779, 79, 7714, 5911, 8451, 5431, 7325, 7175, 4688, 4400, 4144, 741, 1349, 7315, 7158, 1745, 2185, 6700, 2787, 7874, 651, 6152, 1582, 8244, 2168, 6369, 777, 4432, 7532, 2566, 7836, 3147, 605, 8410, 5917, 2955, 3505, 1298, 8613, 3810, 1261, 2553, 1258, 5688, 2155, 6779, 6184, 6811, 4236, 5302, 6655, 1371, 8243, 7647, 5522, 3352, 436, 7382, 2220, 8374, 5874, 4413, 9677, 1267, 689, 7138, 4831, 6250, 1697, 8825, 3457, 7113, 7705, 6985, 727, 6697, 7305, 8807, 4715, 4921, 3542, 7653, 9684, 6802, 2307, 4009, 3540, 2459, 8722, 4821, 3891, 3604, 6728, 693, 9722, 9384, 8030, 3949, 5620, 5738, 3483, 3011, 3520, 9545, 8503, 2614, 6994, 2441, 6624, 5947, 4265, 9775, 3886, 5571, 7250, 6186, 2782, 3587, 1750, 2516, 1023, 1785, 8649, 7932, 8966, 7292, 3273, 7102, 6818, 3243, 1165, 7854, 3720, 7822, 1333, 4001, 7400, 7861, 3454, 2402, 7605, 7407, 2481, 3091, 7025, 4026, 2251, 1938, 7574, 2686, 911, 9311, 9752, 7934, 3994, 5748, 4229, 7942, 1401, 7, 52, 2115, 4258, 8600, 5291, 1728, 2437, 1081, 7233, 6975, 2190, 228, 4853, 5953, 1870, 9649, 5546, 1011, 2560, 7437, 5280, 2539, 2518, 9328, 3877, 180, 8477, 4106, 7951, 652, 6018, 2889, 8, 6038, 3054, 7627, 8291, 4791, 113, 1939, 8317, 4760, 9668, 5006, 2767, 4956, 2067, 2788, 6581, 2926, 2898, 4425, 116, 9518, 4805, 4565, 3093, 3381, 3106, 9125, 7271, 8523, 3895, 2464, 7114, 4779, 1055, 1900, 6518, 9419, 2673, 9963, 4994, 1319, 3417, 2964, 1076, 865, 5964, 9680, 4104, 9052, 2004, 2770, 6338, 3370, 6829, 9381, 8511, 8376, 4747, 8285, 1555, 6174, 1125, 9777, 7403, 9114, 428, 7981, 3969, 6016, 9623, 4409, 1868, 6868, 3355, 6436, 8095, 14, 4758, 8465, 9173, 8425, 2473, 2908, 5817, 3706, 1819, 5709, 9748, 1755, 2061, 2266, 1911, 151, 9093, 1667, 5124, 3639, 6831, 3266, 4876,6899, 6429, 9993, 155, 4423, 4843, 7073, 4107, 4869, 2840, 9866, 9463, 532, 9262, 7637, 2125, 8939, 3566, 2819, 6456, 9013, 2304, 737, 167, 9300, 4579, 3866, 808, 4234, 4741, 9015, 8012, 5677, 8093, 3862, 3247, 8733, 5058, 9260, 4243, 3450, 1034, 5598, 602, 1556, 7418, 878, 3430, 6888, 7545, 6401, 5998, 1369, 9634, 3785, 4299, 4150, 8454, 7954, 1190, 4332, 1107, 8717, 707, 5510, 5795, 7533, 714, 1932, 2785, 9869, 2672, 5521, 9925, 6465, 5735, 9700, 7288, 1427, 9539, 4249, 4230, 6764, 6422, 6665, 4855, 1353, 3610, 3896, 5567, 1120, 851, 5074, 7133, 2408, 5277, 9014, 1253, 9005, 8975, 4337, 929, 6777, 419, 1535, 4968, 7524, 9460, 7311, 1859, 6969, 9817, 9743, 8211, 2395, 7902, 8654, 1118, 4435, 5579, 7645, 675, 9190, 226, 9845, 5147, 3665, 2249, 8298, 6026, 1826, 8618, 6360, 2252, 8048, 559, 6140, 4684, 5305, 8897, 9995, 7492, 1575, 8024, 6842, 4931, 5619, 2918, 5308, 6663, 5716, 5260, 2984, 7617, 4172, 3317, 9022, 4268, 8319, 2296, 8357, 4275, 8401, 5216, 3311, 8301, 556, 2134, 8534, 9389, 9921, 4500, 2649, 3691, 9984, 7730, 2416, 3815, 3493, 8124, 8461, 3113, 822, 8052, 856, 1962, 6599, 941, 8409, 1238, 3588, 3784, 3918, 6807, 4694, 7343, 6344, 1821, 4950, 7635, 6144, 5880, 1240, 128, 379, 8484, 5601, 4285, 5087, 496, 4639, 5119, 8358, 1112, 3326, 3912, 2474, 9461, 1407, 975, 9862, 6729, 5763, 9868, 3617, 6659, 4102, 7948, 2368, 547, 464, 9772, 6232, 8435, 8537, 3058, 5373, 1089, 9360, 8249, 482, 2860, 5357, 5902, 3597, 1529, 5843, 1524, 3463, 3809, 8229, 1168, 2314, 5177, 3265, 8051, 4298, 477, 8412]
if (coffeeId.includes(parseInt(nftId))) {
  
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

    const tacoOption = document.createElement('option');
    tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
    tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(tacoOption);

    const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[141]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[141]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[167]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[167]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
  }
  const redId = [4822, 9885, 9823, 782, 4494, 6986, 4530, 2593, 6689, 4974, 713, 5592, 9335, 5962, 7211, 5461, 4596, 8996, 8218, 3908, 3283, 8916, 1198, 4941, 3217, 2476, 805, 5146, 9163, 6718, 4518, 8420, 9481, 5315, 8955, 8590, 4742, 4048, 6542, 8933, 8413, 9160, 5922, 9145, 65, 2094, 4091, 8179, 4663, 7056, 6229, 45, 6789, 3616, 4143, 6605, 9726, 9246, 2268, 3732, 1971, 3667, 7112, 8843, 2203, 188, 5328, 5460, 4376, 486, 4459, 2952, 5380, 6395, 5618, 683, 6905, 8651, 8311, 3988, 7295, 7248, 881, 9020, 2789, 1234, 6336, 7709, 7339, 827, 2036, 1653, 9761, 4321, 5361, 4613, 9009, 8582, 6231, 921, 2886, 3911, 1627, 1606, 5666, 4375, 8058, 4240, 4095, 1841, 8866, 6937, 3481, 4047, 3600, 8869, 2146, 6786, 358, 932, 7381, 6277, 6981, 2157, 4847, 1545, 1321, 5721, 487, 6295, 3297, 5283, 6830, 3180, 368, 9907, 8479, 1307, 4239, 4977, 4156, 7424, 6643, 1046, 8430, 5776, 7531, 7190, 2538, 4857, 4837, 8720, 6826, 172, 8553, 9994, 5392, 2222, 445, 7360, 780, 5450, 8177, 7555, 5049, 6884, 8299, 8958, 6220, 5272, 6527, 3254, 985, 6892, 6657, 9418, 4753, 6041, 82, 284, 4883, 3583, 2412, 5388, 9563, 2027, 1480, 1382, 7103, 7595, 5915, 6964, 6208, 6346, 274, 8718, 6142, 7337, 530, 6917, 1525, 7156, 1517, 8082, 5360, 9955, 6272, 7615, 1645, 7885, 908, 4547, 7120, 9786, 1169, 8223, 2449, 1492, 5770, 7879, 1769, 8261, 8023, 2463, 4088, 7813, 2537, 9280, 9425, 7241, 9560, 9408, 3089, 8989, 5544, 4559, 1079, 4854, 7710, 7590, 7346, 1967, 4451, 6014, 8775, 2931, 7033, 2612, 8524, 875, 254, 8595, 3624, 6660, 6292, 7277, 5753, 1014, 1935, 7146, 3178, 183, 957, 4126, 3407, 3461, 7080, 9578, 1986, 498, 7858, 1526, 4690, 4652, 5739, 4995, 9529, 4262, 2839, 4935, 8444, 4075, 222, 4083, 6306, 8914, 1320, 1302, 2937, 2484, 6320, 3715, 1726, 6012, 7748, 6530, 3567, 6565, 4804, 1471, 987, 2939, 4793, 6389, 4986, 5001, 5718, 5492, 1161, 8328, 291, 4719, 9671, 1092, 7958, 1324, 5150, 2554, 3818, 1898, 2512, 157, 5422, 5838, 8220, 371, 3145, 1402, 1101, 7831, 9411, 8018, 839, 3446, 4996, 3416, 7740, 3832, 4865, 2020, 7588, 9088, 7560, 5061, 706, 1698, 2604, 7306, 7933, 9792, 2152, 4816, 8028, 639, 1586, 7238, 285, 3993, 9969, 2281, 6951, 9966, 6239, 5925, 5435, 7832, 9102, 8472, 88, 4799, 9438, 4653, 5675, 6787, 635, 3767, 3357, 6223, 4661, 9001, 6000, 3955, 514, 3374, 8063, 2117, 1332, 5254, 9239, 8003, 3647, 139, 6119, 8168, 1215, 9195, 9796, 9606, 6384,8977, 2406, 5271, 9374, 4325, 2290, 7335, 3841, 3787, 4934, 4406, 7184, 6650, 9122, 6736, 7370, 1527, 4183, 1863, 8566, 1762, 2194, 557, 443, 2561, 2568, 2445, 5596, 7479, 847, 9062, 1655, 1456, 4987, 6271, 1431, 1166, 8978, 8551, 7522, 4637, 5736, 5904, 2791, 2992, 4929, 1692, 3104, 6727, 3492, 9450, 1033, 8521, 1111, 7088, 3917, 7649, 8549, 9090, 9509, 2920, 9337, 7785, 4312, 7566, 7870, 9565, 5140, 3286, 1328, 6733, 74, 1562, 6572, 5497, 3360, 6281, 2702, 659, 9485, 5225, 2927, 7752, 2431, 7750, 7172, 1952, 3277, 7727, 7267, 4609, 1777, 7289, 2854, 4840, 3781, 390, 8987, 8934, 4731, 7499, 7909, 5217, 4436, 2046, 4818, 7957, 8841, 1460, 7004, 2014, 9434, 4580, 2735, 7281, 8771];

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

    const tacoOption = document.createElement('option');
    tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
    tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(tacoOption);

    const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[142]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[142]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[168]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[168]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
  }
  const blackId = [6762, 7259, 8691, 49, 6644, 8090, 8022, 8315, 123, 874, 3010, 3228, 9790, 4936, 3560, 3329, 6658, 9431, 6720, 8108, 7935, 9369, 5224, 4257, 8661, 3749, 1241, 6166, 3599, 4576, 8593, 1760, 5200, 5420, 7324, 6636, 1012, 206, 9714, 6375, 138, 1520, 1610, 2189, 3553, 9746, 2400, 588, 3663, 7620, 7867, 4524, 8264, 1116, 3043, 1285, 9002, 3241, 4380, 5037, 3348, 4448, 282, 7782, 7646, 9717, 6120, 9409, 6298, 1973, 6471, 4695, 497, 6260, 201, 6839, 9451, 9432, 2579, 9962, 4520, 3133, 3230, 8602, 976, 5862, 5396, 7527, 253, 1084, 9218, 5547, 8120, 5253, 4015, 3658, 8020, 6860, 3782, 1989, 3223, 5031, 3605, 7268, 7573, 6491, 3088, 3309, 3100, 2385, 6454, 2409, 2488, 5162, 9930, 3080, 3573, 9826, 3019, 2999, 9133, 3441, 4629, 401, 376, 1497, 3529, 6266, 672, 6876, 992, 9274, 6960, 2558, 3881, 5293, 140, 7447, 1102, 4231, 1097, 1836, 2569, 1226, 8170, 8948, 7764, 5213, 9800, 4411, 4752, 1335, 7286, 3831, 5685, 63, 4939, 9324, 2822, 4640, 7361, 3807, 2093, 6356, 397, 8659, 7461, 9809, 7546, 1672, 5179, 4781, 8202, 9056, 344, 3181, 3491, 5101, 1622, 9498, 1459, 7313, 7613, 529, 38, 2706, 3714, 3164, 23, 9493, 9236, 6798, 9716, 1322, 6613, 2945, 4442, 1312, 6632, 4458, 4190, 186, 6712, 3556, 3571, 2639, 6247, 8176, 6765, 8035, 9915, 5340, 9988, 1842, 9802, 3349, 6483, 1367, 7777, 67, 7226, 2199, 4616, 5563, 9398, 6573, 9834, 8508, 9107, 9497, 1458, 2063, 4721, 7421, 3187, 4300, 1206, 6001, 8936, 5787, 4202, 5535, 8620, 9269, 6409, 5399, 2669, 3385, 1131, 392, 3398, 5588, 5605, 3499, 7924, 2393, 9828, 2108, 4964, 3495, 9678, 6797, 8959, 6187, 3998, 399, 6921, 9530, 1351, 1104, 2040, 7455, 5089, 6759, 1678, 7698, 6466, 6976, 4905, 457, 712, 8039, 6355, 5526, 5703, 8947, 8746, 1748, 5421, 8379, 9486, 7187, 3284, 175, 8166, 5682, 5613, 4947, 8431, 8231, 8569, 4828, 2282, 47, 2872, 8799, 6755, 4051, 9144, 9179, 4350, 9026, 8450, 7919, 6844, 425, 9992, 5508, 4608, 8861, 165, 6244, 1931, 1286, 353, 4666, 9222, 2247, 3741, 687, 6309, 196, 6608, 8488, 2720, 1995, 297, 7229, 2941, 9574, 4464, 6393, 8614, 4649, 6311, 7511, 6094, 348, 4094, 2616, 2288, 3648, 8786, 3928, 293, 1754, 4353, 3001, 6534, 9669, 6425, 5472, 6609, 6812, 746, 3028, 2148, 9054, 1710, 7598, 8385, 2946, 6676, 8522, 6294, 189, 8832, 6603, 7082, 4756, 147, 828, 5164, 89, 4806, 4878, 535, 7232, 4922, 2335, 563, 42, 4407, 2212, 1364, 6039, 6849, 1179, 831, 4656, 512, 7166, 6592, 6115, 9579, 7976, 3238, 2312, 213, 6562, 6618, 6584, 3943, 7219, 2781, 3065, 2887, 4361, 6612, 5636, 6597, 4787, 4875, 6714, 3129, 7629, 1786, 1472, 610, 1428, 2284, 7503, 8772, 7397, 176, 6351, 320, 8579, 241, 7125, 9202, 7725, 8592, 4187, 1886, 2104, 5019, 9588, 5349, 8191, 2163, 3470, 9217, 1091, 901, 6420, 4635, 7775, 7015, 5457, 9727, 7839, 2164, 678, 283, 9024, 1246, 7723, 2261, 3405, 9109, 5434, 198, 5307, 5054, 5135, 3098, 9783, 2571, 7309, 8723, 2714, 1149, 7798, 1514, 8189, 2991, 9357, 3047, 7079, 8625, 2341, 5284, 121, 7096, 8050, 2978, 7350, 6793, 732, 7062, 6057, 7404, 8442, 6555, 5699, 7510, 7788, 4775, 1163, 9394, 2929, 2458, 5114];

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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[143]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[143]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[169]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[169]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[144]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[144]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[170]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[170]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[145]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[145]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[171]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[171]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const caramelId = [965, 5192, 9960, 5242, 1588, 2888, 685, 4086, 6614, 9424, 7432, 5937, 8935, 5757, 5381, 5654, 2610, 1577, 8013, 4182, 2475, 7819, 2572, 1251, 7994, 7901, 5132, 1229, 7803, 3564, 5639, 9395, 57, 8008, 3345, 8860, 9447, 7984, 5898, 2890, 3674, 8900, 4221, 5181, 7018, 4445, 8531, 1211, 1530, 6468, 9954, 3014, 3132, 3926, 4320, 4109, 9045, 1759, 6621, 2740, 4283, 5635, 6388, 9167, 1221, 8981, 9251, 6423, 8011, 8265, 724, 3280, 1883, 4643, 7562, 9620, 244, 3121, 3745, 1457, 359, 1006, 5658, 9120, 2065, 2243, 8965, 8185, 4906, 2317, 6376, 723, 9759, 8200, 1405, 3413, 8286, 332, 3141, 3775, 1231, 2376, 9417, 1443, 7041, 8184, 2567, 1256, 9523, 3695, 4725, 9543, 2976, 1731, 7768, 2089, 3002, 1613, 8080, 316, 5970, 2421, 7115, 5740, 5885, 3615, 4005, 8515, 6413, 12, 5158, 8932, 6286, 8615, 9942, 5265, 6946, 4138, 8292, 7215, 4647, 620, 4874, 9944, 6822, 1651, 6028, 9708, 8307, 4307, 4631, 869, 5841, 1587, 4251, 699, 4078, 4531, 5423, 6526, 5441, 1972, 215, 3997, 7518, 5876, 9804, 2192, 2389, 3672, 4296, 6160, 3546, 5652, 5882, 7007, 3558, 2348, 7626, 6198, 3864, 5693, 2806, 7078, 1043, 1066, 1040, 4424, 7468, 387, 4360, 5393, 4553, 3669, 3772, 818, 20, 5354, 8426, 7944, 9924, 112, 5429, 1025, 997, 2940, 6171, 442, 9787, 4387, 8154, 9412, 8496, 1788, 2576, 7107, 8041, 9031, 2546, 4483, 1481, 1981, 7384, 673, 950, 7869, 5647, 5195, 1483, 7697, 910, 8665, 8623, 2630, 4893, 1237, 4437, 5369, 8457, 3094, 9682, 9557, 5578, 3209, 2846, 6112, 5694, 2543, 2007, 8456, 7677, 3052, 8158, 9098, 4136, 8831, 461, 9245, 2253, 1275, 8732, 3252, 6097, 5712, 4583, 733, 4946, 5934, 3444, 4386, 2209, 7765, 5334, 7265, 3680, 9507, 2381, 702, 8015, 6254, 6575, 4549, 2088, 5110, 3227, 3842, 6430, 3788, 7260, 5896, 2143, 382, 3278, 990, 6974, 290, 2214, 5478, 9779, 1626, 3476, 662, 3557, 1620, 9948, 1811, 3885, 4532, 5760, 9139, 8027, 8560, 6053, 6810, 7591, 7925, 1869, 106, 3256, 7161, 6871, 7912, 9350, 8139, 8644, 1675, 7784, 1292, 1686, 6188, 2511, 8474, 4886, 982, 1574, 1694, 7931, 2273, 2810, 9911, 3330, 6092, 9334, 1157, 3517, 3171, 4210, 2878, 1063, 9867, 5317, 3120, 9903, 3153, 6205, 6068, 4125, 8439, 4525, 1770, 8563, 8110, 2294, 3044, 9585, 8881, 2493, 1242, 4066, 8332, 2162, 6065, 3789, 6972, 8586, 9525, 3092, 9581, 4274, 7134, 6948, 3870, 4478, 9283, 4427, 3175, 4304, 9385, 7089, 694, 2213, 2535, 3795, 740, 8845, 8282, 3601, 5704, 7556, 5241, 5754, 5955, 2034, 3117, 6646, 9782, 9113, 7520, 8813, 4566, 1181, 7506, 9505, 4535, 5650, 1799, 39, 521, 3764, 6544, 1305, 7632, 9672, 9306, 8839, 3451, 5889, 7914, 4711, 5737, 6496, 2208, 3169, 8118, 8778, 53, 8917, 177, 7378, 1942, 8062, 4071, 755, 4498, 9063, 7835, 7245, 8499, 1557, 6631, 5474, 4924, 6748, 5649, 1665, 1044, 4898, 4434, 7526, 6207, 8888, 7135, 1706, 1736, 7821, 8253, 9104, 4880, 4708, 4716, 6303, 9846, 6538, 4116, 6667, 3664, 6843, 4522, 3368, 2617, 5587, 5261, 3851, 4620, 9789, 2099, 5404, 8363, 2661, 393, 2665, 4606, 5848, 5468, 5145, 1723, 1874, 1048, 8257, 4382]
  if (caramelId.includes(parseInt(nftId))) {
  const caramelOption = document.createElement('option');
  caramelOption.value = layerImageUrls[28];
  caramelOption.textContent = customLayerNames[28];
  layerDropdown.appendChild(caramelOption);

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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[146]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[146]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[172]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[172]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const greyId = [8632, 2866, 8459, 8893, 7917, 4499, 1445, 8415, 1861, 7754, 3774, 4504, 288, 637, 1224, 7440, 3904, 2748, 3627, 9576, 3888, 6719, 7032, 797, 5780, 996, 8795, 7618, 3400, 8025, 1913, 528, 8611, 7808, 4533, 2293, 9815, 5550, 9474, 9833, 4927, 73, 8616, 9797, 7150, 7012, 5319, 4556, 5960, 657, 7059, 236, 3512, 6059, 4887, 5986, 9445, 7672, 1820, 4665, 6439, 7876, 7758, 3109, 692, 7576, 9947, 6678, 624, 7507, 4336, 9818, 4811, 1984, 8619, 5000, 4454, 6847, 8104, 8541, 1658, 5188, 4717, 4180, 9760, 1516, 8378, 2633, 5165, 536, 7753, 1464, 1259, 4681, 5870, 3144, 4056, 9647, 905, 476, 2858, 3630, 6930, 8759, 6861, 7264, 7456, 4469, 604, 1108, 8674, 5513, 3189, 8943, 7210, 5643, 4054, 8059, 3803, 5085, 9704, 6337, 4971, 2640, 2398, 2330, 3076, 3350, 9559, 6564, 9517, 4118, 9653, 6622, 4495, 4932, 4830, 2534, 164, 754, 1695, 1337, 6414, 698, 3342, 2492, 9025, 850, 5207, 4871, 1368, 5387, 1865, 1929, 9030, 7413, 4161, 7548, 6629, 5743, 7131, 6902, 3845, 2509, 8178, 5910, 5384, 8672, 8902, 6610, 3198, 9593, 3622, 7460, 8106, 1144, 5767, 6367, 3293, 2621, 8303, 8031, 2171, 4900, 1758, 5542, 3804, 7274, 4607, 8437, 9142, 6017, 9378, 4870, 8423, 8322, 8763, 3771, 2742, 5868, 6246, 6003, 4124, 3272, 6907, 2105, 8835, 5403, 7042, 2988, 9457, 3276, 5382, 5766, 5324, 3108, 2316, 3644, 4349, 9974, 7505, 8848, 3853, 2497, 9681, 3262, 1051, 2340, 403, 3226, 7436, 7149, 3343, 5931, 4410, 99, 7495, 4007, 9327, 8233, 3427, 981, 9603, 5296, 1265, 4293, 8348, 5631, 7153, 4505, 6256, 7868, 8942, 2457, 212, 5775, 4490, 6433, 872, 7731, 2709, 6110, 2716, 423, 268, 7240, 3581, 9595, 1992, 7272, 4169, 2935, 6999, 5727, 3334, 6259, 8678, 6308, 6906, 6927, 9985, 7471, 5285, 1436, 8489, 984, 8797, 8635, 8993, 1773, 4035, 6322, 8460, 2451, 2707, 3274, 3719, 7182, 6407, 4347, 1189, 890, 8877, 6841, 3839, 7552, 3210, 3962, 1953, 8970, 1806, 3102, 8713, 5945, 6204, 5791, 331, 6300, 4519, 8232, 5886, 1182, 513, 433, 3606, 7148, 6753, 8318, 8529, 4403, 934, 5701, 8368, 2905, 1244, 276, 3321, 7352, 214, 5638, 9616, 7167, 8215, 1597, 917, 2491, 6606, 2676, 2225, 9336, 8087, 9731, 3173, 9366, 7053, 7732, 9449, 1003, 6261, 1684, 2118, 1921, 952, 6595, 9270, 2360, 3768, 2180, 9058, 7287, 1510, 7655, 8478, 1009, 354, 9413, 7336, 7469, 8976, 5903, 2072, 6510, 6015, 2109, 1045, 5075, 7111, 898, 8668, 3765, 3380, 703, 5185, 9227, 5524, 4119, 7027, 3878, 7567,3753, 1021, 8715, 7473, 7515, 4433, 2384, 3008, 2953, 3069, 2005, 5080, 1999, 617, 1982, 7544, 2024, 375, 9643, 802, 8252, 408, 2447, 8744, 4687, 8044, 578, 7922, 1732, 2909, 1565, 8706, 1408, 7327, 7707, 7179, 1833, 677, 337, 1729, 6577, 4940, 2847, 1703, 1615, 4057, 9908, 5466, 5806, 8302, 9266, 2337, 6176, 5842, 5137, 2154, 417, 764, 7517, 9934, 9358, 1594, 1425, 1121, 223, 645, 1812, 5835, 5386, 3075, 7170, 1570, 3531, 3660, 4162, 8388, 1078, 8510, 8527, 7201, 6791, 4846, 8962, 9091, 4967, 6285, 864, 2851, 8326, 5997, 3685, 6934, 6107, 6589, 876, 7554, 5491, 2070, 8574, 5490, 5820, 1059, 795, 7623, 7290, 913, 3836, 439, 2234, 7162, 5212, 4654, 5834, 7212, 5749, 3166, 6034, 9945, 6998, 5724, 2096, 6164, 3437, 734, 591, 8073, 7640, 8863, 8269, 8330, 3242, 8086, 4317, 7472, 5798, 7820, 27, 55, 8213, 4476, 626, 5327, 1385, 8362, 3777, 3738, 3298, 998, 9808, 182, 7243, 8675, 4323, 2369, 4461, 884, 2049, 8463, 7542, 7152, 7224, 5509, 9690, 7355, 9137, 4438, 7385, 8539, 6952, 4975, 5222, 3131, 1521, 9405, 5539, 8234, 2911, 6364, 3072, 3503, 9850, 3188, 2336]
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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[147]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[147]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[173]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[173]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const charcoalId = [8735, 6754, 8475, 6426, 5991, 7493, 6702, 1990, 6236, 3930, 8926, 7310, 4746, 3119, 7741, 2820, 470, 7703, 6005, 5913, 9276, 4933, 4456, 2660, 2267, 2075, 153, 8490, 7297, 7122, 9755, 3708, 9286, 4988, 9698, 2229, 596, 3743, 8683, 4329, 1884, 8953, 4063, 7176, 8380, 7347, 5849, 5543, 5022, 6477, 7106, 8167, 7487, 7302, 8791, 385, 5310, 3547, 3046, 3611, 7897, 983, 2816, 6410, 2052, 7402, 1373, 6084, 8422, 3397, 6725, 5830, 6412, 8699, 3024, 656, 1937, 494, 1662, 3931, 6362, 6617, 8730, 6324, 8354, 6639, 9468, 9143, 3940, 8837, 647, 654, 7907, 6528, 845, 135, 9068, 6143, 349, 5040, 3040, 4582, 895, 59, 1147, 4346, 6123, 2611, 1433, 4084, 2319, 7569, 7792, 1470, 2650, 2736, 7029, 6151, 8143, 9549, 2414, 9483, 6357, 5294, 9600, 3500, 2443, 7451, 315, 8745, 9097, 1067, 6046, 2404, 7769, 446, 3828, 3157, 5372, 8129, 5486, 914, 4460, 2763, 2697, 3296, 1891, 2321, 4680, 145, 5405, 4292, 2425, 3179, 8905, 5625, 3758, 9430, 8060, 4263, 1579, 5956, 426, 9233, 2729, 2797, 3769, 9814, 6685, 8338, 708, 8121, 9333, 717, 7481, 3717, 7433, 9864, 319, 3545, 6071, 6872, 4491, 6067, 7157, 4207, 2836, 2071, 3282, 1704, 4214, 584, 9305, 5394, 4326, 5047, 1038, 4065, 4157, 2, 3453, 9933, 6296, 4155, 6574, 7443, 2986, 2175, 5411, 9929, 3353, 1037, 1637, 2039, 1303, 925, 9383, 1199, 475, 7760, 7658, 6297, 8930, 7043, 3964, 1876, 9454, 7895, 2648, 2172, 4127, 4173, 9744, 5855, 4536, 8885, 7974, 5086, 2313, 7118, 8242, 9169, 5199, 103, 2869, 3813, 1534, 2255, 564, 3259, 1742, 2684, 9257, 4412, 9141, 9937, 5520, 549, 1183, 6766, 517, 3021, 8347, 6696, 1581, 6684, 6066, 3331, 8199, 8321, 7368, 4783, 3101, 4612, 8543, 5744, 6299, 5458, 7539, 6288, 3645, 2495, 6514, 2752, 9740, 3367, 5281, 2318, 7990, 384, 7367, 8125, 6482, 5184, 8533, 6971, 7975, 2901, 2470, 5908, 9986, 4146, 2654, 5751, 9471, 2551, 1341, 4820, 8268, 923, 229, 1813, 4308, 1269, 3307, 309, 3466, 7991, 7513, 3445, 2410, 7916, 3855, 1359, 2995, 449, 7237, 8992, 2140, 2674, 2158, 6400, 3799, 6838, 91, 5859, 1363, 5687, 7394, 4979, 1583, 312, 2363, 8727, 9912, 1646, 2017, 2507, 8102, 9204, 351, 8747, 2107, 1513, 9607, 3000, 2863, 6494, 4702, 492, 160, 3105, 2949, 5932, 1946, 3817, 2710, 5197, 3677, 4573, 9363, 5445, 3827, 972, 8923, 586, 3947, 7283, 7502, 6662, 7330, 9479, 2299, 416, 4726, 4991, 7692, 2769, 4785, 5060, 125, 5586, 9799, 9048, 4709, 5446, 5023, 7826, 1693, 695, 7866, 1542, 8598, 102, 7823, 3730, 579, 18, 3096, 459, 2983, 8918, 9205, 6654, 4862, 7063, 4082, 7477, 2191, 5573, 5375, 4142, 491, 940, 9250, 5930, 9074, 171, 8096, 4204, 930, 6224, 2711, 8526, 211, 6474, 9453, 3794, 6782, 9070, 9343, 6652, 6213, 9092, 1022, 4184, 7997, 3608, 4371, 8054, 8361, 572, 6008, 2485, 5731, 325, 3739, 6190, 7203, 9185, 1411, 8446, 608, 3083, 8808, 7441, 4385, 1539, 71, 5206, 817, 3208, 3419, 971, 7596, 2236, 2446, 2620, 152, 2471, 1277, 4917, 3406, 3811, 784, 243, 4920, 4008, 2056, 2829, 5973, 4970, 2092, 2987, 4989, 5927, 750, 8774, 4019, 8071, 9253, 2727, 567, 9856, 4817, 386, 1839, 8084, 6109, 4455, 5977, 1151, 3890, 5191, 4650, 4827, 1361, 9278, 479, 2462, 6118, 8107, 8453, 1840, 937, 3524, 7889, 3066, 5610, 6195, 4080, 5645, 5065, 1200, 9231, 7790, 68]
  if (charcoalId.includes(parseInt(nftId))) {
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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[148]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[148]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[174]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[174]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const jungleId = [5890, 2700, 1109, 8492, 9711, 3548, 394, 9979, 2757, 7999, 7963, 4542, 2498, 3756, 7234, 5772, 1802, 3735, 9249, 4482, 5109, 3160, 8248, 5621, 2025, 6339, 7810, 4363, 6074, 5651, 5247, 3609, 5476, 2530, 298, 824, 3156, 8408, 2533, 4191, 9701, 9464, 2101, 7557, 2018, 4796, 7208, 1279, 9709, 8952, 8802, 9622, 3017, 8212, 3778, 6649, 7968, 3541, 1988, 4740, 2494, 9957, 7852, 41, 8639, 9650, 1208, 5148, 5515, 2703, 7052, 9496, 8796, 4625, 474, 7377, 5884, 3438, 5985, 533, 6598, 192, 7890, 9541, 7967, 5667, 7061, 3124, 499, 825, 9504, 9899, 3064, 9271, 3051, 1797, 8838, 7633, 3729, 696, 9939, 8094, 3049, 2843, 4250, 2841, 4324, 261, 3442, 1854, 9099, 9317, 4072, 7863, 8773, 9342, 5209, 8441, 2906, 6908, 1404, 9688, 1554, 9524, 452, 7332, 1808, 1737, 5471, 4766, 9764, 815, 3816, 7604, 6920, 8670, 2867, 3294, 3449, 8389, 4354, 7084, 2989, 4446, 7127, 1940, 3269, 8280, 4674, 4194, 420, 8596, 5585, 5877, 9594, 5428, 6627, 194, 5689, 1437, 6431, 2124, 8296, 9608, 7296, 8956, 7986, 6997, 179, 4164, 2301, 4916, 7328, 7300, 2059, 9961, 5332, 1540, 1909, 8452, 9036, 4966, 623, 7600, 9805, 3984, 1798, 1987, 7448, 2064, 3561, 4797, 3696, 5130, 154, 5487, 6882, 6172, 5111, 1523, 5482, 1505, 2589, 5706, 5742, 404, 7308, 2853, 321, 7846, 4915, 1266, 8853, 108, 8455, 4577, 4237, 5802, 7816, 544, 3234, 4123, 5488, 7739, 240, 9702, 9332, 7682, 2681, 4844, 7354, 883, 1735, 2242, 3302, 7625, 6313, 5561, 8823, 8468, 9558, 6274, 2246, 1186, 111, 658, 3972, 5290, 3232, 6848, 3824, 4260, 7853, 2068, 2433, 9932, 5762, 2510, 7285, 6027, 6428, 8190, 3059, 1343, 6202, 9368, 1536, 4930, 4206, 5800, 6111, 207, 3898, 4042, 6156, 1362, 8240, 4174, 2342, 9652, 9905, 3731, 8210, 3112, 4404, 587, 1837, 9235, 9725, 9010, 2790, 5764, 4114, 3873, 4765, 6194, 8696, 5778, 2486, 3673, 5725, 2184, 7417, 5519, 5786, 5909, 6302, 5831, 2793, 9261, 2496, 3934, 3222, 2804, 1039, 9707, 6243, 540, 680, 974, 986, 7165, 86, 5530, 3523, 9997, 4120, 9621, 9889, 6398, 7540, 886, 9085, 7521, 1295, 3135, 9631, 3704, 9552, 5005, 1892, 2508, 6726, 305, 5186, 1487, 7197, 1346, 8306, 8617, 9882, 9895, 3257, 2998, 3337, 4228, 1212, 9931, 3539, 8377, 9718, 5662, 1030, 8944, 9794, 3090, 8101, 5637, 2084, 2106, 6108, 3823, 548, 5811, 8550, 6419, 8294, 7252, 4507, 3399, 5447, 766, 6481, 4061, 9467, 8563, 3636, 800, 9902, 3409, 5529, 2683, 3200, 6950, 409, 2041
]
  if (jungleId.includes(parseInt(nftId))) {
  const jungleOption = document.createElement('option');
  jungleOption.value = layerImageUrls[34];
  jungleOption.textContent = customLayerNames[34];
  layerDropdown.appendChild(jungleOption);

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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[149]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[149]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[175]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[175]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const sandId = [7841, 9570, 9390, 5453, 2917, 2280, 7971, 642, 4291, 7695, 5358, 3462, 7476, 9285, 2754, 7181, 7719, 877, 3116, 6532, 5139, 8851, 6078, 447, 6269, 8276, 9115, 7742, 1326, 8340, 352, 826, 3163, 9349, 6444, 6072, 2794, 7593, 424, 4670, 9073, 2670, 5279, 7000, 6035, 6801, 2480, 7247, 6958, 7351, 4914, 1629, 4599, 6543, 681, 5103, 6093, 8405, 6359, 731, 6694, 748, 8038, 6206, 7139, 6732, 5437, 6984, 2556, 6752, 9008, 3921, 526, 4200, 4572, 8594, 2636, 7071, 751, 1390, 1463, 4999, 8610, 7687, 3796, 4949, 1449, 6050, 266, 7193, 7030, 1964, 5440, 2228, 5412, 8721, 8275, 9918, 3103, 4669, 2732, 1917, 8892, 6159, 5883, 9943, 9082, 3598, 2411, 7840, 8741, 3967, 5379, 8399, 2623, 6372, 9500, 6493, 5276, 9012, 8973, 1393, 7037, 2765, 5083, 7716, 134, 3125, 1904, 1243, 5008, 362, 812, 7582, 4316, 6792, 7824, 848, 9659, 943, 7001, 4471, 4651, 4041, 3850, 5612, 7341, 4372, 8555, 2855, 2082, 6316, 9654, 9602, 7349, 1313, 8920, 562, 8638, 9816, 3626, 5342, 6165, 4585, 29, 1383, 7459, 1998, 5804, 838, 485, 2332, 9322, 7888, 1787, 9852, 3957, 9223, 2951, 5768, 955, 3235, 8069, 5088, 2048, 9352, 2456, 4707, 6216, 8343, 9165, 9546, 7434, 6746, 8382, 1584, 9858, 1919, 1392, 6723, 1173, 8628, 437, 7270, 7358, 1036, 9406, 6354, 2029, 6945, 5765, 2452, 9075, 8536, 7584, 871, 2202, 771, 2532, 2932, 9117, 6287, 7571, 8145, 149, 3327, 6611, 8037, 6553, 1236, 9609, 582, 2326, 6688, 7523, 1068, 2862, 32, 6508, 1905, 3372, 9778, 6052, 8788, 8734, 7163, 7945, 1689, 8381, 6437, 3953, 7915, 5455, 8203, 6249, 3522, 5282, 2455, 2487, 1061, 7484, 7776, 1744, 2201, 1652, 5218, 6342, 4568, 4348, 9745, 7664, 5178, 7047, 9112, 6511, 729, 6862, 9301, 2519, 7463, 6321, 156, 7943, 8007, 109, 5946, 3814, 3218, 7186, 5511, 6063, 9470, 3727, 119, 3716, 4810, 4867, 5627, 8584, 2144, 1304, 5252, 3559, 1154, 4528, 7280, 6328, 3806, 6893, 4092, 1617, 5451, 5702, 9187, 4185, 4419, 6478, 5078, 8915, 1765, 8509, 8677, 2111, 9651, 4896, 6916, 122, 5950, 292, 2292, 5935, 5204, 6973, 516, 2256, 4246, 6813, 8726, 9201, 438, 4018, 3056, 5626, 7017, 9118, 3683, 9037, 2467, 1677, 8172, 2667, 3137, 9156, 8228, 2504, 8045, 5982, 1479, 6809, 1835, 6010, 6340, 7128, 8919, 867, 4884, 8941, 545, 1532, 7282, 5154, 7155, 6479, 9538, 7903, 3176, 5210, 1420, 8201, 1708, 9689, 8689, 1949, 9341, 6722, 2263, 7442, 3139, 6630, 770, 4617, 8164, 1377, 7065, 5193, 6858, 5153, 1027, 5602, 4733, 534, 6966, 879, 8777, 4961, 9021, 8858, 2823, 5980, 6098, 4544, 3268, 1926, 3281, 9848, 8656, 7965, 2875, 5554, 3826, 8982, 3936, 4440, 3651, 1668, 6547, 7656, 8043, 1625, 5655, 4689, 2936, 9892, 904, 7969, 760, 7119, 6604, 1636, 7333, 4259, 2968, 8072, 2974, 7372, 6857, 1155, 7425, 5584, 4176, 4700, 7188, 2357, 9968, 4701, 8597, 1843, 9158, 9220, 8236, 8542, 5161, 2387, 4904, 3078, 8406, 1623, 3079, 6710, 907, 1058, 2921, 4422, 6497, 6441, 5095, 7050, 3538, 3960, 2832, 1262, 9537, 120, 6417, 2762, 7273, 4523, 7284, 9494, 7809, 7679, 6060, 6784, 6334, 1747, 2339, 6138, 5732, 4696, 3115, 9053, 2345, 7973, 9323, 6415, 3, 9189, 2520, 9810, 257, 9788, 6582, 6962, 3310, 7528, 1757, 4256, 3332, 8803, 6463, 9613, 9527, 6469, 3754, 8407, 2350, 8193, 3490, 2592, 7829, 4343, 4918, 8272, 5467, 451, 4722, 5419, 9625, 7497, 3821, 5030, 9191, 7589, 6199, 9397, 6070, 7787, 5370, 1771, 8418, 3395, 796, 4962, 6025, 3251, 3338, 7410, 9554, 4108, 94, 747, 6706, 3150, 8698, 4111, 9177, 9436, 1294, 8077, 8605, 2815, 7072, 7298, 8912, 2577, 3902, 4521, 3149, 4611, 7465, 9575, 6519, 9130, 3582, 6586, 8822, 6024, 5376, 7718, 7257, 7547, 8985, 5121, 8049, 6867, 8148, 80, 5961, 1741, 5326, 7746, 9749, 7699, 2001, 8782, 8624, 490, 6744, 594, 9248, 1944, 4280, 2177, 3508, 1872, 15, 794, 8225, 1632]
  if (sandId.includes(parseInt(nftId))) {
  const sandOption = document.createElement('option');
  sandOption.value = layerImageUrls[36];
  sandOption.textContent = customLayerNames[36];
  layerDropdown.appendChild(sandOption);

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

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[150]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[150]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[176]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[176]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const diamondId = [9896, 4745, 5929, 7587, 8304, 264, 4685, 4153, 5463, 2971, 4555, 6262, 2469, 5503, 8986, 2876, 6006, 78, 8469, 2947, 4728, 5123, 2842, 9081, 9072, 5122, 9785, 9916, 8351, 1571, 3005, 2419, 9664, 5914, 9428, 671, 511, 3138, 2502, 7789, 5266, 7802, 8540, 8880, 9466, 842, 1791, 8487, 9791, 5808, 2969, 5783, 5448, 3526, 6487, 9598, 2760, 7021, 2043, 3315, 5517, 8783, 5322, 8692, 1591, 1994, 444, 4369, 4077, 7661, 4181, 7715, 9910, 389, 4392, 5707, 8482, 30, 9987, 6978, 6653, 5094, 9351, 3340, 710, 7977, 9822, 3375, 3193, 3780, 2237, 1358, 6620, 429, 4218, 6127, 9513, 6358, 3868, 2196, 4036, 5076, 7108, 4, 3382, 1153, 7893, 5105, 5104, 388, 5728, 665, 2903, 6163, 538, 4479, 6633, 6332, 1452, 6399, 93, 6647, 1763, 2379, 3261, 4025, 7972, 697, 2033, 2244, 4328, 7262, 835, 8686, 8047, 951, 7164, 6896, 5972, 9416, 7435, 2380, 4158, 4140]
  if (diamondId.includes(parseInt(nftId))) {
  const diamondOption = document.createElement('option');
  diamondOption.value = layerImageUrls[96];
  diamondOption.textContent = customLayerNames[96];
  layerDropdown.appendChild(diamondOption);

  const diamondShotOption = document.createElement('option');
  diamondShotOption.value = layerImageUrls[103];
  diamondShotOption.textContent = customLayerNames[103];
  layerDropdown.appendChild(diamondShotOption);

  const diamondBottleOption = document.createElement('option');
  diamondBottleOption.value = layerImageUrls[110];
  diamondBottleOption.textContent = customLayerNames[110];
  layerDropdown.appendChild(diamondBottleOption);

  const diamondBeerOption = document.createElement('option');
  diamondBeerOption.value = layerImageUrls[117];
  diamondBeerOption.textContent = customLayerNames[117];
  layerDropdown.appendChild(diamondBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[124]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[124]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[151]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[151]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[177]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[177]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const smirfId = [7720, 1342, 8123, 3619, 9065, 2873, 8940, 3285, 1127, 4215, 4137, 4133, 3027, 9514, 8391, 6828, 9252, 6699, 300, 4508, 7081, 1499, 2744, 4002, 1432, 5893, 2925, 8793, 8591, 1959, 2477, 3497, 9184, 2956, 3429, 4605, 1634, 6131, 7538, 6790, 8929, 2102, 9040, 3018, 9843, 4976, 1996, 4273, 8719, 6445, 2527, 9318, 8162, 6167, 6827, 1676, 5364, 1644, 4881, 7671, 1978, 4439, 5211, 5761, 4068, 271, 5235, 8725, 6314, 5495, 807, 9573, 1822, 8356, 5131, 9061, 9116, 7359, 8414, 2821, 3306, 6954, 5568, 3534, 2377, 5992, 8545, 8601, 3123, 6713, 8458, 3304, 4552, 2008, 1010, 5534, 5152, 6583, 2550, 9129, 7363, 5112, 903, 2722, 173, 411, 8599, 7376, 3177, 5608, 8394, 1232, 5304, 185, 7396, 9584, 5720, 381, 6703, 3336, 8748, 5424, 1429, 7738, 7373, 9562, 1603, 6147, 889, 8434, 1214, 5264, 4554, 979, 2053, 8227, 5481, 811, 5026, 7236, 9240, 7726, 8309, 1344, 993, 9873, 4614, 6221, 2544, 5385, 5906, 7126, 1567, 2479, 9737, 9502, 2328, 7249, 4985, 8208, 133, 6742, 1395, 6931, 2210, 3697, 8767, 4053, 8075, 638, 3344, 846, 1148, 7956, 6531, 8140, 9511, 9555, 2423, 1641, 1832, 9200, 5312, 2182, 1263, 8761, 682, 7873, 8700, 9528, 6816, 3448, 4449, 5869, 2597, 6781, 4485, 6113, 7405, 6623, 2590, 9401, 1544, 1700, 8483, 8117, 4937, 1133, 1086, 9087, 1933, 2361, 9837, 4128, 4501, 8630, 5897, 7616, 1442, 9735, 4235, 9536, 1387, 5628, 7168, 9127, 2334, 8770, 7979, 4557, 9354, 6988, 7464, 6237, 4443, 9665, 5792, 1970, 3656, 4052, 2069, 6100, 5107, 6901, 6004, 6607, 9138, 3652, 870, 852, 1398, 8879, 3840, 6, 7578, 7763, 402, 7191, 1378, 7074, 6568, 2346, 5794, 3533, 1702, 7077, 585, 7278, 2856, 5556, 9314, 5042, 2965, 8400, 4130, 8979, 2668, 7639, 4768, 1119, 4714, 6517, 7657, 6104, 9853, 7592, 5173, 3498, 2239, 3020, 107, 5730, 7875, 3418, 2662, 2169, 5871, 2129, 1288, 1201, 2160, 7568, 9865, 2306, 7409, 887, 8359, 1184, 6641, 9154, 3637, 1887, 2091, 2837, 6681, 573, 8681, 6914, 6673, 1951, 9364, 5024, 8910, 191, 2799, 4011, 9232, 2896, 7905, 7323, 1476, 5275, 8766, 8731, 9739, 2042, 9083, 542, 1674, 2012, 6912, 9851, 3682, 3411, 3205, 3776, 3892, 8580, 6895, 6615, 7006, 7312, 5426, 4659, 3929, 7864, 4879, 4070, 4561, 328, 4141, 4911, 1609, 2685, 2962, 8657, 6768, 4540, 6879, 8476, 3528, 2131, 4122, 3415, 8876, 4198, 3482, 4276, 4673, 5240, 3701, 704, 4364, 287, 2187, 9174, 6536, 104, 5969, 1099, 3308, 2130, 1910, 8195, 6763, 2322, 571, 3805, 7851, 3662, 715, 7198, 5258, 6233, 1245, 8688, 5839, 3168, 6228, 6680, 1002, 9164, 4813, 9675, 2859, 8883, 9469, 939, 753, 1602, 6737, 7491, 9016, 9849, 8505, 4926, 1308, 448, 1648, 8804, 8316, 2977, 8849, 4212, 3477, 4112, 9264, 4832, 8821, 4397, 9150, 716, 3751, 9977, 953, 3623, 9050, 4344, 5697, 9870, 6940, 6087, 2291, 6935, 1621, 9391, 3152, 6512, 9234, 8525, 3250, 6721, 1714, 4679, 7204, 252, 9706, 4858, 8295, 2743, 3434, 1871, 1503, 6148, 537, 5850, 200, 2950, 4281, 4942, 5245, 2472]
  if (smirfId.includes(parseInt(nftId))) {
  const smirfOption = document.createElement('option');
  smirfOption.value = layerImageUrls[97];
  smirfOption.textContent = customLayerNames[97];
  layerDropdown.appendChild(smirfOption);

  const smirfShotOption = document.createElement('option');
  smirfShotOption.value = layerImageUrls[104];
  smirfShotOption.textContent = customLayerNames[104];
  layerDropdown.appendChild(smirfShotOption);

  const smirtBottleOption = document.createElement('option');
  smirtBottleOption.value = layerImageUrls[111];
  smirtBottleOption.textContent = customLayerNames[111];
  layerDropdown.appendChild(smirtBottleOption);

  const smirfBeerOption = document.createElement('option');
  smirfBeerOption.value = layerImageUrls[118];
  smirfBeerOption.textContent = customLayerNames[118];
  layerDropdown.appendChild(smirfBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[125]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[125]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[152]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[152]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[178]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[178]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const skeletonId = [4563, 251, 2013, 458, 2142, 6751, 7812, 2097, 4598, 679, 17, 3550, 4627, 3267, 8061, 6090, 4335, 7195, 6405, 2675, 85, 4450, 2755, 5183, 1619, 4795, 8150, 4618, 2153, 9999, 4362, 3151, 507, 7414, 4020, 493, 9835, 8894, 3761, 6457, 6900, 5409, 3328, 5414, 4851, 1682, 1139, 8327, 583, 809, 8754, 7371, 9456, 3578, 8514, 7993, 5056, 4569, 7920, 1247, 3388, 3641, 2985, 5356, 6139, 7489, 4597, 7675, 3289, 5656, 4178, 9426, 629, 6705, 9071, 6730, 3857, 3942, 5362, 9429, 3220, 3530, 6319, 9751, 6030, 8758, 9161, 909, 9758, 2833, 4826, 5257, 1560, 7206, 1348, 5700, 8712, 1056, 8789, 1001, 8074, 7279, 7939, 1087, 5815, 3889, 5832, 31, 2396, 6499, 2081, 6043, 4415, 286, 4677, 551, 7362, 8396, 4913, 1372, 3118, 6055, 3576, 199, 7780, 6196, 7970, 1146, 1722, 324, 5928, 1310, 8801, 8546, 4764, 7016, 4154, 2193, 7680, 8046, 6083, 5366, 9646, 4076, 8112, 6385, 8995, 5092, 3747, 6214, 9827, 3894, 5427, 2626, 5690, 3212, 1902, 8254, 4033, 4928, 7642, 3574, 6856, 4223, 1397, 799, 4628, 938, 6740, 7258, 4115, 391, 4096, 467, 4315, 8513, 4683, 3595, 5785, 4089, 8991, 3363, 1494, 5219, 5784, 3439, 3183, 9855, 7857, 3723, 3543, 1661, 61, 1847, 6785, 9393, 6227, 4959, 6122, 495, 3148, 242, 1834, 6215, 8908, 4357, 7121, 5681, 8341, 8693, 8142, 3379, 2010, 9256, 9683, 8263, 7603, 7444, 6625, 1064, 4370, 1709, 6567, 8728, 6873, 205, 1389, 7937, 6406, 9119, 9064, 4675, 1467, 4539, 8373, 3320, 7619, 5828, 5686, 3301, 5505, 8641, 4671, 1776, 5113, 9212, 5203, 6770, 7011, 4497, 3766, 5475, 5170, 8587, 5144, 5965, 8226, 1031, 8994, 1601, 2749, 2430, 4686, 4969, 8742, 6061, 5895, 5900, 8114, 519, 4863, 6293, 8765, 625, 5622, 9564, 7304, 3012, 7674, 5971, 1687, 4135, 4744, 1780, 630, 8817, 294, 2963, 6540, 1380, 6275, 8961, 1848, 9059, 8222, 4794, 8194, 8701, 8288, 3359, 6593, 6253, 3140, 4395, 2438, 3356, 2900, 5734, 9111, 4842, 1083, 918, 1394, 4998, 4453, 1563, 1203, 1983, 8364, 5073, 9569, 6317, 3253, 1160, 6814, 5664, 9679, 395, 1960, 5198, 4978, 944, 1170, 2038, 7485, 6273, 7918, 7673, 9676, 9023, 5799, 6711, 8925, 3041, 8204, 3825, 1000, 304, 6248, 3191, 6795, 8573, 4952, 249, 5292, 5338
]
  if (skeletonId.includes(parseInt(nftId))) {
  const skeletonOption = document.createElement('option');
  skeletonOption.value = layerImageUrls[98];
  skeletonOption.textContent = customLayerNames[98];
  layerDropdown.appendChild(skeletonOption);

  const skeletonShotOption = document.createElement('option');
  skeletonShotOption.value = layerImageUrls[105];
  skeletonShotOption.textContent = customLayerNames[105];
  layerDropdown.appendChild(skeletonShotOption);

  const skeletonBottleOption = document.createElement('option');
  skeletonBottleOption.value = layerImageUrls[112];
  skeletonBottleOption.textContent = customLayerNames[112];
  layerDropdown.appendChild(skeletonBottleOption);

  const skeletonBeerOption = document.createElement('option');
  skeletonBeerOption.value = layerImageUrls[119];
  skeletonBeerOption.textContent = customLayerNames[119];
  layerDropdown.appendChild(skeletonBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[126]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[126]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[153]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[153]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[179]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[179]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const yetiId = [9441, 1453, 2595, 9042, 5949, 2331, 1500, 6085, 6173, 7452, 5582, 2959, 6042, 1504, 4333, 6883, 4864, 7160, 9699, 8557, 2259, 5729, 8390, 3808, 2235, 1767, 2857, 7318, 5016, 3291, 8836, 1607, 6991, 5824, 7144, 6628, 7983, 6852, 9126, 7141, 9186, 4040, 8662, 7630, 6201, 8427, 469, 7316, 7344, 9444, 9712, 5957, 3443, 6345, 3920, 2548, 3324, 8146, 3371, 6682, 9080, 1768, 9095, 4801, 2914, 2850, 7185, 5156, 4776, 7770, 2442, 8256, 3318, 2904, 3207, 2531, 6938, 1980, 3725, 6877, 849, 1660, 6153, 3933, 821, 3976, 1317, 2777, 6040, 4224, 3299, 6600, 2126, 3420, 1047, 5149, 7601, 8547, 4829, 9741, 8769, 1680, 1850, 9302, 7192, 7561, 8583, 9376, 5352, 5968, 6411, 8642, 2845, 3919, 3086, 9736, 8711, 4769, 33, 2161, 1725, 2828, 8245, 1630, 1441, 9171, 4891, 2219, 8842, 2751, 5801, 2776, 8274, 2587, 6121, 4044, 4859, 2461, 1193, 3992, 9773, 2966, 3923, 7426, 9640, 1853, 2186, 3515, 1553, 8792, 3944, 256, 2814, 1916, 861, 899, 759, 4027, 7761, 3830, 1925, 4193, 4365, 4045, 7183, 3229, 745, 1172, 9667, 9795, 4022, 4217, 9258, 5590, 7575, 4383, 1720, 1923, 8029, 1461, 4466, 6836, 4899, 5538, 7398, 7908, 7462, 322, 5021, 2708, 9861, 3300, 2167, 1075, 1809, 2298, 8128, 6865, 4189, 4327, 1284, 722, 7737, 3006, 8676, 8259, 3793, 676, 9208, 3084, 2060, 378, 8014, 3971, 4339, 9353, 8890, 9407, 143, 8753, 4175, 7199, 36, 8078, 885, 2245, 2835, 7342, 278, 5572, 9289, 5920, 1815, 2264, 3692, 6099, 5593, 7622, 4110, 4196, 4943, 1654, 2563, 558, 1663, 8687, 9813, 3740, 5214, 9830, 1688, 6177, 4809, 4692, 666, 3721, 2680, 3143, 9347, 5035, 4872, 8491, 2844, 1947, 7200, 1291, 9685, 3246, 6943, 789, 5837, 1188, 9321, 7329, 2641, 96, 8273, 2618, 1073, 8571, 5433, 3848, 6451, 2625, 6212, 8495, 5367, 5918, 510, 9656, 5826, 4384, 1018, 3980, 6155, 6192, 6525, 6913, 3432, 2358, 11, 9951, 6521, 8518, 7778, 4267, 6933, 1222, 2884, 1501, 3710, 7652, 7686, 5255, 7445, 7950, 576, 8017, 5273, 3455, 1740, 5745, 1605, 1417, 8664, 3393, 9422, 3412, 3798, 2525, 8714, 9658, 6761, 9086, 7028, 2688, 7845, 1205, 7881, 4623, 9230, 6516, 7927, 7621, 7049, 3939, 2367, 6117, 7419, 3063, 8419, 1143, 1250, 3838, 6503, 9241, 2613, 4417, 8646, 6859, 7842, 466, 8065, 5726, 6982, 8214, 958, 4517, 592, 8530, 9263, 868, 4279, 9193, 4923, 9753, 5052, 8854, 221, 3633, 5033, 5439, 7392, 9206, 9105, 7762, 667]
  if (yetiId.includes(parseInt(nftId))) {
  const yetiOption = document.createElement('option');
  yetiOption.value = layerImageUrls[99];
  yetiOption.textContent = customLayerNames[99];
  layerDropdown.appendChild(yetiOption);

  const yetiShotOption = document.createElement('option');
  yetiShotOption.value = layerImageUrls[106];
  yetiShotOption.textContent = customLayerNames[106];
  layerDropdown.appendChild(yetiShotOption);

  const yetiBottleOption = document.createElement('option');
  yetiBottleOption.value = layerImageUrls[113];
  yetiBottleOption.textContent = customLayerNames[113];
  layerDropdown.appendChild(yetiBottleOption);

  const yetiBeerOption = document.createElement('option');
  yetiBeerOption.value = layerImageUrls[120];
  yetiBeerOption.textContent = customLayerNames[120];
  layerDropdown.appendChild(yetiBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[127]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[127]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[154]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[154]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[180]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[180]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const radioId = [5661, 9155, 8760, 75, 3690, 9627, 7375, 1751, 7926, 2085, 644, 5819, 6125, 819, 8436, 7374, 4171, 2058, 3107, 4393, 3136, 9356, 345, 5321, 8548, 9182, 8684, 2741, 8297, 329, 1805, 2827, 8355, 8333, 8729, 6245, 9259, 6361, 9982, 646, 855, 6424, 9146, 6161, 977, 9325, 9275, 7987, 560, 774, 455, 8247, 44, 5129, 5921, 9516, 2540, 7678, 6168, 54, 6922, 4399, 8278, 3986, 8865, 21, 7648, 4416, 7549, 6435, 9448, 8708, 9291, 6211, 9033, 9624, 7594, 7638, 1828, 7003, 7022, 4487, 5232, 3935, 8131, 9958, 2276, 2156, 9298, 6506, 7321, 2054, 1716, 2271, 4786, 5337, 5814, 8005, 6080, 4748, 3186, 9693, 7910, 2826, 9028, 471, 8969, 2113, 3170, 7130, 6640, 7733, 3860, 5790, 6959, 810, 8652, 9617, 2329, 1330, 3004, 614, 8528, 6137, 8512, 7057, 7427, 2801, 8216, 7553, 6552, 8519, 7123, 2923, 6467, 7771, 6301, 2465, 7535, 1488, 396, 3358, 962, 6363, 6460, 3586, 3126, 9224, 4735, 9420, 3650, 4548, 539, 4121, 3507, 7196, 5552, 8395, 8192, 2582, 8850, 612, 670, 9361, 9296, 5813, 355, 7223, 1977, 757, 2734, 4472, 7665, 8950, 5680, 2897, 9131, 9770, 2653, 3555, 4543, 5769, 8097, 1187, 500, 9898, 995, 262, 9919, 1239, 335, 7608, 3856, 5151, 595, 1375, 1659, 8001, 1117, 8739, 6234, 5169, 3519, 1640, 6928, 3192, 488, 3802, 4355, 6421, 4833, 37, 7091, 6279, 6077, 3621, 8099, 4241, 7966, 8578, 5528, 8833, 1647, 6335, 7702, 8820, 6383, 1276, 8559, 4981, 5196, 5933, 4951, 2721, 3849, 668, 1462, 1150, 227, 8575, 8175, 4306, 916, 6569, 3974, 3914, 146, 6149, 8076, 2659, 9290, 2629, 4247, 541, 1357, 4592]
  if (radioId.includes(parseInt(nftId))) {
  const radioOption = document.createElement('option');
  radioOption.value = layerImageUrls[100];
  radioOption.textContent = customLayerNames[100];
  layerDropdown.appendChild(radioOption);

  const radioShotOption = document.createElement('option');
  radioShotOption.value = layerImageUrls[107];
  radioShotOption.textContent = customLayerNames[107];
  layerDropdown.appendChild(radioShotOption);

  const radioBottleOption = document.createElement('option');
  radioBottleOption.value = layerImageUrls[121];
  radioBottleOption.textContent = customLayerNames[121];
  layerDropdown.appendChild(radioBottleOption);

  const radioBeerOption = document.createElement('option');
  radioBeerOption.value = layerImageUrls[75];
  radioBeerOption.textContent = customLayerNames[75];
  layerDropdown.appendChild(radioBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[128]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[128]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[155]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[155]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[181]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[181]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}
const lavaId = [5616, 9820, 3215, 9329, 245, 599, 1753, 4245, 8585, 1374, 5462, 6130, 9983, 5371, 9032, 1774, 2831, 7076, 8862, 7486, 5084, 301, 4166, 6894, 1498, 2000, 9812, 2783, 22, 9094, 7743, 8438, 2973, 3313, 4529, 8392, 8116, 7541, 51, 9000, 954, 922, 2899, 8085, 6870, 5966, 4890, 622, 3240, 1419, 6157, 2958, 5506, 1230, 9159, 9402, 6919, 5082, 9435, 3628, 6805, 5345, 7225, 4391, 1235, 860, 4288, 7389, 2682, 8331, 3110, 2333, 5759, 4503, 4474, 6347, 235, 2137, 2813, 3893, 1054, 5907, 1252, 6062, 7100, 2159, 8032, 1749, 9871, 5545, 8163, 9196, 341, 569, 8532, 6990, 4377, 9268, 3087, 3585, 1293, 8064, 7793, 5330, 8284, 7482, 3958, 3900, 219, 9891, 2759, 4216, 3746, 3114, 7317, 6380, 3111, 2371, 5166, 5504, 1927, 4648, 2957, 7744, 2694, 3402, 2450, 1705, 5979, 9724, 9605, 5239, 2996, 8083, 5443, 7830, 7612, 968, 1717, 2095, 4664, 9348, 4676, 1578, 1174, 26, 238, 1592, 5852, 3973, 2022, 4571, 2490, 2779, 1202, 2615, 2864, 7579, 5507, 4345, 8660, 2270, 9482, 3552, 2517, 7207, 7514, 8404, 6992, 5055, 6225, 2596, 4903, 4762, 9920, 5698, 1035, 6268, 3034, 9176, 8057, 9377, 4724, 8805, 8703, 2619, 9660, 3629, 9769, 5657, 6821, 2655, 4798, 3333, 7833, 574, 4313, 8440, 9742, 2200, 3361, 8999, 4699, 4698, 5595, 6767, 2938, 3435, 9293, 267, 2796, 1024, 3847, 9687, 2746, 9897, 4590, 1339, 2176, 9299, 8277, 9644, 4778, 6183, 8967, 1550, 9512, 1352, 4055, 8663, 9128, 5952, 3366, 725, 4657, 9636, 9819, 648, 772, 6434, 5489, 5034, 5633, 8403, 3023, 5553, 5002, 9710, 8217, 2401, 5523, 13, 1318, 4591, 5320, 4368, 6968, 7952, 6579, 9078, 8494, 8650, 4825, 2907, 4073, 2197, 4919, 701, 4834, 5994, 8493, 9803, 8871, 3913, 2824, 8913, 6803, 7701, 5560, 9386, 1712, 756]
  if (lavaId.includes(parseInt(nftId))) {
  const lavaOption = document.createElement('option');
  lavaOption.value = layerImageUrls[101];
  lavaOption.textContent = customLayerNames[101];
  layerDropdown.appendChild(lavaOption);

  const lavaShotOption = document.createElement('option');
  lavaShotOption.value = layerImageUrls[108];
  lavaShotOption.textContent = customLayerNames[108];
  layerDropdown.appendChild(lavaShotOption);

  const lavaBottleOption = document.createElement('option');
  lavaBottleOption.value = layerImageUrls[115];
  lavaBottleOption.textContent = customLayerNames[115];
  layerDropdown.appendChild(lavaBottleOption);

  const lavaBeerOption = document.createElement('option');
  lavaBeerOption.value = layerImageUrls[122];
  lavaBeerOption.textContent = customLayerNames[122];
  layerDropdown.appendChild(lavaBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[129]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[129]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[156]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[156]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[182]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[182]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
}

const walnutId = [7959, 7504, 7751, 8554, 2515, 775, 9952, 506, 7930, 7194, 8283, 6276, 6890, 4366, 4039, 1614, 3003, 4381, 9216, 7390, 6817, 2877, 527, 2136, 7214, 1329, 6602, 7019, 6563, 1650, 3678, 1366, 7597, 3592, 8424, 4877, 2003, 8258, 791, 5954, 7408, 9839, 8079, 9935, 4431, 4972, 9610, 8875, 2103, 3854, 6073, 9214, 9825, 7431, 688, 5128, 9953, 7422, 7235, 758, 5003, 7293, 2232, 555, 5397, 1683, 1334, 6397, 7014, 3752, 5077, 2809, 6128, 9857, 5363, 8780, 2035, 7177, 100, 2135, 3763, 3584, 1413, 7494, 7708, 7399, 3956, 8972, 4152, 8173, 7978, 5951, 2015, 7691, 2795, 3883, 8237, 3335, 4331, 5708, 6392, 7786, 168, 7099, 1518, 3414, 1347, 4873, 70, 8155, 5473, 2006, 5981, 3565, 6970, 543, 5782, 8561, 2483, 8830, 5750, 3201, 2503, 270, 5860, 169, 2602, 1271, 5551, 1502, 1400, 3812, 9587, 3996, 3861, 5007, 8300, 6731, 7855, 1176, 4749, 5993, 3082, 7220, 1323, 4704, 302, 6869, 8070, 3952, 6312, 7174, 9489, 3966, 7865, 6889, 9694, 3314, 520, 994, 6853, 3744, 1130, 4630, 5641, 6490, 7886, 163, 7729, 4408, 8136, 4538, 1340, 9829, 193, 360, 7936, 3819, 10000, 6191, 6675, 9017, 2695, 1495, 3245, 788, 1829, 2591, 5227, 1162, 4948, 4562, 204, 9547, 1280, 9180, 1032, 3655, 230, 6560, 1957, 9175, 7475, 7681, 7010, 2723, 769, 4984, 8886, 9273, 3436, 5430, 6578, 1572, 137, 3516, 4963, 5669, 5014, 7800, 7755, 77, 8868, 3649, 4209, 3773, 700, 1858, 6265, 897, 6963, 6695, 2233, 5756, 7251, 5141, 9780, 6485, 5046, 2870, 6019, 8751, 8042, 2352, 2501, 1912, 8814, 4032, 8633, 398, 5663, 5483, 9433, 1128, 9066, 269, 9938, 6878, 4782, 6550, 5099, 9207, 1053, 1196, 6743, 6146, 8658, 6758, 6936, 84, 6989, 410, 1792, 7611, 2370, 1968, 2128, 9281, 159, 4374, 4912, 2656, 6961, 4168, 8369, 3260, 9387, 5215, 600, 8498, 7713, 334, 785, 4266, 2432, 333, 4761, 1569, 2522, 4062, 4248, 326, 8901, 4546, 4678, 2895, 4351, 3694, 8889, 8371, 6910, 1142, 8105, 8604, 6800, 9121, 6056, 1415, 9821, 6904, 1274, 1490, 5143, 9550, 5899, 6134, 5333, 3354, 7795, 5032, 9657, 1336, 5878, 2570, 7205, 3867, 2981, 1095, 9637, 880, 9860, 6258, 1016, 1618, 5053, 3770, 6691, 7498, 3712, 6470, 6580, 6739, 8224, 4512, 2634, 2609, 3057, 2696, 2928, 1793, 2689, 1649, 1074, 265, 5548, 4452, 4319, 2258, 289, 3844, 9403, 3510, 144, 5796, 7095, 4139, 4621, 8352, 4049, 7662, 1220, 7263, 3341, 5812, 568, 1167, 4492, 2852, 4802, 2580, 5879, 3009, 3693, 9151, 786, 2528, 5226, 5259, 3982, 9766, 6278, 5159, 9762, 3213, 663, 6241, 9392, 8010, 6903, 3182, 2594, 1548, 296, 7804, 7721, 2444, 1914, 3016, 2418, 8964, 3736, 3965, 5777, 1314, 9728, 1020, 9077, 9414, 2943, 5408, 2195, 8581, 7345, 5069, 2122, 566, 8824, 5236, 6141, 3202, 8637, 5010, 3048, 721, 6724, 6461, 2713, 5353, 4405, 8938, 5168, 1388, 9219, 4038, 2349, 5136, 5574, 4429, 5822, 1600, 6734, 347, 1890, 5527, 7543, 1598, 2277, 5866, 4642, 5391, 9663, 5336, 9884, 1391, 1875, 273, 6331, 711, 5888, 5316, 7319, 7745, 9531, 7401, 5549, 9626, 991, 1701, 2364, 8911, 781, 8816, 7871, 9452, 259, 8884, 4205, 6133, 6162, 6475, 4736, 7606, 5286, 5303, 2778, 9806, 6472, 1015, 8827, 2865, 9106, 2257, 1961, 6692, 2420, 4866, 4636, 8927, 9542, 2704, 924, 9459, 4852, 5442, 8957, 43, 3687, 9359, 2112, 1512, 5944, 1993, 9243, 7173, 8181, 2080, 6150, 4755, 7070, 7104, 4305, 7269, 5176, 8485, 2607, 5059, 4662, 1137, 7834, 6280, 9046, 3563, 1657, 4457, 3456, 5182, 1719, 9477, 3903, 5295, 7369, 4145, 8092, 2761, 9619, 9472, 5115, 2536, 3589, 3869, 1473, 7124, 8187, 5863, 3362, 4668, 8196, 1219, 9838, 7583, 4318]
  if (walnutId.includes(parseInt(nftId))) {
  const walnutOption = document.createElement('option');
  walnutOption.value = layerImageUrls[102];
  walnutOption.textContent = customLayerNames[102];
  layerDropdown.appendChild(walnutOption);

  const lavaShotOption = document.createElement('option');
  lavaShotOption.value = layerImageUrls[109];
  lavaShotOption.textContent = customLayerNames[109];
  layerDropdown.appendChild(lavaShotOption);

  const lavaBottleOption = document.createElement('option');
  lavaBottleOption.value = layerImageUrls[116];
  lavaBottleOption.textContent = customLayerNames[116];
  layerDropdown.appendChild(lavaBottleOption);

  const lavaBeerOption = document.createElement('option');
  lavaBeerOption.value = layerImageUrls[123];
  lavaBeerOption.textContent = customLayerNames[123];
  layerDropdown.appendChild(lavaBeerOption);

  const pizzaOption = document.createElement('option');
  pizzaOption.value = layerImageUrls[76]; // Assuming Shot layer URL is the second in the array
  pizzaOption.textContent = customLayerNames[76]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(pizzaOption);

  const ledgerOption = document.createElement('option');
  ledgerOption.value = layerImageUrls[130]; // Assuming Shot layer URL is the second in the array
  ledgerOption.textContent = customLayerNames[130]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(ledgerOption);

  const tacoOption = document.createElement('option');
  tacoOption.value = layerImageUrls[131]; // Assuming Shot layer URL is the second in the array
  tacoOption.textContent = customLayerNames[131]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(tacoOption);

  const handv2Option = document.createElement('option');
  handv2Option.value = layerImageUrls[157]; // Assuming Shot layer URL is the second in the array
  handv2Option.textContent = customLayerNames[157]; // Assuming Shot layer name is the second in the array
  layerDropdown.appendChild(handv2Option);

  const diamondv2Option = document.createElement('option');
    diamondv2Option.value = layerImageUrls[183]; // Assuming Shot layer URL is the second in the array
    diamondv2Option.textContent = customLayerNames[183]; // Assuming Shot layer name is the second in the array
    layerDropdown.appendChild(diamondv2Option);
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
}else if (imageUrl === layerImageUrls[96]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[97]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[98]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[99]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[100]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[101]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[102]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[103]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[104]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[105]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[106]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[107]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[108]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[109]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[110]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[111]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[112]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[113]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[114]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[115]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[116]) {
  layerOverlay.classList.add('brown-shot-layer');
}else if (imageUrl === layerImageUrls[117]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[118]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[119]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[120]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[121]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[122]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[123]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[124]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[125]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[126]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[127]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[128]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[129]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[130]) {
  layerOverlay.classList.add('ledger');
}else if (imageUrl === layerImageUrls[131]) {
  layerOverlay.classList.add('brown-beer-layer');
}else if (imageUrl === layerImageUrls[132]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[133]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[134]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[135]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[136]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[137]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[138]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[139]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[140]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[141]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[142]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[143]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[144]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[145]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[146]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[147]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[148]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[149]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[150]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[151]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[152]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[153]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[154]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[155]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[156]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[157]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[158]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[159]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[160]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[161]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[162]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[163]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[164]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[165]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[166]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[167]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[168]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[169]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[170]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[171]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[172]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[173]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[174]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[175]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[176]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[177]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[178]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[179]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[180]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[181]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[182]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
}else if (imageUrl === layerImageUrls[183]) {
  layerOverlay.classList.add('brown-gm-cup-layer');
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
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
        
        
          } else if (layerImageUrl === layerImageUrls[1]) {
            // Shot layer
            const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
            
          } else if (layerImageUrl === layerImageUrls[38]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[110]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[111]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[112]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[131]) {
            // Bottle Layer
            const bottleX = 150; // Adjust this value for the desired left-side position
            const bottleY = canvas.height - layerImage.height * 2;
            const bottleWidth = layerImage.width * 2; // Adjusting width
            const bottleHeight = layerImage.height * 2; // Adjusting height
        
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
    
        
          } else if (layerImageUrl === layerImageUrls[113]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[114]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[115]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[116]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[2]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[3]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[39]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[4]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[5]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[40]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[6]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
            
          } else if (layerImageUrl === layerImageUrls[7]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[41]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[8]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[9]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }
          else if (layerImageUrl === layerImageUrls[103]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[104]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[105]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }
          else if (layerImageUrl === layerImageUrls[106]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } 
          else if (layerImageUrl === layerImageUrls[107]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } 
          else if (layerImageUrl === layerImageUrls[108]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } 
          else if (layerImageUrl === layerImageUrls[109]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }  else if (layerImageUrl === layerImageUrls[42]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[10]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[11]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[43]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[12]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[13]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[44]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[14]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[15]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[45]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          } else if (layerImageUrl === layerImageUrls[16]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[17]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[46]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[18]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[19]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[47]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[20]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[21]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[48]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[22]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[23]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[49]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[24]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[25]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[50]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[26]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[27]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[51]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[28]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[29]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[52]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[30]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[31]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[53]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[32]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[96]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[97]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[98]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[99]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[100]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[101]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[102]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[33]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[54]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[34]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[35]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[55]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[36]) {
            // GM Cup layer
            const gmCupX = (canvas.width - layerImage.width * 1.7) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.7; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.7; // Adjusting width
            const gmCupHeight = layerImage.height * 1.7; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[37]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          } else if (layerImageUrl === layerImageUrls[56]) {
            // Bottle Layer
            const bottleX = canvas.width - layerImage.width * 1.5 - 150;
            const bottleY = canvas.height - layerImage.height * 1.5;
            const bottleWidth = layerImage.width * 1.5; // Adjusting width
            const bottleHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, bottleX, bottleY, bottleWidth, bottleHeight);
          }else if (layerImageUrl === layerImageUrls[57]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[117]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[118]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[119]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[120]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[121]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[122]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[123]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[58]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[59]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[60]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[61]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[62]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[63]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[64]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[65]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[66]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[67]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[68]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[69]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[70]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[71]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[72]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[73]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[74]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[75]) {
            // Beer Layer
           const beerX = 0; // Aligning the left edge of the layer with the left edge of the canvas
const beerY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
const beerWidth = layerImage.width * 1.5; // Adjusting width
const beerHeight = layerImage.height * 1.5; // Adjusting height

ctx.drawImage(layerImage, beerX, beerY, beerWidth, beerHeight);
          }else if (layerImageUrl === layerImageUrls[76]) {
            // Pizza
            const pizzaX = 0; // Aligning the left edge of the layer with the left edge of the canvas
            const pizzaY = canvas.height - layerImage.height * 1.5; // Aligning the bottom edge of the layer with the bottom edge of the canvas
            const pizzaWidth = layerImage.width * 1.7; // Adjusting width
            const pizzaHeight = layerImage.height * 1.7; // Adjusting height
            
            ctx.drawImage(layerImage, pizzaX, pizzaY, pizzaWidth, pizzaHeight);
            
          }else if (layerImageUrl === layerImageUrls[77]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[124]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[125]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[126]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[127]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[128]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[129]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[130]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[78]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[79]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[80]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[81]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[82]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[83]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[84]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[85]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[86]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[87]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[88]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[89]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[90]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[91]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[92]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[93]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[94]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }else if (layerImageUrl === layerImageUrls[95]) {
            // Shot layer
             const shotX = canvas.width - layerImage.width * 1.5 - 150; // Adjusting x position
            const shotY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const shotWidth = layerImage.width * 1.5; // Adjusting width
            const shotHeight = layerImage.height * 1.5; // Adjusting height
            
            ctx.drawImage(layerImage, shotX, shotY, shotWidth, shotHeight);
          }  else if (layerImageUrl === layerImageUrls[132]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          } else if (layerImageUrl === layerImageUrls[133]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[134]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[135]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[136]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[137]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[138]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[139]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[140]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[141]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[142]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[143]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[144]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[145]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[146]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[147]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[148]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[149]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[150]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[151]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[152]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[153]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[154]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[155]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[156]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[157]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[158]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[159]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[160]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[161]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[162]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[163]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[164]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[165]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[166]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[167]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[168]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[169]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[170]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[171]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[172]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[173]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[174]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[175]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[176]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[177]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[178]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[179]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[180]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[181]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[182]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
          }else if (layerImageUrl === layerImageUrls[183]) {
            // GM Cup layer
             const gmCupX = (canvas.width - layerImage.width * 1.5) / 2; // Adjusting x position
            const gmCupY = canvas.height - layerImage.height * 1.5; // Adjusting y position
            const gmCupWidth = layerImage.width * 1.5; // Adjusting width
            const gmCupHeight = layerImage.height * 1.5; // Adjusting height
        
            ctx.drawImage(layerImage, gmCupX, gmCupY, gmCupWidth, gmCupHeight);
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
