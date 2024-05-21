let html = `<input id="input" />
<button class="btn">Submit</button>
<div id="message"></div>`

class MyComponent extends HTMLElement {
  connectedCallback() {
   
    // this.textContent = "First Custom Component"
    this.innerHTML = html
  }
}

customElements.define("my-component", MyComponent);
