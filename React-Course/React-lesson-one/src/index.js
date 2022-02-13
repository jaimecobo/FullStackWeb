// alert("it's alive");
import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(
//     React.createElement('h1', {}, "Hello World!"), 
//     document.getElementById('root')
// );

// ReactDOM.render(
//     React.createElement('div', {}, React.createElement('h1', {}, "Hello World!")),
//     document.getElementById('root')
// );

// ReactDOM.render(
//     React.createElement('div', {}, React.createElement('h1', {className: 'flowers'}, "Hello World!")),
//     document.getElementById('root')
// );

// ReactDOM.render(
//     React.createElement('div', {}, React.createElement('a', {href: "http://www.google.com"}, "Take me to Google!")),
//     document.getElementById('root')
// );

// ReactDOM.render(
//     React.createElement('ul', {}, 
//     React.createElement('li', {}, 'Apples'),
//     React.createElement('li', {}, 'Oranges'),
//     React.createElement('li',{}, 'Mangos')
//     ),
//     document.getElementById('root')
// );

// ReactDOM.render(
//     React.createElement('ul', {}, 
//         React.createElement('li', {}, 'Apples', 
//             React.createElement('ul', {}, 
//                 React.createElement('li', {}, '$1.00 per lb.'))),
//         React.createElement('li', {}, 'Oranges', 
//             React.createElement('ul', {}, 
//                 React.createElement('li', {}, '$0.70 per lb.'))),
//         React.createElement('li',{}, 'Mangos', 
//             React.createElement('ul', {},  
//                 React.createElement('li', {}, '$2.00 per lb.')))
//     ),
//     document.getElementById('root')
// );

// const applesPrice = React.createElement('li', {}, '$1.00 per lb.');
// const orangesPrice = React.createElement('li', {}, '$0.70 per lb.');
// const mangosPrice = React.createElement('li', {}, '$2.00 per lb.');

// const apples = React.createElement('ul', {}, applesPrice);
// const oranges = React.createElement('ul', {}, orangesPrice);
// const mangos = React.createElement('ul', {}, mangosPrice);

// ReactDOM.render(
//     React.createElement('ul', {}, 
//         React.createElement('li', {}, 'Apples', apples),
//         React.createElement('li', {}, 'Oranges', oranges),
//         React.createElement('li',{}, 'Mangos', mangos)
//     ),
//     document.getElementById('root')
// );


//############################ JSX ###################################

// ReactDOM.render(
//     React.createElement('div', {className: "flower"}, React.createElement('h1', {}, 'Hello World!')),
//     document.getElementById('root')
// );

ReactDOM.render(
    <div className='flower'>
        <h1>Hello World!</h1>
    </div>,
    document.getElementById('root')
);


