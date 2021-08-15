import './sass/main.scss';
import './styles.css';
import menuTemplate from './templates/menu.hbs';
import menuEate from './menu.json';

// "XWaQXcbk0"
// console.log(menuTemplate());


console.log( 'menuEate',menuEate);

const menuUl = document.querySelector('.js-menu');
console.log('menuUl',menuUl);


const marcup = menuEate.map(menuTemplate).join('');
console.log('marcup', marcup);

menuUl.insertAdjacentHTML('beforeend', marcup);

 








// console.log(localStorage);
// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }));

// const savedData = localStorage.getItem('my-data');
// console.log(savedData);

// const parsedData = JSON.parse(savedData);
// console.log('parsedData',parsedData);