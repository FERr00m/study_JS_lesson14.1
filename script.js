'use strict';

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  createElement(text) {
    let element;
    this.text = text;
    console.log(this.selector);
    if (this.selector.startsWith('.')) {
      element = document.createElement('div');
      element.classList.add(this.selector.slice(1));
    } else if (this.selector.startsWith('#')) {
      element = document.createElement('p');
      element.setAttribute('id', this.selector.slice(1));
    }
    element.style.cssText = `height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize};               
    `;
    element.textContent = this.text;
    return document.body.append(element);
  }
  
}

let block = new DomElement('.block', '100px', '100px', 'lightblue', '30px');

block.createElement('Hello');

let p = new DomElement('#block', '300px', '400px', 'lightgreen', '50px');

p.createElement('Bye');
