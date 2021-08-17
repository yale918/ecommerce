import _ from 'lodash';
import printM from './print.js'

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');


    element.innerHTML = _.join(['Hello', 'webpack', 'newline', 'happy', 'valentines day'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printM;

    element.appendChild(btn)



    return element;
}





document.body.appendChild(component())