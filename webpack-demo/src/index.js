
import myName from './myName';
import './style.css';
//import myName from './myName';

function component() {
    const element = document.createElement('div');

    // Lodash, imported by this script
    element.innerHTML = myName('B');
    element.classList.add('hello');

    return element;
}


document.body.appendChild(component());