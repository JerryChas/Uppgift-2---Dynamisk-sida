//DARK MODE

//väntar på att sidan ska laddas
document.addEventListener('DOMContentLoaded', function () {
  // Hämtar dark mode switch (checkbox)
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  // Hämta den senaste dark mode-inställningen från localStorage
  let isDarkMode = localStorage.getItem('darkMode');

  // Uppdatera checkboxens checked-egenskap baserat på den senaste inställningen från localStorage
  darkModeToggle.checked = isDarkMode === 'on';

  if (isDarkMode == 'on') {
    document.body.classList.add('dark-mode');
  }

  // Funktion för att aktivera eller inaktivera dark mode baserat på användarens val
  function toggleDarkMode() {
    // Om dark mode är aktiverat, lägg till 'dark-mode'-klassen på <body>
    if (darkModeToggle.checked) {
      document.body.classList.add('dark-mode');
      console.log('Dark mode : ON');
      isDarkMode = 'on';
    } else {
      // Om dark mode är inaktiverat, ta bort 'dark-mode'-klassen från <body>
      document.body.classList.remove('dark-mode');
      console.log('Dark mode : OFF');
      isDarkMode = 'off';
    }

    // Spara dark mode-inställningen i localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }

  // Lägg till en händelselyssnare för ändringar i dark mode-switchen
  darkModeToggle.addEventListener('change', toggleDarkMode);
});
