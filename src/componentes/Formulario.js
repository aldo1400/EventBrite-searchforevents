import React, { Component } from 'react'
import PropTypes from 'prop-types';
export default class Formulario extends Component {

    nombreEventoRef=React.createRef();
    categoriaRef=React.createRef();

    buscarEvento=(e)=>{
        e.preventDefault();
        
        // Crear el objeto
        
        const datosBusqueda={
            nombre:this.nombreEventoRef.current.value,
            categoria:this.categoriaRef.current.value
        }
        // pasarlo por props

        this.props.obtenerEventos(datosBusqueda);
    }
    mostrarOpciones=(key)=>{
        const categoria=this.props.categorias[key];
        const {id,name_localized}=categoria;

        if(!id || !name_localized) return null;
        return(
            <option key={id} value={id}>{name_localized}</option>
        )
    }

  render() {


    const categorias=Object.keys(this.props.categorias);
    console.log(categorias);
    return (
      <form onSubmit={this.buscarEvento}>
        <fieldset className="uk-fieldset uk-margin">
            <legend className="uk-legend uk-text-center">
                Busca tu evento por nombre o categoria
            </legend>
        </fieldset>

        <div className="uk-column-1-3@m uk-margin">
            <div className="uk-margin" uk-margin="true">
                <input ref={this.nombreEventoRef} className="uk-input" type="text" placeholder="Nombre de evento o ciudad"/>
            </div>

            <div className="uk-margin" uk-margin="true">
                <select className="uk-select" ref={this.categoriaRef}>
                    {categorias.map(this.mostrarOpciones)}
                </select>
            </div>

            <div className="uk-margin" uk-margin="true">
                <button className="uk-button  uk-button-danger">Buscar</button>
            </div>
        </div>
        </form>
    )
  }
}

Formulario.propTypes={
    obtenerEventos:PropTypes.func.isRequired,
    categorias:PropTypes.array.isRequireds
}