import hometemplate from './Home.html'

const home = document.createElement("template");

home.innerHTML = hometemplate;

export class Home extends HTMLElement {
    constructor() {
      super();
      this.root = this.attachShadow({ mode: "open" });
      this.root.appendChild(home.content.cloneNode(true));
    }
    connectedCallback() { 
    }
  }
  
  customElements.define("app-home", Home);
  