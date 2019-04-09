{
  const {
    html,
  } = Polymer;
  /**
    `<datos-component>` Description.

    Example:

    ```html
    <datos-component></datos-component>
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
    | --datos-component | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class DatosComponent extends Polymer.Element {

    static get is() {
      return 'datos-component';
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

    _eliminar(e) {
      let index = e.model.__data.index;
      console.log(e.model.__data.index);
      this.datos.splice(index, 1);
      let temp = this.datos;
      this.datos = [];
      this.datos = temp;
    }

    static get template() {
      return html`
      <style include="agenda-component-styles agenda-component-shared-styles"></style>
      <slot></slot>

      <table>
          
      <tr>
        <th>Alia</th>
        <th>Teléfono</th>
        <th>&nbsp;</th>
      </tr>
    
      <template is="dom-repeat" items="{{datos}}" >
          <tr>
            <td>{{item.alias}}</td>
            <td>{{item.telefono}}</td>
            <td style ="width:10%; text-align:center;">
            <cells-st-button class="composed primary">
              <button data-index=[[index]] on-click='_eliminar'>
                  <iron-icon class="btn-icon" icon="coronita:substract"></iron-icon>
                </button>
            </cells-st-button>
            </td>
          </tr>    
      </template>
   
    </table> 
                

      `;
    }
  }

  customElements.define(DatosComponent.is, DatosComponent);
}