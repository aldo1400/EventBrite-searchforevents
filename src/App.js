import React, { Component } from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Eventos from './componentes/Eventos';

class App extends Component {

  token='A7TIUNJ2FNMZHBQFQUKW';
  ordenar='date';

  state={
    categorias:[],
    eventos:[]
  }
  componentDidMount(){
    this.obtenerCategoria();
  }

  obtenerCategoria=async()=>{
    let url=`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
    
    await fetch(url)
      .then(respuesta=>{
        return respuesta.json();
      })
      .then(categorias=>{
        this.setState({
          categorias:categorias.categories
        })
      })
  }

  obtenerEventos=async(busqueda)=>{
    let url=`https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&sort_by=${this.ordenar}&categories=${busqueda.categoria}&token=${this.token}&locale=es_ES`;
    console.log(url);
    await fetch(url)
      .then(respuesta=>{
        return respuesta.json();
      })
      .then(eventos=>{
        this.setState({
          eventos:eventos.events
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Header/> 
        <div className="uk-container">
          <Formulario
            categorias={this.state.categorias}
            obtenerEventos={this.obtenerEventos}
          />
          <Eventos
            eventos={this.state.eventos}
          />
        </div>      
      </div>
    );
  }
}

export default App;
