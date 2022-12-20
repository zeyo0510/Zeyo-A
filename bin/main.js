(() => {
  globalThis.$Zeyo = globalThis.$Zeyo || {};
  globalThis.$Zeyo.$App = class $ extends HTMLElement
  {
    constructor()
    {
      super();
      /************************************************/
      const app = [];
      app.push('AudioPlayerOnline');
      app.push('VideoPlayerOnline');
      /************************************************/
      const example = [];
      example.push('BoxModel');
      example.push('Button');
      /************************************************/
      const shadow = super.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
      <div>Hello World</div>
      <hr>
      <ul>
      <li>/app</li>
      <ul>
        ${app
        .map((callbackfn) => {
          return `<li><a href="./app/${callbackfn}">${callbackfn}</a></li>`;
        })
        .join('')
        }
      </ul>
      <li>/example</li>
      <ul>
        ${example
        .map((callbackfn) => {
          return `<li><a href="./example/${callbackfn}">${callbackfn}</a></li>`;
        })
        .join('')
        }
      </ul>
    </ul>
      `;
    }
  }
  globalThis.customElements.define('zeyo-app', globalThis.$Zeyo.$App);
})();