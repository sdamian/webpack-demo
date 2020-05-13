import { LoremIpsum } from "lorem-ipsum";
import './style.css';

const element = document.createElement('div');
document.body.appendChild(element);

console.log('hello world');

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

element.innerHTML = lorem.generateWords(500);
