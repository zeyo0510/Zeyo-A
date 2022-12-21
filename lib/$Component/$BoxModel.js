((_) => {
  globalThis.$Zeyo = globalThis.$Zeyo || {};
  globalThis.$Zeyo.$Component = globalThis.$Zeyo.$Component || {};
  globalThis.$Zeyo.$Component.$BoxModel = class $ extends HTMLElement
  {
    constructor()
    {
      super();
      /************************************************/
      console.log('BoxModel: constructor');
    }
  }
  globalThis.customElements.define(_.tag, globalThis.$Zeyo.$Component.$BoxModel);
})({
  tag: 'zeyo-boxmodel'
});
/************************************************/
export default globalThis.$Zeyo.$Component.$BoxModel;