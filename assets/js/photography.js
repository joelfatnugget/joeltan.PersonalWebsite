// Get a reference to the gallery container
const galleryContainer = document.getElementById('gallery-container');

// Function to handle file selection
function handleFileSelect(event) {
  const files = event.target.files; // Get the selected files

  // Loop through the files and create gallery items for each photo
  for (let i = 0; i < files.length; i++) {
    const file = files[i];

    // Create a new gallery item
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    // Create an image element
    const image = document.createElement('img');
    image.classList.add('gallery-image');
    galleryItem.appendChild(image);

    // Create an overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('gallery-overlay');
    overlay.innerHTML = `<h4>${file.name}</h4>`;
    galleryItem.appendChild(overlay);

    // Use the FileReader API to read the image file and set it as the source for the image element
    const reader = new FileReader();
    reader.onload = (function(image) {
      return function(event) {
        image.src = event.target.result;
      };
    })(image);
    reader.readAsDataURL(file);

    // Append the gallery item to the container
    galleryContainer.appendChild(galleryItem);
  }
}

// Add an event listener to the file input element
const fileInput = document.createElement('input');
fileInput.type = 'file';
fileInput.multiple = true;
fileInput.addEventListener('change', handleFileSelect, false);

// Trigger the file input element when the page loads
window.addEventListener('DOMContentLoaded', function() {
  fileInput.click();
});



