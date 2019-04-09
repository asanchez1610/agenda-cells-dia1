{
  const {
    html,
  } = Polymer;
  /**
    `<agenda-component>` Description.

    Example:

    ```html
    <agenda-component></agenda-component>
    ```

    ## Styling
    The following custom properties and mixins are available for styling:

    ### Custom Properties
    | Custom Property     | Selector | CSS Property | Value       |
    | ------------------- | -------- | ------------ | ----------- |
    | --cells-fontDefault | :host    | font-family  |  sans-serif |
    ### @apply
    | Mixins    | Selector | Value |
    | --------- | -------- | ----- |
    | --agenda-component | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class AgendaComponent extends Polymer.Element {

    static get is() {
      return 'agenda-component';
    }

    static get properties() {
      return {
          datos: {
          value: [],
          type: Array,
          notify: true
        }
      };
    }
  
    static get template() {
      return html `
      <style include="agenda-component-styles agenda-component-shared-styles"></style>
      <slot></slot>
      
          <h1>Agenda App</h1>

          <registro-component datos = {{datos}} ></registro-component>

          <datos-component datos = {{datos}} ></datos-component>

      `;
    }
  }

  customElements.define(AgendaComponent.is, AgendaComponent);
}