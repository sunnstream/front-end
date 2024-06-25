//disables scroll while popup is open (pending implementation)
document.addEventListener('DOMContentLoaded', () => {
  // Disables scroll while popup is open
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
const currentYear = new Date().getFullYear();
const copyrightElements = document.querySelectorAll('.copyright-date');

// Update the text content of each element with the current year
copyrightElements.forEach(element => {
    element.textContent = currentYear;
});
}

// Run the function to update the copyright year when the page loads
window.onload = updateCopyrightYear;

// Controls button arrow colors by manipulating the SVG's fillColor attribute
  var imgElements = document.querySelectorAll('img.button_icon');
  
  imgElements.forEach(function(img) {
    fetch(img.src)
      .then(response => response.text())
      .then(svgText => {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = svgText;
          var svgElement = tempDiv.querySelector('svg');
        if (svgElement) {
          svgElement.style.width = '1rem';
          svgElement.style.height = '1rem';
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
    document.getElementById('mySelect').appendChild(option); 
  });
});


//Card truncation

document.addEventListener("DOMContentLoaded", function() {
  const maxLength = 100;
  const truncateElements = document.querySelectorAll('.truncate');

  truncateElements.forEach(element => {
    if (element.textContent.length > maxLength) {
      element.textContent = element.textContent.substring(0, maxLength) + '...';
    }
  });
});

//Append rel="nofollow" to all external links

document.addEventListener("DOMContentLoaded", function() {
  const currentDomain = window.location.hostname;

  const links = document.querySelectorAll('a');

  links.forEach(link => {
      const linkDomain = new URL(link.href).hostname;

      if (linkDomain !== currentDomain) {
          link.setAttribute('rel', 'nofollow');
          link.setAttribute('target', '_blank');
      }
  });
});



