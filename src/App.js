import React, { Component, Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component {

  //state com o array dos personagens
  state = {
    personagens: [
      {
        nome: 'Genji',
        vocacao: 'Paladin',
        sexo: 'male',
        level: '100',
        mundo: 'Belobora',
        residencia: 'thais',
      },
      {
        nome: 'Zenyatta',
        vocacao: 'Druid',
        sexo: 'male',
        level: '500',
        mundo: 'Gentebra',
        residencia: 'thais',
      },
      {
        nome: 'Genji',
        vocacao: 'Paladin',
        sexo: 'male',
        level: '100',
        mundo: 'Belobora',
        residencia: 'thais',
      },
      {
        nome: 'Genji',
        vocacao: 'Paladin',
        sexo: 'male',
        level: '100',
        mundo: 'Belobora',
        residencia: 'thais',
      }
    ],
  };

  removePersonagem = index => {

    const { personagens } = this.state;

    //Verifica qual foi a posição clicada (pois o array será percorrido em todas as posições)
    //Após isso, ele retorna quais posições deverão ser mantidas.
    this.setState(
      {
        personagens : personagens.filter((personagem, posAtual) => {
          //quando o index for igual á posição atual (clicada) o elemento será retirado.
          return posAtual !== index;
        }),
      }
    );
  }

  submitListener = personagem => {
    this.setState({ personagens : [...this.state.personagens, personagem] })
  }

  render () {
    return (
      <Fragment>
        <Header />
        <Tabela personagens = { this.state.personagens } removePersonagem = { this.removePersonagem } />
        <Form submitListener = { this.submitListener } />
      </Fragment>
    );
  }

}

export default App;
