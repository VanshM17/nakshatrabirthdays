function openYear(evt, year) {
  // Hide all tab contents
  var tabcontent = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove 'active' class from all tab buttons
  var tabbuttons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].className = tabbuttons[i].className.replace(" active", "");
  }

  // Show the selected tab content and set the button as active
  document.getElementById(year).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the first tab by default when the page loads
window.onload = function() {
  var firstTab = document.getElementsByClassName('tab-button')[0];
  if (firstTab) {
    firstTab.click();
  }
};
