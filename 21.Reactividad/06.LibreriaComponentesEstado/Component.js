export const Component = (function () {
  // Creamos el constructor del componente
  class Constructor {
    constructor(options) {
      this.el = options.el;
      this.data = options.data;
      this.template = options.template;
    }
    // Métodos al prototipo del constructor del componente
    //Render UI
    render() {
      const $el = document.querySelector(this.el);

      if (!$el) return;
      $el.innerHTML = this.template(this.data);

      console.log("jeje", this.data);
    }
    //Actualizar el State de forma reactiva
    setState(obj) {
      for (let key in obj) {
        if (this.data.hasOwnProperty(key)) {
          //Verifica si dicha propiedad existen en state.
          this.data[key] = obj[key];
        }
      }
      this.render();
    }
    //Obtenemos una copia inmutable del state
    getState() {
      return JSON.parse(JSON.stringify(this.data));
    }
  }

  return Constructor;
})();
