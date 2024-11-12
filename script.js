// JavaScript to handle the dark/light mode toggle
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference in localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  themeToggleButton.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';  // Change icon to sun for light mode
} else {
  body.classList.remove('dark-mode');
  themeToggleButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';  // Default to moon for dark mode
}

// Add event listener to toggle theme on button click
themeToggleButton.addEventListener('click', () => {
  // Toggle the class on the body element
  body.classList.toggle('dark-mode');
  
  // Change the icon based on the theme
  if (body.classList.contains('dark-mode')) {
    themeToggleButton.innerHTML = '<ion-icon name="sunny-outline"></ion-icon>';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggleButton.innerHTML = '<ion-icon name="moon-outline"></ion-icon>';
    localStorage.setItem('theme', 'light');
  }
});
