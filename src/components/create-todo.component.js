import React, { Component } from 'react'; //Recoge algunas funciones dentro de 'react'

export default class CreateTodo extends Component { //exporta la clase en otra clase llamada 'Component'

    constructor(props) { //Constructor props
        super(props);
        //coje los objetos de los input y los instancia
        this.onChangeTodoNombreProyecto = this.onChangeTodoNombreProyecto.bind(this);
        this.onChagenTodoAnno = this.onChangeTodoAnno.bind(this);
        this.onChagenTodoDescripcionProyecto = this.onChangeTodoDescripcionProyecto.bind(this);
        this.onChagenTodoMeritoLogro = this.onChangeTodoMeritoLogro.bind(this); //razon a la que se le acredita el logro
        this.onChagenTodoPalabrasClave = this.onChangeTodoPalabrasClave.bind(this);
        this.onChangeTodoImagen = this.onChangeTodoImagen.bind(this); 
        this.onSubmit = this.onSubmit.bind(this);


        this.state = { //define el contenido del constructor
            todo_nombreproyecto: '',
            todo_anno: '',
            todo_descripcionproyecto: '',
            todo_meritologro: '',
            todo_palabrasclave: '',
            todo_imagen: '',
            todo_completed: false
            
        }
    }
    //Estas funciones se encargan de cambiar automaticamente cada cambio que reciben del constructor por medio de la variable 'e'
    onChangeTodoNombreProyecto(e) {
        this.setState({
            todo_nombreproyecto: e.target.value
        });
    }

    
    onChangeTodoAnno(e) {
        this.setState({
            todo_anno: e.target.value
        });
    }
//
    onChangeTodoDescripcionProyecto(e) {
        this.setState({
            todo_descripcionproyecto: e.target.value
        });
    }
//
    onChangeTodoMeritoLogro(e) {
        this.setState({
            todo_meritologro: e.target.value
        });
    }
//
    onChangeTodoPalabrasClave(e) {
        this.setState({
            todo_palabrasclave: e.target.value
        });
    }
//
    onChangeTodoImagen(e) {
        this.setState({
            todo_imagen: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Nombre Proyecto: ${this.state.todo_nombreproyecto}`);
        console.log(`Todo Anno: ${this.state.todo_anno}`);
        console.log(`Todo Descripcion Proyecto: ${this.state.todo_descripcionproyecto}`);
        console.log(`Todo Merito Logro: ${this.state.todo_meritologro}`);
        console.log(`Todo Palabras Clave: ${this.state.todo_palabrasclave}`);
        console.log(`Todo Imagen base64: ${this.state.todo_imagen}`);

        this.setState({
            todo_nombreproyecto: '',
            todo_anno: '',
            todo_descripcionproyecto: '',
            todo_meritologro: '',
            todo_palabrasclave: '',
            todo_imagen: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Subir Logro</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Nombre del logro: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_nombreproyecto}
                            onChange={this.onChangeTodoNombreProyecto}
                        />
                    </div>
                    <div className="form-group">
                        <label>Año de realización: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_anno}
                            onChange={this.onChangeTodoAnno}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción del logro: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_descripcionproyecto}
                            onChange={this.onChangeTodoDescripcionProyecto}
                        />
                    </div>
                    <div className="form-group">
                        <label>Mérito al logro: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_meritologro}
                            onChange={this.onChangeTodoMeritoLogro}
                        />
                    </div>
                    <div className="form-group">
                        <label>Palabras Clave: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_palabrasclave}
                            onChange={this.onChangeTodoPalabrasClave}
                        />
                    </div>
                    <div className="form-group">
                        <label>Imagenes: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.todo_imagen}
                            onChange={this.onChangeTodoImagen}
                        />
                    </div>

                    

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}