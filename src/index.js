// import './sass/main.scss';
import './styles.css';
import menuTemplate from './templates/menu.hbs';
import menuEate from './menu.json';
console.log('menuEate',menuEate);
 




const menuUl = document.querySelector('.js-menu');
console.log('menuUl',menuUl);


const marcup = menuEate.map(menuTemplate).join('');
// console.log('marcup', marcup);

menuUl.insertAdjacentHTML('beforeend', marcup);

 

// переключение темы со светлой на темную

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const bodytheme = document.querySelector('.js-dostup_body');
const CheckBoxEl = document.querySelector('.js-input_checkbox');

function onChangeTheme() {
const themeChecked = CheckBoxEl.checked;
if (themeChecked) {
   bodytheme.classList.add(theme.LIGHT);
     bodytheme.classList.remove(theme.DARK);
      localStorage.setItem('theme', theme.LIGHT);
}else {
 
  bodytheme.classList.add(theme.DARK);
     bodytheme.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', theme.DARK);
    }
};


 

 function CheckboxChecked () {

if (localStorage.getItem('theme') === theme.DARK) {
    bodytheme.classList.add(theme.DARK);
CheckBoxEl.checked = true;
}
};

CheckBoxEl.addEventListener('change', onChangeTheme);
CheckboxChecked();

