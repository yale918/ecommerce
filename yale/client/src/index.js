import _ from 'lodash';

function component(){
    const element = document.createElement('div');
    const button = document.createElement('button');
    const br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello','webpack'],' ');
    element.appendChild(br);
    element.appendChild(button);

    console.log("change")
/*
    button.onclick = e => import('./print').then(module => {
        const print = module.default;

        print();
    });
*/

    return element;

}

document.body.appendChild(component());

/*
async function getComponent(){
    const element = document.createElement('div');
    const {default: _} = await import('lodash');

    element.innerHTML = _.join(['Hello','webpack'], ' ');

    return element;
}

getComponent().then((component)=>{
    document.body.appendChild(component);
});
*/