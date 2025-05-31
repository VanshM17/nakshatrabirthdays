//arrays for 2025
const members2025 = [
  { name: "Ayush Jha", birthday: "29-Jul", title: "President", photo: "placeholder.jpg" },
  { name: "Kritika Choudhary", birthday: "26-Oct", title: "President", photo: "placeholder.jpg" },
  { name: "Vatsal Shrivastava", birthday: "26-Nov", title: "Head of Design", photo: "placeholder.jpg" },
  { name: "Paridhi Gupta", birthday: "7-Aug", title: "Vice-President", photo: "placeholder.jpg" },
  ];

//arrays for 2026
const members2026 = [
  { name: "Ghanshyam Jonwal", birthday: "17-Feb", title: "Member", photo: "placeholder.jpg" },
  { name: "Meenakshi Sinha", birthday: "23-Feb", title: "Member", photo: "placeholder.jpg" },
  { name: "Ayush Dewangan", birthday: "27-Jun", title: "Member", photo: "placeholder.jpg" },
  { name: "Omkar Ahuja", birthday: "15-Aug", title: "Member", photo: "placeholder.jpg" },
  { name: "Ayushman Bari", birthday: "15-Aug", title: "Member", photo: "placeholder.jpg" },
  { name: "Divye Bajaj", birthday: "31-Aug", title: "Member", photo: "placeholder.jpg" },
  { name: "Avantika Ambra", birthday: "13-Dec", title: "Member", photo: "placeholder.jpg" }
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
  { name: "Vansh Maheshwari", birthday: "17-Nov", title: "Execomm Member", photo: "placeholder.jpg" },
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
  { name: "Bhavya Goel", birthday: "11-Jul", title: "Member", photo: "placeholder.jpg" },
  { name: "Stuti Jain", birthday: "26-Sep", title: "Member", photo: "placeholder.jpg" },
  { name: "Laksh Agrawal", birthday: "8-Oct", title: "Member", photo: "placeholder.jpg" },
  { name: "Ayush Sinha", birthday: "20-Nov", title: "Member", photo: "placeholder.jpg" },
  { name: "Aaryan Kumar", birthday: "30-Nov", title: "Member", photo: "placeholder.jpg" },
  { name: "Gaurish Malhotra", birthday: "7-Dec", title: "Member", photo: "placeholder.jpg" },
  { name: "Akshat Kashyap", birthday: "13-Dec", title: "Member", photo: "placeholder.jpg" }
];

//Days-Until-Birthday-Left
function daysUntilBirthday(birthdayStr) {
  const [day, monStr] = birthdayStr.split('-');
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const month = months.indexOf(monStr);
  const today = new Date();
  let year = today.getFullYear();
  let nextBirthday = new Date(year, month, parseInt(day));

  // If birthday this year has already passed, use next year
  if (
    today.getMonth() > month ||
    (today.getMonth() === month && today.getDate() > parseInt(day))
  ) {
    nextBirthday.setFullYear(year + 1);
  }

  // Calculate difference in days
  const oneDay = 1000 * 60 * 60 * 24;
  const diffDays = Math.ceil((nextBirthday - today) / oneDay);

  return diffDays;
}


function renderMembers(year, members) {
  const container = document.getElementById('members-' + year);
  container.innerHTML = '';
  members.forEach(member => {
    const daysLeft = daysUntilBirthday(member.birthday);
    container.innerHTML += `
      <div class="member">
        <img src="images/${member.photo}" alt="${member.name}" class="member-photo">
        <div class="member-info">
          <div class="member-name">${member.name}</div>
          <div class="member-title ${member.title.toLowerCase().replace(/\s+/g, '-')}">${member.title}</div>
          <div class="member-birthday">${member.birthday}</div>
        </div>
        <div class="member-daysleft">
          ${daysLeft === 0 ? "<span class='bday-today'>🎉 Today!</span>" : `${daysLeft} day${daysLeft > 1 ? "s" : ""} left`}
        </div>
      </div>
    `;
  });
}

// 3. Sort function (ONE for all years)
function sortMembers(year) {
  let members, select;
  if (year === '2025') {
    members = members2025.slice();
    select = document.getElementById('sort-2025').value;
  } else if (year === '2026') {
    members = members2026.slice();
    select = document.getElementById('sort-2026').value;
  } else if (year === '2027') {
    members = members2027.slice();
    select = document.getElementById('sort-2027').value;
  } else if (year === '2028') {
    members = members2028.slice();
    select = document.getElementById('sort-2028').value;
  }

  if (select === 'dob') {
    members.sort((a, b) => {
      const parse = s => {
        let [day, mon] = s.split('-');
        return new Date(2000, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(mon), parseInt(day));
      };
      return parse(a.birthday) - parse(b.birthday);
    });
  } else if (select === 'alpha') {
    members.sort((a, b) => a.name.localeCompare(b.name));
  }
  // else 'general': keep original order

  renderMembers(year, members);
}

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
  var firstTab = document.getElementsByClassName('tab-button')[0];
  if (firstTab) {
    firstTab.click(); // This will now also render members because of the updated openYear
  }
};

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('darkModeToggle');
  // Load preference from localStorage
  if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Change icon
    if (document.body.classList.contains('dark-mode')) {
      toggle.textContent = '☀️';
      localStorage.setItem('dark-mode', 'true');
    } else {
      toggle.textContent = '🌙';
      localStorage.setItem('dark-mode', 'false');
    }
  });
});

