class Formulario extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        valor :""
        };

        this.cambioValor = this.cambioValor.bind(this);
    }

    cambioValor(event) {
        var datoIngresado = event.target.value;
        this.setState({
            valor: datoIngresado
        })
    }
  
    render() {
      return (
        <form>
            <label>
                  <input type="text" class="form-control" onChange={this.cambioValor} placeholder={this.props.dato}></input>
            </label>
        </form>
        );
    }
}

ReactDOM.render(<Formulario dato="*Nombre" />, document.getElementById("nFormulario"));
ReactDOM.render(<Formulario dato="*Apellido" />, document.getElementById("aFormulario"));
ReactDOM.render(<Formulario dato="*Email" />, document.getElementById("eFormulario"));
ReactDOM.render(<Formulario dato="Telefono" />, document.getElementById("tFormulario"));
