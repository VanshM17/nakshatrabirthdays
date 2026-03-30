# 🌌 Nakshatra Birthdays

> An interactive, astronomy-themed birthday tracker for the members of **Nakshatra - The Astronomy and Mathematics Society**.

![Made with love](https://img.shields.io/badge/Made%20with-💫-blue?style=flat-square)
![HTML CSS JS](https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JS-orange?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

---

## ✨ Features

- **🔍 Live Search** - Instantly search members by name, role, or birthday across all batches simultaneously, with highlighted query matches in results
- **📅 Sort Controls** - Sort members by Birthday (month-grouped), Name (A–Z), or Role hierarchy (President → VP → MD → Secretary → Director → Execomm → Member)
- **📊 Birthday Chart** - Interactive Chart.js visualization with three views: By Month, By Batch, and By Role - including live stat pills (total members, busiest month, birthdays today, upcoming this week)
- **🌙 Dark Mode** - Fully themed light/dark toggle, persisted via `localStorage`, with an animated starfield canvas that activates in dark mode
- **🎂 Countdown Badges** - Every member card shows days until their next birthday, with special "Today! 🎂" and "In Nd" badges for imminent birthdays
- **🪐 Role Badges** - Color-coded role labels (President, Director, Secretary etc.)
- **🅰️ Avatar Initials** - Members without a profile photo get a deterministic color-coded avatar generated from their name
- **🎯 Birthday Tooltip** - Hover over any birthday date to see the exact number of days remaining
- **📜 Scroll Progress Bar** - Gradient progress indicator fixed at the top of the viewport
- **⌨️ Fun Fact Typewriter** - Rotating astronomy/birthday fun facts with a typewriter animation in the header bar
- **🌠 Easter Eggs** - Type `stars` for a particle burst, or `asteroid` for an asteroid shower with shake effect and explosion sound

---

## 📁 Folder Structure

```
nakshatra-birthdays/
│
├── index.html              # Main page - layout, tabs, chart panel, footer
├── style.css               # All styling - CSS variables, dark mode, animations
├── script.js               # Data, rendering, search, sort, chart, easter eggs
│
├── images/
│   ├── favicon.ico         # Browser tab icon
│   └── icons/              # (Legacy - no longer used, icons are now inline SVG)
│
└── sounds/
    └── explosion.mp3       # Sound effect for asteroid easter egg
```

---

## 🚀 Getting Started

No build tools or dependencies required. Just open `index.html` in any modern browser.

```bash
# Clone the repo
git clone https://github.com/VanshM17/nakshatra-birthdays.git

# Open locally
cd nakshatra-birthdays
open index.html
```

> For local development with live reload, you can use the VS Code **Live Server** extension or any static file server:
> ```bash
> npx serve .
> ```

---

## 🧩 Tech Stack

| Layer      | Technology                                      |
|------------|-------------------------------------------------|
| Markup     | HTML5 (semantic, accessible)                    |
| Styling    | CSS3 (custom properties, animations, grid/flex) |
| Logic      | Vanilla JavaScript (ES6+)                       |
| Charts     | [Chart.js](https://www.chartjs.org/) via CDN    |
| Fonts      | [Syne](https://fonts.google.com/specimen/Syne) + [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts) |

---

## 👥 Adding Members

All member data lives in `script.js` in the `allData` object, grouped by graduation batch year:

```js
const allData = {
  2027: [
    { name: "Member Name", birthday: "15-Aug", title: "Role Title", photo: "images/photo.jpg" },
    // ...
  ],
  // 2026, 2028, 2029...
};
```

**Birthday format:** `"D-Mon"` - e.g. `"7-Jan"`, `"15-Aug"`, `"23-Feb"`

**Photo:** Use a path relative to `index.html`. If the image is missing or set to `"placeholder.jpg"`, an avatar with initials is auto-generated.

---

## ⌨️ Easter Eggs

| Type this anywhere on the page | Effect                                      |
|-------------------------------|---------------------------------------------|
| `stars`                       | 60 twinkling star particles burst on screen |
| `asteroid`                    | Asteroid shower with crash boom + screen shake |

---

## 🔮 Future Improvements

### 🧠 Data & Content
- [ ] **Admin panel / CMS** - A password-protected interface to add/edit/remove members without touching code
- [ ] **Birthday reminders** - Email or WhatsApp notifications sent automatically N days before a member's birthday
- [ ] **Member profiles** - Clicking a member card opens a modal/page with extended info (socials, tenure, fun facts)
- [ ] **Milestone badges** - Auto-detect when someone shares a birthday with another member, or is celebrating a "round" birthday (20, 25, etc.)

### 🎨 Design & UX
- [ ] **Confetti animation** - Auto-trigger on page load if today is someone's birthday
- [ ] **View toggle** - Switch between the current list view and a calendar/grid view showing birthdays on a monthly calendar
- [ ] **Photo upload** - Let members upload their own profile photo via a simple form (Firebase Storage or similar)
- [ ] **Smooth page transitions** - Add View Transitions API for tab switches and search transitions

### 🛠 Technical
- [ ] **Backend integration** - Move data from the JS array to a lightweight backend (Firebase, Supabase, or Google Sheets API) so non-developers can manage it
- [ ] **PWA support** - Add a service worker and web manifest so the site works offline and can be installed on mobile
- [ ] **Export feature** - Download the birthday list as a PDF or `.ics` calendar file to import into Google Calendar / Apple Calendar
- [ ] **URL-based state** - Reflect the active tab and search query in the URL so links can deep-link to a specific batch or search
- [ ] **Unit tests** - Add tests for core functions like `daysUntilBirthday`, `sortMembers`, and `parseBirthday`

### ♿ Accessibility
- [ ] **Keyboard navigation** - Full tab/arrow-key support for tabs, sort dropdown, and chart controls
- [ ] **Screen reader support** - ARIA labels and live regions for dynamic content (search results, fun fact updates)
- [ ] **Reduced motion** - Respect `prefers-reduced-motion` to disable typewriter, starfield, and card animations

---

## 🧑‍💻 Author

**Vansh Maheshwari** - Vice President, Nakshatra - The Astronomy and Mathematics Society of NSUT

[![GitHub](https://img.shields.io/badge/GitHub-VanshM17-181717?style=flat-square&logo=github)](https://github.com/VanshM17)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-vansh--maheshwari-0A66C2?style=flat-square&logo=linkedin)](https://linkedin.com/in/vansh-maheshwari)
[![Instagram](https://img.shields.io/badge/Instagram-_vanshmaheshwari_-E1306C?style=flat-square&logo=instagram)](https://instagram.com/_vanshmaheshwari_)

---

## 📄 License

This project is for internal use by the Nakshatra Astronomy and Mathematics Society.