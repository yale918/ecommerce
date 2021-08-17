import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg'
import Data from './data.xml';
import Notes from './data.csv';

import yaml from './data.yaml';
import json from './data.json5';

/*
// there's some issue in toml loader
import toml from './data.toml';      
console.log(toml.title);
console.log(toml.owner.name);
*/
console.log("1",yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);



function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack', 'newline', 'happy', 'valentines day'], ' ');
    element.classList.add('hello');


    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(Notes);

    return element;
}





document.body.appendChild(component())