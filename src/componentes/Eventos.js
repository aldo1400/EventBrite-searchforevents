import React, { Component } from 'react'
import Evento from './Evento'
import PropTypes from 'prop-types';

class Eventos extends Component {
  render() {
    return (
      <div className="uk-child-width-1-3@m" uk-grid="true">
        {Object.keys(this.props.eventos).map(key=>(
            <Evento
                key={key}
                info={this.props.eventos[key]}
            />
        )
        )}
      </div>
    )
  }
}

Eventos.propTypes={
    eventos:PropTypes.array.isRequired
}
export default Eventos
