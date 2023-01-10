import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    Input,
    Label,
} from "reactstrap";
import { Empleado } from "./Empleado";

// Traer la data de los empelados
const data = Empleado;

// Url para imagenes de los iconos
// const urlImageNewE = 'https://cdn-icons-png.flaticon.com/512/189/189689.png';
const urlImageEdi = 'https://cdn-icons-png.flaticon.com/512/4302/4302115.png';
const urlImageEli = 'https://cdn-icons-png.flaticon.com/512/8568/8568248.png';

class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            nombre: "",
            apellido: "",
            email: "",
            rol: "",
            genero:"",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
            if (dato.id == registro.id) {
                arreglo[contador].nombre = dato.nombre;
                arreglo[contador].apellido = dato.apellido;
                arreglo[contador].email = dato.email;
                arreglo[contador].rol = dato.rol;
            }
            contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
    };

    eliminar = (dato) => {
        var opcion = window.confirm("Estás seguro que deseas eliminar la información del empleado " + dato.id);
        if (opcion == true) {
            var contador = 0;
            var arreglo = this.state.data;
            arreglo.map((registro) => {
                if (dato.id == registro.id) {
                    arreglo.splice(contador, 1);
                }
                contador++;
            });
            this.setState({ data: arreglo, modalActualizar: false });
        }
    };

    insertar = () => {
        var valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        var lista = this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {
        console.log(data);
        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>{" "}Insertar Nuevo Empleado</Button>
                    <br />
                    <br />
                    {/* Tabla para mostrar la información de Empleados */}
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Género</th>
                                {/* TD Usar CSS para alinearlos */}
                                <th style={{textAlign: "center"}}>Acciones</th>
                                
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.apellido}</td>
                                    <td>{dato.email}</td>
                                    <td >{dato.rol}</td>
                                    <td >{dato.genero}</td>
                                    {/* TD Usar CSS para alinearlos */}
                                    <td style={{textAlign: "center"}}>
                                        <Button
                                            color=""
                                            onClick={() => this.mostrarModalActualizar(dato)}
                                        >
                                            <img src={ urlImageEdi } alt="Modificar" width="24px"/>
                                        </Button>{" "}
                                        <Button color="" onClick={() => this.eliminar(dato)}>
                                             <img src={ urlImageEli } alt="Eliminar" width="24px"/>
                                             </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

                {/* Modal para editar el empleado */}
                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Información Empleado</h3></div>
                    </ModalHeader>

                    <ModalBody>
                        <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.form.id}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                name="nombre"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.nombre}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Apellido:
                            </label>
                            <input
                                className="form-control"
                                name="apellido"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.apellido}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Email:
                            </label>
                            <input
                                className="form-control"
                                name="email"
                                type="email"
                                onChange={this.handleChange}
                                value={this.state.form.email}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Rol:
                            </label>
                            <input
                                className="form-control"
                                name="rol"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.form.rol}
                            />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="success"
                            onClick={() => this.editar(this.state.form)}
                        >
                            Aceptar
                        </Button>
                        <Button
                            color="danger"
                            onClick={() => this.cerrarModalActualizar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>



                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>{" "}Nuevo Empleado</h3></div>
                    </ModalHeader>

                    {/* Modal para ingresar nuevo empleado */}
                    <ModalBody>
                        {/* <FormGroup>
                            <label>
                                Id:
                            </label>

                            <input
                                className="form-control"
                                readOnly
                                type="text"
                                value={this.state.data.length + 1}
                            />
                        </FormGroup> */}

                        <FormGroup>
                            <label>
                                Nombre:
                            </label>
                            <input
                                className="form-control"
                                name="nombre"
                                type="text"
                                placeholder="Ingrese el nombre del empleado"
                                required
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Apellido:
                            </label>
                            <input
                                className="form-control"
                                name="apellido"
                                type="text"
                                placeholder="Ingrese el apellido del empleado"
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Email:
                            </label>
                            <input
                                className="form-control"
                                name="email"
                                type="email"
                                placeholder="ejemplo@gmail.com "
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <label>
                                Rol:
                            </label>
                            <input
                                className="form-control"
                                name="rol"
                                type="text"
                                placeholder="Asigne el rol del empleado - Auxiliar, Aistente, Pasante..."
                                onChange={this.handleChange}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label check>
                                Genero: <br />
                                <hr />
                            <Input
                                // className="form-control"
                                name="genero"
                                type="radio"
                                value={'M'}
                                onChange={this.handleChange}
                            /> {"Masculino "}
                            &emsp;
                            <Input
                                // className="form-control"
                                name="genero"
                                type="radio"
                                value={'F'}
                                onChange={this.handleChange}
                            /> Femenino
                            </Label>
                        </FormGroup>

                        
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="success"
                            onClick={() => this.insertar()}
                        >
                            Insertar
                        </Button>
                        <Button
                            className="btn btn-danger"
                            onClick={() => this.cerrarModalInsertar()}
                        >
                            Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
export default App;