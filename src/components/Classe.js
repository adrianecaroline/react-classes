import React, {Component} from 'react'
import '../components/Classe.css'

export default class Mensagem extends Component {
  state = {
    linguagem: "React JS"
  }

  render() {
    return (
      <div className='border'>
        <h1>Olá mundo {this.state.linguagem}</h1>
        <h2>Esse é o meu componente de classe :]</h2>
      </div>
    )
  }
}