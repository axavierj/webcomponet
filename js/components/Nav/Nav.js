import navtemplate from "./Nav.html";

const nav = document.createElement("template");

nav.innerHTML = navtemplate;

export class Nav extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(nav.content.cloneNode(true));
  }

  get navItems() {
    return this.getAttribute('navItems')
  }

  get navWidth() {
    return this.getAttribute('navWidth')
  }

  set navItems(value) {
    this.setAttribute('navItems', value)
  }

  set navWidth(value) {
    this.setAttribute('navWidth', value)
  }

  static get observedAttributes() {
    return ['navItems', 'navWidth']
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log(name, newVal);

  }


  connectedCallback() {
    this.render()
  }

  render() {
    const ul = this.root.querySelector('ul')
    const nav = this.root.querySelector('nav')
    if (this.navItems) {
      ul.innerHTML = ""
      let items = this.navItems.split(' ')
      items.forEach(i => {
        ul.innerHTML = `${ul.innerHTML}<li class="nav__links">${i}</li>`
      })
      ul.innerHTML = `<li class="mobil__menu"><div></div></li>${ul.innerHTML}`
    }
    if (this.navWidth) {
      nav.style.minWidth = `${this.navWidth}vw`
    }
  }



}

customElements.define("nav-bar", Nav);
