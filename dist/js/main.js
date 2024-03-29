// Select DOM items (Document Object Model) -- html tags etc

//Creates variable
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector
('.menu-branding');
// QuerySelectorAll is for all items of the menu
const navItems = document.querySelectorAll
('nav-item');

// Set the initial state of the menu
let showMenu = false; // false means closed

menuBtn.addEventListener ('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

    // Set menu state
        showMenu = false;
    }
}
