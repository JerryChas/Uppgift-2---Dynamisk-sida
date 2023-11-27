//DARK MODE

//Hämtar dark mode switch (checkbox)
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Lägg till en händelselyssnare för ändringar i dark mode-switchen
darkModeToggle.addEventListener('change', function () {
  // Om dark mode är aktiverat, lägg till 'dark-mode'-klassen på <body>
  if (darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
    console.log('Dark mode : ON')
} else {
    // Om dark mode är inaktiverat, ta bort 'dark-mode'-klassen från <body>
    document.body.classList.remove('dark-mode');
    console.log('Dark mode : OFF')
  }
});
