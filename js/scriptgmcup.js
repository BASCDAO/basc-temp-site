document.addEventListener('DOMContentLoaded', function() {
  // Get references to the elements
  const fetchButton = document.getElementById('fetchButton');
  const mergeButton = document.getElementById('mergeButton');

  // Add click event listener to the fetch button
  fetchButton.addEventListener('click', fetchNFT);

  // Add click event listener to the merge button
  mergeButton.addEventListener('click', mergeAndDownload);
});

const selectedGMCupImages = [];

function fetchNFT() {
  const nftIdInput = document.getElementById('nftIdInput');
  const nftId = nftIdInput.value.trim();

  if (nftId === '') {
    alert('Please enter an NFT ID');
    return;
  }

  const nftImageUrl = `https://raw.githubusercontent.com/akh1lsol/Bascdao.net/main/New%20Collection/${nftId}.png`;
  const gmCupImageUrls = [
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_GOLD.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_BLACK.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_BLUE.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_BROWN.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_CHEETAH.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_CREAM.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_DARK_BROWN.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_DEATH_BOT.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_DMT.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_GOLDEN_BROWN.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_GREY.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_NOISE.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_PINK.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_RED.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_ROBO.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_TRIPPY.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_WHITE.png',
    'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/GM_ZOMBIE.png',
    // Add more GM cup image URLs here
    // 'https://raw.githubusercontent.com/SOLamyy/BoredApeGallery/main/gmcup/...',
  ];

  const img = new Image();
  img.onload = function() {
    displayImage(nftImageUrl);
    addButton(gmCupImageUrls);
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

const customGMCupNames = ['Gold Fur', 'Black Fur', 'Blue Fur', 'Brown Fur', 'Cheetah Fur', 'Cream Fur', 'Dark Brown Fur', 'Death Bot Fur', 'DMT Fur', 'Golden Brown Fur', 'Grey Fur', 'Noise Fur' , 'Pink Fur', 'Red Fur', 'Robo Fur', 'Trippy Fur', 'White Fur', 'Zombie Fur'];

function addButton(gmCupImageUrls) {
  const dropdownContainer = document.createElement('div');
  dropdownContainer.classList.add('dropdown-container');
  const dropdown = document.createElement('select');
  dropdown.id = 'gmcup-dropdown';

  // Add the default option "CHOOSE YOUR CUP"
  const defaultOption = document.createElement('option');
  defaultOption.value = '';
  defaultOption.textContent = 'CHOOSE YOUR CUP';
  dropdown.appendChild(defaultOption);

  gmCupImageUrls.forEach((gmCupImageUrl, index) => {
    const option = document.createElement('option');
    option.value = gmCupImageUrl;
    option.textContent = customGMCupNames[index];
    dropdown.appendChild(option);
  });

  dropdown.addEventListener('change', function() {
    const selectedImageUrl = dropdown.value;
    selectGMCup(selectedImageUrl);
  });

  // Clear the existing dropdown list
  const existingDropdown = document.getElementById('gmcup-dropdown');
  if (existingDropdown) {
    existingDropdown.parentNode.remove();
  }

  dropdownContainer.appendChild(dropdown);
  const imageContainer = document.querySelector('.image-container');
  imageContainer.appendChild(dropdownContainer);
}




function selectGMCup(imageUrl) {
  const nftContainer = document.getElementById('nftContainer');

  // Remove any existing GMCup overlay
  const existingOverlay = document.querySelector('.gmcup-overlay');
  if (existingOverlay) {
    nftContainer.removeChild(existingOverlay);
  }

  // Create a new GMCup overlay and append it to the nftContainer
  const gmCupOverlay = document.createElement('img');
  gmCupOverlay.src = imageUrl;
  gmCupOverlay.alt = 'GMCup Overlay';
  gmCupOverlay.classList.add('gmcup-overlay');
  nftContainer.appendChild(gmCupOverlay);

  // Store the selected GMCup image URL
  selectedGMCupImages.push(imageUrl);
}

function mergeAndDownload() {
  if (selectedGMCupImages.length === 0) {
    alert('Please select at least one GMCup image');
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

  const nftImageUrl = `https://raw.githubusercontent.com/akh1lsol/Bascdao.net/main/New%20Collection/${nftId}.png`;
  nftImage.onload = function() {
    // Set the canvas size based on the larger dimension of the images
    const canvasSize = Math.max(nftImage.width, nftImage.height);
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    // Draw the NFT image onto the canvas, centered horizontally and at the bottom
    const nftX = (canvas.width - nftImage.width) / 2;
    const nftY = canvas.height - nftImage.height;
    ctx.drawImage(nftImage, nftX, nftY);

    // Load and draw the selected GMCup image onto the canvas
    const gmCupImageUrl = selectedGMCupImages[selectedGMCupImages.length - 1];
    const gmCupImage = new Image();
    gmCupImage.crossOrigin = 'anonymous';
    gmCupImage.onload = function() {
      // Draw the GMCup image onto the canvas, centered horizontally and at the bottom
      const gmCupX = (canvas.width - gmCupImage.width) / 2;
      const gmCupY = canvas.height - gmCupImage.height;
      ctx.drawImage(gmCupImage, gmCupX, gmCupY);

      // Create a link element for downloading the merged image
      const link = document.createElement('a');
      link.href = canvas.toDataURL(); // Convert the canvas to a data URL
      link.download = 'merged_image.png'; // Set the filename for the downloaded image
      link.click(); // Trigger the download

      // Clean up
      URL.revokeObjectURL(link.href);
    };
    gmCupImage.onerror = function() {
      // Image failed to load, display error message
      alert('Failed to load GMCup image.');
    };
    gmCupImage.src = gmCupImageUrl;
  };
  nftImage.onerror = function() {
    // Image failed to load, display error message
    alert('Failed to load NFT image.');
  };
  nftImage.src = nftImageUrl;
}
