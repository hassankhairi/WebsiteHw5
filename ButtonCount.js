class ButtonCount extends HTMLElement {
    constructor() {
      // Always call super first in constructor
      super();
  
      // write element functionality in here
      var button = document.createElement("button");
      var text = document.createTextNode("Times Clicked: ");
      button.appendChild(text);
      var counter = document.createElement(`output`);
      counter.textContent = 0;
      button.appendChild(counter);
      button.addEventListener("click", ()=>{
        var count = Number(counter.textContent);
        counter.textContent = count+1;
    });
        this.attachShadow({mode:"open"});
        this.shadowRoot.append(button);
    }
  }
  customElements.define("button-count", ButtonCount);
