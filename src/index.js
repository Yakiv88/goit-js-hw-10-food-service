// import './sass/main.scss';
import './styles.css';
import menuTemplate from './templates/menu.hbs';
import menuEate from './menu.json';
console.log('menuEate',menuEate);
 




const menuUl = document.querySelector('.js-menu');
console.log('menuUl',menuUl);


const marcup = menuEate.map(menuTemplate).join('');
console.log('marcup', marcup);

menuUl.insertAdjacentHTML('beforeend', marcup);

 

// переключение темы со светлой на темную

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const CheckBoxEl = document.querySelector('.js-input_checkbox');
const bodytheme =document.querySelector('.js-dostup_body');
 function  onChangeTheme  () {
const themeChecked = CheckBoxEl.checked;
if (themeChecked) {
  bodytheme.classList.add(theme.DARK);
     bodytheme.classList.remove(theme.LIGHT);
        localStorage.setItem('theme', theme.DARK);
}else {
  bodytheme.classList.add(theme.LIGHT);
     bodytheme.classList.remove(theme.DARK);
        localStorage.setItem('theme', theme.LIGHT);
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








// function onCheckTheme(e) {
//   e.preventDefault()
//   if (e.checked !== true) {
//     bodytheme.classList.toggle('dark-theme');
//     localStorage.removeItem('LIGHT')
//     localStorage.setItem('DARK','dark-theme');
//   } else {
// localStorage.removeItem('DARK')
//     localStorage.setItem('LIGHT',('light-theme'));
//    }
// }


//  Theme= localStorage.setItem()

//  const theme =window.localStorage.getItem('LIGHT');
// if(theme) document.documentElement.setAttribute('LIGHT', theme);
// CheckBox.checked = theme == 'dark-theme' ? true : false;


















// const dragTheme = window.localStorage.getItem('dark-theme');  
// const themeCheckBox = document.querySelector('.js-input_checkbox');
// themeCheckBox.checked(dragTheme === "true")? true : false;

// function checkTheme() {
//   if (themeCheckBox.checked) {
//       document.documentElement.setAttribute('DARK','dark-theme');
//       window.localStorage.setItem('DARK', true);
//    }else {
//       document.documentElement.setAttribute('DARK', 'light-theme');
//       window.localStorage.setItem('DARK', false);
//    }
// }


















// // const bodyTheme= document.querySelector('.js-dostup_body'),
// const CheckBox = document.querySelector('.js-input_checkbox');
// // CheckBox.addEventListener('change', checkTheme);
// //  Theme= localStorage.setItem()

//  const theme =window.localStorage.getItem('data-theme');
// if(theme) document.documentElement.setAttribute('data-theme', theme);
// CheckBox.checked = theme == 'dark-theme' ? true : false;

// CheckBox.addEventListener('change', function () {
//   if(this.checked){
//    document.documentElement.setAttribute('data-theme', 'dark-theme');
//     window.localStorage.setItem('data-theme','dark-theme');
//   } else {
//    document.documentElement.setAttribute('data-theme', 'light-theme');
//     window.localStorage.setItem('data-theme', 'light-theme');
//   }
// });

















// {/* <input id="cb" type="checkbox" />
// <label for="cb">Checkbox</label> */}

// function onCheckbox(evt){
//   const Theme = evt.target.value;
//   localStorage.setItem('Theme.LIGHT',JSON.stringify(Theme))
//   console.log(Theme);
// }

// console.log(localStorage);
//  localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));


//

// const savedData = localStorage.getItem('my-data');
// console.log(savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData',parsedData);