export function init() {
  class TextField extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      //       //  secreaunpeq-dom-enelcust.elem.ytodoloquesucede dentro no perjudica el ext. el modo es para que lo permita ver
      //   shadow.appendChild(style);
      const label = this.getAttribute("label");

      const style = document.createElement("style");
      style.innerHTML = `
      .root{
        display:flex;
        flex-direction:column;
      }
      .label{
        font-size:18px;
      }.
      .input{
        font-size:18px;
        margin-top:3px
        padding:17px 13px;
        border:solid 2px black;
        border-radius:4px
      }
      `;
      const div = document.createElement("div");
      div.classList.add("root");
      div.innerHTML = `
      <label class="label">${label}</label>
      <input class="input" type="text" placeholder="ingrese su ${label}"/>
      `;

      shadow.appendChild(style);

      shadow.appendChild(div);
    }
  }
  customElements.define("text-field", TextField);
}
