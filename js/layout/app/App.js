import apptemplate from "./App.html";

const app = document.createElement("template");

app.innerHTML = apptemplate;

export class App extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(app.content.cloneNode(true));
  }
  connectedCallback() {
    
    
  }
}
customElements.define("main-app", App);
