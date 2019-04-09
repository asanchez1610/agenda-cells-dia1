{
  const {
    html,
  } = Polymer;
  /**
    `<registro-component>` Description.

    Example:

    ```html
    <registro-component></registro-component>
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
    | --registro-component | :host    | {} |

    * @customElement
    * @polymer
    * @extends {Polymer.Element}
    * @demo demo/index.html
  */
  class RegistroComponent extends Polymer.Element {

    static get is() {
      return 'registro-component';
    }

    static get properties() {
      return {
        alias: { value: '', type: String },
        telefono: { value: '', type: String },
        inputError: { value: 'Hola', type: String },
        timeout: { value: 1000, type: Number },
        datos: {
          value: [],
          type: Array,
          notify: true
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

      console.log(this.datos)

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

          <cells-molecule-input label="Alias" value={{alias}}></cells-molecule-input>
          <cells-molecule-input label="Teléfono" value={{telefono}}></cells-molecule-input>

          <div class="buton-container">
                  <cells-st-button>
                      <button on-click='_agregar' >Agregar</button>
                  </cells-st-button>
          </div>
                  
          <cells-molecule-alert-slide 
          id="alerta" 
          type="error" 
          text="Por favor ingrese el [[inputError]]" 
          timeout=[[timeout]] >
          </cells-molecule-alert-slide>   
                

      `;
    }
  }

  customElements.define(RegistroComponent.is, RegistroComponent);
}