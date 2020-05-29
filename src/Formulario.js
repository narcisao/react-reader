import React, { Component } from 'react';
import FormValidator from './FormValidator';

import './App.css';
import './css/Formulario.css';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);

class Formulario extends Component {

    constructor(props) {
        super(props);

        //criamos uma instância do validador e passamos:
        //o CAMPO que quero validar
        //e o MÉTODO que iremos utilizar pra validar
        this.validator = new FormValidator({
            field:'nome',
            method:'isEmpty'
        });

        //salvando o estado inicial
        this.stateInicial = {
            nome:'',
            vocacao:'',
            sexo:'',
            level:'',
            mundo:'',
            residencia:'',
        }

        this.state = this.stateInicial;
    }

    //É responsável por ser o listener de eventos do botao de salvar
    inputListener = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        })
    }

    //função responsável por submeter os dados do formulário.
    submitForm = () => {
        if(this.validator.validate(this.state)) {
            this.props.submitListener(this.state);
            this.setState(this.stateInicial);
        } else { 
            console.log('deu ruim');
        }
    }

    render() {

        const { nome, vocacao, sexo, level, mundo, residencia } = this.state;

        return (
            <form id="formulario">
                <span id="header">Insira um personagem</span>
                <ColoredLine color="gray" />
                <div className="row">
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="nome" className="d-block"> Nome</label>
                        <input
                            id="nome"
                            type="text"
                            name="nome"
                            className="form-control"
                            value={nome}
                            onChange = {this.inputListener}/>
                    </div>

                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="vocacao">Vocação</label>
                        <input
                            id="vocacao"
                            type="text"
                            name="vocacao"
                            className="form-control"
                            value={vocacao}
                            onChange = {this.inputListener}/>
                    </div>
                    
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="sexo">Sexo</label>
                        <input
                            id="sexo"
                            type="text"
                            name="sexo"
                            className="form-control"
                            value={sexo}
                            onChange = {this.inputListener}/>
                    </div>

                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="level">Level</label>
                        <input
                            id="level"
                            type="int"
                            name="level"
                            className="form-control"
                            value={level}
                            onChange = {this.inputListener}/>
                    </div>
                        
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="mundo">Mundo</label>
                        <input
                            id="mundo"
                            type="text"
                            name="mundo"
                            className="form-control"
                            value={mundo}
                            onChange = {this.inputListener}/>
                    </div>
                        
                    <div className="col-md-6 col-xl-6 col-sm-12 com-xs-12 ">
                        <label htmlFor="residencia">Residência</label>
                        <input
                            id="residencia"
                            type="text"
                            name="residencia"
                            className="form-control"
                            value={residencia}
                            onChange = {this.inputListener}/>
                    </div>

                    <button onClick={this.submitForm} type="button" className="btn">Salvar</button>
                
                </div>
            </form>
        );
    }
}

export default Formulario;