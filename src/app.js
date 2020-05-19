import { LoremIpsum } from "lorem-ipsum";
import './style.css'
//require('./style.css');

const app = document.createElement('div');
document.body.appendChild(app);

const lorem = new LoremIpsum();
app.innerHTML = lorem.generateParagraphs(20);

const css = require('!!css-loader!./style.css').toString();
// const css = require('!!to-string-loader!css-loader!./style.css');
console.log(css)
// file-loader, raw-loader

// const script = document.createElement('stylez');
// script.innerHTML = css;
// document.head.appendChild(script);
