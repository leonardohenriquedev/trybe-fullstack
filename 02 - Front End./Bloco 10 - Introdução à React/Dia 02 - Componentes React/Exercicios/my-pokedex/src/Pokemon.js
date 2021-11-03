import React from 'react';
import './Pokemon.css'

class Pokemon extends React.Component{
  render(){
    const {name, type, averageWeight, image } = this.props.data;
    return(
      <section className='pokemon'>
        <div className='infos'>
          <p>Nome do Pokemon: {name}</p>
          <p>Tipo do Pokemon: {type}</p>
          <p>Peso Médio: {averageWeight.value}{averageWeight.measurementUnit}</p>
       </div>
      <img src={image}></img>
      </section>
    )
  }
}

export default Pokemon;