import validator from 'validator';

class FormValidator {

    constructor(validation) {
        this.validation = validation;
    }

    validate(state) {
        const fieldValue = state[this.validation.field.toString()];
        const methodValidation = validator[this.validation.method];

        if(methodValidation(fieldValue, [], state)) {
            console.log('deu pau cRALLHO');
            return false;
        } else {
            return true;
        }
    }
}

export default FormValidator;