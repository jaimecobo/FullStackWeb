import React from 'react';
import ReactDOM from 'react-dom';

const color_green = React.createElement('li', {}, 'Green');
const color_blue = React.createElement('li', {}, 'Blue');
const color_red = React.createElement('li', {}, 'Red');

const music01 = React.createElement('li', {}, 'Pink Floyd');
const music02 = React.createElement('li', {}, 'Metallica');
const music03 = React.createElement('li', {}, 'U2');

const food01 = React.createElement('li', {}, 'Pasta');
const food02 = React.createElement('li', {}, 'Pizza');
const food03 = React.createElement('li', {}, 'Hamburger');

const web_anchor_01 = React.createElement('a', {href: "http://www.google.com"}, 'www.google.com');
const web_anchor_02 = React.createElement('a', {href: "http://www.microsoft.com"}, 'www.microsoft.com');
const web_anchor_03 = React.createElement('a', {href: "http://www.facebook.com"}, 'www.facebook.com');

const web01 = React.createElement('li', {}, web_anchor_01);
const web02 = React.createElement('li', {}, web_anchor_02);
const web03 = React.createElement('li', {}, web_anchor_03);

const colors = React.createElement('ol', {}, color_green, color_blue, color_red);
const music = React.createElement('ol', {}, music01, music02, music03);
const food = React.createElement('ol', {}, food01, food02, food03);
const websites = React.createElement('ol', {}, web01, web02, web03);

ReactDOM.render(
    React.createElement('ul', {}, 
        React.createElement('li', {className: "Favorite_Colors"}, 'Favorite Colors', colors),
        React.createElement('li', {className: "Favorite_Music"}, 'Favorite Music', music),
        React.createElement('li',{className: "Favorite_Food"}, 'Favorite Food', food),
        React.createElement('li',{className: "Favorite_Websites"}, 'Favorite Websites', websites)
    ),
    document.getElementById('root')
);