import { default as $BoxModel } from '../../../lib/$Component/$BoxModel.js';
/************************************************/
((_) => {
  globalThis.$Zeyo = globalThis.$Zeyo || {};
  globalThis.$Zeyo.$App = class $ extends HTMLElement
  {
    constructor()
    {
      super();
      /************************************************/
      const shadow = super.attachShadow({ mode: 'closed' })
      {
        shadow.innerHTML += `
          <slot></slot>
        `
      }
    }
  }
  globalThis.customElements.define(_.tag, globalThis.$Zeyo.$App)
  })({
    tag: 'zeyo-app'
  });