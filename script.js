'use strict';

class DomElement {
  constructor(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
  }
  createElement(text, position) {
    let element;
    this.text = text;
    this.position = position;
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
      position: ${this.position};               
    `;
    element.textContent = this.text;
    return document.body.append(element);
  }
}

let block = new DomElement('.block', '100px', '100px', 'purple', '30px');
document.addEventListener("DOMContentLoaded", () => {
  block.createElement('', 'absolute');
});

window.addEventListener('keydown', function(e) {
  let square = document.querySelector('.block');
  let computedStyle = getComputedStyle(square);
  function callback(step, position) {
    return (step + parseInt(position) + 'px');
  }
 if (e.code === 'ArrowUp') {
  square.style.bottom = callback(10, computedStyle.bottom);
 } else if (e.code === 'ArrowDown') {
  square.style.bottom = callback(-10, computedStyle.bottom);
 } else if (e.code === 'ArrowRight') {
  square.style.left = callback(10, computedStyle.left);
 } else if (e.code === 'ArrowLeft') {
  square.style.left = callback(-10, computedStyle.left);
 } 
});
