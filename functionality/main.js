   // Disables scroll while popup is open
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.open-modal').forEach(trigger => {
      trigger.addEventListener('click', function() { 
        document.querySelectorAll('.body').forEach(target => target.classList.add('is-no-scroll')); 
      });
    });
  
    document.querySelectorAll('.close-modal').forEach(trigger => {
      trigger.addEventListener('click', function() { 
        document.querySelectorAll('.body').forEach(target => target.classList.remove('is-no-scroll')); 
      });
    });

    //Copyright Date (Year) update
function updateCopyrightYear() {
  // Get the current year
  const currentYear = new Date().getFullYear();
  
  // Select all elements with the class "copyright-date"
  const copyrightElements = document.querySelectorAll('.copyright-date');
  
  // Update the text content of each element with the current year
  copyrightElements.forEach(element => {
      element.textContent = currentYear;
  });
}

// Run the function to update the copyright year when the page loads
window.onload = updateCopyrightYear;
  
    // Controls button arrow colors by manipulating the SVG's fillColor attribute
    // Combined DOMContentLoaded event listener for efficiency
    var imgElements = document.querySelectorAll('img.button_icon');
    
    imgElements.forEach(function(img) {
      // Fetch the SVG content
      fetch(img.src)
        .then(response => response.text())
        .then(svgText => {
          // Create a temporary DOM element to hold the SVG
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = svgText;
  
          // Get the SVG element
          var svgElement = tempDiv.querySelector('svg');
  
          if (svgElement) {
            // Set the width and height to 1rem
            svgElement.style.width = '1rem';
            svgElement.style.height = '1rem';
  
            // Select all path elements within the SVG
            var paths = svgElement.querySelectorAll('path');
            
            // Iterate through each path element and change the fill attribute to "currentColor"
            paths.forEach(function(path) {
              path.setAttribute('fill', 'currentColor');
            });
  
            // Replace the img element with the modified SVG
            img.parentNode.replaceChild(svgElement, img);
          }
        })
        .catch(error => console.error('Error fetching SVG:', error));
    });

    
    // Dropdown Selector
    // Modifies the dropdown selector
    document.querySelectorAll('.select_sort').forEach(function(element) {
      var s = element.textContent;
      var option = document.createElement('option');
      option.value = s;
      option.textContent = s;
      document.getElementById('mySelect').appendChild(option); // Assuming there is a select element with id "mySelect"
    });
  });


  //Card truncation

  document.addEventListener("DOMContentLoaded", function() {
    const maxLength = 100; // Sets the maximum length of the truncated text
    const truncateElements = document.querySelectorAll('.truncate');
  
    truncateElements.forEach(element => {
      if (element.textContent.length > maxLength) {
        element.textContent = element.textContent.substring(0, maxLength) + '...';
      }
    });
  });