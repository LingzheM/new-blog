// script.js

function handleCheckboxClick() {
    var divs = document.querySelectorAll('div');
    console.log("find div"+div.tagName);
    divs.forEach(function(div) {
      var checkbox = div.querySelector('input[type="checkbox"]');
      var paragraph = div.querySelector('p');
      console.log("find p"+paragraph.tagName)
      var rtTags = paragraph.querySelectorAll('rt');
      checkbox.addEventListener('click', function() {
        console.log("find rt"+rtTags.length);
        var visibility = this.checked ? 'visible' : 'hidden';
        rtTags.forEach(function(rtTag) {
            rtTag.style.visibility = visibility;
        });
      });
    });
  }
  
// Call the function to start the functionality
handleCheckboxClick();
  