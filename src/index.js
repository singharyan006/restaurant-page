import './style.css';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

function clearContent() {
  document.getElementById('content').textContent = '';
}

function setupNavigation() {
  document.getElementById('home').addEventListener('click', () => {
    clearContent();
    loadHome();
  });

  document.getElementById('menu').addEventListener('click', () => {
    clearContent();
    loadMenu();
  });

  document.getElementById('contact').addEventListener('click', () => {
    clearContent();
    loadContact();
  });
}

function init() {
  setupNavigation();
  loadHome(); // default view
}

init();
