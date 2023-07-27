function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');

    const icon = document.getElementById("darkmode-icon");
    if (icon.src.includes("light-mode-icon.png")) {
        icon.src = "./assets/dark-mode-icon.png";
    } else {
        icon.src = "./assets/light-mode-icon.png";
    }

    /* const logo = document.getElementById("darkmode-logo");
    if (logo.src.includes("betty-logo-black.png")) {
        logo.src = "./assets/betty-logo-white.png";
    } else {
        logo.src = "./assets/betty-logo-black.png";
    } */
}

const darkModeToggle = document.querySelector('#dark-mode-toggle');
darkModeToggle.addEventListener('click', toggleDarkMode);