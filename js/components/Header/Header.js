import HeaderTemplate from "./Header.html";

const header = document.createElement("template");

header.innerHTML = HeaderTemplate;

export class Header extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(header.content.cloneNode(true));
  }
  connectedCallback() {  
  }
//getters
  get color(){
    return this.getAttribute('color');
  }
  
  get text_color(){
    return this.getAttribute('text_color');
  }

  get pad(){
    return this.getAttribute('pad');
  }
//setters
  set color(vaue){
    this.setAttribute('color', value);
  }
  
  set pad(vaue){
    this.setAttribute('pad', value);
  }
  
  set text_color(vaue){
    this.setAttribute('text_color', value);
  }
//static observer
  static get observedAttributes(){
      return ['color', "pad", "text_color"]
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(name, newVal);
    this.render(name)   
    
  }

  render(name){
    const head = this.root.querySelector('header')
    switch (name) {
        case "color":
            head.style.backgroundColor=this.color
            break;
        case "pad":
            head.style.padding = this.pad+"rem"
            break
        case "text_color":
            head.style.color = this.text_color
            break
        default:
            head.style.backgroundColor='none'
            head.style.padding="0"        
            break;
    }
  }
}

customElements.define("app-header", Header);
