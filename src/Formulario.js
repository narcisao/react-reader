import React, { Component } from 'react';
import FormValidator from './FormValidator';

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
            <form>
                <label htmlFor="nome">Nome</label>
                <input
                    id="nome"
                    type="text"
                    name="nome"
                    value={nome}
                    onChange = {this.inputListener}/>
                

                <label htmlFor="vocacao">Vocação</label>
                <input
                    id="vocacao"
                    type="text"
                    name="vocacao"
                    value={vocacao}
                    onChange = {this.inputListener}/>
                

                <label htmlFor="sexo">Sexo</label>
                <input
                    id="sexo"
                    type="text"
                    name="sexo"
                    value={sexo}
                    onChange = {this.inputListener}/>
                

                <label htmlFor="level">Level</label>
                <input
                    id="level"
                    type="int"
                    name="level"
                    value={level}
                    onChange = {this.inputListener}/>
                

                <label htmlFor="mundo">Mundo</label>
                <input
                    id="mundo"
                    type="text"
                    name="mundo"
                    value={mundo}
                    onChange = {this.inputListener}/>
                

                <label htmlFor="residencia">Residência</label>
                <input
                    id="residencia"
                    type="text"
                    name="residencia"
                    value={residencia}
                    onChange = {this.inputListener}/>

                <button onClick={this.submitForm} type="button" className="btn btn-primary">Salvar</button>
            </form>
        );
    }
}

export default Formulario;