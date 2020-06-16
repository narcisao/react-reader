import React from 'react';

import Toast from 'react-bootstrap/Toast';

const PopUp = {
    showMessage: (status, msg) => {

        if(status === "success") {
            <div>
                <Toast>
                    <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">msg</strong>
                    <small>1 segundo atrás</small>
                    </Toast.Header>
                    <Toast.Body>O seu formulário possui erros!</Toast.Body>
                </Toast>
            </div>
        }

        if(status === "error") {
            <div>
                <Toast>
                    <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">msg</strong>
                    <small>1 segundo atrás</small>
                    </Toast.Header>
                    <Toast.Body>O seu formulário possui erros!</Toast.Body>
                </Toast>
            </div>
        }

    }
}

export default PopUp;