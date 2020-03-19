import navtemplate from "./Nav.html";

const nav = document.createElement("template");

nav.innerHTML = navtemplate;

export class Nav extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.root.appendChild(nav.content.cloneNode(true));
    this.mobileEvent = new Event("openMenu")
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
    this.atachCustomEvent()
  }

  makeNavLinkItems() {
    let items = this.navItems.split(' ')
    return items
  }

  atachCustomEvent() {
    const mobile = this.root.querySelector('.mobil__menu')
    mobile.addEventListener('click', (event) => {
      event.target.dispatchEvent(this.mobileEvent)
    })
  }

  addToMenu(ul) {
    ul.innerHTML = ""
    let items = this.makeNavLinkItems()
    items.forEach(i => {
      ul.innerHTML = `${ul.innerHTML}<li class="nav__links">${i}</li>`
    })
    ul.innerHTML = `<li class="mobil__menu"></li>${ul.innerHTML}`


  }

  render() {
    const ul = this.root.querySelector('ul')
    const nav = this.root.querySelector('nav')
    if (this.navItems) {
      this.addToMenu(ul)
    }
    if (this.navWidth) {
      nav.style.minWidth = `${this.navWidth}vw`
    }
  }



}

customElements.define("nav-bar", Nav);
