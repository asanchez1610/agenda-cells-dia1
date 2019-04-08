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
        alias: { value: '', type: String },
        telefono: { value: '', type: String },
        inputError: { value: 'Hola', type: String },
        datos: {
          value: [],
          type: Array
        }
      };
    }

    _agregar() {
      if (!this.alias) {
        this.inputError = 'alias';
        this.$.alerta.show();
        return; 
      }

      if (!this.telefono) {
        this.inputError = 'teléfono';
        this.$.alerta.show();
        return; 
      }

      let dato = {
        alias: this.alias,
        telefono: this.telefono
      }
      let datosTemp = this.datos;
      datosTemp.push(dato);
      this.datos = [];
      this.datos = datosTemp;
      this.alias = '';
      this.telefono = '';
    }

    _eliminar(e){
      let index = e.model.__data.index;
      console.log(e.model.__data.index);
      this.datos.splice(index, 1);
      let temp = this.datos;
      this.datos = [];
      this.datos = temp; 
    }

    static get template() {
      return html `
      <style include="agenda-component-styles agenda-component-shared-styles"></style>
      <slot></slot>
      
          <h1>Agenda App</h1>

          <cells-molecule-input label="Alias" value={{alias}}></cells-molecule-input>
          <cells-molecule-input label="Teléfono" value={{telefono}}></cells-molecule-input>

          <div class="buton-container">
                  <cells-st-button>
                      <button on-click='_agregar' >Agregar</button>
                  </cells-st-button>
          </div>
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

          <cells-molecule-alert-slide 
          id="alerta" 
          type="error" 
          text="Por favor ingrese el [[inputError]]" 
          timeout="1000">
          </cells-molecule-alert-slide>   
                

      `;
    }
  }

  customElements.define(AgendaComponent.is, AgendaComponent);
}