//arrays for 2025
const members2025 = [
  { name: "Ayush Jha", birthday: "29-Jul", title: "President", photo: "placeholder.jpg" },
  { name: "Kritika Choudhary", birthday: "26-Oct", title: "President", photo: "placeholder.jpg" },
  { name: "Vatsal Shrivastava", birthday: "26-Nov", title: "Head of Design", photo: "placeholder.jpg" },
  { name: "Paridhi Gupta", birthday: "7-Aug", title: "Vice-President", photo: "placeholder.jpg" },
  ];

//arrays for 2026
const members2026 = [
  { name: "Ghanshyam Jonwal", birthday: "17-Feb", title: "Vice-President", photo: "placeholder.jpg" },
  { name: "Meenakshi Sinha", birthday: "23-Feb", title: "Head of Astronomt", photo: "placeholder.jpg" },
  { name: "Ayush Dewangan", birthday: "27-Jun", title: "Managing Director", photo: "placeholder.jpg" },
  { name: "Omkar Ahuja", birthday: "15-Aug", title: "President", photo: "placeholder.jpg" },
  { name: "Ayushman Bari", birthday: "15-Aug", title: "General Secretary", photo: "placeholder.jpg" },
  { name: "Divye Bajaj", birthday: "31-Aug", title: "Vice-President", photo: "placeholder.jpg" },
  { name: "Avantika Ambra", birthday: "13-Dec", title: "General Secretary", photo: "placeholder.jpg" }
];

//arrays for 2027
const members2027 = [
  { name: "Ayush Kumar", birthday: "7-Jan", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Gautam Bajaj", birthday: "7-Jan", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Satyam Parida", birthday: "17-Jan", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Anshika Singh", birthday: "27-Feb", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Manav Jaiswal", birthday: "12-Mar", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Aviral Gaur", birthday: "24-Mar", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Aakash Jha", birthday: "25-Mar", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Harshit Bindal", birthday: "5-Apr", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Rahul", birthday: "15-Apr", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Srishti Tayal", birthday: "15-Jun", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Ashu Anand", birthday: "8-Aug", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Tarun Sharma", birthday: "7-Sep", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Harsh Swami", birthday: "11-Sep", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Dipankar Page", birthday: "21-Oct", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Yogita Jha", birthday: "5-Nov", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Nandini Nautiyal", birthday: "17-Nov", title: "Execomm Member", photo: "placeholder.jpg" },
  { name: "Vansh Maheshwari", birthday: "17-Nov", title: "Execomm Member", photo: "vansh.png" },
  { name: "Rishabh Jain", birthday: "23-Dec", title: "Execomm Member", photo: "placeholder.jpg" }
];

//arrays for 2028
const members2028 = [
  { name: "Mayank Gupta", birthday: "7-Jan", title: "Member", photo: "placeholder.jpg" },
  { name: "Prajal Goel", birthday: "9-Mar", title: "Member", photo: "placeholder.jpg" },
  { name: "Tijil Gupta", birthday: "9-Mar", title: "Member", photo: "placeholder.jpg" },
  { name: "Rachit Kathuria", birthday: "14-Apr", title: "Member", photo: "placeholder.jpg" },
  { name: "Sneha Kumari", birthday: "16-Apr", title: "Member", photo: "placeholder.jpg" },
  { name: "Shreem", birthday: "29-Apr", title: "Member", photo: "placeholder.jpg" },
  { name: "Aujasvi Saxena", birthday: "2-May", title: "Member", photo: "placeholder.jpg" },
  { name: "Vini Bansode", birthday: "31-May", title: "Member", photo: "placeholder.jpg" },
  { name: "Vamika Arya", birthday : "7-Jun",title: "Member", photo: "placeholder.jpg" },
  { name: "Kartavya Vashishth", birthday : "7-Jun", title: "Member", photo: "placeholder.jpg" },
  { name: "Bhavya Goel", birthday: "11-Jul", title: "Member", photo: "placeholder.jpg" },
  { name: "Stuti Jain", birthday: "26-Sep", title: "Member", photo: "placeholder.jpg" },
  { name: "Laksh Agrawal", birthday: "8-Oct", title: "Member", photo: "placeholder.jpg" },
  { name: "Ayush Sinha", birthday: "20-Nov", title: "Member", photo: "placeholder.jpg" },
  { name: "Aaryan Kumar", birthday: "30-Nov", title: "Member", photo: "placeholder.jpg" },
  { name: "Gaurish Malhotra", birthday: "7-Dec", title: "Member", photo: "placeholder.jpg" },
  { name: "Akshat Kashyap", birthday: "13-Dec", title: "Member", photo: "placeholder.jpg" }
];
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

  // Render members for the selected year
  sortMembers(year);
}


// Open the first tab by default when the page loads
window.onload = function() {
  var firstTab = document.getElementsByClassName('tab-button')[2];
  if (firstTab) {
    firstTab.click(); // This will now also render members because of the updated openYear
  }
};

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('darkModeToggle');

  // Set initial state based on localStorage
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
    toggle.title = "Switch to light mode";
  } else {
    document.body.classList.remove('dark-mode');
    toggle.textContent = '🌙';
    toggle.title = "Switch to dark mode";
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      toggle.textContent = '☀️';
      toggle.title = "Switch to light mode";
      localStorage.setItem('dark-mode', 'true');
    } else {
      toggle.textContent = '🌙';
      toggle.title = "Switch to dark mode";
      localStorage.setItem('dark-mode', 'false');
    }
  });
});
// Type "stars" to launch stars animation
let typed = '';
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return; // ignore shortcuts
  typed += e.key.toLowerCase();
  typed = typed.slice(-5); // Only keep last 5 chars

  if (typed === 'stars') {
    launchStars();
    typed = '';
  }
});

function launchStars() {
  for (let i = 0; i < 50; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.animationDelay = (Math.random() * 2) + 's';
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 6000); // Remove after 6 seconds
  }
}

//Type "asteroid" to launch asteroid shower
let typedAst = '';
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  typedAst += e.key.toLowerCase();
  typedAst = typedAst.slice(-8); // Only keep last 8 chars

  if (typedAst === 'asteroid') {
    launchAsteroids();
    typedAst = '';
  }
});

function launchAsteroids() {
  for (let i = 0; i < 7 + Math.floor(Math.random()*4); i++) {
    let asteroid = document.createElement('div');
    asteroid.className = 'asteroid';
    asteroid.style.left = (Math.random() * (window.innerWidth - 40)) + 'px';
    asteroid.style.animationDelay = (Math.random() * 0.7) + 's';
    document.body.appendChild(asteroid);

    // Boom effect at the end of fall
    setTimeout(() => {
      asteroid.classList.add('asteroid-crash');
      // Play explosion sound
      const sound = document.getElementById('explosionSound');
      if (sound) {
        sound.currentTime = 0.1; // rewind if triggered rapidly
        sound.play();
      }
      setTimeout(() => asteroid.remove(), 0o0);
    }, 1600 + parseFloat(asteroid.style.animationDelay) * 1000);
  }
  //shake effect
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 900);
}

//expanding search bar logic
document.addEventListener('DOMContentLoaded', function() {
  const searchBar = document.getElementById('searchBar');
  const searchIconBtn = document.getElementById('searchIconBtn');
  const memberSearch = document.getElementById('memberSearch');

  searchIconBtn.addEventListener('click', function(e) {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      memberSearch.focus();
    } else {
      memberSearch.value = '';
      searchMembers(); // Clear results when closing
    }
    e.stopPropagation();
  });

  // Close search bar if clicked outside
  document.addEventListener('click', function(e) {
    if (
      searchBar.classList.contains('active') &&
      !searchBar.contains(e.target)
    ) {
      searchBar.classList.remove('active');
      memberSearch.value = '';
      searchMembers(); // Clear results
    }
  });

  //ESC closes the search bar
  memberSearch.addEventListener('keydown', function(e) {
    if (e.key === 'escape') {
      searchBar.classList.remove('active');
      memberSearch.value = '';
      searchMembers();
    }
  });
});
// Image popup logic
const popup = document.getElementById('image-popup');
const popupImg = popup.querySelector('img');

document.querySelectorAll('.member-photo').forEach(img => {
  img.addEventListener('mouseenter', function(e) {
    popupImg.src = img.src;
    popup.style.display = 'block';
    // Position the popup near the image (centered)
    const rect = img.getBoundingClientRect();
    popup.style.top = (window.scrollY + rect.top - 10) + 'px';
    popup.style.left = (window.scrollX + rect.right + 20) + 'px';
  });
  img.addEventListener('mousemove', function(e) {
    // Optional: Move popup with cursor
    popup.style.top = (window.scrollY + e.clientY - 80) + 'px';
    popup.style.left = (window.scrollX + e.clientX + 30) + 'px';
  });
  img.addEventListener('mouseleave', function() {
    popup.style.display = 'none';
    popupImg.src = '';
  });
});

//Disable drag selection in images..
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', function(e) {
      e.preventDefault();
    });
  });
});

